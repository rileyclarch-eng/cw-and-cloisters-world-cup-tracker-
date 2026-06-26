/* ==========================================================================
   EASY EDIT AREA
   Update dates, notes, matches and team statuses here. The page recalculates
   the leaderboard automatically.
   Status options:
   - alive: still in the tournament
   - danger: still alive, but in a risky match or situation
   - eliminated: out of the tournament
   Stage score controls the survival ranking. Bigger number = further along.
   ========================================================================== */

const sweepstakeData = {
  "lastUpdated": "26 June 2026, 17:30 BST",
  "dailyHeadline": "Claire has built a small football empire, Camilla and David are chasing hard, and Riley is somehow both flying and suffering at the same time.",
  "featuredUpdate": "Groups A-F have now changed the sweepstake properly: several teams are already in the Round of 32, a few are dead, and the remaining group-stage picks are fighting through the final chaos of Groups G-L.",
  "siteLink": "riley-arch.com",
  "stageLabels": {
    "0": "Eliminated",
    "1": "Group stage",
    "2": "Round of 32",
    "3": "Round of 16",
    "4": "Quarter-finals",
    "5": "Semi-finals",
    "6": "Final",
    "7": "Winners"
  },
  "teams": {
    "Uzbekistan": {
      "flag": "🇺🇿",
      "status": "danger",
      "stage": 1,
      "group": "K",
      "points": 0,
      "goalDifference": -7,
      "lastResult": "0-5 v Portugal",
      "nextMatch": "v DR Congo",
      "nextKickoff": "Sun 28 June · 00:30 BST",
      "threatScore": 8,
      "formNote": "Portugal absolutely folded them 5-0.",
      "riskNote": "Technically still breathing, but it is more life-support machine than football team."
    },
    "Switzerland": {
      "flag": "🇨🇭",
      "status": "alive",
      "stage": 2,
      "group": "B",
      "points": 7,
      "goalDifference": 4,
      "lastResult": "2-1 v Canada",
      "nextMatch": "Round of 32 · opponent TBD",
      "nextKickoff": "TBD",
      "threatScore": 72,
      "formNote": "Won Group B and did it properly.",
      "riskNote": "Paula has an actual knockout team here, not just hope and vibes."
    },
    "Japan": {
      "flag": "🇯🇵",
      "status": "alive",
      "stage": 2,
      "group": "F",
      "points": 5,
      "goalDifference": 4,
      "lastResult": "1-1 v Sweden",
      "nextMatch": "Round of 32 · v Brazil",
      "nextKickoff": "Mon 29 June · TBC",
      "threatScore": 70,
      "formNote": "Unbeaten and through as Group F runners-up.",
      "riskNote": "The reward is Brazil, because apparently happiness was not allowed."
    },
    "Haiti": {
      "flag": "🇭🇹",
      "status": "eliminated",
      "stage": 0,
      "group": "C",
      "points": 0,
      "goalDifference": -6,
      "lastResult": "2-4 v Morocco",
      "nextMatch": "Eliminated",
      "nextKickoff": "Tournament over",
      "threatScore": 0,
      "formNote": "Out after three defeats.",
      "riskNote": "Paula's Haiti pick has been sent to the sweepstake graveyard."
    },
    "New Zealand": {
      "flag": "🇳🇿",
      "status": "danger",
      "stage": 1,
      "group": "G",
      "points": 1,
      "goalDifference": -2,
      "lastResult": "1-3 v Egypt",
      "nextMatch": "v Belgium",
      "nextKickoff": "Sat 27 June · 04:00 BST",
      "threatScore": 20,
      "formNote": "Still alive, but only because the door has not fully shut yet.",
      "riskNote": "Needs a Belgium upset and other results to stop becoming another graveyard name."
    },
    "USA": {
      "flag": "🇺🇸",
      "status": "alive",
      "stage": 2,
      "group": "D",
      "points": 6,
      "goalDifference": 4,
      "lastResult": "2-3 v Türkiye",
      "nextMatch": "Round of 32 · v Bosnia and Herzegovina",
      "nextKickoff": "Wed 1 July · TBC",
      "threatScore": 76,
      "formNote": "Lost the last group game but still won Group D.",
      "riskNote": "Riley can call it squad rotation instead of a humbling. Very convenient."
    },
    "Australia": {
      "flag": "🇦🇺",
      "status": "alive",
      "stage": 2,
      "group": "D",
      "points": 4,
      "goalDifference": 0,
      "lastResult": "0-0 v Paraguay",
      "nextMatch": "Round of 32 · v Group G runner-up",
      "nextKickoff": "TBD",
      "threatScore": 64,
      "formNote": "A deeply unserious 0-0 was still enough to qualify.",
      "riskNote": "Ugly football, beautiful sweepstake points."
    },
    "Austria": {
      "flag": "🇦🇹",
      "status": "alive",
      "stage": 1,
      "group": "J",
      "points": 3,
      "goalDifference": 0,
      "lastResult": "0-2 v Argentina",
      "nextMatch": "v Algeria",
      "nextKickoff": "Sun 28 June · 03:00 BST",
      "threatScore": 55,
      "formNote": "Beat Jordan, lost to Argentina, now it is a straight scrap.",
      "riskNote": "A draw should be enough for second, but sweepstakes love being stupid."
    },
    "Scotland": {
      "flag": "🏴",
      "status": "danger",
      "stage": 1,
      "group": "C",
      "points": 3,
      "goalDifference": -3,
      "lastResult": "0-3 v Brazil",
      "nextMatch": "Waiting on third-place table",
      "nextKickoff": "Group stage complete",
      "threatScore": 18,
      "formNote": "First win over Haiti, then straight into the wall.",
      "riskNote": "Needs help from other groups. Very Scotland. Very painful."
    },
    "Iraq": {
      "flag": "🇮🇶",
      "status": "danger",
      "stage": 1,
      "group": "I",
      "points": 0,
      "goalDifference": -6,
      "lastResult": "0-3 v France",
      "nextMatch": "v Senegal",
      "nextKickoff": "Fri 26 June · 20:00 BST",
      "threatScore": 10,
      "formNote": "France and Norway have both battered the useful points away.",
      "riskNote": "Riley needs Iraq to produce a miracle, not a performance review."
    },
    "France": {
      "flag": "🇫🇷",
      "status": "alive",
      "stage": 2,
      "group": "I",
      "points": 6,
      "goalDifference": 5,
      "lastResult": "3-0 v Iraq",
      "nextMatch": "v Norway",
      "nextKickoff": "Fri 26 June · 20:00 BST",
      "threatScore": 84,
      "formNote": "Qualified after two wins and looking like a proper favourite.",
      "riskNote": "Norway decides the group winner, but Camilla already has knockout security."
    },
    "Ghana": {
      "flag": "🇬🇭",
      "status": "alive",
      "stage": 1,
      "group": "L",
      "points": 4,
      "goalDifference": 1,
      "lastResult": "0-0 v England",
      "nextMatch": "v Croatia",
      "nextKickoff": "Sat 27 June · 22:00 BST",
      "threatScore": 58,
      "formNote": "Held England and kept another clean sheet.",
      "riskNote": "Croatia decides whether Ghana becomes a real Camilla weapon or a stress headache."
    },
    "Bosnia and Herzegovina": {
      "flag": "🇧🇦",
      "status": "alive",
      "stage": 2,
      "group": "B",
      "points": 4,
      "goalDifference": -1,
      "lastResult": "3-1 v Qatar",
      "nextMatch": "Round of 32 · v USA",
      "nextKickoff": "Wed 1 July · TBC",
      "threatScore": 52,
      "formNote": "Third place, but through to the knockouts.",
      "riskNote": "Camilla gets a bonus knockout team and Riley gets an awkward USA opponent."
    },
    "Ivory Coast": {
      "flag": "🇨🇮",
      "status": "alive",
      "stage": 2,
      "group": "E",
      "points": 6,
      "goalDifference": 2,
      "lastResult": "2-0 v Curaçao",
      "nextMatch": "Round of 32 · opponent TBD",
      "nextKickoff": "TBD",
      "threatScore": 68,
      "formNote": "Finished second in Group E and got through cleanly.",
      "riskNote": "Camilla's draw is looking far too alive for comfort."
    },
    "Cape Verde": {
      "flag": "🇨🇻",
      "status": "danger",
      "stage": 1,
      "group": "H",
      "points": 2,
      "goalDifference": 0,
      "lastResult": "2-2 v Uruguay",
      "nextMatch": "v Saudi Arabia",
      "nextKickoff": "Sat 27 June · 01:00 BST",
      "threatScore": 46,
      "formNote": "Drew with Spain, then drew with Uruguay. Pure nuisance behaviour.",
      "riskNote": "Can still qualify, but Saudi Arabia is now a proper trap door."
    },
    "Algeria": {
      "flag": "🇩🇿",
      "status": "danger",
      "stage": 1,
      "group": "J",
      "points": 3,
      "goalDifference": -2,
      "lastResult": "2-1 v Jordan",
      "nextMatch": "v Austria",
      "nextKickoff": "Sun 28 June · 03:00 BST",
      "threatScore": 42,
      "formNote": "Recovered from the Argentina punch with a win over Jordan.",
      "riskNote": "Needs Austria handled or it becomes third-place calculator nonsense."
    },
    "Brazil": {
      "flag": "🇧🇷",
      "status": "alive",
      "stage": 2,
      "group": "C",
      "points": 7,
      "goalDifference": 6,
      "lastResult": "3-0 v Scotland",
      "nextMatch": "Round of 32 · v Japan",
      "nextKickoff": "Mon 29 June · TBC",
      "threatScore": 86,
      "formNote": "Won Group C and looked scary doing it.",
      "riskNote": "David's Brazil pick is exactly as annoying as expected."
    },
    "Norway": {
      "flag": "🇳🇴",
      "status": "alive",
      "stage": 2,
      "group": "I",
      "points": 6,
      "goalDifference": 4,
      "lastResult": "3-2 v Senegal",
      "nextMatch": "v France",
      "nextKickoff": "Fri 26 June · 20:00 BST",
      "threatScore": 77,
      "formNote": "Haaland dragged them into the knockout rounds.",
      "riskNote": "France decides whether Norway become a dark horse or a very strong second seed."
    },
    "Panama": {
      "flag": "🇵🇦",
      "status": "eliminated",
      "stage": 0,
      "group": "L",
      "points": 0,
      "goalDifference": -2,
      "lastResult": "0-1 v Croatia",
      "nextMatch": "v England",
      "nextKickoff": "Sat 27 June · 22:00 BST",
      "threatScore": 0,
      "formNote": "Two narrow losses, zero points, officially out.",
      "riskNote": "David's Panama pick is now just there to annoy England."
    },
    "Canada": {
      "flag": "🇨🇦",
      "status": "alive",
      "stage": 2,
      "group": "B",
      "points": 4,
      "goalDifference": 5,
      "lastResult": "1-2 v Switzerland",
      "nextMatch": "Round of 32 · v South Africa",
      "nextKickoff": "Sun 28 June · TBC",
      "threatScore": 62,
      "formNote": "Runner-up in Group B and into the knockouts.",
      "riskNote": "David quietly has a very solid second/third weapon here."
    },
    "Jordan": {
      "flag": "🇯🇴",
      "status": "eliminated",
      "stage": 0,
      "group": "J",
      "points": 0,
      "goalDifference": -3,
      "lastResult": "1-2 v Algeria",
      "nextMatch": "v Argentina",
      "nextKickoff": "Sun 28 June · 03:00 BST",
      "threatScore": 0,
      "formNote": "Eliminated after losing to Austria and Algeria.",
      "riskNote": "Helena's Jordan pick is now a farewell tour with Messi."
    },
    "Tunisia": {
      "flag": "🇹🇳",
      "status": "eliminated",
      "stage": 0,
      "group": "F",
      "points": 0,
      "goalDifference": -10,
      "lastResult": "1-3 v Netherlands",
      "nextMatch": "Eliminated",
      "nextKickoff": "Tournament over",
      "threatScore": 0,
      "formNote": "Bottom of Group F after three defeats.",
      "riskNote": "Conceded 12 goals. That is not a sweepstake pick, that is a public incident."
    },
    "Sweden": {
      "flag": "🇸🇪",
      "status": "alive",
      "stage": 2,
      "group": "F",
      "points": 4,
      "goalDifference": 0,
      "lastResult": "1-1 v Japan",
      "nextMatch": "Round of 32 · opponent TBD",
      "nextKickoff": "TBD",
      "threatScore": 60,
      "formNote": "Qualified as one of the best third-place teams.",
      "riskNote": "Helena gets a knockout save after Tunisia and Jordan went missing."
    },
    "Netherlands": {
      "flag": "🇳🇱",
      "status": "alive",
      "stage": 2,
      "group": "F",
      "points": 7,
      "goalDifference": 6,
      "lastResult": "3-1 v Tunisia",
      "nextMatch": "Round of 32 · v Morocco",
      "nextKickoff": "Mon 29 June · TBC",
      "threatScore": 79,
      "formNote": "Won Group F and scored plenty doing it.",
      "riskNote": "Helena's best proper threat now."
    },
    "Saudi Arabia": {
      "flag": "🇸🇦",
      "status": "danger",
      "stage": 1,
      "group": "H",
      "points": 1,
      "goalDifference": -4,
      "lastResult": "0-4 v Spain",
      "nextMatch": "v Cape Verde",
      "nextKickoff": "Sat 27 June · 01:00 BST",
      "threatScore": 22,
      "formNote": "Spain gave them a very rude reality check.",
      "riskNote": "Needs Cape Verde beaten and probably still needs the calculator to be kind."
    },
    "Colombia": {
      "flag": "🇨🇴",
      "status": "alive",
      "stage": 2,
      "group": "K",
      "points": 6,
      "goalDifference": 3,
      "lastResult": "1-0 v DR Congo",
      "nextMatch": "v Portugal",
      "nextKickoff": "Sun 28 June · 00:30 BST",
      "threatScore": 70,
      "formNote": "Qualified after beating Uzbekistan and DR Congo.",
      "riskNote": "Claire owns both sides of the Portugal match, because apparently that was allowed."
    },
    "Portugal": {
      "flag": "🇵🇹",
      "status": "alive",
      "stage": 2,
      "group": "K",
      "points": 4,
      "goalDifference": 5,
      "lastResult": "5-0 v Uzbekistan",
      "nextMatch": "v Colombia",
      "nextKickoff": "Sun 28 June · 00:30 BST",
      "threatScore": 78,
      "formNote": "Ronaldo brace, five goals, qualified. Subtle as a fire alarm.",
      "riskNote": "Claire's draw somehow got even more annoying."
    },
    "Spain": {
      "flag": "🇪🇸",
      "status": "alive",
      "stage": 1,
      "group": "H",
      "points": 4,
      "goalDifference": 4,
      "lastResult": "4-0 v Saudi Arabia",
      "nextMatch": "v Uruguay",
      "nextKickoff": "Sat 27 June · 01:00 BST",
      "threatScore": 76,
      "formNote": "Recovered from the Cape Verde 0-0 by flattening Saudi Arabia.",
      "riskNote": "Still needs the final job done, but this looks far less funny than it did last week."
    },
    "Ecuador": {
      "flag": "🇪🇨",
      "status": "alive",
      "stage": 2,
      "group": "E",
      "points": 4,
      "goalDifference": 0,
      "lastResult": "2-1 v Germany",
      "nextMatch": "Round of 32 · opponent TBD",
      "nextKickoff": "TBD",
      "threatScore": 55,
      "formNote": "Stunned Germany and nicked a third-place knockout spot.",
      "riskNote": "Claire now has even the 'maybe' team through. Disgusting behaviour."
    },
    "Mexico": {
      "flag": "🇲🇽",
      "status": "alive",
      "stage": 2,
      "group": "A",
      "points": 9,
      "goalDifference": 6,
      "lastResult": "3-0 v Czechia",
      "nextMatch": "Round of 32 · opponent TBD",
      "nextKickoff": "Tue 30 June · TBC",
      "threatScore": 75,
      "formNote": "Perfect group stage: three wins, zero goals conceded.",
      "riskNote": "Claire having Mexico as well is why sweepstakes need regulation."
    }
  },
  "players": [
    {
      "name": "Paula",
      "teams": [
        "Uzbekistan",
        "Switzerland",
        "Japan",
        "Haiti",
        "New Zealand"
      ]
    },
    {
      "name": "Riley",
      "teams": [
        "USA",
        "Australia",
        "Austria",
        "Scotland",
        "Iraq"
      ]
    },
    {
      "name": "Camilla",
      "teams": [
        "France",
        "Ghana",
        "Bosnia and Herzegovina",
        "Ivory Coast",
        "Cape Verde"
      ]
    },
    {
      "name": "David",
      "teams": [
        "Algeria",
        "Brazil",
        "Norway",
        "Panama",
        "Canada"
      ]
    },
    {
      "name": "Helena",
      "teams": [
        "Jordan",
        "Tunisia",
        "Sweden",
        "Netherlands",
        "Saudi Arabia"
      ]
    },
    {
      "name": "Claire",
      "teams": [
        "Colombia",
        "Portugal",
        "Spain",
        "Ecuador",
        "Mexico"
      ]
    }
  ],
  "playerNeeds": {
    "Claire": "Claire mainly needs everyone else to stop noticing how unfair this draw is: Mexico, Colombia, Portugal and Ecuador are already through, with Spain still live.",
    "David": "David has Brazil, Norway and Canada through, but Algeria needs to handle Austria because Panama is already in the bin.",
    "Riley": "Riley has USA and Australia safely through, but Austria still has work to do while Scotland and Iraq are basically clinging to the edge of a cliff.",
    "Paula": "Paula has Switzerland and Japan through, but Haiti is gone and New Zealand plus Uzbekistan need miracle-tier nonsense.",
    "Helena": "Helena needs Netherlands and Sweden to carry the whole draw, because Jordan and Tunisia have already packed their suitcases.",
    "Camilla": "Camilla is in a strong chasing position with France, Bosnia and Ivory Coast through, while Ghana and Cape Verde can still make this disgusting for everyone."
  },
  "todaysNotes": [
    "Claire is the current problem: Mexico, Colombia, Portugal and Ecuador are already into the Round of 32, with Spain still in control of Group H.",
    "Camilla has three confirmed knockout teams too: France, Bosnia and Herzegovina, and Ivory Coast. Ghana and Cape Verde are still live.",
    "Riley has USA as Group D winners and Australia through as runners-up, but Scotland and Iraq are deep in calculator/prayer territory.",
    "David has Brazil, Norway and Canada through, although Panama is officially buried and Algeria still has Austria to deal with.",
    "Paula's Switzerland and Japan are through, Haiti is out, and New Zealand/Uzbekistan now need proper end-of-tournament chaos.",
    "Helena has Netherlands and Sweden through, but Jordan and Tunisia are gone, so Saudi Arabia needs to actually do something against Cape Verde."
  ],
  "upcomingDangerMatches": [
    {
      "home": "France",
      "away": "Norway",
      "kickoff": "Fri 26 June · 20:00 BST",
      "owners": "Camilla has France. David has Norway.",
      "badges": [
        "staff v staff",
        "favourite watch"
      ],
      "impact": "Both are already through, but this decides the Group I winner and who gets the nicer knockout road."
    },
    {
      "home": "Senegal",
      "away": "Iraq",
      "kickoff": "Fri 26 June · 20:00 BST",
      "owners": "Riley has Iraq.",
      "badges": [
        "high risk",
        "stress watch"
      ],
      "impact": "Iraq needs a win just to have a tiny third-place argument. This is Riley watching through one eye."
    },
    {
      "home": "Cape Verde",
      "away": "Saudi Arabia",
      "kickoff": "Sat 27 June · 01:00 BST",
      "owners": "Camilla has Cape Verde. Helena has Saudi Arabia.",
      "badges": [
        "staff v staff",
        "high risk"
      ],
      "impact": "A proper chaos match. Cape Verde can keep the fairytale alive, while Saudi Arabia can drag Helena back from the graveyard."
    },
    {
      "home": "Uruguay",
      "away": "Spain",
      "kickoff": "Sat 27 June · 01:00 BST",
      "owners": "Claire has Spain.",
      "badges": [
        "favourite watch",
        "high risk"
      ],
      "impact": "Spain should be fine, but a wobble here would make Claire's stupidly strong draw slightly less evil."
    },
    {
      "home": "New Zealand",
      "away": "Belgium",
      "kickoff": "Sat 27 June · 04:00 BST",
      "owners": "Paula has New Zealand.",
      "badges": [
        "high risk",
        "stress watch"
      ],
      "impact": "Paula needs New Zealand to do something outrageous. Not good. Very funny though."
    },
    {
      "home": "Croatia",
      "away": "Ghana",
      "kickoff": "Sat 27 June · 22:00 BST",
      "owners": "Camilla has Ghana.",
      "badges": [
        "high risk"
      ],
      "impact": "Ghana can become a very useful Camilla piece, but Croatia are exactly the sort of team that ruins a nice spreadsheet."
    },
    {
      "home": "Colombia",
      "away": "Portugal",
      "kickoff": "Sun 28 June · 00:30 BST",
      "owners": "Claire has both teams.",
      "badges": [
        "favourite watch",
        "stress watch"
      ],
      "impact": "Claire has both, so this is less stress and more showing off. Horrible behaviour."
    },
    {
      "home": "DR Congo",
      "away": "Uzbekistan",
      "kickoff": "Sun 28 June · 00:30 BST",
      "owners": "Paula has Uzbekistan.",
      "badges": [
        "high risk"
      ],
      "impact": "Uzbekistan need a win and a miracle. The miracle is probably bigger than the win."
    },
    {
      "home": "Algeria",
      "away": "Austria",
      "kickoff": "Sun 28 June · 03:00 BST",
      "owners": "David has Algeria. Riley has Austria.",
      "badges": [
        "staff v staff",
        "high risk",
        "stress watch"
      ],
      "impact": "A direct David v Riley scrap. Austria can qualify with control, Algeria can flip the whole mood with one result."
    }
  ],
  "recentResults": [
    {
      "home": "Switzerland",
      "away": "Canada",
      "score": "2-1",
      "date": "24 June",
      "owners": "Paula had Switzerland. David had Canada."
    },
    {
      "home": "Bosnia and Herzegovina",
      "away": "Qatar",
      "score": "3-1",
      "date": "24 June",
      "owners": "Camilla had Bosnia and Herzegovina."
    },
    {
      "home": "Scotland",
      "away": "Brazil",
      "score": "0-3",
      "date": "24 June",
      "owners": "Riley had Scotland. David had Brazil."
    },
    {
      "home": "Morocco",
      "away": "Haiti",
      "score": "4-2",
      "date": "24 June",
      "owners": "Paula had Haiti."
    },
    {
      "home": "Türkiye",
      "away": "USA",
      "score": "3-2",
      "date": "25 June",
      "owners": "Riley had USA."
    },
    {
      "home": "Paraguay",
      "away": "Australia",
      "score": "0-0",
      "date": "25 June",
      "owners": "Riley had Australia."
    },
    {
      "home": "Curaçao",
      "away": "Ivory Coast",
      "score": "0-2",
      "date": "25 June",
      "owners": "Camilla had Ivory Coast."
    },
    {
      "home": "Ecuador",
      "away": "Germany",
      "score": "2-1",
      "date": "25 June",
      "owners": "Claire had Ecuador."
    },
    {
      "home": "Japan",
      "away": "Sweden",
      "score": "1-1",
      "date": "25 June",
      "owners": "Paula had Japan. Helena had Sweden."
    },
    {
      "home": "Tunisia",
      "away": "Netherlands",
      "score": "1-3",
      "date": "25 June",
      "owners": "Helena had both teams."
    },
    {
      "home": "Mexico",
      "away": "Czechia",
      "score": "3-0",
      "date": "24 June",
      "owners": "Claire had Mexico."
    },
    {
      "home": "England",
      "away": "Ghana",
      "score": "0-0",
      "date": "23 June",
      "owners": "Camilla had Ghana."
    },
    {
      "home": "Colombia",
      "away": "DR Congo",
      "score": "1-0",
      "date": "23 June",
      "owners": "Claire had Colombia."
    },
    {
      "home": "Portugal",
      "away": "Uzbekistan",
      "score": "5-0",
      "date": "23 June",
      "owners": "Claire had Portugal. Paula had Uzbekistan."
    },
    {
      "home": "Jordan",
      "away": "Algeria",
      "score": "1-2",
      "date": "22 June",
      "owners": "Helena had Jordan. David had Algeria."
    },
    {
      "home": "Argentina",
      "away": "Austria",
      "score": "2-0",
      "date": "22 June",
      "owners": "Riley had Austria."
    },
    {
      "home": "France",
      "away": "Iraq",
      "score": "3-0",
      "date": "22 June",
      "owners": "Camilla had France. Riley had Iraq."
    },
    {
      "home": "Norway",
      "away": "Senegal",
      "score": "3-2",
      "date": "22 June",
      "owners": "David had Norway."
    },
    {
      "home": "Spain",
      "away": "Saudi Arabia",
      "score": "4-0",
      "date": "21 June",
      "owners": "Claire had Spain. Helena had Saudi Arabia."
    },
    {
      "home": "Uruguay",
      "away": "Cape Verde",
      "score": "2-2",
      "date": "21 June",
      "owners": "Camilla had Cape Verde."
    }
  ],
  "banter": [
    "Claire's draw is so stacked it needs VAR, HR and possibly a small independent investigation.",
    "Mexico perfect, Colombia through, Portugal through, Ecuador through, Spain still alive. Claire has turned this into career mode on beginner difficulty.",
    "Riley has USA and Australia through, but Scotland and Iraq are hanging on like a phone at 1% with no charger.",
    "Camilla's Cape Verde pick has gone from joke team to genuine pest. Proper fly-in-the-kitchen energy.",
    "David's Brazil pick is doing Brazil things, which is deeply boring and deeply effective.",
    "Paula losing Haiti but keeping Switzerland and Japan is very 'bad day, good insurance policy'.",
    "Helena has Netherlands carrying the bag while Jordan and Tunisia are already sat at the airport Wetherspoons.",
    "Uzbekistan are still technically alive in the same way a laptop on 0% is technically alive for three seconds after unplugging it.",
    "Australia qualifying with a 0-0 is disgusting football but excellent sweepstake terrorism.",
    "Spain beating Saudi 4-0 has ruined the funniest timeline, but Cape Verde can still restore the chaos."
  ]
};

/* ==========================================================================
   DASHBOARD LOGIC
   You should not need to edit below this line unless changing the layout.
   ========================================================================== */

const statusCopy = {
  alive: "Alive",
  danger: "At risk",
  "playing-soon": "Playing soon",
  eliminated: "Out",
  unknown: "Unknown"
};

const routes = ["overview", "leaderboard", "chances", "teams", "fixtures", "rules"];
let currentProfiles = [];

const fixtureFlags = {
  "Argentina": "🇦🇷",
  "Belgium": "🇧🇪",
  "Curaçao": "🇨🇼",
  "Czechia": "🇨🇿",
  "DR Congo": "🇨🇩",
  "Egypt": "🇪🇬",
  "England": "🏴",
  "Germany": "🇩🇪",
  "Iran": "🇮🇷",
  "Morocco": "🇲🇦",
  "Paraguay": "🇵🇾",
  "Qatar": "🇶🇦",
  "Senegal": "🇸🇳",
  "South Africa": "🇿🇦",
  "South Korea": "🇰🇷",
  "Türkiye": "🇹🇷",
  "Turkey": "🇹🇷",
  "Uruguay": "🇺🇾",
  "Croatia": "🇭🇷"
};

const statusWeight = {
  alive: 2,
  "playing-soon": 1,
  danger: 1,
  unknown: 0,
  eliminated: 0
};

const teamInfo = (teamName) => sweepstakeData.teams[teamName];
const stageName = (stage) => sweepstakeData.stageLabels[stage] || "Unknown";

function fixtureTeamLabel(teamName) {
  const team = teamInfo(teamName);
  return `${team?.flag || fixtureFlags[teamName] || "🏳️"} ${teamName}`;
}

function getTeamOwner(teamName) {
  return sweepstakeData.players.find((player) => player.teams.includes(teamName))?.name || "Unowned";
}

function getThreatLevel(profile) {
  const topScore = profile.threatVector[0] || 0;
  const secondScore = profile.threatVector[1] || 0;

  if (topScore >= 72 && secondScore >= 64 && profile.aliveCount >= 4 && profile.dangerCount <= 1) {
    return "Heavy Favourite";
  }

  if (topScore >= 68 && profile.aliveCount >= 4) {
    return "Dangerous";
  }

  if (topScore >= 58 && profile.aliveCount >= 4) {
    return "Dark Horse";
  }

  if (profile.aliveCount >= 3 || profile.dangerCount >= 2) {
    return "Needs Chaos";
  }

  return "Hanging On";
}

function threatBadge(profile) {
  const threat = getThreatLevel(profile);
  return `<span class="threat-badge threat-${threat.toLowerCase().replaceAll(" ", "-")}">${threat}</span>`;
}

function getMostCooked(profiles) {
  return [...profiles].sort((a, b) => {
    const aliveDiff = a.aliveCount - b.aliveCount;
    if (aliveDiff !== 0) return aliveDiff;
    const dangerDiff = b.dangerCount - a.dangerCount;
    if (dangerDiff !== 0) return dangerDiff;
    return (a.tieVector[0] || 0) - (b.tieVector[0] || 0);
  })[0];
}

function getNextDangerMatch() {
  return (
    sweepstakeData.upcomingDangerMatches.find((match) => match.badges.includes("staff v staff")) ||
    sweepstakeData.upcomingDangerMatches[0]
  );
}

function getAliveTeamCount() {
  return Object.values(sweepstakeData.teams).filter((team) => team.status !== "eliminated").length;
}

function getBestHeldTeams(limit = 5) {
  return Object.entries(sweepstakeData.teams)
    .map(([name, team]) => ({
      name,
      ...team,
      owner: getTeamOwner(name),
      score: team.status === "eliminated" ? 0 : team.stage,
      threatScore: team.threatScore || 0
    }))
    .sort((a, b) => {
      const scoreDiff = b.threatScore - a.threatScore;
      if (scoreDiff !== 0) return scoreDiff;
      return statusWeight[b.status] - statusWeight[a.status];
    })
    .slice(0, limit);
}

function getTeamScore(teamName) {
  const team = teamInfo(teamName);
  if (!team || team.status === "eliminated" || team.status === "unknown") return 0;
  return team.stage;
}

function getPlayerProfile(player) {
  const rankedTeams = [...player.teams].sort((a, b) => {
    const scoreDiff = getTeamScore(b) - getTeamScore(a);
    if (scoreDiff !== 0) return scoreDiff;
    return statusWeight[teamInfo(b).status] - statusWeight[teamInfo(a).status];
  });

  const tieVector = rankedTeams.map(getTeamScore);
  const threatVector = rankedTeams.map((team) => teamInfo(team).threatScore || 0).sort((a, b) => b - a);
  const aliveCount = player.teams.filter((team) => !["eliminated", "unknown"].includes(teamInfo(team).status)).length;
  const dangerCount = player.teams.filter((team) => ["danger", "playing-soon"].includes(teamInfo(team).status)).length;

  return {
    ...player,
    rankedTeams,
    tieVector,
    threatVector,
    bestTeam: rankedTeams[0],
    aliveCount,
    dangerCount
  };
}

function sortProfiles(profiles) {
  return [...profiles].sort((a, b) => {
    for (let index = 0; index < 5; index += 1) {
      const diff = (b.tieVector[index] || 0) - (a.tieVector[index] || 0);
      if (diff !== 0) return diff;
    }

    const aliveDiff = b.aliveCount - a.aliveCount;
    if (aliveDiff !== 0) return aliveDiff;

    return a.name.localeCompare(b.name);
  });
}

function getPreviousRanks() {
  try {
    return JSON.parse(localStorage.getItem("sweepstakePreviousRanks")) || {};
  } catch (error) {
    return {};
  }
}

function saveCurrentRanks(profiles) {
  try {
    const ranks = Object.fromEntries(profiles.map((profile, index) => [profile.name, index + 1]));
    localStorage.setItem("sweepstakePreviousRanks", JSON.stringify(ranks));
  } catch (error) {
    // Ranking still works if localStorage is unavailable.
  }
}

function movementBadge(profile, currentRank, previousRanks) {
  const previousRank = previousRanks[profile.name];
  if (!previousRank || previousRank === currentRank) {
    return `<span class="movement movement-same" title="No rank change">-</span>`;
  }

  if (previousRank > currentRank) {
    return `<span class="movement movement-up" title="Moved up">↑</span>`;
  }

  return `<span class="movement movement-down" title="Moved down">↓</span>`;
}

function el(selector) {
  return document.querySelector(selector);
}

function createTeamChip(teamName, compact = false) {
  const team = teamInfo(teamName);
  const stage = stageName(getTeamScore(teamName));
  return `
    <span class="team-chip team-${team.status}" title="${teamName} - ${statusCopy[team.status]}, ${stage}">
      <span class="flag">${team.flag}</span>
      <span>${teamName}</span>
      ${compact ? "" : `<span class="team-meta">${stage}</span>`}
    </span>
  `;
}

function createStatusPill(teamName) {
  const team = teamInfo(teamName);
  return `
    <span class="status-pill status-${team.status}">
      <span class="flag">${team.flag}</span>
      ${statusCopy[team.status]}
    </span>
  `;
}

function renderLeader(profile) {
  const best = teamInfo(profile.bestTeam);
  const leaderHtml = `
    <div class="hero-leader-name">${profile.name}</div>
    <div class="hero-leader-score">
      ${profile.rankedTeams.slice(0, 3).map((team) => createTeamChip(team, true)).join("")}
    </div>
    <div class="leader-subline">${best.flag} ${profile.bestTeam} currently leads their draw at ${stageName(getTeamScore(profile.bestTeam)).toLowerCase()} level.</div>
  `;

  el("#heroLeader").innerHTML = leaderHtml;
  el("#currentLeaderCard").innerHTML = `
    <div class="leader-card-inner">
      <div>
        <p class="eyebrow">Current leader</p>
        <h2 class="leader-name">${profile.name}</h2>
        <p class="leader-subline">
          Strongest tie-break line: ${profile.rankedTeams.map((team) => `${teamInfo(team).flag} ${team}`).join(" / ")}
        </p>
      </div>
      <div class="leader-trophy" aria-hidden="true">🏆</div>
    </div>
  `;
}

function renderOverview(profiles) {
  const leader = profiles[0];
  const cooked = getMostCooked(profiles);
  const dangerMatch = getNextDangerMatch();

  el("#dailyHeadline").textContent = sweepstakeData.dailyHeadline;
  el("#featuredUpdate").textContent = sweepstakeData.featuredUpdate;
  el("#quickStats").innerHTML = [
    ["Current leader", leader.name, `${leader.bestTeam} leads the tie-break line.`],
    ["Best chance", leader.name, getThreatLevel(leader)],
    ["Most cooked", cooked.name, `${cooked.dangerCount} danger tag${cooked.dangerCount === 1 ? "" : "s"}.`],
    ["Next danger match", `${dangerMatch.home} v ${dangerMatch.away}`, dangerMatch.owners],
    ["Teams still alive", `${getAliveTeamCount()}/30`, "Latest group-stage picture drives this count."]
  ]
    .map(
      ([label, value, detail]) => `
        <article class="glass-panel stat-card">
          <p class="stat-label">${label}</p>
          <div class="stat-value">${value}</div>
          <p>${detail}</p>
        </article>
      `
    )
    .join("");
}

function renderLeaderboard(profiles) {
  const previousRanks = getPreviousRanks();

  el("#leaderboardRows").innerHTML = profiles
    .map((profile, index) => {
      const currentRank = index + 1;
      const tieVector = profile.rankedTeams.map((team) => createTeamChip(team, true)).join("");
      return `
        <article class="leader-row ${index === 0 ? "is-first" : ""} float-in" style="animation-delay: ${index * 70}ms">
          <div class="rank-chip">${currentRank}</div>
          <div>
            <div class="leader-row-name">${profile.name}${movementBadge(profile, currentRank, previousRanks)}</div>
            <div class="tie-vector">${tieVector}</div>
          </div>
          <div class="leader-row-side">
            ${threatBadge(profile)}
            <div class="status-pill status-alive">${profile.aliveCount}/5 alive</div>
          </div>
        </article>
      `;
    })
    .join("");

  saveCurrentRanks(profiles);
}

function renderInsights(profiles) {
  const leader = profiles[0];
  const cooked = getMostCooked(profiles);
  const darkHorse = profiles.find((profile) => profile.name !== leader.name && profile.aliveCount >= 4) || profiles[1];

  el("#bestChance").innerHTML = `
    <div class="insight-player">${leader.name}</div>
    ${threatBadge(leader)}
    <p class="insight-copy">
      Best chance of winning right now because ${leader.rankedTeams
        .slice(0, 2)
        .map((team) => `${teamInfo(team).flag} ${team}`)
        .join(" and ")} give the strongest survival line on the board.
    </p>
    <div class="team-stack">${leader.rankedTeams.slice(0, 3).map((team) => createTeamChip(team, true)).join("")}</div>
  `;

  el("#darkHorse").innerHTML = `
    <div class="insight-player">${darkHorse.name}</div>
    ${threatBadge(darkHorse)}
    <p class="insight-copy">
      Still lurking with ${darkHorse.aliveCount} teams alive. If the favourites wobble, this draw can suddenly look very awkward for everyone else.
    </p>
    <div class="team-stack">${darkHorse.rankedTeams.slice(0, 3).map((team) => createTeamChip(team, true)).join("")}</div>
  `;

  el("#mostCooked").innerHTML = `
    <div class="insight-player">${cooked.name}</div>
    ${threatBadge(cooked)}
    <p class="insight-copy">
      Most at risk on current status tags. The teams are still alive, but the next results need to calm things down.
    </p>
    <div class="team-stack">${cooked.rankedTeams.map((team) => createTeamChip(team, true)).join("")}</div>
  `;

  el("#podiumWatch").innerHTML = profiles
    .slice(0, 4)
    .map(
      (profile, index) => `
        <article class="podium-item">
          <div class="rank-chip">${index + 1}</div>
          <div>
            <h3>${profile.name}</h3>
            <p>${profile.rankedTeams[0]} is the official tie-break lead, while the threat rating says ${getThreatLevel(profile).toLowerCase()}.</p>
            <div class="team-stack">${profile.rankedTeams.slice(0, 3).map((team) => createTeamChip(team, true)).join("")}</div>
          </div>
        </article>
      `
    )
    .join("");

  el("#threatLevels").innerHTML = profiles
    .map(
      (profile) => `
        <article class="threat-row">
          <div>
            <h3>${profile.name}</h3>
            <p>${profile.aliveCount}/5 alive · ${profile.dangerCount} at risk · top threat score ${profile.threatVector[0] || 0}</p>
          </div>
          ${threatBadge(profile)}
        </article>
      `
    )
    .join("");

  el("#needsWhat").innerHTML = profiles
    .map(
      (profile) => `
        <article class="need-item">
          <h3>${profile.name}</h3>
          <p>${sweepstakeData.playerNeeds[profile.name]}</p>
        </article>
      `
    )
    .join("");

  el("#bestTeams").innerHTML = getBestHeldTeams()
    .map(
      (team) => `
        <article class="best-team-item">
          <div>
            <h3>${team.flag} ${team.name}</h3>
            <p>${team.owner} · ${team.formNote || stageName(team.score)}</p>
          </div>
          <span class="status-pill status-${team.status}">${statusCopy[team.status]}</span>
        </article>
      `
    )
    .join("");
}

function renderPlayers(profiles) {
  const leaderName = profiles[0].name;
  const profileByName = new Map(profiles.map((profile) => [profile.name, profile]));

  el("#playerCards").innerHTML = sweepstakeData.players
    .map((player) => {
      const profile = profileByName.get(player.name);
      return `
        <article class="player-card ${player.name === leaderName ? "is-leader" : ""} float-in">
          <div class="player-card-header">
            <h3 class="player-name">${player.name}</h3>
            <div class="player-card-badges">
              ${threatBadge(profile)}
              <span class="status-pill ${player.name === leaderName ? "status-danger" : "status-alive"}">
                ${player.name === leaderName ? "Leading" : `${profile.aliveCount}/5 alive`}
              </span>
            </div>
          </div>
          <div class="team-list">
            ${player.teams
              .map((teamName) => {
                const team = teamInfo(teamName);
                return `
                  <div class="team-row team-${team.status} ${teamName === profile.bestTeam ? "is-best-team" : ""}">
                    <div class="team-main">
                      <div class="team-name">
                        <span class="flag">${team.flag}</span>
                        <span>${teamName}</span>
                      </div>
                      <div class="team-meta">${stageName(getTeamScore(teamName))}${teamName === profile.bestTeam ? " · best team" : ""}</div>
                    </div>
                    ${createStatusPill(teamName)}
                  </div>
                `;
              })
              .join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderLists() {
  el("#lastUpdated").textContent = sweepstakeData.lastUpdated;
  el("#todaysNotes").innerHTML = sweepstakeData.todaysNotes.map((note) => `<li>${note}</li>`).join("");
  el("#dangerMatches").innerHTML = sweepstakeData.upcomingDangerMatches
    .map(
      (match) => `
        <article class="match-card ${match.badges.includes("staff v staff") ? "is-staff-battle" : ""}">
          <div class="match-badges">
            ${match.badges.map((badge) => `<span class="drama-badge badge-${badge.replaceAll(" ", "-")}">${badge}</span>`).join("")}
          </div>
          <div class="match-title">
            <span>${fixtureTeamLabel(match.home)}</span>
            <span class="versus">v</span>
            <span>${fixtureTeamLabel(match.away)}</span>
          </div>
          <div class="kickoff-pill">
            <span>Kick-off</span>
            <strong>${match.kickoff}</strong>
          </div>
          <div class="match-owners">${match.owners}</div>
          <div class="match-impact">${match.impact}</div>
        </article>
      `
    )
    .join("");
  const fixtureGroups = [
    ["Staff v Staff Battles", "staff v staff"],
    ["Favourite Watch", "favourite watch"],
    ["High Risk", "high risk"],
    ["Stress Watch", "stress watch"]
  ];
  el("#fixtureGroups").innerHTML = fixtureGroups
    .map(([title, badge]) => {
      const matches = sweepstakeData.upcomingDangerMatches.filter((match) => match.badges.includes(badge));
      if (!matches.length) return "";
      return `
        <article class="glass-panel fixture-group">
          <h3>${title}</h3>
          <div class="fixture-group-list">
            ${matches
              .map(
                (match) => `
                  <div class="fixture-group-row">
                    <div>
                      <strong>${fixtureTeamLabel(match.home)} v ${fixtureTeamLabel(match.away)}</strong>
                      <span>${match.owners}</span>
                    </div>
                    <span class="fixture-row-time">${match.kickoff}</span>
                  </div>
                `
              )
              .join("")}
          </div>
        </article>
      `;
    })
    .join("");
  el("#banterBoard").innerHTML = sweepstakeData.banter
    .map((line) => `<div class="banter-item">${line}</div>`)
    .join("");
  el("#recentResults").innerHTML = sweepstakeData.recentResults?.length
    ? sweepstakeData.recentResults
        .map(
          (result) => `
            <article class="result-row">
              <div>
                <strong>${fixtureTeamLabel(result.home)} ${result.score} ${fixtureTeamLabel(result.away)}</strong>
                <span>${result.owners}</span>
              </div>
              <span class="fixture-row-time">${result.date}</span>
            </article>
          `
        )
        .join("")
    : `<p class="empty-state">No recent tracked results loaded yet.</p>`;
  const eliminatedTeams = Object.entries(sweepstakeData.teams).filter(([, team]) => team.status === "eliminated");
  el("#graveyardTeams").innerHTML = eliminatedTeams.length
    ? eliminatedTeams
        .map(([name, team]) => `<span class="team-chip team-eliminated"><span class="flag">${team.flag}</span><span>${name}</span></span>`)
        .join("")
    : `<p>No one is buried yet.</p>`;
}

function buildDailyUpdateText(profiles = currentProfiles) {
  const leader = profiles[0];
  const cooked = getMostCooked(profiles);
  const dangerMatch = getNextDangerMatch();

  return [
    sweepstakeData.dailyHeadline,
    `Current leader: ${leader.name}`,
    `Best chance: ${leader.name} (${leader.rankedTeams.slice(0, 2).join(" / ")})`,
    `Most cooked: ${cooked.name}`,
    `Next danger match: ${dangerMatch.home} v ${dangerMatch.away}`,
    `Link: ${sweepstakeData.siteLink}`
  ].join("\n");
}

function setupCopyUpdate() {
  const button = el("#copyUpdateButton");
  const status = el("#copyStatus");
  if (!button || !status) return;

  button.addEventListener("click", async () => {
    const updateText = buildDailyUpdateText();
    try {
      await navigator.clipboard.writeText(updateText);
      status.textContent = "Copied!";
    } catch (error) {
      status.textContent = `Copy failed. Select this update: ${updateText}`;
    }

    window.setTimeout(() => {
      if (status.textContent === "Copied!") status.textContent = "";
    }, 1800);
  });
}

function renderDashboard() {
  currentProfiles = sortProfiles(sweepstakeData.players.map(getPlayerProfile));
  renderLeader(currentProfiles[0]);
  renderOverview(currentProfiles);
  renderLeaderboard(currentProfiles);
  renderInsights(currentProfiles);
  renderPlayers(currentProfiles);
  renderLists();
}

function applyTrackerData(tracker) {
  if (!tracker || typeof tracker !== "object") return;
  const isFallback = tracker.meta?.source === "fallback";

  if (tracker.lastUpdated) sweepstakeData.lastUpdated = tracker.lastUpdated;
  if (tracker.dailyHeadline) sweepstakeData.dailyHeadline = tracker.dailyHeadline;
  if (tracker.featuredUpdate) sweepstakeData.featuredUpdate = tracker.featuredUpdate;
  if (tracker.siteLink) sweepstakeData.siteLink = tracker.siteLink;
  if (!isFallback && Array.isArray(tracker.players) && tracker.players.length) sweepstakeData.players = tracker.players;
  if (Array.isArray(tracker.todaysNotes)) sweepstakeData.todaysNotes = tracker.todaysNotes;
  if (!isFallback && Array.isArray(tracker.upcomingDangerMatches) && tracker.upcomingDangerMatches.length) {
    sweepstakeData.upcomingDangerMatches = tracker.upcomingDangerMatches;
  }
  if (Array.isArray(tracker.recentResults)) sweepstakeData.recentResults = tracker.recentResults;

  if (!isFallback && tracker.teams && typeof tracker.teams === "object") {
    Object.entries(tracker.teams).forEach(([teamName, incomingTeam]) => {
      sweepstakeData.teams[teamName] = {
        ...(sweepstakeData.teams[teamName] || {}),
        ...incomingTeam,
        flag: incomingTeam.flag || sweepstakeData.teams[teamName]?.flag || "🏳️"
      };
    });
  }
}

function parseTrackerDate(value) {
  if (!value) return null;

  const cleaned = String(value)
    .replace(/BST/g, "GMT+0100")
    .replace(/·/g, " ")
    .trim();
  const timestamp = Date.parse(cleaned);
  return Number.isNaN(timestamp) ? null : timestamp;
}

function isRemoteTrackerOlder(tracker) {
  const remoteDate = parseTrackerDate(tracker?.lastUpdated);
  const localDate = parseTrackerDate(sweepstakeData.lastUpdated);
  return Boolean(remoteDate && localDate && remoteDate < localDate);
}

async function loadRemoteTracker() {
  if (window.location.protocol === "file:") return;

  try {
    const response = await fetch("/api/tracker", { headers: { accept: "application/json" } });
    if (!response.ok) throw new Error(`Tracker API returned ${response.status}`);
    const tracker = await response.json();
    if (isRemoteTrackerOlder(tracker)) {
      console.info("Ignoring older tracker data:", tracker.lastUpdated);
      return;
    }
    applyTrackerData(tracker);
    renderDashboard();
  } catch (error) {
    console.info("Using local tracker data:", error.message);
  }
}

function getActiveRoute() {
  const hashRoute = window.location.hash.replace("#", "");
  return routes.includes(hashRoute) ? hashRoute : "overview";
}

function updateActiveHashNav(route) {
  const hash = `#${route}`;
  document.querySelectorAll(".nav-links a, .mobile-bottom-nav a").forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === hash);
  });
}

function showRoute(route = getActiveRoute(), shouldScroll = true) {
  const cleanRoute = routes.includes(route) ? route : "overview";

  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("is-active", view.dataset.view === cleanRoute);
  });

  updateActiveHashNav(cleanRoute);

  if (shouldScroll) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function handleRouteChange() {
  const route = getActiveRoute();
  if (window.location.hash !== `#${route}`) {
    window.location.replace(`#${route}`);
    return;
  }

  showRoute(route);
}

function finishLoader() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = window.matchMedia("(max-width: 620px)").matches;
  let hasLoadedThisSession = false;

  try {
    hasLoadedThisSession = sessionStorage.getItem("chantryCupLoaded") === "true";
  } catch (error) {
    hasLoadedThisSession = false;
  }

  const delay = reduceMotion ? 120 : hasLoadedThisSession ? 80 : isMobile ? 720 : 1050;

  window.setTimeout(() => {
    document.body.classList.add("site-loaded");
    try {
      sessionStorage.setItem("chantryCupLoaded", "true");
    } catch (error) {
      // The loader is decorative, so the site should carry on if storage is blocked.
    }
  }, delay);
}

function launchConfetti() {
  const canvas = el("#confetti");
  const context = canvas.getContext("2d");
  const colours = ["#ffc947", "#35f29a", "#47d7ff", "#ff5f73", "#ffffff"];
  const pieces = Array.from({ length: 72 }, () => ({
    x: Math.random() * window.innerWidth,
    y: -20 - Math.random() * window.innerHeight * 0.35,
    size: 4 + Math.random() * 6,
    speed: 1.3 + Math.random() * 3.2,
    drift: -0.8 + Math.random() * 1.6,
    spin: Math.random() * Math.PI,
    colour: colours[Math.floor(Math.random() * colours.length)]
  }));
  let frames = 0;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach((piece) => {
      piece.y += piece.speed;
      piece.x += piece.drift;
      piece.spin += 0.08;
      context.save();
      context.translate(piece.x, piece.y);
      context.rotate(piece.spin);
      context.fillStyle = piece.colour;
      context.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * 0.55);
      context.restore();
    });

    frames += 1;
    if (frames < 260) {
      requestAnimationFrame(draw);
    } else {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas, { passive: true });
  draw();
}

function initDashboard() {
  finishLoader();

  if (!window.location.hash || !routes.includes(window.location.hash.replace("#", ""))) {
    window.location.replace("#overview");
  }

  renderDashboard();
  setupCopyUpdate();
  loadRemoteTracker();
  showRoute(getActiveRoute(), false);
  window.addEventListener("hashchange", handleRouteChange);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.setTimeout(launchConfetti, 550);
  }
}

initDashboard();
