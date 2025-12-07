 //Game Data Function
  function gameObject() {
    return{
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                }
            }
        }
    };
  }

// Helper to get all players together
function allPlayers() {
  const game = gameObject();
  return { ...game.home.players, ...game.away.players };
}

// 1. Player Info
function numPointsScored(playerName) {
  return allPlayers()[playerName].points;
}

function shoeSize(playerName) {
  return allPlayers()[playerName].shoe;
}

// 2. Team Info
function teamColors(teamName) {
  const game = gameObject();
  for (let side in game) {
    if (game[side].teamName === teamName) return game[side].colors;
  }
}

function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

// 3. Player Numbers + Stats
function playerNumbers(teamName) {
  const game = gameObject();
  for (let side in game) {
    if (game[side].teamName === teamName) {
      return Object.values(game[side].players).map(p => p.number);
    }
  }
}

function playerStats(playerName) {
  return allPlayers()[playerName];
}

// 4. Advanced Challenge
function bigShoeRebounds() {
  let biggestShoe = 0;
  let rebounds = 0;

  for (let name in allPlayers()) {
    const player = allPlayers()[name];
    if (player.shoe > biggestShoe) {
      biggestShoe = player.shoe;
      rebounds = player.rebounds;
    }
  }
  return rebounds;
}

// More challenges
function mostPointsScored() {
  let maxPoints = 0;
  let topPlayer = "";

  for (let name in allPlayers()) {
    if (allPlayers()[name].points > maxPoints) {
      maxPoints = allPlayers()[name].points;
      topPlayer = name;
    }
  }
  return topPlayer;
}

function winningTeam() {
  const game = gameObject();
  let homePoints = 0;
  let awayPoints = 0;

  for (let p in game.home.players) homePoints += game.home.players[p].points;
  for (let p in game.away.players) awayPoints += game.away.players[p].points;

  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
  let longest = "";
  for (let name in allPlayers()) {
    if (name.length > longest.length) longest = name;
  }
  return longest;
}

function doesLongNameStealATon() {
  const longest = playerWithLongestName();
  let maxSteals = 0;
  let playerWithMostSteals = "";

  for (let name in allPlayers()) {
    if (allPlayers()[name].steals > maxSteals) {
      maxSteals = allPlayers()[name].steals;
      playerWithMostSteals = name;
    }
  }

  return longest === playerWithMostSteals;
}