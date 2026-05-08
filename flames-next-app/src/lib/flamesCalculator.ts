export type FlamesResultType = 'Friends' | 'Love' | 'Affection' | 'Marriage' | 'Enemy' | 'Siblings';

export interface FlamesData {
  result: FlamesResultType;
  meaning: string;
  movieMatch: string;
  percentage: number;
  nickname: string;
  quote: string;
}

const FLAMES_MAPPING: Record<string, FlamesResultType> = {
  F: 'Friends',
  L: 'Love',
  A: 'Affection',
  M: 'Marriage',
  E: 'Enemy',
  S: 'Siblings',
};

const FLAMES_MEANINGS: Record<FlamesResultType, string> = {
  Friends: 'You two have a friendly spark. This feels like a classic buddy-movie duo.',
  Love: 'There is romantic energy here. The FLAMES universe approves.',
  Affection: 'This match has sweet, caring energy.',
  Marriage: 'This one has long-term story vibes.',
  Enemy: 'Spicy energy detected. Maybe rivals, maybe drama.',
  Siblings: 'This feels like chaotic sibling energy.',
};

const MOVIE_MATCHES: Record<FlamesResultType, string> = {
  Friends: 'Buddy comedy',
  Love: 'Romantic movie',
  Affection: 'Emotional family drama',
  Marriage: 'Wedding romance',
  Enemy: 'Action revenge drama',
  Siblings: 'Family comedy',
};

const QUOTES: Record<FlamesResultType, string> = {
  Friends: '"A true friend is one soul in two bodies." – Aristotle',
  Love: '"You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams." – Dr. Seuss',
  Affection: '"Affection is responsible for nine-tenths of whatever solid and durable happiness there is in our lives." – C.S. Lewis',
  Marriage: '"A successful marriage requires falling in love many times, always with the same person." – Mignon McLaughlin',
  Enemy: '"Keep your friends close, but your enemies closer." – Michael Corleone',
  Siblings: '"Siblings: children of the same parents, each of whom is perfectly normal until they get together." – Sam Levenson',
};

export function calculateFlames(name1: string, name2: string): FlamesData {
  // 1. Normalize strings: lowercase, remove spaces and non-alphabet chars
  const n1 = name1.toLowerCase().replace(/[^a-z]/g, '');
  const n2 = name2.toLowerCase().replace(/[^a-z]/g, '');

  // 2. Remove common letters
  let arr1 = n1.split('');
  let arr2 = n2.split('');

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && arr1[i] !== '') {
        arr1[i] = '';
        arr2[j] = '';
        break; // Only remove one matching instance
      }
    }
  }

  // 3. Count remaining letters
  const remainingCount = arr1.filter(Boolean).length + arr2.filter(Boolean).length;

  // 4. Eliminate letters from FLAMES
  let flamesArr = ['F', 'L', 'A', 'M', 'E', 'S'];
  let index = 0;

  if (remainingCount > 0) {
    while (flamesArr.length > 1) {
      index = (index + remainingCount - 1) % flamesArr.length;
      flamesArr.splice(index, 1);
    }
  }

  const resultLetter = flamesArr[0];
  const resultType = FLAMES_MAPPING[resultLetter];

  // 5. Generate deterministic love percentage (50-100)
  // Simple hash of the two normalized names sorted to be order independent
  const combinedNames = [n1, n2].sort().join('');
  let hash = 0;
  for (let i = 0; i < combinedNames.length; i++) {
    hash = (hash << 5) - hash + combinedNames.charCodeAt(i);
    hash |= 0; 
  }
  
  // Math.abs to ensure positive, then mod 51 to get 0-50, then add 50 to get 50-100
  const percentage = (Math.abs(hash) % 51) + 50;

  // 6. Generate Nickname
  // Take first half of name1 and second half of name2, or vice versa based on length
  const half1 = name1.substring(0, Math.ceil(name1.length / 2));
  const half2 = name2.substring(Math.floor(name2.length / 2));
  const nickname = (half1 + half2).replace(/\s/g, '').toLowerCase();
  const capitalizedNickname = nickname.charAt(0).toUpperCase() + nickname.slice(1);

  return {
    result: resultType,
    meaning: FLAMES_MEANINGS[resultType],
    movieMatch: MOVIE_MATCHES[resultType],
    percentage,
    nickname: capitalizedNickname,
    quote: QUOTES[resultType],
  };
}
