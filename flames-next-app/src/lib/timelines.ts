export interface TimelineData {
  title: string;
  steps: string[];
  suggestion: string;
}

export const TIMELINES: Record<string, TimelineData[]> = {
  Friends: [
    {
      title: "First Bench Friend",
      steps: [
        "You randomly sit beside someone on the first day.",
        "Attendance talks become daily conversations.",
        "They become your closest college friend."
      ],
      suggestion: "This friendship may stay for years. Protect this bond naturally."
    },
    {
      title: "Hostel Bond",
      steps: [
        "You meet during hostel joining.",
        "Midnight talks create emotional trust.",
        "They become like family in college."
      ],
      suggestion: "This is a rare friendship connection. Do not ruin it with ego."
    },
    {
      title: "Assignment Partner",
      steps: [
        "Someone shares notes before submission day.",
        "You help each other in every subject.",
        "You both survive semesters together."
      ],
      suggestion: "This friend genuinely supports your growth. Stay loyal to this bond."
    },
    {
      title: "Lab Partner",
      steps: [
        "You get paired in the same lab batch.",
        "Practical sessions become fun together.",
        "Your friendship grows every semester."
      ],
      suggestion: "Strong teamwork creates strong friendships. Keep supporting each other."
    },
    {
      title: "Canteen Buddy",
      steps: [
        "You meet during lunch break.",
        "Daily chai breaks become routine.",
        "The canteen becomes your friendship spot."
      ],
      suggestion: "Simple moments create lasting memories. Enjoy the friendship naturally."
    },
    {
      title: "Backbench Gang",
      steps: [
        "You start sitting together in boring classes.",
        "Small jokes make lectures enjoyable.",
        "Your group becomes popular in class."
      ],
      suggestion: "These memories will become nostalgic later. Capture more moments together."
    },
    {
      title: "Exam Night Friend",
      steps: [
        "Someone helps you before exams.",
        "Group studies become regular.",
        "You both handle stress together."
      ],
      suggestion: "This person stays during difficult phases. Value their effort carefully."
    },
    {
      title: "Bus Friend",
      steps: [
        "You travel in the same college bus daily.",
        "Small talks become long conversations.",
        "Waiting for the bus becomes enjoyable."
      ],
      suggestion: "This friendship feels calm and genuine. Spend more quality time together."
    },
    {
      title: "Fest Team",
      steps: [
        "You meet during fest preparations.",
        "Practice sessions bring you closer.",
        "The event creates unforgettable memories."
      ],
      suggestion: "Shared experiences strengthen friendships deeply. Stay connected after college too."
    },
    {
      title: "Gaming Friend",
      steps: [
        "You both start gaming in hostel.",
        "Night sessions become addictive.",
        "You become inseparable friends."
      ],
      suggestion: "Fun moments build emotional comfort. Do not lose contact later."
    },
    {
      title: "Placement Partner",
      steps: [
        "You prepare for placements together.",
        "Mock interviews increase confidence.",
        "Your bond grows stronger during pressure."
      ],
      suggestion: "Growth friendships are rare. Keep motivating each other."
    },
    {
      title: "Rain Walk Friend",
      steps: [
        "You both get stuck in rain after class.",
        "Walking together creates fun memories.",
        "That day starts a strong friendship."
      ],
      suggestion: "Unexpected moments create meaningful bonds. Value simple memories."
    },
    {
      title: "Library Friend",
      steps: [
        "You notice someone studying near you often.",
        "Doubt discussions become regular talks.",
        "You both silently become close."
      ],
      suggestion: "Comfortable silence is a strong sign of trust. Protect this friendship."
    },
    {
      title: "Unexpected Support",
      steps: [
        "Someone supports you during low marks.",
        "They motivate you when you feel hopeless.",
        "Their friendship changes your mindset."
      ],
      suggestion: "This friend truly cares for your wellbeing. Never ignore genuine support."
    },
    {
      title: "Farewell Promise",
      steps: [
        "Final year makes everyone emotional.",
        "You realize how important your friends became.",
        "Farewell day becomes unforgettable."
      ],
      suggestion: "Do not disappear after graduation. Real friendships deserve effort."
    },
    {
      title: "Sports Ground Friend",
      steps: [
        "You meet during a college match.",
        "Daily practice creates a strong bond.",
        "Sports turn into lifelong memories."
      ],
      suggestion: "Healthy competition builds strong friendships. Stay connected beyond college."
    },
    {
      title: "Seminar Partner",
      steps: [
        "You prepare a seminar together.",
        "Nervous moments create funny memories.",
        "Teamwork builds a close friendship."
      ],
      suggestion: "Shared struggles create lasting trust. Value this connection."
    },
    {
      title: "Internship Friend",
      steps: [
        "You meet during internship training.",
        "Daily work creates understanding.",
        "You both stay connected after training ends."
      ],
      suggestion: "Professional friendships can become lifelong bonds. Keep communication alive."
    },
    {
      title: "Meme Friend",
      steps: [
        "You randomly send a meme in class group.",
        "Daily jokes become routine.",
        "Laughing together becomes stress relief."
      ],
      suggestion: "Happiness matters more than perfection. Keep this positive energy alive."
    },
    {
      title: "Last Bench Listener",
      steps: [
        "Someone quietly listens to your problems.",
        "Daily conversations create emotional trust.",
        "They become your safest friend in college."
      ],
      suggestion: "This friendship feels emotionally secure. Protect the trust carefully."
    }
  ],
  Love: [
    {
      title: "Classroom Crush",
      steps: [
        "You notice someone during your first semester.",
        "Eye contact slowly becomes smiles.",
        "You fall in love before second year."
      ],
      suggestion: "Do not propose too early. Let the comfort grow naturally first."
    },
    {
      title: "Library Love",
      steps: [
        "You often see someone in the library.",
        "Silent smiles become conversations.",
        "They start waiting for you after study hours."
      ],
      suggestion: "Spend more time together first. This bond needs patience, not pressure."
    },
    {
      title: "Lab Love Story",
      steps: [
        "You get paired together in lab sessions.",
        "Practical jokes create emotional bonding.",
        "Feelings slowly grow between both of you."
      ],
      suggestion: "There is mutual comfort here. Take slow and confident steps."
    },
    {
      title: "Canteen Proposal",
      steps: [
        "Daily lunch meetings become special.",
        "Friends start teasing both of you.",
        "Your proposal happens near the canteen."
      ],
      suggestion: "The timing feels positive. An honest proposal may work well."
    },
    {
      title: "Rainy Campus",
      steps: [
        "You walk together during a rainy evening.",
        "Deep talks create emotional closeness.",
        "That day changes your relationship forever."
      ],
      suggestion: "This connection feels emotionally strong. Protect the trust carefully."
    },
    {
      title: "Unexpected Message",
      steps: [
        "A random “hi” starts your conversation.",
        "Daily chatting becomes your routine.",
        "You both become emotionally attached."
      ],
      suggestion: "Do not overthink small delays. Consistency matters more than speed."
    },
    {
      title: "Late Night Calls",
      steps: [
        "Doubt discussions turn into long calls.",
        "Nights become incomplete without talking.",
        "Their voice becomes your comfort."
      ],
      suggestion: "This bond is becoming emotionally deep. Avoid unhealthy emotional dependency."
    },
    {
      title: "Bus Journey Love",
      steps: [
        "You both travel in the same bus.",
        "Sitting together becomes daily routine.",
        "Feelings slowly develop naturally."
      ],
      suggestion: "This relationship is growing naturally. Do not force labels too quickly."
    },
    {
      title: "Best Friend Love",
      steps: [
        "Friendship grows stronger every semester.",
        "Jealousy reveals hidden feelings.",
        "One confession changes everything."
      ],
      suggestion: "Think carefully before confessing. Some friendships are too precious to risk casually."
    },
    {
      title: "Placement Stress Bond",
      steps: [
        "You support each other during placement pressure.",
        "Emotional care strengthens your bond.",
        "Love grows during difficult times."
      ],
      suggestion: "This person genuinely cares for you. Value emotional support more than romance alone."
    },
    {
      title: "Birthday Surprise",
      steps: [
        "They plan something special for your birthday.",
        "Their effort touches your heart deeply.",
        "Your feelings change after that day."
      ],
      suggestion: "Small efforts reveal real emotions. Pay attention to actions, not words."
    },
    {
      title: "Farewell Tears",
      steps: [
        "Final year creates fear of separation.",
        "Every moment together feels emotional.",
        "Farewell hugs become unforgettable."
      ],
      suggestion: "Do not leave things unsaid forever. One honest conversation can change everything."
    },
    {
      title: "Shared Earphones",
      steps: [
        "You both share music daily.",
        "Songs create emotional memories.",
        "Every playlist reminds you of them."
      ],
      suggestion: "This bond feels soft and genuine. Enjoy the present moments slowly."
    },
    {
      title: "Proposal in Third Year",
      steps: [
        "You secretly like someone from second year.",
        "Daily conversations bring you closer.",
        "They accept your proposal in B.Tech third year."
      ],
      suggestion: "Good timing matters in love. Patience helped this connection grow naturally."
    },
    {
      title: "Morning Attendance Love",
      steps: [
        "Someone saves you a seat every morning.",
        "Attendance discussions become caring talks.",
        "You both slowly fall for each other."
      ],
      suggestion: "This affection is becoming mutual. Take emotional steps carefully."
    },
    {
      title: "Internship Love",
      steps: [
        "You meet during internship training.",
        "Working together creates emotional bonding.",
        "Feelings become impossible to hide."
      ],
      suggestion: "This relationship has future potential. Focus on understanding each other deeply."
    },
    {
      title: "Rain and Umbrella",
      steps: [
        "Someone shares an umbrella with you.",
        "Walking together feels unexpectedly special.",
        "That moment stays in your heart forever."
      ],
      suggestion: "Sometimes small moments create real love. Do not ignore emotional signs."
    },
    {
      title: "Graduation Love",
      steps: [
        "Final semester makes emotions stronger.",
        "Fear of losing them increases daily.",
        "You confess before graduation ends."
      ],
      suggestion: "Do not wait forever because of fear. Some opportunities never return."
    },
    {
      title: "Unexpected Care",
      steps: [
        "Someone constantly checks on you.",
        "Their care starts feeling different.",
        "You slowly realize it is love."
      ],
      suggestion: "Mutual care is the strongest foundation. Build trust before commitment."
    },
    {
      title: "Slow Burn Love",
      steps: [
        "Friendship begins casually.",
        "Emotional attachment grows silently.",
        "Love happens naturally over time."
      ],
      suggestion: "The strongest relationships grow slowly. Do not rush emotional decisions."
    }
  ],
  Affection: [
    {
      title: "Daily Care",
      steps: [
        "Someone asks if you ate lunch daily.",
        "They remind you about assignments.",
        "Their care becomes part of your routine."
      ],
      suggestion: "Their affection looks genuine. Notice the small efforts carefully."
    },
    {
      title: "Silent Understanding",
      steps: [
        "Someone notices when you feel stressed.",
        "They sit beside you quietly.",
        "Their presence starts comforting you."
      ],
      suggestion: "Not every strong bond needs romance. Value this emotional comfort peacefully."
    },
    {
      title: "Midnight Motivation",
      steps: [
        "You feel low during exams.",
        "Someone stays awake motivating you.",
        "Their support restores your confidence."
      ],
      suggestion: "This affection is emotionally healing. Keep this person close in your life."
    },
    {
      title: "Waiting After Class",
      steps: [
        "Someone waits daily after class for you.",
        "Walking together becomes routine.",
        "Their effort starts feeling special."
      ],
      suggestion: "This connection may slowly become emotional. Do not rush your decisions yet."
    },
    {
      title: "Emotional Listener",
      steps: [
        "Someone listens to your problems seriously.",
        "They never judge your feelings.",
        "Talking to them feels peaceful."
      ],
      suggestion: "You feel emotionally safe around them. Protect this bond carefully."
    },
    {
      title: "Rain Protection",
      steps: [
        "Someone shares their umbrella with you.",
        "Walking together feels emotionally comforting.",
        "That small gesture stays in your heart."
      ],
      suggestion: "Small gestures often carry deep feelings. Do not ignore genuine care."
    },
    {
      title: "Morning Check-In",
      steps: [
        "Someone messages you every morning.",
        "Daily talks become emotionally important.",
        "Their affection slowly becomes comforting."
      ],
      suggestion: "Consistency is a strong sign of affection. Value their effort sincerely."
    },
    {
      title: "Favorite Person",
      steps: [
        "You start searching for one person daily.",
        "Their smile improves your mood instantly.",
        "Their affection changes your college life."
      ],
      suggestion: "This connection feels emotionally special. Take things slowly and naturally."
    },
    {
      title: "Support During Failure",
      steps: [
        "You feel broken after poor marks.",
        "Someone encourages you without leaving.",
        "Their support becomes unforgettable."
      ],
      suggestion: "People who stay during failures are rare. Protect this connection carefully."
    },
    {
      title: "Comfortable Silence",
      steps: [
        "You both spend time together quietly.",
        "Silence slowly feels comfortable.",
        "Their presence alone makes you happy."
      ],
      suggestion: "Comfortable silence shows emotional trust. Do not force unnecessary expectations."
    },
    {
      title: "Hostel Care",
      steps: [
        "Someone notices you skipped dinner.",
        "They bring food without asking.",
        "That simple care touches your heart deeply."
      ],
      suggestion: "Real affection appears in small actions. Appreciate their kindness openly."
    },
    {
      title: "Long Walk Talks",
      steps: [
        "Evening campus walks become regular.",
        "You both discuss life and future.",
        "Their affection feels genuine and peaceful."
      ],
      suggestion: "This bond feels emotionally healthy. Do not overcomplicate it."
    },
    {
      title: "Library Seat",
      steps: [
        "Someone saves a seat for you daily.",
        "You start waiting to study together.",
        "That care creates emotional closeness."
      ],
      suggestion: "Small habits create deep attachment. Value these moments properly."
    },
    {
      title: "Stress Relief",
      steps: [
        "Someone notices your stress instantly.",
        "They try hard to make you smile.",
        "Their care changes your mood every day."
      ],
      suggestion: "Their affection positively affects your life. Keep this connection genuine."
    },
    {
      title: "Genuine Presence",
      steps: [
        "Someone stays beside you during difficult times.",
        "They support you without expecting anything.",
        "Their affection becomes unforgettable."
      ],
      suggestion: "This emotional support is rare. Never take it for granted."
    },
    {
      title: "Tiny Gestures",
      steps: [
        "Someone remembers your favorite snack.",
        "They notice your mood changes quickly.",
        "Their efforts slowly touch your heart."
      ],
      suggestion: "Affection grows through consistency. Notice the details carefully."
    },
    {
      title: "Caring Texts",
      steps: [
        "You receive random “Reached hostel?” texts.",
        "Daily caring messages become normal.",
        "You feel emotionally safe with them."
      ],
      suggestion: "Safety and peace are strong emotional signs. Protect this bond naturally."
    },
    {
      title: "Calm Energy",
      steps: [
        "One person makes stressful days feel lighter.",
        "Their company becomes emotionally relaxing.",
        "You slowly depend on their presence."
      ],
      suggestion: "Do not become emotionally dependent too quickly. Maintain personal balance too."
    },
    {
      title: "Soft Corner",
      steps: [
        "Someone always treats you differently.",
        "Their attention slowly becomes noticeable.",
        "You realize they genuinely care for you."
      ],
      suggestion: "Their affection feels deeper than casual friendship. Observe their consistency patiently."
    },
    {
      title: "Peaceful Bond",
      steps: [
        "Conversations with someone feel effortless.",
        "Their presence gives emotional comfort.",
        "The bond slowly becomes unforgettable."
      ],
      suggestion: "Peaceful connections often last longer. Do not rush to label everything."
    }
  ],
  Marriage: [
    {
      title: "College Love Marriage",
      steps: [
        "Your friendship slowly turns into love during B.Tech.",
        "You both survive placements and career pressure together.",
        "Marriage happens after years of patience and trust."
      ],
      suggestion: "Strong relationships survive difficult phases. Focus on loyalty more than temporary emotions."
    },
    {
      title: "Family Approval",
      steps: [
        "You both hide your relationship during college.",
        "Families slowly begin understanding your bond.",
        "Marriage happens with everyone’s support."
      ],
      suggestion: "Patience can solve many relationship problems. Avoid rushing important decisions."
    },
    {
      title: "Long Distance Marriage",
      steps: [
        "Careers separate you after graduation.",
        "Daily calls keep the relationship alive.",
        "Distance finally ends with marriage."
      ],
      suggestion: "Consistency matters more than physical distance. Trust is your biggest strength."
    },
    {
      title: "Best Friend Marriage",
      steps: [
        "Friendship grows stronger every year.",
        "Emotional support creates deep attachment.",
        "You both decide to spend life together."
      ],
      suggestion: "The strongest marriages begin with friendship. Never lose emotional honesty."
    },
    {
      title: "Placement to Partnership",
      steps: [
        "You both prepare for placements together.",
        "Career growth strengthens your bond.",
        "Marriage becomes the next life goal."
      ],
      suggestion: "Growing together creates stable relationships. Support each other’s dreams equally."
    },
    {
      title: "Rainy Day Promise",
      steps: [
        "A simple college moment brings you emotionally closer.",
        "Love grows naturally over time.",
        "Years later, that same person becomes your partner."
      ],
      suggestion: "Small memories often create lifelong relationships. Value emotional moments deeply."
    },
    {
      title: "Silent Understanding",
      steps: [
        "You both understand each other without many words.",
        "Emotional comfort grows every semester.",
        "Marriage feels peaceful instead of forced."
      ],
      suggestion: "Peace matters more than excitement in long-term relationships. Choose emotional stability."
    },
    {
      title: "Farewell Confession",
      steps: [
        "Feelings stay hidden during most of college.",
        "Final year creates fear of separation.",
        "One confession leads to a future marriage."
      ],
      suggestion: "Sometimes honesty changes your entire future. Do not let fear control important moments."
    },
    {
      title: "Supportive Partner",
      steps: [
        "Someone supports you during your lowest phase.",
        "Their loyalty becomes emotionally important.",
        "You marry the person who stayed during struggles."
      ],
      suggestion: "People who stay during failures are rare. Value loyalty more than attraction."
    },
    {
      title: "Slow Relationship",
      steps: [
        "Friendship slowly becomes emotional attachment.",
        "Years of trust strengthen the relationship.",
        "Marriage happens naturally without pressure."
      ],
      suggestion: "Slow relationships often become the strongest. Do not rush emotional commitments."
    },
    {
      title: "Internship Connection",
      steps: [
        "You meet during internship training.",
        "Daily teamwork creates emotional bonding.",
        "The relationship later turns into marriage."
      ],
      suggestion: "Professional understanding strengthens long-term compatibility. Respect each other’s ambitions."
    },
    {
      title: "Mutual Growth",
      steps: [
        "You both motivate each other academically.",
        "Career struggles bring emotional closeness.",
        "Marriage happens after achieving stability together."
      ],
      suggestion: "Healthy relationships grow together, not separately. Celebrate each other’s progress."
    },
    {
      title: "Emotional Safety",
      steps: [
        "Someone becomes your emotional safe place.",
        "Every difficult phase feels easier with them.",
        "Marriage feels like the natural future."
      ],
      suggestion: "Emotional safety is more valuable than perfection. Protect this bond carefully."
    },
    {
      title: "Second Chance Love",
      steps: [
        "Misunderstandings create temporary distance.",
        "Time helps both of you mature emotionally.",
        "You reunite and eventually marry."
      ],
      suggestion: "Not every breakup is the end. Some bonds return stronger with maturity."
    },
    {
      title: "Shared Dreams",
      steps: [
        "You both discuss future goals together.",
        "Planning life becomes emotionally exciting.",
        "Marriage turns dreams into reality."
      ],
      suggestion: "Shared vision creates stable relationships. Keep communicating honestly."
    },
    {
      title: "Calm Relationship",
      steps: [
        "The relationship grows without unnecessary drama.",
        "Understanding becomes stronger with time.",
        "Marriage feels peaceful and secure."
      ],
      suggestion: "Peaceful love often lasts longer than intense attraction. Protect emotional balance."
    },
    {
      title: "Hostel Love to Marriage",
      steps: [
        "You meet during hostel life.",
        "Emotional support creates deep trust.",
        "Years later, you marry the same person."
      ],
      suggestion: "Relationships built on trust survive longer. Never ignore emotional consistency."
    },
    {
      title: "Unexpected Proposal",
      steps: [
        "Friendship continues for years naturally.",
        "Hidden feelings slowly become obvious.",
        "A surprise proposal changes everything."
      ],
      suggestion: "Some relationships grow beautifully without force. Allow emotions to develop naturally."
    },
    {
      title: "Mature Commitment",
      steps: [
        "Both of you focus on careers first.",
        "Emotional connection remains stable over years.",
        "Marriage happens at the right time."
      ],
      suggestion: "Timing matters in long-term relationships. Patience creates stability."
    },
    {
      title: "Forever Person",
      steps: [
        "One person slowly becomes part of your daily life.",
        "Their absence starts affecting your peace.",
        "Marriage feels impossible with anyone else."
      ],
      suggestion: "The right person brings emotional peace, not confusion. Choose the connection that feels natural."
    }
  ],
  Enemy: [
    {
      title: "Classroom Rival",
      steps: [
        "Someone constantly competes with you in academics.",
        "Small comparisons slowly create tension.",
        "Rivalry becomes noticeable to everyone in class."
      ],
      suggestion: "Do not waste energy proving yourself constantly. Focus on personal growth instead."
    },
    {
      title: "Silent Jealousy",
      steps: [
        "Someone starts acting differently after your success.",
        "Their behavior slowly becomes distant and cold.",
        "Hidden jealousy creates silent competition."
      ],
      suggestion: "Not everyone will celebrate your growth. Stay calm and avoid unnecessary conflict."
    },
    {
      title: "Group Conflict",
      steps: [
        "A misunderstanding happens inside your friend group.",
        "Communication slowly breaks down.",
        "Tension creates emotional distance."
      ],
      suggestion: "Clear communication can prevent permanent damage. Do not let ego control decisions."
    },
    {
      title: "Academic Competition",
      steps: [
        "You both compete for top marks regularly.",
        "Pressure slowly affects the relationship.",
        "Rivalry becomes emotionally stressful."
      ],
      suggestion: "Healthy competition is good. Do not turn it into hatred."
    },
    {
      title: "Betrayed Trust",
      steps: [
        "You trust someone deeply during college life.",
        "They share your personal matters with others.",
        "The friendship suddenly breaks apart."
      ],
      suggestion: "Not everyone deserves complete trust quickly. Observe actions carefully."
    },
    {
      title: "Attention Conflict",
      steps: [
        "Two people start competing for the same attention.",
        "Small misunderstandings increase daily.",
        "Emotional frustration creates rivalry."
      ],
      suggestion: "Do not fight for validation. Real connections happen naturally."
    },
    {
      title: "Team Disagreement",
      steps: [
        "A college project creates repeated arguments.",
        "Different opinions create frustration.",
        "Teamwork slowly becomes uncomfortable."
      ],
      suggestion: "Learn to separate work stress from personal emotions. Maturity solves many conflicts."
    },
    {
      title: "Social Media Tension",
      steps: [
        "A small online issue creates misunderstanding.",
        "Indirect posts increase emotional tension.",
        "Communication completely stops."
      ],
      suggestion: "Not every issue deserves public reaction. Handle problems privately and calmly."
    },
    {
      title: "Hidden Competition",
      steps: [
        "Someone starts copying your style and actions.",
        "Comparison slowly becomes obvious.",
        "The connection feels emotionally uncomfortable."
      ],
      suggestion: "Do not react emotionally to insecure behavior. Confidence speaks louder."
    },
    {
      title: "Friendship Break",
      steps: [
        "A strong friendship slowly weakens.",
        "Ego prevents honest communication.",
        "Distance turns friendship into rivalry."
      ],
      suggestion: "Sometimes pride destroys valuable bonds. Speak honestly before it becomes too late."
    },
    {
      title: "Placement Rivalry",
      steps: [
        "You both prepare for placements together.",
        "Competition increases pressure between you.",
        "Success and comparison create tension."
      ],
      suggestion: "Focus on your own path. Comparison only increases stress."
    },
    {
      title: "Misjudged Intentions",
      steps: [
        "Someone misunderstands your actions completely.",
        "Rumors slowly spread in college.",
        "The situation creates emotional frustration."
      ],
      suggestion: "Not every misunderstanding needs aggressive reactions. Stay patient and clear."
    },
    {
      title: "Ego Clash",
      steps: [
        "Both of you refuse to compromise during arguments.",
        "Small issues slowly become serious.",
        "The relationship becomes toxic."
      ],
      suggestion: "Winning arguments is less important than mental peace. Learn when to walk away."
    },
    {
      title: "Fake Friend Energy",
      steps: [
        "Someone acts supportive in front of you.",
        "Their behavior changes behind your back.",
        "You slowly realize the truth."
      ],
      suggestion: "Observe consistency, not sweet words. Protect your emotional energy."
    },
    {
      title: "Public Embarrassment",
      steps: [
        "Someone embarrasses you during a class situation.",
        "Anger creates emotional distance.",
        "The connection becomes uncomfortable."
      ],
      suggestion: "React with maturity instead of revenge. Temporary moments should not control your future."
    },
    {
      title: "Possessive Rivalry",
      steps: [
        "One person becomes emotionally possessive.",
        "Jealousy creates repeated arguments.",
        "The relationship becomes mentally exhausting."
      ],
      suggestion: "Emotional control matters. Avoid toxic attachment and manipulation."
    },
    {
      title: "Silent Hatred",
      steps: [
        "Someone dislikes you without clear reason.",
        "Their behavior slowly becomes obvious.",
        "Tension silently continues for months."
      ],
      suggestion: "Not every dislike deserves your attention. Protect your peace and move forward."
    },
    {
      title: "Broken Partnership",
      steps: [
        "A close partnership suddenly weakens.",
        "Miscommunication creates emotional distance.",
        "Trust becomes difficult to rebuild."
      ],
      suggestion: "Trust takes time to rebuild. Do not force broken connections immediately."
    },
    {
      title: "Jealous Friend",
      steps: [
        "Your success changes someone’s behavior.",
        "Their support slowly becomes negative.",
        "Hidden insecurity damages the friendship."
      ],
      suggestion: "Success reveals true intentions sometimes. Stay humble but careful."
    },
    {
      title: "Peace Over Revenge",
      steps: [
        "Someone repeatedly creates problems in your life.",
        "Anger slowly affects your mental peace.",
        "You finally choose distance over revenge."
      ],
      suggestion: "Peace is more valuable than winning conflicts. Protect your mental energy first."
    }
  ],
  Siblings: [
    {
      title: "Late Night Talks",
      steps: [
        "You and your sibling start sharing personal problems.",
        "Midnight conversations become common during college life.",
        "Your bond becomes emotionally stronger than before."
      ],
      suggestion: "Sibling support becomes important during stressful phases. Stay emotionally connected."
    },
    {
      title: "Protective Bond",
      steps: [
        "Your sibling silently notices your struggles.",
        "They start supporting you without asking.",
        "Their care becomes your emotional strength."
      ],
      suggestion: "Not every support is expressed loudly. Value silent care deeply."
    },
    {
      title: "Childhood Memories",
      steps: [
        "Old childhood memories suddenly return during college days.",
        "You both start laughing about old fights.",
        "The relationship becomes softer and closer."
      ],
      suggestion: "Growing up changes sibling relationships beautifully. Spend more time together."
    },
    {
      title: "Study Motivation",
      steps: [
        "Your sibling motivates you during exam stress.",
        "They help you regain confidence after failures.",
        "Their words positively affect your future."
      ],
      suggestion: "A supportive sibling can change your mindset. Never ignore genuine encouragement."
    },
    {
      title: "Distance but Close",
      steps: [
        "College creates physical distance between both of you.",
        "Daily calls slowly become emotionally important.",
        "The bond stays strong despite distance."
      ],
      suggestion: "Real sibling bonds survive distance naturally. Keep communication alive."
    },
    {
      title: "Emotional Understanding",
      steps: [
        "Your sibling notices your mood changes quickly.",
        "They understand your silence without explanation.",
        "Emotional trust grows naturally."
      ],
      suggestion: "Being emotionally understood is rare. Protect this comfort carefully."
    },
    {
      title: "Unexpected Support",
      steps: [
        "You feel mentally exhausted during a difficult phase.",
        "Your sibling quietly stays beside you.",
        "Their support helps you recover emotionally."
      ],
      suggestion: "Family support often heals silently. Value their presence sincerely."
    },
    {
      title: "Festival Reunion",
      steps: [
        "College keeps everyone busy and distant.",
        "A festival reunion brings emotional happiness.",
        "Family bonding becomes stronger again."
      ],
      suggestion: "Small reunions create unforgettable memories. Spend more time with family."
    },
    {
      title: "Shared Secrets",
      steps: [
        "You both start sharing secrets nobody else knows.",
        "Emotional trust grows stronger over time.",
        "Your sibling becomes your safest person."
      ],
      suggestion: "Trust is the strongest part of sibling relationships. Never break it casually."
    },
    {
      title: "Protective Elder Sibling",
      steps: [
        "Your elder sibling constantly checks on your wellbeing.",
        "Their advice starts helping your decisions.",
        "You slowly realize how much they care."
      ],
      suggestion: "Strictness sometimes hides deep affection. Understand their intentions patiently."
    },
    {
      title: "Younger Sibling Attachment",
      steps: [
        "Your younger sibling starts depending on you emotionally.",
        "They seek your guidance during problems.",
        "Your bond becomes emotionally meaningful."
      ],
      suggestion: "Your actions shape their confidence. Support them positively."
    },
    {
      title: "Hostel Separation",
      steps: [
        "One sibling leaves home for studies.",
        "Home suddenly feels emotionally different.",
        "Reunion moments become more valuable."
      ],
      suggestion: "Distance increases emotional appreciation. Stay connected regularly."
    },
    {
      title: "Shared Responsibilities",
      steps: [
        "Family responsibilities increase with time.",
        "You both start helping each other seriously.",
        "Mutual respect grows naturally."
      ],
      suggestion: "Shared struggles strengthen sibling bonds. Work together instead of competing."
    },
    {
      title: "Comfort Person",
      steps: [
        "You begin discussing personal stress with your sibling.",
        "Their presence feels emotionally calming.",
        "They become your emotional safe place."
      ],
      suggestion: "Emotional comfort inside family is priceless. Protect this connection carefully."
    },
    {
      title: "Career Guidance",
      steps: [
        "Your sibling supports your career decisions.",
        "Their advice helps during confusion.",
        "Your respect for them increases deeply."
      ],
      suggestion: "Guidance from experience is valuable. Listen before reacting emotionally."
    },
    {
      title: "Funny Fights",
      steps: [
        "Daily arguments continue like childhood.",
        "Small fights quickly turn into laughter.",
        "The bond stays unbreakable despite everything."
      ],
      suggestion: "Some relationships survive because of honesty. Do not hold unnecessary grudges."
    },
    {
      title: "Emotional Reunion",
      steps: [
        "Busy schedules reduce conversations for months.",
        "One emotional moment reconnects both of you.",
        "The bond feels stronger again."
      ],
      suggestion: "Reconnect before distance becomes permanent. Make time for family."
    },
    {
      title: "Shared Dreams",
      steps: [
        "You both discuss future goals together.",
        "Mutual motivation increases confidence.",
        "Success feels more meaningful together."
      ],
      suggestion: "Healthy sibling support creates strong futures. Keep encouraging each other."
    },
    {
      title: "Silent Sacrifices",
      steps: [
        "Your sibling quietly sacrifices things for your happiness.",
        "You slowly start noticing their efforts.",
        "Respect and emotional attachment increase deeply."
      ],
      suggestion: "Love is often shown through sacrifices. Appreciate them openly."
    },
    {
      title: "Lifelong Bond",
      steps: [
        "Time changes many relationships around you.",
        "Your sibling still stays emotionally connected.",
        "Their presence becomes lifelong comfort."
      ],
      suggestion: "Sibling bonds become more valuable with age. Never lose emotional connection."
    }
  ]
};
