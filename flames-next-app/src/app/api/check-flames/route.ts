import { NextResponse } from 'next/server';
import { calculateFlames, FlamesResultType } from '@/lib/flamesCalculator';
import prisma from '@/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name1, name2 } = body;

    if (!name1 || !name2 || name1.length < 2 || name2.length < 2 || name1.length > 30 || name2.length > 30) {
      return NextResponse.json({ error: 'Invalid names. Must be between 2 and 30 characters.' }, { status: 400 });
    }

    // Only allow letters and spaces
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name1) || !nameRegex.test(name2)) {
      return NextResponse.json({ error: 'Names can only contain letters and spaces.' }, { status: 400 });
    }

    const normalizedFirstName = name1.toLowerCase().replace(/[^a-z]/g, '');
    const normalizedSecondName = name2.toLowerCase().replace(/[^a-z]/g, '');

    // 1. Check if this pair already exists (order-independent)
    const existing = await prisma.submission.findFirst({
      where: {
        OR: [
          { normalizedFirstName, normalizedSecondName },
          { normalizedFirstName: normalizedSecondName, normalizedSecondName: normalizedFirstName }
        ]
      }
    });

    let flamesData;

    if (existing) {
      // Return cached result, forcing the outcome and fixing the percentage
      flamesData = calculateFlames(name1, name2, existing.flamesResult as FlamesResultType);
      flamesData.percentage = existing.lovePercentage;
    } else {
      // 2. Count unique pairs to determine global cycle index
      const allSubs = await prisma.submission.findMany({
        select: { normalizedFirstName: true, normalizedSecondName: true }
      });
      const uniquePairs = new Set(
        allSubs.map(s => [s.normalizedFirstName, s.normalizedSecondName].sort().join('-'))
      );
      const uniqueCount = uniquePairs.size;

      // 3. Determine the result for this new unique pair
      const cycleBlock = Math.floor(uniqueCount / 5);
      const cycleIndex = uniqueCount % 5;

      let determinedResult: FlamesResultType;

      if (cycleIndex === 4) {
        // 5th time is negative (alternating)
        determinedResult = cycleBlock % 2 === 0 ? 'Siblings' : 'Enemy';
      } else {
        // 1st to 4th time are the 4 positives in a seeded shuffled order
        const positives: FlamesResultType[] = ['Friends', 'Love', 'Affection', 'Marriage'];
        
        let seed = cycleBlock + 12345;
        const random = () => {
          seed = (seed * 9301 + 49297) % 233280;
          return seed / 233280;
        };

        for (let i = positives.length - 1; i > 0; i--) {
          const j = Math.floor(random() * (i + 1));
          [positives[i], positives[j]] = [positives[j], positives[i]];
        }
        
        determinedResult = positives[cycleIndex];
      }

      flamesData = calculateFlames(name1, name2, determinedResult);
    }

    // Get basic user info if possible (optional)
    const ipAddress = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || '';
    const userAgent = req.headers.get('user-agent') || '';

    // Save to database
    await prisma.submission.create({
      data: {
        firstName: name1,
        secondName: name2,
        normalizedFirstName,
        normalizedSecondName,
        flamesResult: flamesData.result,
        resultMeaning: flamesData.meaning,
        lovePercentage: flamesData.percentage,
        movieMatch: flamesData.movieMatch,
        cuteNickname: flamesData.nickname,
        userMessage: existing ? 'Checked existing pair' : 'Checked new pair',
        ipAddress: ipAddress.substring(0, 45), // truncate if too long
        userAgent: userAgent.substring(0, 255), // truncate if too long
      },
    });

    // Return the result to the user (do NOT return database list or other records)
    return NextResponse.json({
      success: true,
      data: {
        firstName: name1,
        secondName: name2,
        ...flamesData
      }
    });
  } catch (error) {
    console.error('Error calculating flames:', error);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
