import { TIMELINES, TimelineData } from './timelines';

export type FlamesResultType = 'Friends' | 'Love' | 'Affection' | 'Marriage' | 'Enemy' | 'Siblings';

export interface FlamesData {
  result: FlamesResultType;
  meaning: string;
  movieMatch: string;
  percentage: number;
  nicknameTitle: string;
  nickname: string;
  quote: string;
  timeline?: TimelineData;
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

const MOVIE_MATCHES: Record<FlamesResultType, string[]> = {
  Friends: [
    'Oh My Friend', 'Happy Days', 'Ee Nagaraniki Emaindhi', 'MAD', 'Jathi Ratnalu',
    '3 Idiots', 'Zindagi Na Milegi Dobara', 'Chhichhore', 'Superbad', 'The Hangover',
    'Brochevarevarura', 'Sneham Kosam', 'Snehituda', 'Yevade Subramanyam', 'Hostel Daze',
    'Project X', 'Stand By Me', 'Toy Story', 'Dil Chahta Hai', 'Jersey'
  ],
  Love: [
    'Titanic', 'Geetha Govindam', 'Fidaa', 'Arjun Reddy', 'Sita Ramam',
    'Hi Nanna', 'Ye Maaya Chesave', 'Majili', 'Alaipayuthey', 'Love Story',
    'Romeo Juliet', 'The Notebook', 'La La Land', 'Twilight', 'A Walk to Remember',
    'Dear Comrade', 'Orange', '96', 'Radhe Shyam', 'Darling'
  ],
  Affection: [
    'Bommarillu', 'Little Manhattan', 'Minions', 'Frozen', 'Zootopia',
    'Coco', 'Finding Nemo', 'Up', 'Inside Out', 'Baby’s Day Out',
    'Krishna and His Leela', 'Ante Sundaraniki', 'Oh Baby', 'Miss Shetty Mr Polishetty', 'Kushi',
    'Pelli Choopulu', 'Luca', 'Tangled', 'Wall-E', 'Charlie Brown'
  ],
  Marriage: [
    'Bommarillu', 'Seethamma Vakitlo Sirimalle Chettu', 'Mr. Perfect', 'Shatamanam Bhavati', 'F2',
    'F3', 'Vivah', 'Hum Saath Saath Hain', 'Hum Aapke Hain Koun', 'The Vow',
    'Marriage Story', 'Sreekaram', 'Govindudu Andarivadele', 'Varudu', 'Malliswari',
    'Ninne Pelladatha', 'Ready', 'Bride Wars', 'Made for Each Other', 'Life As We Know It'
  ],
  Enemy: [
    'Tom and Jerry', 'Baahubali 2', 'RRR', 'KGF', 'Pushpa',
    'The Dark Knight', 'Batman vs Superman', 'Captain America: Civil War', 'Godzilla vs Kong', 'Race Gurram',
    'Dookudu', 'Businessman', 'Pokiri', 'Leo', 'Vikram',
    'Master', 'Avengers: Infinity War', 'Joker', 'Magadheera', 'Spyder'
  ],
  Siblings: [
    'Frozen', 'Hum Saath Saath Hain', 'Seethamma Vakitlo Sirimalle Chettu', 'Govindudu Andarivadele', 'Encanto',
    'Little Women', 'Brother Bear', 'Raksha Bandhan', 'Bheemla Nayak', 'Bangarraju',
    'Sankranthiki Vasthunam', 'Hello Brother', 'Annayya', 'Yamaleela', 'Muvva Gopaludu',
    'Karthikeya 2', 'F2', 'Sky High', 'The Incredibles', 'Coco'
  ]
};

const NICKNAME_LABELS: Record<FlamesResultType, string> = {
  Friends: 'Friends Nicknames',
  Love: 'Couple Nicknames',
  Affection: 'Cute Bond Nicknames',
  Marriage: 'Married Couple Nicknames',
  Enemy: 'Enemy Nicknames',
  Siblings: 'Siblings Nicknames',
};

const NICKNAMES: Record<FlamesResultType, string[]> = {
  Friends: [
    'Salt & Pepper', 'Batman & Robin', 'Chips & Salsa', 'Peanut & Jelly', 'Fire & Ice',
    'Tea & Biscuits', 'Thunder & Lightning', 'Bread & Butter', 'Mango & Tango', 'Smile & Sunshine',
    'Rocket & Star', 'Coffee & Cookies', 'Fish & Chips', 'Rainbow & Cloud', 'Snow & Frost',
    'Cup & Cake', 'Buddy & Pal', 'Pencil & Paper', 'Bubbles & Sparkles', 'Sun & Moon'
  ],
  Love: [
    'Romeo & Juliet', 'Jack & Rose', 'Bonnie & Clyde', 'Mickey & Minnie', 'Honey & Bunny',
    'King & Queen', 'Prince & Princess', 'Moon & Stars', 'Heart & Soul', 'Sugar & Spice',
    'Flame & Spark', 'Ocean & Pearl', 'Cherry & Blossom', 'Forever & Always', 'Sunshine & Daisy',
    'Teddy & Bella', 'Cupid & Angel', 'Dream & Destiny', 'Lovebird & Sweetie', 'Beauty & Beast'
  ],
  Affection: [
    'Hug & Kiss', 'Teddy & Pillow', 'Cookie & Cream', 'Candy & Chocolate', 'Bunny & Panda',
    'Peach & Plum', 'Twinkle & Glow', 'Marshmallow & Cocoa', 'Cherry & Berry', 'Dove & Feather',
    'Cloud & Breeze', 'Pearl & Diamond', 'Sweet & Cute', 'Blossom & Petal', 'Lovebug & Snuggle',
    'Angel & Charm', 'Buttercup & Honeybee', 'Lucky & Lovely', 'Heartbeat & Melody', 'Smile & Warmth'
  ],
  Marriage: [
    'Mr. & Mrs.', 'Bride & Groom', 'Soul & Mate', 'Love & Trust', 'Ring & Promise',
    'Home & Happiness', 'Together & Always', 'Family & Future', 'Hand & Hand', 'Promise & Faith',
    'Dream & Journey', 'Harmony & Peace', 'Heart & Harmony', 'Bond & Blessing', 'Moon & Tide',
    'King & Queen', 'Couple & Goals', 'Forever & Forever', 'Smile & Support', 'Adam & Eve'
  ],
  Enemy: [
    'Tom & Jerry', 'Cat & Mouse', 'Fire & Water', 'Batman & Joker', 'Coke & Pepsi',
    'Day & Night', 'Lion & Tiger', 'Snake & Mongoose', 'Sword & Shield', 'Rival & Rival',
    'Clash & Chaos', 'Devil & Angel', 'Shark & Dolphin', 'Hunter & Prey', 'Ice & Flame',
    'Thunder & Storm', 'War & Peace', 'Eagle & Snake', 'Enemy & Nemesis', 'Storm & Calm'
  ],
  Siblings: [
    'Brother & Sister', 'Anna & Elsa', 'Twins & Trouble', 'Tom & Tim', 'Max & Mia',
    'Sunny & Bunny', 'Rocky & Ricky', 'Lily & Lucy', 'Sam & Sara', 'Joy & Jolly',
    'Chip & Dale', 'Coco & Kiki', 'Leo & Luna', 'Ben & Bella', 'Mimi & Momo',
    'Prince & Princess', 'Hero & Champ', 'Bubbles & Buttercup', 'Pinky & Ponky', 'Cutie & Smarty'
  ]
};

const QUOTES: Record<FlamesResultType, string[]> = {
  Friends: [
    "Partners in crime since day one.", "We go together like chai and biscuits.", "Real friends don’t judge, they join.",
    "Friendship level: annoying each other daily.", "You’re the peanut butter to my nonsense.", "Best friends: one brain, two bodies.",
    "We laugh at the dumbest things together.", "Friends never let friends do silly things alone.", "Our friendship is 50% madness, 50% fun.",
    "You’re my unpaid therapist forever.", "Friendship means roasting each other nonstop.", "Crazy friends make the best memories.",
    "We are the reason teachers lose patience.", "Side by side or miles apart, chaos continues.", "Friendship powered by memes and snacks.",
    "We don’t need instructions to have fun.", "Good friends bring peace, best friends bring trouble.", "Friendship is finding someone equally weird.",
    "Together we turn normal days into adventures.", "Life’s too short for boring friends."
  ],
  Love: [
    "Together we’re cute, separately we’re boring.", "You stole my heart, so I’m stealing your hoodie.", "Love is sharing fries without fighting.",
    "You’re my favorite notification.", "We’re proof that weird people find each other.", "Every love story is beautiful, ours is funny too.",
    "You’re the WiFi to my heart.", "I love you more than pizza… almost.", "Two idiots, one love story.",
    "Couple goals? Nah, chaos goals.", "You’re my happy place and headache together.", "Love made us crazy in a cute way.",
    "We match better than socks.", "Falling for you was my favorite accident.", "Together we shine brighter than phone screens.",
    "Love is arguing then ordering food together.", "You’re the reason my battery dies fast.", "Our love story deserves comedy awards.",
    "Cute enough to make everyone jealous.", "Forever sounds good with you."
  ],
  Affection: [
    "Too cute to handle, too crazy to stop.", "Hugs, smiles, and unlimited drama.", "Cute outside, dangerous together.",
    "We’re sweeter than extra chocolate.", "Friendship mixed with cuteness overload.", "Built with 90% affection and 10% madness.",
    "Warning: excessive cuteness ahead.", "We turn simple moments into memories.", "Cute but capable of chaos anytime.",
    "Made of cuddles and comedy.", "Smiles become brighter together.", "Happiness looks better with us.",
    "We’re tiny packets of madness and love.", "Cute vibes only.", "Together we create sparkle everywhere.",
    "Love and laughter never go out of style.", "Sweet enough to cause cavities.", "We are everyone’s favorite duo.",
    "Soft hearts, loud laughs.", "Adorable energy with unlimited fun."
  ],
  Marriage: [
    "Marriage: finding one special person to annoy forever.", "Officially stuck together now.", "Behind every happy marriage is unlimited snacks.",
    "Married life: love, laughter, and remote fights.", "Soulmates with matching complaints.", "Together forever… no refunds.",
    "Marriage is teamwork during food decisions.", "Happily ever after starts with “What should we eat?”", "Love made us marry, memes keep us alive.",
    "A perfect couple: one talks, one ignores.", "Marriage means sharing everything, even fries.", "Forever partners in bills and adventures.",
    "One wedding, endless funny moments.", "Married and still flirting.", "Together we survive family functions.",
    "Relationship status: permanently tolerated.", "Built on trust, love, and WiFi.", "Marriage unlocked: expert level teamwork.",
    "Love grows stronger after every silly fight.", "Happily married with extra sarcasm."
  ],
  Enemy: [
    "Our friendship expired, now we compete.", "Tom and Jerry energy all day.", "Too much rivalry, too little peace.",
    "Enemies by choice, legends by accident.", "We fight like siblings without the love.", "One wins, the other cries dramatically.",
    "Built on arguments and sarcasm.", "If looks could kill, we’d both be gone.", "Professional troublemakers against each other.",
    "Our rivalry deserves its own movie.", "Peace was never an option.", "Rivals today, memes tomorrow.",
    "Chaos begins when we meet.", "We compete over absolutely everything.", "Strong opinions, stronger arguments.",
    "Friendship left the chat long ago.", "Every conversation becomes a battle.", "We’re allergic to agreeing.",
    "Drama follows wherever we go.", "Rivals with unlimited attitude."
  ],
  Siblings: [
    "Born to fight, forced to love.", "Siblings: best friends with extra drama.", "We may fight, but we team up against others.",
    "Childhood partners in crime forever.", "Annoying each other is our full-time job.", "Mess with my sibling, face the consequences.",
    "Built-in best friend since birth.", "Half love, half WWE match.", "Same parents, different levels of craziness.",
    "Siblings make life louder and funnier.", "We fight for fun and snacks.", "Home feels empty without sibling chaos.",
    "Sharing childhood and secrets forever.", "Sibling bond: 90% teasing, 10% caring.", "One house, endless arguments.",
    "We roast each other with love.", "Family by blood, comedians by talent.", "Siblings know all your embarrassing stories.",
    "Together since diapers and disasters.", "Love, laughter, and nonstop sibling drama."
  ]
};

const PERFECT_LOVE_PAIRS = new Set([
  'jaswanth+madhu',
  'jaswanth+sudha',
  'jaswanth+rishitha',
  'jaswanth+srija',
  'jaswanth+manvitha',
  'mahesh+juniya',
  'charan praneeth+kanishka',
  'rashmitha+nishanth',
  'jaswanth+madhushalini',
  'romeo+juliet',
  'jack+rose',
  'mickey+minnie',
  'virat+anushka',
]);

export function calculateFlames(
  name1: string, 
  name2: string,
  forcedResult?: FlamesResultType
): FlamesData {
  // 1. Normalize strings
  const n1 = name1.toLowerCase().replace(/[^a-z]/g, '');
  const n2 = name2.toLowerCase().replace(/[^a-z]/g, '');

  // 2. Symmetric pair key
  const pairKey = [n1, n2].sort().join('+');

  // 3. Perfect couple check
  const isPerfectLovePair = PERFECT_LOVE_PAIRS.has(pairKey);

  // 4. Stable hash generation
  const combinedNames = pairKey.replace('+', '');

  let hash = 0;
  for (let i = 0; i < combinedNames.length; i++) {
    hash = (hash << 5) - hash + combinedNames.charCodeAt(i);
    hash |= 0;
  }

  const absHash = Math.abs(hash);

  let resultType: FlamesResultType;
  let percentage: number;

  if (forcedResult) {
    resultType = forcedResult;
    const bounds = {
      'Enemy': [1, 18],
      'Siblings': [19, 36],
      'Friends': [37, 53],
      'Affection': [54, 68],
      'Marriage': [69, 85],
      'Love': [86, 100],
    };
    const [min, max] = bounds[resultType];
    percentage = min + (absHash % (max - min + 1));
  } else {
    // 5. Determine percentage and result logic using 1-100 distribution
    percentage = (absHash % 100) + 1;

    if (percentage <= 18) {
      resultType = 'Enemy'; // 18%
    } else if (percentage <= 36) {
      resultType = 'Siblings'; // 18%
    } else if (percentage <= 53) {
      resultType = 'Friends'; // 17%
    } else if (percentage <= 68) {
      resultType = 'Affection'; // 15%
    } else if (percentage <= 85) {
      resultType = 'Marriage'; // 17%
    } else {
      resultType = 'Love'; // 15%
    }
  }

  // 7. Guaranteed couples
  if (isPerfectLovePair) {
    resultType = 'Love';
    percentage = 100;
  }

  // 8. Stable list index
  const listIndex = absHash % 20;

  return {
    result: resultType,
    meaning: FLAMES_MEANINGS[resultType],
    movieMatch: MOVIE_MATCHES[resultType][listIndex],
    percentage,
    nicknameTitle: NICKNAME_LABELS[resultType],
    nickname: NICKNAMES[resultType][listIndex],
    quote: QUOTES[resultType][listIndex],
    timeline: TIMELINES[resultType]?.[listIndex],
  };
}