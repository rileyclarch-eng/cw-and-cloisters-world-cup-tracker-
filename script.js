const sweepstakeData = {
  lastUpdated: "26 June 2026, 19:20 BST",
  dailyHeadline: "Claire is still the problem, Panama are playing a dead rubber, and Groups G-L are about to turn the sweepstake into a calculator GCSE.",
  featuredUpdate: "Audit fixed: Panama and Jordan can still play their final matches but cannot qualify. Teams only marked Round of 32 are confirmed through; the remaining Group G-L picks stay alive/danger until their final matches settle it.",
  siteLink: "riley-arch.com",
  stageLabels: {
    0: "Eliminated",
    1: "Group stage",
    2: "Round of 32",
    3: "Round of 16",
    4: "Quarter-finals",
    5: "Semi-finals",
    6: "Final",
    7: "Winners"
  },
  teams: {
    Uzbekistan: {
      flag: "🇺🇿",
      status: "danger",
      stage: 1,
      group: "K",
      points: 0,
      goalDifference: -7,
      lastResult: "0-5 v Portugal",
      nextMatch: "v DR Congo",
      nextKickoff: "Sun 28 June · 00:30 BST",
      threatScore: 14,
      formNote: "Took a 5-0 hiding from Portugal after losing to Colombia.",
      riskNote: "Still has a final match, but needs a win and a lot of third-place chaos."
    },
    Switzerland: {
      flag: "🇨🇭",
      status: "alive",
      stage: 2,
      group: "B",
      points: 7,
      goalDifference: 4,
      lastResult: "2-1 v Canada",
      nextMatch: "Round of 32 · opponent TBD",
      nextKickoff: "Thu 2 July · 23:00 BST",
      threatScore: 72,
      formNote: "Won Group B and actually looks like a proper sweepstake asset.",
      riskNote: "Paula has one safely into the knockouts. No prayer candle needed here."
    },
    Japan: {
      flag: "🇯🇵",
      status: "alive",
      stage: 2,
      group: "F",
      points: 5,
      goalDifference: 4,
      lastResult: "1-1 v Sweden",
      nextMatch: "Round of 32 · v Brazil",
      nextKickoff: "Mon 29 June · 18:00 BST",
      threatScore: 70,
      formNote: "Unbeaten in Group F and through as runners-up.",
      riskNote: "Reward for playing well: Brazil. Football is a sick joke."
    },
    Haiti: {
      flag: "🇭🇹",
      status: "eliminated",
      stage: 0,
      group: "C",
      points: 0,
      goalDifference: -6,
      lastResult: "2-4 v Morocco",
      nextMatch: "Eliminated",
      nextKickoff: "Tournament over",
      threatScore: 0,
      formNote: "Out after three defeats.",
      riskNote: "Paula's Haiti pick has gone straight to the sweepstake graveyard."
    },
    "New Zealand": {
      flag: "🇳🇿",
      status: "danger",
      stage: 1,
      group: "G",
      points: 1,
      goalDifference: -2,
      lastResult: "1-3 v Egypt",
      nextMatch: "v Belgium",
      nextKickoff: "Sat 27 June · 04:00 BST",
      threatScore: 20,
      formNote: "Still technically alive before the Belgium game.",
      riskNote: "Needs something very silly to happen. Luckily, silly is available at this tournament."
    },
    USA: {
      flag: "🇺🇸",
      status: "alive",
      stage: 2,
      group: "D",
      points: 6,
      goalDifference: 4,
      lastResult: "2-3 v Türkiye",
      nextMatch: "Round of 32 · v Bosnia and Herzegovina",
      nextKickoff: "Thu 2 July · 01:00 BST",
      threatScore: 76,
      formNote: "Lost the final group game but still won Group D.",
      riskNote: "Riley can call it rotation and pretend it was always calm."
    },
    Australia: {
      flag: "🇦🇺",
      status: "alive",
      stage: 2,
      group: "D",
      points: 4,
      goalDifference: 0,
      lastResult: "0-0 v Paraguay",
      nextMatch: "Round of 32 · v Group G runner-up",
      nextKickoff: "Fri 3 July · 19:00 BST",
      threatScore: 64,
      formNote: "Qualified with a 0-0 that nobody will be making a documentary about.",
      riskNote: "Ugly football, beautiful sweepstake points."
    },
    Austria: {
      flag: "🇦🇹",
      status: "alive",
      stage: 1,
      group: "J",
      points: 3,
      goalDifference: 0,
      lastResult: "0-2 v Argentina",
      nextMatch: "v Algeria",
      nextKickoff: "Sun 28 June · 03:00 BST",
      threatScore: 55,
      formNote: "Beat Jordan, lost to Argentina, now Algeria decides the mood.",
      riskNote: "Can qualify with the right result, but Riley does not get peace yet."
    },
    Scotland: {
      flag: "🏴",
      status: "danger",
      stage: 1,
      group: "C",
      points: 3,
      goalDifference: -3,
      lastResult: "0-3 v Brazil",
      nextMatch: "Waiting on third-place table",
      nextKickoff: "Group stage complete",
      threatScore: 18,
      formNote: "Beat Haiti, then Morocco and Brazil ruined the vibes.",
      riskNote: "Not officially buried on this board, but it is very Scotland-coded suffering."
    },
    Iraq: {
      flag: "🇮🇶",
      status: "danger",
      stage: 1,
      group: "I",
      points: 0,
      goalDifference: -6,
      lastResult: "0-3 v France",
      nextMatch: "v Senegal",
      nextKickoff: "Fri 26 June · 20:00 BST",
      threatScore: 10,
      formNote: "Two defeats, six goal difference damage.",
      riskNote: "Needs a win and even then it is not guaranteed. Riley is watching through his fingers."
    },
    France: {
      flag: "🇫🇷",
      status: "alive",
      stage: 2,
      group: "I",
      points: 6,
      goalDifference: 5,
      lastResult: "3-0 v Iraq",
      nextMatch: "v Norway",
      nextKickoff: "Fri 26 June · 20:00 BST",
      threatScore: 84,
      formNote: "Already through after two wins.",
      riskNote: "Norway decides the group winner, but Camilla already has knockout security."
    },
    Ghana: {
      flag: "🇬🇭",
      status: "alive",
      stage: 1,
      group: "L",
      points: 4,
      goalDifference: 1,
      lastResult: "0-0 v England",
      nextMatch: "v Croatia",
      nextKickoff: "Sat 27 June · 22:00 BST",
      threatScore: 58,
      formNote: "Beat Panama and held England.",
      riskNote: "Win or draw should do the job. Lose and it becomes third-place calculator nonsense."
    },
    "Bosnia and Herzegovina": {
      flag: "🇧🇦",
      status: "alive",
      stage: 2,
      group: "B",
      points: 4,
      goalDifference: -1,
      lastResult: "3-1 v Qatar",
      nextMatch: "Round of 32 · v USA",
      nextKickoff: "Thu 2 July · 01:00 BST",
      threatScore: 52,
      formNote: "Qualified from third place.",
      riskNote: "Camilla gets a knockout bonus team and Riley gets an awkward USA opponent."
    },
    "Ivory Coast": {
      flag: "🇨🇮",
      status: "alive",
      stage: 2,
      group: "E",
      points: 6,
      goalDifference: 2,
      lastResult: "2-0 v Curaçao",
      nextMatch: "Round of 32 · v Group I runner-up",
      nextKickoff: "Tue 30 June · 18:00 BST",
      threatScore: 68,
      formNote: "Qualified second in Group E after beating Curaçao.",
      riskNote: "Camilla's draw has proper teeth now."
    },
    "Cape Verde": {
      flag: "🇨🇻",
      status: "danger",
      stage: 1,
      group: "H",
      points: 2,
      goalDifference: 0,
      lastResult: "2-2 v Uruguay",
      nextMatch: "v Saudi Arabia",
      nextKickoff: "Sat 27 June · 01:00 BST",
      threatScore: 46,
      formNote: "Drew with Spain and Uruguay. Elite nuisance behaviour.",
      riskNote: "Saudi Arabia decides whether the fairytale lives or gets escorted out."
    },
    Algeria: {
      flag: "🇩🇿",
      status: "alive",
      stage: 1,
      group: "J",
      points: 3,
      goalDifference: -2,
      lastResult: "2-1 v Jordan",
      nextMatch: "v Austria",
      nextKickoff: "Sun 28 June · 03:00 BST",
      threatScore: 42,
      formNote: "Recovered from the Argentina loss by beating Jordan.",
      riskNote: "David needs Algeria to handle Austria and turn this into something useful."
    },
    Brazil: {
      flag: "🇧🇷",
      status: "alive",
      stage: 2,
      group: "C",
      points: 7,
      goalDifference: 6,
      lastResult: "3-0 v Scotland",
      nextMatch: "Round of 32 · v Japan",
      nextKickoff: "Mon 29 June · 18:00 BST",
      threatScore: 86,
      formNote: "Won Group C and looked scary doing it.",
      riskNote: "David having Brazil is annoying because it is working."
    },
    Norway: {
      flag: "🇳🇴",
      status: "alive",
      stage: 2,
      group: "I",
      points: 6,
      goalDifference: 4,
      lastResult: "3-2 v Senegal",
      nextMatch: "v France",
      nextKickoff: "Fri 26 June · 20:00 BST",
      threatScore: 77,
      formNote: "Already through after wins over Iraq and Senegal.",
      riskNote: "France decides if this becomes a proper dark horse or just a strong second-place draw."
    },
    Panama: {
      flag: "🇵🇦",
      status: "eliminated",
      stage: 0,
      group: "L",
      points: 0,
      goalDifference: -2,
      lastResult: "0-1 v Croatia",
      nextMatch: "v England",
      nextKickoff: "Sat 27 June · 22:00 BST",
      threatScore: 0,
      formNote: "Still plays England, but it is a dead rubber for Panama.",
      riskNote: "Important fix: playing Saturday does not mean alive. Panama cannot qualify now."
    },
    Canada: {
      flag: "🇨🇦",
      status: "alive",
      stage: 2,
      group: "B",
      points: 4,
      goalDifference: 5,
      lastResult: "1-2 v Switzerland",
      nextMatch: "Round of 32 · v South Africa",
      nextKickoff: "Sun 28 June · 20:00 BST",
      threatScore: 62,
      formNote: "Through as Group B runners-up.",
      riskNote: "David quietly has a solid extra weapon here."
    },
    Jordan: {
      flag: "🇯🇴",
      status: "eliminated",
      stage: 0,
      group: "J",
      points: 0,
      goalDifference: -3,
      lastResult: "1-2 v Algeria",
      nextMatch: "v Argentina",
      nextKickoff: "Sun 28 June · 03:00 BST",
      threatScore: 0,
      formNote: "Still has Argentina to play, but is already eliminated.",
      riskNote: "Helena's Jordan pick is now a farewell tour against the worst possible opponent."
    },
    Tunisia: {
      flag: "🇹🇳",
      status: "eliminated",
      stage: 0,
      group: "F",
      points: 0,
      goalDifference: -10,
      lastResult: "1-3 v Netherlands",
      nextMatch: "Eliminated",
      nextKickoff: "Tournament over",
      threatScore: 0,
      formNote: "Bottom of Group F after three defeats.",
      riskNote: "Conceded 12. That is not a campaign, that is a workplace incident."
    },
    Sweden: {
      flag: "🇸🇪",
      status: "alive",
      stage: 2,
      group: "F",
      points: 4,
      goalDifference: 0,
      lastResult: "1-1 v Japan",
      nextMatch: "Round of 32 · opponent TBD",
      nextKickoff: "TBD",
      threatScore: 60,
      formNote: "Qualified as one of the best third-place teams.",
      riskNote: "Helena needed this after Tunisia and Jordan disappeared."
    },
    Netherlands: {
      flag: "🇳🇱",
      status: "alive",
      stage: 2,
      group: "F",
      points: 7,
      goalDifference: 6,
      lastResult: "3-1 v Tunisia",
      nextMatch: "Round of 32 · v Morocco",
      nextKickoff: "Tue 30 June · 02:00 BST",
      threatScore: 79,
      formNote: "Won Group F and scored plenty.",
      riskNote: "Helena's best real chance now."
    },
    "Saudi Arabia": {
      flag: "🇸🇦",
      status: "danger",
      stage: 1,
      group: "H",
      points: 1,
      goalDifference: -4,
      lastResult: "0-4 v Spain",
      nextMatch: "v Cape Verde",
      nextKickoff: "Sat 27 June · 01:00 BST",
      threatScore: 22,
      formNote: "Spain gave them a heavy one.",
      riskNote: "Needs to beat Cape Verde and probably still needs the calculator to be friendly."
    },
    Colombia: {
      flag: "🇨🇴",
      status: "alive",
      stage: 2,
      group: "K",
      points: 6,
      goalDifference: 3,
      lastResult: "1-0 v DR Congo",
      nextMatch: "v Portugal",
      nextKickoff: "Sun 28 June · 00:30 BST",
      threatScore: 70,
      formNote: "Already advanced after wins over Uzbekistan and DR Congo.",
      riskNote: "Claire owns both sides of the Portugal game, which is deeply unfair."
    },
    Portugal: {
      flag: "🇵🇹",
      status: "alive",
      stage: 1,
      group: "K",
      points: 4,
      goalDifference: 5,
      lastResult: "5-0 v Uzbekistan",
      nextMatch: "v Colombia",
      nextKickoff: "Sun 28 June · 00:30 BST",
      threatScore: 78,
      formNote: "Ronaldo brace, five goals, huge goal difference boost.",
      riskNote: "Very likely fine, but on this page they stay group-stage until the final match confirms it."
    },
    Spain: {
      flag: "🇪🇸",
      status: "alive",
      stage: 1,
      group: "H",
      points: 4,
      goalDifference: 4,
      lastResult: "4-0 v Saudi Arabia",
      nextMatch: "v Uruguay",
      nextKickoff: "Sat 27 June · 01:00 BST",
      threatScore: 76,
      formNote: "Recovered from the Cape Verde 0-0 by battering Saudi Arabia.",
      riskNote: "Still needs the group wrapped properly before getting Round of 32 status."
    },
    Ecuador: {
      flag: "🇪🇨",
      status: "alive",
      stage: 2,
      group: "E",
      points: 4,
      goalDifference: 0,
      lastResult: "2-1 v Germany",
      nextMatch: "Round of 32 · opponent TBD",
      nextKickoff: "TBD",
      threatScore: 55,
      formNote: "Beat Germany and qualified as a best third-place team.",
      riskNote: "Claire somehow even got the bonus-team route working."
    },
    Mexico: {
      flag: "🇲🇽",
      status: "alive",
      stage: 2,
      group: "A",
      points: 9,
      goalDifference: 6,
      lastResult: "3-0 v Czechia",
      nextMatch: "Round of 32 · opponent TBD",
      nextKickoff: "Wed 1 July · 02:00 BST",
      threatScore: 75,
      formNote: "Perfect group stage: three wins, zero goals conceded.",
      riskNote: "Claire having Mexico as well should be reported to the sweepstake authorities."
    }
  },
  players: [
    { name: "Paula", teams: ["Uzbekistan", "Switzerland", "Japan", "Haiti", "New Zealand"] },
    { name: "Riley", teams: ["USA", "Australia", "Austria", "Scotland", "Iraq"] },
    { name: "Camilla", teams: ["France", "Ghana", "Bosnia and Herzegovina", "Ivory Coast", "Cape Verde"] },
    { name: "David", teams: ["Algeria", "Brazil", "Norway", "Panama", "Canada"] },
    { name: "Helena", teams: ["Jordan", "Tunisia", "Sweden", "Netherlands", "Saudi Arabia"] },
    { name: "Claire", teams: ["Colombia", "Portugal", "Spain", "Ecuador", "Mexico"] }
  ],
  playerNeeds: {
    Claire: "Claire is still the villain: Mexico, Colombia and Ecuador are confirmed through, Portugal and Spain are in strong positions, and everyone else needs HR involved.",
    David: "David has Brazil, Norway and Canada safely through, Algeria still has Austria, and Panama is dead even though they still play England.",
    Riley: "Riley has USA and Australia through, Austria can still qualify, Scotland is on third-place life support, and Iraq needs a miracle against Senegal.",
    Paula: "Paula has Switzerland and Japan through, Haiti is gone, while New Zealand and Uzbekistan need very weird things to happen.",
    Helena: "Helena is basically Netherlands and Sweden carrying the shopping while Jordan and Tunisia sit in the airport. Saudi Arabia must beat Cape Verde to make noise.",
    Camilla: "Camilla is in a strong chasing spot with France, Bosnia and Ivory Coast through, while Ghana and Cape Verde can still make the draw properly horrible."
  },
  todaysNotes: [
    "Correction note: Panama are still scheduled to play England on Saturday, but they are already eliminated. It is a dead rubber for Panama, not a live survival match.",
    "Confirmed Round of 32 sweepstake teams now include Switzerland, Japan, USA, Australia, France, Bosnia and Herzegovina, Ivory Coast, Brazil, Norway, Canada, Sweden, Netherlands, Colombia, Ecuador and Mexico.",
    "Claire is still the current problem because Mexico, Colombia and Ecuador are through, while Portugal and Spain are both in strong final-match positions.",
    "Camilla is chasing well with France, Bosnia and Ivory Coast already through, plus Ghana and Cape Verde still alive.",
    "Riley has USA and Australia through, but Scotland and Iraq are stress-ball teams now.",
    "David has Brazil, Norway and Canada through, but Panama is out and Algeria still has a direct scrap with Austria.",
    "Helena has Netherlands and Sweden through, but Jordan and Tunisia are gone, so Saudi Arabia needs Cape Verde handled."
  ],
  upcomingDangerMatches: [
    {
      home: "France",
      away: "Norway",
      kickoff: "Fri 26 June · 20:00 BST",
      owners: "Camilla has France. David has Norway.",
      badges: ["staff v staff", "favourite watch"],
      impact: "Both are through, but this decides who wins Group I and who gets the cleaner knockout route."
    },
    {
      home: "Senegal",
      away: "Iraq",
      kickoff: "Fri 26 June · 20:00 BST",
      owners: "Riley has Iraq.",
      badges: ["high risk", "stress watch"],
      impact: "Iraq need a win and help. This is less football match, more emergency appointment."
    },
    {
      home: "Uruguay",
      away: "Spain",
      kickoff: "Sat 27 June · 01:00 BST",
      owners: "Claire has Spain.",
      badges: ["favourite watch", "high risk"],
      impact: "Spain are in a good position, but the page will not call them through until the job is actually done."
    },
    {
      home: "Cape Verde",
      away: "Saudi Arabia",
      kickoff: "Sat 27 June · 01:00 BST",
      owners: "Camilla has Cape Verde. Helena has Saudi Arabia.",
      badges: ["staff v staff", "high risk"],
      impact: "One of the best chaos matches left. Cape Verde can keep the fairytale going, Saudi Arabia can drag Helena back into it."
    },
    {
      home: "New Zealand",
      away: "Belgium",
      kickoff: "Sat 27 June · 04:00 BST",
      owners: "Paula has New Zealand.",
      badges: ["high risk", "stress watch"],
      impact: "Paula needs New Zealand to do something objectively unreasonable."
    },
    {
      home: "Panama",
      away: "England",
      kickoff: "Sat 27 June · 22:00 BST",
      owners: "David has Panama.",
      badges: ["stress watch"],
      impact: "Panama are already eliminated, but still play England. This is a dead rubber for David's sweepstake, not a qualification chance."
    },
    {
      home: "Croatia",
      away: "Ghana",
      kickoff: "Sat 27 June · 22:00 BST",
      owners: "Camilla has Ghana.",
      badges: ["high risk"],
      impact: "Ghana can qualify with control. Lose, and Camilla is dragged into third-place table nonsense."
    },
    {
      home: "Colombia",
      away: "Portugal",
      kickoff: "Sun 28 June · 00:30 BST",
      owners: "Claire has both teams.",
      badges: ["favourite watch", "stress watch"],
      impact: "Claire owns both, so this is basically her flexing while everyone else suffers."
    },
    {
      home: "DR Congo",
      away: "Uzbekistan",
      kickoff: "Sun 28 June · 00:30 BST",
      owners: "Paula has Uzbekistan.",
      badges: ["high risk"],
      impact: "Uzbekistan need a win and a very friendly third-place table."
    },
    {
      home: "Jordan",
      away: "Argentina",
      kickoff: "Sun 28 June · 03:00 BST",
      owners: "Helena has Jordan.",
      badges: ["stress watch"],
      impact: "Jordan are already eliminated. They still play Argentina, because apparently the tournament wanted one last bit of pain."
    },
    {
      home: "Algeria",
      away: "Austria",
      kickoff: "Sun 28 June · 03:00 BST",
      owners: "David has Algeria. Riley has Austria.",
      badges: ["staff v staff", "high risk", "stress watch"],
      impact: "A direct David v Riley scrap. Austria can move safely, Algeria can flip David's draw back into life."
    }
  ],
  recentResults: [
    {
      home: "Switzerland",
      away: "Canada",
      score: "2-1",
      date: "24 June",
      owners: "Paula had Switzerland. David had Canada."
    },
    {
      home: "Bosnia and Herzegovina",
      away: "Qatar",
      score: "3-1",
      date: "24 June",
      owners: "Camilla had Bosnia and Herzegovina."
    },
    {
      home: "Scotland",
      away: "Brazil",
      score: "0-3",
      date: "24 June",
      owners: "Riley had Scotland. David had Brazil."
    },
    {
      home: "Morocco",
      away: "Haiti",
      score: "4-2",
      date: "24 June",
      owners: "Paula had Haiti."
    },
    {
      home: "Mexico",
      away: "Czechia",
      score: "3-0",
      date: "25 June",
      owners: "Claire had Mexico."
    },
    {
      home: "Ecuador",
      away: "Germany",
      score: "2-1",
      date: "25 June",
      owners: "Claire had Ecuador."
    },
    {
      home: "Curaçao",
      away: "Ivory Coast",
      score: "0-2",
      date: "25 June",
      owners: "Camilla had Ivory Coast."
    },
    {
      home: "Tunisia",
      away: "Netherlands",
      score: "1-3",
      date: "26 June",
      owners: "Helena had both teams."
    },
    {
      home: "Japan",
      away: "Sweden",
      score: "1-1",
      date: "26 June",
      owners: "Paula had Japan. Helena had Sweden."
    },
    {
      home: "Türkiye",
      away: "USA",
      score: "3-2",
      date: "26 June",
      owners: "Riley had USA."
    },
    {
      home: "Paraguay",
      away: "Australia",
      score: "0-0",
      date: "26 June",
      owners: "Riley had Australia."
    },
    {
      home: "England",
      away: "Ghana",
      score: "0-0",
      date: "23 June",
      owners: "Camilla had Ghana."
    },
    {
      home: "Panama",
      away: "Croatia",
      score: "0-1",
      date: "23 June",
      owners: "David had Panama."
    },
    {
      home: "Colombia",
      away: "DR Congo",
      score: "1-0",
      date: "23 June",
      owners: "Claire had Colombia."
    },
    {
      home: "Portugal",
      away: "Uzbekistan",
      score: "5-0",
      date: "23 June",
      owners: "Claire had Portugal. Paula had Uzbekistan."
    },
    {
      home: "Jordan",
      away: "Algeria",
      score: "1-2",
      date: "22 June",
      owners: "Helena had Jordan. David had Algeria."
    },
    {
      home: "Argentina",
      away: "Austria",
      score: "2-0",
      date: "22 June",
      owners: "Riley had Austria."
    },
    {
      home: "France",
      away: "Iraq",
      score: "3-0",
      date: "22 June",
      owners: "Camilla had France. Riley had Iraq."
    },
    {
      home: "Norway",
      away: "Senegal",
      score: "3-2",
      date: "22 June",
      owners: "David had Norway."
    },
    {
      home: "Spain",
      away: "Saudi Arabia",
      score: "4-0",
      date: "21 June",
      owners: "Claire had Spain. Helena had Saudi Arabia."
    },
    {
      home: "Uruguay",
      away: "Cape Verde",
      score: "2-2",
      date: "21 June",
      owners: "Camilla had Cape Verde."
    }
  ],
  banter: [
    "Correction board: Panama are playing England, yes. Panama are alive, no. Dead rubber. Funeral with studs on.",
    "Claire's draw is still so stacked it needs VAR, HR and probably a safeguarding referral.",
    "Mexico perfect, Colombia through, Ecuador through, Portugal loud, Spain recovering. Claire is not playing sweepstake, she is asset stripping.",
    "Riley has USA and Australia through, but Scotland and Iraq are giving strong 'phone on 1%' energy.",
    "Camilla's Cape Verde pick has gone from joke team to genuine pest. Pure fly-in-the-kitchen football.",
    "David's Brazil pick is doing Brazil things, which is boring, predictable and unfortunately effective.",
    "Paula losing Haiti hurts, but Switzerland and Japan have kept the ship very much afloat.",
    "Helena has Netherlands and Sweden doing the heavy lifting while Jordan and Tunisia are already checking airport meal deals.",
    "Uzbekistan can still technically do something, in the same way I can technically win the lottery if I buy a ticket and become blessed by the spreadsheet gods.",
    "Australia qualifying with a 0-0 is disgusting football but elite sweepstake terrorism."
  ]
};
