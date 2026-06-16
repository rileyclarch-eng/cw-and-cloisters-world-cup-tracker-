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
  lastUpdated: "16 June 2026, 12:00 BST",
  dailyHeadline: "USA have Riley smiling, Spain have made Claire's draw funnier, and Cape Verde have dragged Camilla into the chaos.",
  featuredUpdate: "All sweepstake teams are still in the group stage. No one is officially through and no one is buried yet, so the official survival ranking stays level while the threat ratings carry the drama.",
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
    Uzbekistan: { flag: "\u{1F1FA}\u{1F1FF}", status: "alive", stage: 1, group: "K", points: 0, goalDifference: 0, lastResult: "Not played yet", nextMatch: "v Colombia", nextKickoff: "Thu 18 June \u00b7 03:00 BST", threatScore: 48, formNote: "Tournament starts against Colombia.", riskNote: "Needs a steady opener before Portugal." },
    Switzerland: { flag: "\u{1F1E8}\u{1F1ED}", status: "alive", stage: 1, group: "B", points: 1, goalDifference: 0, lastResult: "1-1 v Qatar", nextMatch: "v Bosnia and Herzegovina", nextKickoff: "Thu 18 June \u00b7 20:00 BST", threatScore: 60, formNote: "Opened with a draw.", riskNote: "Bosnia match is a direct staff-room swing." },
    Japan: { flag: "\u{1F1EF}\u{1F1F5}", status: "alive", stage: 1, group: "F", points: 1, goalDifference: 0, lastResult: "2-2 v Netherlands", nextMatch: "v Tunisia", nextKickoff: "Sat 20 June \u00b7 23:00 BST", threatScore: 62, formNote: "Shared a chaotic point with Netherlands.", riskNote: "Tunisia will be desperate after a heavy defeat." },
    Haiti: { flag: "\u{1F1ED}\u{1F1F9}", status: "danger", stage: 1, group: "C", points: 0, goalDifference: -1, lastResult: "0-1 v Scotland", nextMatch: "v Brazil", nextKickoff: "Sat 20 June \u00b7 01:30 BST", threatScore: 22, formNote: "Lost narrowly to Scotland.", riskNote: "Brazil next is a serious problem." },
    "New Zealand": { flag: "\u{1F1F3}\u{1F1FF}", status: "alive", stage: 1, group: "G", points: 1, goalDifference: 0, lastResult: "2-2 v Iran", nextMatch: "v Egypt", nextKickoff: "Sun 21 June \u00b7 20:00 BST", threatScore: 46, formNote: "Refused to go away against Iran.", riskNote: "Useful lower-order cover if the goals keep coming." },
    USA: { flag: "\u{1F1FA}\u{1F1F8}", status: "alive", stage: 1, group: "D", points: 3, goalDifference: 3, lastResult: "4-1 v Paraguay", nextMatch: "v Australia", nextKickoff: "Fri 19 June \u00b7 20:00 BST", threatScore: 78, formNote: "Best sweepstake start so far.", riskNote: "Australia is an awkward internal Riley clash." },
    Australia: { flag: "\u{1F1E6}\u{1F1FA}", status: "alive", stage: 1, group: "D", points: 3, goalDifference: 2, lastResult: "2-0 v T\u00fcrkiye", nextMatch: "v USA", nextKickoff: "Fri 19 June \u00b7 20:00 BST", threatScore: 66, formNote: "Clean, calm opening win.", riskNote: "USA game decides which Riley team looks serious." },
    Austria: { flag: "\u{1F1E6}\u{1F1F9}", status: "alive", stage: 1, group: "J", points: 0, goalDifference: 0, lastResult: "Not played yet", nextMatch: "v Jordan", nextKickoff: "Wed 17 June \u00b7 05:00 BST", threatScore: 58, formNote: "Still waiting to start.", riskNote: "Jordan opener is a must-control game." },
    Scotland: { flag: "\u{1F3F4}", status: "alive", stage: 1, group: "C", points: 3, goalDifference: 1, lastResult: "1-0 v Haiti", nextMatch: "v Morocco", nextKickoff: "Fri 19 June \u00b7 23:00 BST", threatScore: 56, formNote: "Did the job against Haiti.", riskNote: "Morocco and Brazil still make this spicy." },
    Iraq: { flag: "\u{1F1EE}\u{1F1F6}", status: "danger", stage: 1, group: "I", points: 0, goalDifference: 0, lastResult: "Not played yet", nextMatch: "v Norway", nextKickoff: "Tue 16 June \u00b7 23:00 BST", threatScore: 34, formNote: "Opens against Haaland's Norway.", riskNote: "France follows, so early damage control matters." },
    France: { flag: "\u{1F1EB}\u{1F1F7}", status: "alive", stage: 1, group: "I", points: 0, goalDifference: 0, lastResult: "Not played yet", nextMatch: "v Senegal", nextKickoff: "Tue 16 June \u00b7 20:00 BST", threatScore: 76, formNote: "Big name still waiting to start.", riskNote: "Senegal opener is no soft landing." },
    Ghana: { flag: "\u{1F1EC}\u{1F1ED}", status: "alive", stage: 1, group: "L", points: 0, goalDifference: 0, lastResult: "Not played yet", nextMatch: "v Panama", nextKickoff: "Wed 17 June \u00b7 17:00 BST", threatScore: 50, formNote: "Tournament starts against Panama.", riskNote: "A good opener could change Camilla's depth." },
    "Bosnia and Herzegovina": { flag: "\u{1F1E7}\u{1F1E6}", status: "alive", stage: 1, group: "B", points: 1, goalDifference: 0, lastResult: "1-1 v Canada", nextMatch: "v Switzerland", nextKickoff: "Thu 18 June \u00b7 20:00 BST", threatScore: 48, formNote: "Took a point from Canada.", riskNote: "Switzerland is a direct Paula v Camilla clash." },
    "Ivory Coast": { flag: "\u{1F1E8}\u{1F1EE}", status: "alive", stage: 1, group: "E", points: 3, goalDifference: 1, lastResult: "1-0 v Ecuador", nextMatch: "v Germany", nextKickoff: "Sat 20 June \u00b7 20:00 BST", threatScore: 64, formNote: "Started with a win over Ecuador.", riskNote: "Germany next is a proper test." },
    "Cape Verde": { flag: "\u{1F1E8}\u{1F1FB}", status: "alive", stage: 1, group: "H", points: 1, goalDifference: 0, lastResult: "0-0 v Spain", nextMatch: "v Uruguay", nextKickoff: "Sun 21 June \u00b7 23:00 BST", threatScore: 54, formNote: "Held Spain. Absolute sweepstake chaos.", riskNote: "Uruguay will test whether the fairytale has legs." },
    Algeria: { flag: "\u{1F1E9}\u{1F1FF}", status: "alive", stage: 1, group: "J", points: 0, goalDifference: 0, lastResult: "Not played yet", nextMatch: "v Argentina", nextKickoff: "Wed 17 June \u00b7 02:00 BST", threatScore: 42, formNote: "Starts against the holders.", riskNote: "Argentina then Jordan/Austria makes the opener huge." },
    Brazil: { flag: "\u{1F1E7}\u{1F1F7}", status: "danger", stage: 1, group: "C", points: 1, goalDifference: 0, lastResult: "1-1 v Morocco", nextMatch: "v Haiti", nextKickoff: "Sat 20 June \u00b7 01:30 BST", threatScore: 72, formNote: "Still dangerous, but not flawless.", riskNote: "Dropped points means Haiti needs handling properly." },
    Norway: { flag: "\u{1F1F3}\u{1F1F4}", status: "alive", stage: 1, group: "I", points: 0, goalDifference: 0, lastResult: "Not played yet", nextMatch: "v Iraq", nextKickoff: "Tue 16 June \u00b7 23:00 BST", threatScore: 60, formNote: "Haaland watch starts against Iraq.", riskNote: "David wants this to become more than Brazil insurance." },
    Panama: { flag: "\u{1F1F5}\u{1F1E6}", status: "alive", stage: 1, group: "L", points: 0, goalDifference: 0, lastResult: "Not played yet", nextMatch: "v Ghana", nextKickoff: "Wed 17 June \u00b7 17:00 BST", threatScore: 38, formNote: "Starts against Ghana.", riskNote: "Needs something quickly before Croatia and England." },
    Canada: { flag: "\u{1F1E8}\u{1F1E6}", status: "alive", stage: 1, group: "B", points: 1, goalDifference: 0, lastResult: "1-1 v Bosnia and Herzegovina", nextMatch: "v Qatar", nextKickoff: "Thu 18 June \u00b7 23:00 BST", threatScore: 50, formNote: "Opened with a draw.", riskNote: "Qatar match is where David's depth can improve." },
    Jordan: { flag: "\u{1F1EF}\u{1F1F4}", status: "danger", stage: 1, group: "J", points: 0, goalDifference: 0, lastResult: "Not played yet", nextMatch: "v Austria", nextKickoff: "Wed 17 June \u00b7 05:00 BST", threatScore: 34, formNote: "World Cup debut starts against Austria.", riskNote: "Argentina is waiting later, so every point matters." },
    Tunisia: { flag: "\u{1F1F9}\u{1F1F3}", status: "danger", stage: 1, group: "F", points: 0, goalDifference: -4, lastResult: "1-5 v Sweden", nextMatch: "v Japan", nextKickoff: "Sat 20 June \u00b7 23:00 BST", threatScore: 24, formNote: "Heavy defeat to Sweden.", riskNote: "Needs an immediate reset against Japan." },
    Sweden: { flag: "\u{1F1F8}\u{1F1EA}", status: "alive", stage: 1, group: "F", points: 3, goalDifference: 4, lastResult: "5-1 v Tunisia", nextMatch: "v Netherlands", nextKickoff: "Sat 20 June \u00b7 18:00 BST", threatScore: 74, formNote: "Statement win. Loud enough for everyone to notice.", riskNote: "Netherlands is the real measuring stick." },
    Netherlands: { flag: "\u{1F1F3}\u{1F1F1}", status: "alive", stage: 1, group: "F", points: 1, goalDifference: 0, lastResult: "2-2 v Japan", nextMatch: "v Sweden", nextKickoff: "Sat 20 June \u00b7 18:00 BST", threatScore: 66, formNote: "Shared a wild draw with Japan.", riskNote: "Sweden can take control of the group." },
    "Saudi Arabia": { flag: "\u{1F1F8}\u{1F1E6}", status: "alive", stage: 1, group: "H", points: 1, goalDifference: 0, lastResult: "1-1 v Uruguay", nextMatch: "v Spain", nextKickoff: "Sun 21 June \u00b7 20:00 BST", threatScore: 48, formNote: "A useful point against Uruguay.", riskNote: "Spain next is awkward but the group is alive." },
    Colombia: { flag: "\u{1F1E8}\u{1F1F4}", status: "alive", stage: 1, group: "K", points: 0, goalDifference: 0, lastResult: "Not played yet", nextMatch: "v Uzbekistan", nextKickoff: "Thu 18 June \u00b7 03:00 BST", threatScore: 58, formNote: "Starts against Uzbekistan.", riskNote: "Claire wants depth beyond Spain and Portugal." },
    Portugal: { flag: "\u{1F1F5}\u{1F1F9}", status: "alive", stage: 1, group: "K", points: 0, goalDifference: 0, lastResult: "Not played yet", nextMatch: "v DR Congo", nextKickoff: "Wed 17 June \u00b7 20:00 BST", threatScore: 74, formNote: "Still waiting to start.", riskNote: "Needs to justify Claire's scary draw." },
    Spain: { flag: "\u{1F1EA}\u{1F1F8}", status: "danger", stage: 1, group: "H", points: 1, goalDifference: 0, lastResult: "0-0 v Cape Verde", nextMatch: "v Saudi Arabia", nextKickoff: "Sun 21 June \u00b7 20:00 BST", threatScore: 68, formNote: "Held by Cape Verde. Still strong, much funnier.", riskNote: "Saudi Arabia draw with Uruguay keeps Group H awkward." },
    Ecuador: { flag: "\u{1F1EA}\u{1F1E8}", status: "danger", stage: 1, group: "E", points: 0, goalDifference: -1, lastResult: "0-1 v Ivory Coast", nextMatch: "v Cura\u00e7ao", nextKickoff: "Sat 20 June \u00b7 23:00 BST", threatScore: 36, formNote: "Lost opener to Ivory Coast.", riskNote: "Needs a response against Cura\u00e7ao." },
    Mexico: { flag: "\u{1F1F2}\u{1F1FD}", status: "alive", stage: 1, group: "A", points: 0, goalDifference: 0, lastResult: "Not played yet", nextMatch: "v Korea Republic", nextKickoff: "Thu 18 June \u00b7 02:00 BST", threatScore: 58, formNote: "Still to enter the sweepstake picture.", riskNote: "Could become useful Claire depth if the opener lands." }
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
    Claire: "Claire needs Portugal to start cleanly and Spain to remember where the goal is.",
    David: "David needs Brazil to turn the Morocco wobble into a Haiti response, while Norway can become useful cover.",
    Riley: "Riley has USA flying and Scotland surviving, but USA v Australia is going to make one of his own teams suffer.",
    Paula: "Paula needs Switzerland or Japan to become serious, while New Zealand keeps being awkward in the best way.",
    Helena: "Helena needs Sweden's 5-1 noise or Netherlands' quality to become the main threat.",
    Camilla: "Camilla needs France to start like France and Cape Verde to keep being a nuisance."
  },
  todaysNotes: [
    "USA's 4-1 win gives Riley the loudest start of the sweepstake so far.",
    "Spain's 0-0 draw with Cape Verde keeps Claire strong, but makes Camilla's Cape Verde pick instantly more interesting.",
    "Sweden's 5-1 win over Tunisia is a big Helena signal, while Netherlands and Japan sharing a 2-2 keeps Group F messy.",
    "Brazil drawing with Morocco means David's main weapon is alive, dangerous and slightly less smug.",
    "Nobody is officially through or out yet, so all survival stages stay at group-stage level."
  ],
  upcomingDangerMatches: [
    { home: "France", away: "Senegal", kickoff: "Tue 16 June \u00b7 20:00 BST", owners: "Camilla has France.", badges: ["favourite watch", "high risk"], impact: "Camilla's biggest name finally starts, but Senegal is not a gentle opener." },
    { home: "Iraq", away: "Norway", kickoff: "Tue 16 June \u00b7 23:00 BST", owners: "Riley has Iraq. David has Norway.", badges: ["staff v staff", "high risk"], impact: "A direct tie-break scrap. Iraq are fighting to stay useful for Riley, while Norway could give David cover if Brazil keep wobbling." },
    { home: "Ghana", away: "Panama", kickoff: "Wed 17 June \u00b7 17:00 BST", owners: "Camilla has Ghana. David has Panama.", badges: ["staff v staff", "high risk"], impact: "Two lower-order picks, one useful chance to stop becoming dead weight." },
    { home: "Portugal", away: "DR Congo", kickoff: "Wed 17 June \u00b7 20:00 BST", owners: "Claire has Portugal.", badges: ["favourite watch"], impact: "Claire's scary draw needs Portugal to do the grown-up part after Spain made everyone laugh." },
    { home: "Austria", away: "Jordan", kickoff: "Wed 17 June \u00b7 05:00 BST", owners: "Riley has Austria. Helena has Jordan.", badges: ["staff v staff", "high risk"], impact: "Riley has the stronger-looking side, but Helena can dent Riley's depth if Jordan nick something." },
    { home: "Uzbekistan", away: "Colombia", kickoff: "Thu 18 June \u00b7 03:00 BST", owners: "Paula has Uzbekistan. Claire has Colombia.", badges: ["staff v staff", "high risk"], impact: "Paula needs Uzbekistan alive for lower-order insurance. Claire can pile pressure on the board if Colombia keep moving." },
    { home: "Switzerland", away: "Bosnia and Herzegovina", kickoff: "Thu 18 June \u00b7 20:00 BST", owners: "Paula has Switzerland. Camilla has Bosnia and Herzegovina.", badges: ["staff v staff"], impact: "A proper mid-table swing match. Switzerland could keep Paula's draw sturdy, but Bosnia and Herzegovina give Camilla useful cover." },
    { home: "USA", away: "Australia", kickoff: "Fri 19 June \u00b7 20:00 BST", owners: "Riley has both teams.", badges: ["stress watch"], impact: "Internal stress: Riley owns both, so one good result comes with one awkward dent." },
    { home: "Scotland", away: "Morocco", kickoff: "Fri 19 June \u00b7 23:00 BST", owners: "Riley has Scotland.", badges: ["high risk", "stress watch"], impact: "Scotland started well, but Morocco holding Brazil makes this a proper stress watch." },
    { home: "Brazil", away: "Haiti", kickoff: "Sat 20 June \u00b7 01:30 BST", owners: "David has Brazil. Paula has Haiti.", badges: ["staff v staff", "high risk", "favourite watch"], impact: "David's biggest weapon can get even louder. Paula needs Haiti to survive what looks like a brutal test." },
    { home: "Netherlands", away: "Sweden", kickoff: "Sat 20 June \u00b7 18:00 BST", owners: "Helena has both teams.", badges: ["favourite watch"], impact: "Helena owns both sides, so this decides whether her draw is tidy or properly scary." },
    { home: "France", away: "Iraq", kickoff: "Mon 22 June \u00b7 22:00 BST", owners: "Camilla has France. Riley has Iraq.", badges: ["staff v staff", "high risk", "favourite watch", "stress watch"], impact: "Camilla can lean hard on France as a favourite, while Iraq are trying not to become collateral damage." },
    { home: "Portugal", away: "Uzbekistan", kickoff: "Tue 23 June \u00b7 18:00 BST", owners: "Claire has Portugal. Paula has Uzbekistan.", badges: ["staff v staff", "high risk", "favourite watch"], impact: "Claire can make the leaderboard look very uncomfortable for everyone. Paula needs Uzbekistan to survive another nasty draw." },
    { home: "Scotland", away: "Brazil", kickoff: "Wed 24 June \u00b7 23:00 BST", owners: "Riley has Scotland. David has Brazil.", badges: ["staff v staff", "high risk", "favourite watch", "stress watch"], impact: "This is peak sweepstake drama: Riley's Scotland run straight into David's Brazil. One result could change the staff-room mood fast." }
  ],
  recentResults: [],
  banter: [
    "Claire's draw still looks ridiculous, but Spain forgetting how to score has made the whole thing much funnier.",
    "Riley has USA flying, Scotland surviving and Australia waiting to make Friday awkward.",
    "Paula's New Zealand refusing to die is exactly the sort of nonsense that wins sweepstakes.",
    "David relying on Brazil is usually safe, but the Morocco draw has added a tiny bit of staff-room spice.",
    "Helena's Sweden result was loud enough to make everyone check her teams again.",
    "Camilla getting Cape Verde's point against Spain is proper sweepstake chaos."
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
  Morocco: "🇲🇦"
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

async function loadRemoteTracker() {
  if (window.location.protocol === "file:") return;

  try {
    const response = await fetch("/api/tracker", { headers: { accept: "application/json" } });
    if (!response.ok) throw new Error(`Tracker API returned ${response.status}`);
    const tracker = await response.json();
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
