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
  lastUpdated: "15 June 2026",
  dailyHeadline: "Claire sets the pace, but Brazil and France are breathing down her neck.",
  featuredUpdate: "The current best chance belongs to the strongest survival line, but the next danger match could make the staff-room table look very different.",
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
    Uzbekistan: { flag: "🇺🇿", status: "alive", stage: 1 },
    Switzerland: { flag: "🇨🇭", status: "alive", stage: 2 },
    Japan: { flag: "🇯🇵", status: "alive", stage: 2 },
    Haiti: { flag: "🇭🇹", status: "danger", stage: 1 },
    "New Zealand": { flag: "🇳🇿", status: "danger", stage: 1 },
    USA: { flag: "🇺🇸", status: "alive", stage: 2 },
    Australia: { flag: "🇦🇺", status: "alive", stage: 1 },
    Austria: { flag: "🇦🇹", status: "alive", stage: 2 },
    Scotland: { flag: "🏴", status: "danger", stage: 1 },
    Iraq: { flag: "🇮🇶", status: "alive", stage: 1 },
    France: { flag: "🇫🇷", status: "alive", stage: 3 },
    Ghana: { flag: "🇬🇭", status: "danger", stage: 1 },
    "Bosnia and Herzegovina": { flag: "🇧🇦", status: "alive", stage: 1 },
    "Ivory Coast": { flag: "🇨🇮", status: "alive", stage: 2 },
    "Cape Verde": { flag: "🇨🇻", status: "danger", stage: 1 },
    Algeria: { flag: "🇩🇿", status: "alive", stage: 1 },
    Brazil: { flag: "🇧🇷", status: "alive", stage: 3 },
    Norway: { flag: "🇳🇴", status: "alive", stage: 2 },
    Panama: { flag: "🇵🇦", status: "danger", stage: 1 },
    Canada: { flag: "🇨🇦", status: "alive", stage: 1 },
    Jordan: { flag: "🇯🇴", status: "danger", stage: 1 },
    Tunisia: { flag: "🇹🇳", status: "alive", stage: 1 },
    Sweden: { flag: "🇸🇪", status: "alive", stage: 2 },
    Netherlands: { flag: "🇳🇱", status: "alive", stage: 3 },
    "Saudi Arabia": { flag: "🇸🇦", status: "alive", stage: 1 },
    Colombia: { flag: "🇨🇴", status: "alive", stage: 2 },
    Portugal: { flag: "🇵🇹", status: "alive", stage: 3 },
    Spain: { flag: "🇪🇸", status: "alive", stage: 3 },
    Ecuador: { flag: "🇪🇨", status: "danger", stage: 1 },
    Mexico: { flag: "🇲🇽", status: "alive", stage: 2 }
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
    Claire: "Claire needs Portugal or Spain to go deep and make the rest of the board chase.",
    David: "David needs Brazil to keep carrying the draw, with Norway as useful back-up.",
    Riley: "Riley needs USA, Australia or Austria to make a chaos run while Scotland avoids pain.",
    Paula: "Paula needs Switzerland or Japan to become serious and keep the tie-breaks tidy.",
    Helena: "Helena needs Netherlands or Sweden to become the main threat.",
    Camilla: "Camilla needs France to do France things, then hopes Ivory Coast adds depth."
  },
  todaysNotes: [
    "Claire has a frightening one-two punch with Portugal and Spain both sitting high in the survival order.",
    "David is still very much in the trophy conversation while Brazil remain alive.",
    "The danger tags are where the staff-room nerves should be: one bad night and the tie-break picture changes fast."
  ],
  upcomingDangerMatches: [
    {
      home: "Spain",
      away: "Cape Verde",
      kickoff: "Mon 15 June · 17:00 BST",
      owners: "Claire has Spain. Camilla has Cape Verde.",
      badges: ["staff v staff", "high risk", "favourite watch"],
      impact: "Claire can strengthen an already scary draw if Spain do the business. Camilla needs Cape Verde to turn this into proper staff-room chaos."
    },
    {
      home: "Iraq",
      away: "Norway",
      kickoff: "Tue 16 June · 23:00 BST",
      owners: "Riley has Iraq. David has Norway.",
      badges: ["staff v staff", "high risk"],
      impact: "A direct tie-break scrap. Iraq are fighting to stay useful for Riley, while Norway could give David another strong route behind Brazil."
    },
    {
      home: "Austria",
      away: "Jordan",
      kickoff: "Wed 17 June · 05:00 BST",
      owners: "Riley has Austria. Helena has Jordan.",
      badges: ["staff v staff", "high risk"],
      impact: "Riley has the stronger-looking side, but Helena can dent Riley's depth if Jordan nick something."
    },
    {
      home: "Uzbekistan",
      away: "Colombia",
      kickoff: "Thu 18 June · 03:00 BST",
      owners: "Paula has Uzbekistan. Claire has Colombia.",
      badges: ["staff v staff", "high risk"],
      impact: "Paula needs Uzbekistan alive for lower-order insurance. Claire can pile pressure on the board if Colombia keep moving."
    },
    {
      home: "Switzerland",
      away: "Bosnia and Herzegovina",
      kickoff: "Thu 18 June · 20:00 BST",
      owners: "Paula has Switzerland. Camilla has Bosnia and Herzegovina.",
      badges: ["staff v staff"],
      impact: "A proper mid-table swing match. Switzerland could keep Paula's draw sturdy, but Bosnia and Herzegovina give Camilla useful cover."
    },
    {
      home: "USA",
      away: "Australia",
      kickoff: "Fri 19 June · 20:00 BST",
      owners: "Riley has both teams.",
      badges: ["stress watch"],
      impact: "Internal conflict: one of Riley's teams can gain value, but the other gets dragged into trouble."
    },
    {
      home: "Scotland",
      away: "Morocco",
      kickoff: "Fri 19 June · 23:00 BST",
      owners: "Riley has Scotland.",
      badges: ["high risk", "stress watch"],
      impact: "Scotland are already on edge. A defeat here could strip away valuable fifth-team cover."
    },
    {
      home: "Brazil",
      away: "Haiti",
      kickoff: "Sat 20 June · 01:30 BST",
      owners: "David has Brazil. Paula has Haiti.",
      badges: ["staff v staff", "high risk", "favourite watch"],
      impact: "David's biggest weapon can get even louder. Paula needs Haiti to survive what looks like a brutal test."
    },
    {
      home: "Netherlands",
      away: "Sweden",
      kickoff: "Sat 20 June · 18:00 BST",
      owners: "Helena has both teams.",
      badges: ["favourite watch"],
      impact: "Helena owns both sides, so this is about which team becomes the serious threat. Netherlands winning would sharpen her best-chance profile."
    },
    {
      home: "France",
      away: "Iraq",
      kickoff: "Mon 22 June · 22:00 BST",
      owners: "Camilla has France. Riley has Iraq.",
      badges: ["staff v staff", "high risk", "favourite watch", "stress watch"],
      impact: "Camilla can lean hard on France as a favourite, while Iraq are trying not to become collateral damage."
    },
    {
      home: "Portugal",
      away: "Uzbekistan",
      kickoff: "Tue 23 June · 18:00 BST",
      owners: "Claire has Portugal. Paula has Uzbekistan.",
      badges: ["staff v staff", "high risk", "favourite watch"],
      impact: "Claire can make the leaderboard look very uncomfortable for everyone. Paula needs Uzbekistan to survive another nasty draw."
    },
    {
      home: "Scotland",
      away: "Brazil",
      kickoff: "Wed 24 June · 23:00 BST",
      owners: "Riley has Scotland. David has Brazil.",
      badges: ["staff v staff", "high risk", "favourite watch", "stress watch"],
      impact: "This is peak sweepstake drama: Riley's at-risk Scotland run straight into David's Brazil. One result could change the staff-room mood fast."
    }
  ],
  recentResults: [],
  banter: [
    "Claire is walking around like the trophy is already on the mantelpiece. Annoyingly, the draw backs it up.",
    "David only needs Brazil to keep doing Brazil things and everyone else starts sweating.",
    "Riley has depth, but depth is less comforting when half the staff room is shouting 'danger match' at you.",
    "Paula's draw has upset potential written all over it. Switzerland and Japan are doing a lot of work.",
    "Helena is not loud about it, which is exactly how dark-horse campaigns usually begin."
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
  const topScore = profile.tieVector[0] || 0;
  const secondScore = profile.tieVector[1] || 0;

  if (topScore >= 3 && secondScore >= 3 && profile.aliveCount >= 4 && profile.dangerCount <= 1) {
    return "Heavy Favourite";
  }

  if (topScore >= 3 && profile.aliveCount >= 4) {
    return "Dangerous";
  }

  if (topScore >= 2 && profile.aliveCount >= 4) {
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
      score: team.status === "eliminated" ? 0 : team.stage
    }))
    .sort((a, b) => {
      const scoreDiff = b.score - a.score;
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
  const aliveCount = player.teams.filter((team) => !["eliminated", "unknown"].includes(teamInfo(team).status)).length;
  const dangerCount = player.teams.filter((team) => ["danger", "playing-soon"].includes(teamInfo(team).status)).length;

  return {
    ...player,
    rankedTeams,
    tieVector,
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
    ["Teams still alive", `${getAliveTeamCount()}/30`, "Manual status updates drive this count."]
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
      Most at risk on current status tags. The top team can still rescue it, but the lower-order tie-breaks need a calmer week.
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
            <p>${profile.rankedTeams[0]} is the current lead weapon, with ${profile.aliveCount}/5 teams still alive.</p>
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
            <p>${profile.aliveCount}/5 alive · ${profile.dangerCount} at risk · best team ${profile.rankedTeams[0]}</p>
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
            <p>${team.owner} · ${stageName(team.score)}</p>
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
