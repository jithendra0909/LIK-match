import { NextResponse } from 'next/server';
import { calculateFlames } from '@/lib/flamesCalculator';
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

    const flamesData = calculateFlames(name1, name2);

    const normalizedFirstName = name1.toLowerCase().replace(/[^a-z]/g, '');
    const normalizedSecondName = name2.toLowerCase().replace(/[^a-z]/g, '');

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
        userMessage: 'Checked from frontend',
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
