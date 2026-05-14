import { TIMELINES, TimelineData } from './timelines';

export type FlamesResultType = 'Friends' | 'Love' | 'Affection' | 'Marriage' | 'Enemy' | 'Siblings';

export interface FlamesData {
  result: FlamesResultType;
  meaning: string;
  songMatch: string;
  youtubeId: string;
  startTime?: number;
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

const SONG_MATCHES: Record<FlamesResultType, { title: string; id: string; startTime?: number }[]> = {
  Friends: [
    { "title": "Friendship Anthem – Happy Days", "id": "aj5FiHBrn04", "startTime": 15 },
    { "title": "O My Friend – Happy Days", "id": "wzUKUxpdsvk" },
    { "title": "Chalore Chalore – Jalsa", "id": "cQpe2HMkqVA" },
    { "title": "Life Is Beautiful – Life Is Beautiful", "id": "W_5w2jXJd1E" },
    { "title": "Memu Vayasuku Vacham – Happy Days", "id": "FUUeBvU1HRs" },
    { "title": "Freedom – Yevade Subramanyam", "id": "nX0Gfnzilok" },
    { "title": "College Bulloda – 3 Idiots Telugu", "id": "3HyOlbz6xFQ" },
    { "title": "Oo Madhu – Julayi", "id": "mP3A6Y5Yp8M" },
    { "title": "Vellipomaake – Saahasam Swaasaga Saagipo", "id": "-GydnFPTgus" },
    { "title": "Baitikochi Chuste – Agnyaathavaasi", "id": "UuiabjRSDs4" },
    { "title": "Adento Gaani – Jersey", "id": "l2GJB-kvnww" },
    { "title": "Sailaja Sailaja – Nenu Sailaja", "id": "hgpNla8AkIQ" },
    { "title": "Nee Prashnalu – Kotha Bangaru Lokam", "id": "9RbQwW1B9AI" },
    { "title": "Chitti Adugu – Most Eligible Bachelor", "id": "E08M8gPzzNk" },
    { "title": "Pareshanura – Dhruva", "id": "n42iRfYAkUY" },
    { "title": "Chukkallo Chandrude – Nuvvostanante Nenoddantana", "id": "RIriENOmOpo" },
    { "title": "Nammavemo Gani – Parugu", "id": "FM7wLLzTNhE" },
    { "title": "Yaaron Annadi – Student No.1", "id": "m4aHFKIVjSo" },
    { "title": "Vachadayyo Saami – Bharat Ane Nenu", "id": "ks--VOnxCXY" },
    { "title": "Yevvaro – Bodyguard", "id": "uV493v0FBdM" }
  ],
  Love: [
    { "title": "Samajavaragamana – Ala Vaikunthapurramuloo", "id": "OCg6BWlAXSw", "startTime": 10 },
    { "title": "Inkem Inkem Inkem Kaavaale – Geetha Govindam", "id": "LPeZOE8ZIHI" },
    { "title": "Oh Sita Hey Rama – Sita Ramam", "id": "hYFzyK9ExuM" },
    { "title": "Nee Kannu Neeli Samudram – Uppena", "id": "zZl7vDDN8Ek" },
    { "title": "Adiga Adiga – Ninnu Kori", "id": "evbYFsSJ4pU" },
    { "title": "Kadalalle – Dear Comrade", "id": "2ySr4lR0XFg" },
    { "title": "Maate Vinadhuga – Taxiwaala", "id": "kca0cG9fiQw" },
    { "title": "Nee Neeli Kannullona – Dear Comrade", "id": "JgZBAnKIvms" },
    { "title": "Priyathama Priyathama – Majili", "id": "BpINyS4k7Uw" },
    { "title": "Vintunnava – Ye Maaya Chesave", "id": "Wbs6pPJgBnA" },
    { "title": "Evo Evo Kalale – Love Story", "id": "05HYHpDKR2k" },
    { "title": "Undiporaadhey – Hushaaru", "id": "jlmyZ_x5vjc" },
    { "title": "Na Roja Nuvve – Kushi", "id": "JTpDCoxZdv8" },
    { "title": "Sirivennela – Shyam Singha Roy", "id": "m2kU2b9PYcs" },
    { "title": "Chiru Chiru – Awara", "id": "hCt-H4-5wco" },
    { "title": "Em Sandeham Ledu – Oohalu Gusagusalade", "id": "DDb7OILQMMA" },
    { "title": "Neeli Neeli Aakasam – 30 Rojullo Preminchadam Ela", "id": "0nRazWwoUbY" },
    { "title": "Naa Kosam – Bangarraju", "id": "TaQk5myCk00" },
    { "title": "Yenti Yenti – Geetha Govindam", "id": "LOZNKZfiFUw" },
    { "title": "Ye Mantramo – Andala Rakshasi", "id": "WE_k7v8QTXo" }
  ],
  Affection: [
    { "title": "Butta Bomma – Ala Vaikunthapurramuloo", "id": "YO7rue3nKX0", "startTime": 12 },
    { "title": "Chitti – Jathi Ratnalu", "id": "uvCbZxYdLuU" },
    { "title": "Darlingey – Mirchi", "id": "5jDWeo2HHx8" },
    { "title": "Oh Baby – Oh Baby", "id": "19QqXTmH0HM" },
    { "title": "Ammaye Sannaga – Kushi", "id": "QaYHchDvLiY" },
    { "title": "Choosi Chudangane – Chalo", "id": "3smrEURoJcM" },
    { "title": "Vachindamma – Geetha Govindam", "id": "I8t0VJjEffk" },
    { "title": "Chilipiga – Orange", "id": "vKjtupJz0r4" },
    { "title": "Kanulanu Thaake – Manam", "id": "F4gmDat38Rk" },
    { "title": "Hello Rammante – Orange", "id": "a-Xn3q3yst8" },
    { "title": "Manasa Manasa – Most Eligible Bachelor", "id": "NtTGqvD67pE" },
    { "title": "Nee Valle Nee Valle – IVNR", "id": "nujmBIj0pv0" },
    { "title": "Arerey Manasa – Falaknuma Das", "id": "Qf4MumY9fXk" },
    { "title": "Bujji Bangaram – Guna 369", "id": "VQr7lvMCrOs" },
    { "title": "Hrudayam Ekkadunnadi – Ghajini", "id": "zJfOpe7AXwc" },
    { "title": "Mellaga Tellarindoi – Sathamanam Bhavati", "id": "e5T1gbGJuAc" },
    { "title": "Niluvadhamu Ninu Epudaina – Nuvvostanante Nenoddantana", "id": "fdEzDqiSC3U" },
    { "title": "Kallolam – Padi Padi Leche Manasu", "id": "uOtgJmJIsio" },
    { "title": "Padi Padi Leche – Padi Padi Leche Manasu", "id": "fz9IDb2FV-0" },
    { "title": "Smiley Smiley – Race Gurram", "id": "XZqy6nCij50" }
  ],
  Marriage: [
    { "title": "Kalyanam Vaibhogam – Srinivasa Kalyanam", "id": "TqrPYfn1yUM", "startTime": 8 },
    { "title": "Alanati Ramachandrudu – Murari", "id": "EO3JWdSL1mk" },
    { "title": "Pelli Sandadi – Pelli Sandadi", "id": "1rZY5RjeuCw" },
    { "title": "Mangalyam – Seetharama Kalyana", "id": "8sfzdytgh6M" },
    { "title": "Sathamana Mannadile – Mruga Raju", "id": "Vf_0PZoJy3c" },
    { "title": "Raarandoy Veduka Chuddam – Rarandoi Veduka Chudham", "id": "p9kCgQdy_VE" },
    { "title": "Madhuram Madhuram – Brindavanam", "id": "Pk5dylSO8yk" },
    { "title": "Kalyana Vaibhogame – Shubhamasthu", "id": "ZsAXhlLwIV4" },
    { "title": "Seethakoka Chiluka – Son of Satyamurthy", "id": "k7326ZHbXZc" },
    { "title": "Muvvala Navvakala – Pournami", "id": "AlZH_dPAskQ" },
    { "title": "Siggestondi – SVSC", "id": "GhXU_FTKNbE" },
    { "title": "Andamaina Premarani – Premikudu", "id": "T2tmlLojh3U" },
    { "title": "Vennelave Vennelave – Merupu Kalalu", "id": "Cg_TCyO9FSc" },
    { "title": "Chinnadana Neekosam – Chinnadana Neekosam", "id": "0lU35XkicU0" },
    { "title": "O Prema – Upendra", "id": "x0X2ld8YZlM" },
    { "title": "Nuvvem Maya Chesavo – Okkadu", "id": "2wwqmBaIL7c" },
    { "title": "Sri Anjaneyam – Oka Laila Kosam", "id": "3wRLczXuesg" },
    { "title": "Bhadram Be Careful – Money", "id": "bQLWjp0y5GE" },
    { "title": "Aakasam Ammayaithe – Gabbar Singh", "id": "Xpl8RRT8_Y0" },
    { "title": "Manohari – Baahubali", "id": "dXO5p6QRG7A" }
  ],
  Enemy: [
    { "title": "Pushpa Pushpa – Pushpa", "id": "wQksDYahKZs", "startTime": 10 },
    { "title": "Daakko Daakko Meka – Pushpa", "id": "pc_784hcQxI" },
    { "title": "Naatu Naatu – RRR", "id": "4_eEgJhsBMo" },
    { "title": "Dum Masala – Guntur Kaaram", "id": "9w20rGRhek0" },
    { "title": "Mind Block – Sarileru Neekevvaru", "id": "J7Qf8bQRPuc" },
    { "title": "Blockbuster – Sarrainodu", "id": "FmjJ-e5uGuY" },
    { "title": "Pakka Local – Janatha Garage", "id": "GFEj1vnhvxA" },
    { "title": "Mass Mogudu – Veera Simha Reddy", "id": "rtTLi9Zts58" },
    { "title": "Jai Balayya – Akhanda", "id": "HgWgOii3SmQ" },
    { "title": "Adaradagottu – Teenmaar", "id": "LTGgJ0hYSF8" },
    { "title": "Seeti Maar – DJ", "id": "WLD0kUKybeE" },
    { "title": "Ammadu Let’s Do Kummudu – Khaidi No.150", "id": "JTIaespV8Ic" },
    { "title": "Boss Party – Waltair Veerayya", "id": "Er8D49RPLCs" },
    { "title": "Bullet Song – The Warriorr", "id": "WgrLE4Fqxeo" },
    { "title": "Whistle Song – Guntur Kaaram", "id": "9w20rGRhek0" },
    { "title": "Top Lesi Poddi – Iddarammayilatho", "id": "YAscOYMTgTs" },
    { "title": "Ringa Ringa – Arya 2", "id": "2OhhFkF3MqQ" },
    { "title": "Cinema Choopistha Mama – Race Gurram", "id": "H7EAJW8jYzA" },
    { "title": "Ramuloo Ramulaa – Ala Vaikunthapurramuloo", "id": "Bg8Yb9zGYyA" },
    { "title": "Saami Saami – Pushpa", "id": "-ZAnN6groJw" }
  ],
  Siblings: [
    { "title": "Pedave Palikina – Nani", "id": "L5-6hW-3yWk", "startTime": 12 },
    { "title": "Kanipenchina – Manam", "id": "J2Bt3sE8Gmo" },
    { "title": "Amma Amma – Raghuvaran BTech", "id": "nS8xDHQ-r5E" },
    { "title": "Chinni Chinni Aasalu – Manam", "id": "sStyIIjGhzI" },
    { "title": "Aaradugula Bullet – Attarintiki Daredi", "id": "VWISgFcGM68" },
    { "title": "Niluvaddam – Nuvvostanante Nenoddantana", "id": "fdEzDqiSC3U" },
    { "title": "Janavule Nerajanavule – Aditya 369", "id": "JZ6EiyoCfsU" },
    { "title": "Amma Song – Oke Oka Jeevitham", "id": "V-puu8Xg9sw" },
    { "title": "Family Party – MCA", "id": "f6UmenpDkhc" },
    { "title": "Bapu Gari Bommo – Attarintiki Daredi", "id": "v7L1JJrmKG0" },
    { "title": "Chal Chal Gurram – Winner", "id": "jtj74-ZELls" },
    { "title": "Okanoka Lokam – Sye", "id": "_PtH3QraTz0" },
    { "title": "Chukkalanti Ammayi – Abhinandana", "id": "scroWg6OQ4Y" },
    { "title": "Neeve Neeve – Darling", "id": "0Olv8zM_rps" },
    { "title": "Yedo Priyaragam – Arya", "id": "Llw7cXHmDDo" },
    { "title": "Amma Ani Kothaga – Life Is Beautiful", "id": "_7YQFAkHD6Y" },
    { "title": "Laali Laali – Damarukam", "id": "5Ye82ny8qT4" },
    { "title": "Gundello Godari – Gundello Godari", "id": "Wwr_yWq-4Ys" },
    { "title": "Anandam Anandamaye – Murari", "id": "Wb8heGyScGM" },
    { "title": "Vellipomaakey – Saahasam Swaasaga Saagipo", "id": "-GydnFPTgus" }
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
  const songData = SONG_MATCHES[resultType][listIndex];

  return {
    result: resultType,
    meaning: FLAMES_MEANINGS[resultType],
    songMatch: songData.title,
    youtubeId: songData.id,
    startTime: songData.startTime,
    percentage,
    nicknameTitle: NICKNAME_LABELS[resultType],
    nickname: NICKNAMES[resultType][listIndex],
    quote: QUOTES[resultType][listIndex],
    timeline: TIMELINES[resultType]?.[listIndex],
  };
}