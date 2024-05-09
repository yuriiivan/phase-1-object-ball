const gameObject = () => {
  const object = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black","White"],
      players: {
        "Alan Anderson": {
          "Number": 0,
          "Shoe": 16,
          "Points": 22,
          "Rebounds": 12,
          "Assists": 12,
          "Steals": 3,
          "Blocks": 1,
          "Slam Dunks": 1
        },
        "Reggie Evans": {
          "Number": 30,
          "Shoe": 14,
          "Points": 12,
          "Rebounds": 12,
          "Assists": 12,
          "Steals": 12,
          "Blocks": 12,
          "Slam Dunks": 7
        },
        "Brook Lopez": {
          "Number": 11,
          "Shoe": 17,
          "Points": 17,
          "Rebounds": 19,
          "Assists": 10,
          "Steals": 3,
          "Blocks": 1,
          "Slam Dunks": 15
        },
        "Mason Plumlee": {
          "Number": 1,
          "Shoe": 19,
          "Points": 26,
          "Rebounds": 12,
          "Assists": 6,
          "Steals": 3,
          "Blocks": 8,
          "Slam Dunks": 5
        },
        "Jason Terry": {
          "Number": 31,
          "Shoe": 15,
          "Points": 19,
          "Rebounds": 2,
          "Assists": 2,
          "Steals": 4,
          "Blocks": 11,
          "Slam Dunks": 1
        }
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          "Number": 4,
          "Shoe": 18,
          "Points": 10,
          "Rebounds": 1,
          "Assists": 1,
          "Steals": 2,
          "Blocks": 7,
          "Slam Dunks": 2
        },
        "Bismak Biyombo": {
          "Number": 0,
          "Shoe": 16,
          "Points": 12,
          "Rebounds": 4,
          "Assists": 7,
          "Steals": 7,
          "Blocks": 15,
          "Slam Dunks": 10
        },
        "DeSagna Diop": {
          "Number": 2,
          "Shoe": 14,
          "Points": 24,
          "Rebounds": 12,
          "Assists": 12,
          "Steals": 4,
          "Blocks": 5,
          "Slam Dunks": 5
        },
        "Ben Gordon": {
          "Number": 8,
          "Shoe": 15,
          "Points": 33,
          "Rebounds": 3,
          "Assists": 2,
          "Steals": 1,
          "Blocks": 1,
          "Slam Dunks": 0
        },
        "Brendan Haywood": {
          "Number": 33,
          "Shoe": 15,
          "Points": 6,
          "Rebounds": 12,
          "Assists": 12,
          "Steals": 22,
          "Blocks": 5,
          "Slam Dunks": 12
        }
      }
    },
  }
  return object;
}

const findPlayer = (playerName) => {
  if (gameObject().home.players[playerName]) {
    return gameObject().home.players[playerName];
  }else {
    return gameObject().away.players[playerName];
  }
}

const numPointsScored = (playerName) => findPlayer(playerName).Points;

const shoeSize = (playerName) => findPlayer(playerName).Shoe;

const findTeam = (teamName) => {
  if(gameObject().home.teamName === teamName){
    return gameObject().home
  }else{
    return gameObject().away
  }
}

const teamColors = (teamName) => findTeam(teamName).colors;

const teamNames = () => [gameObject().home.teamName, gameObject().away.teamName]

const playerNumbers = (teamName) => {
  const team = findTeam(teamName).players;
  const jerseyNumbers = [];
  for(const player in team){
    jerseyNumbers.push(team[player].Number)
  }
  return jerseyNumbers
}

const playerStats = (player) => findPlayer(player);

const bigShoeRebounds = () => {
  const obj = gameObject();
  const allPlayers = {...obj.home.players,...obj.away.players}
  let maxShoeSize = 0;
  let playerWithLargestShoeSize = ''
  for(const player in allPlayers){
    const currentShoe = allPlayers[player].Shoe
    if(currentShoe > maxShoeSize){
      maxShoeSize = currentShoe;
      playerWithLargestShoeSize = allPlayers[player]
    }

  }
  return playerWithLargestShoeSize.Rebounds
}

const mostPointsScored = () => {
  const obj = gameObject();
  const allPlayers = {...obj.home.players,...obj.away.players}
  console.log(allPlayers)
  let mostPoints = 0
  let playerWithMostPoints = ''
  for(const player in allPlayers){
    const currentPoints = allPlayers[player].Points
    if(currentPoints > mostPoints){
      mostPoints = currentPoints;
      playerWithMostPoints = [player]
    }
  }
  return playerWithMostPoints
}

const winningTeam = () => {
  const brooklynNets = {...gameObject().home.players};
  const charlotteHornets = {...gameObject().away.players};
  let brooklynNetsPoints = 0;
  let charlotteHornetsPoints = 0;
  for(const player in charlotteHornets){
    charlotteHornetsPoints += charlotteHornets[player].Points
  }
  for(const player in brooklynNets){
    brooklynNetsPoints += brooklynNets[player].Points
  }
  if(brooklynNetsPoints > charlotteHornetsPoints){
    return `Brooklyn Nets win with ${brooklynNetsPoints} points!!`
  }else{
    return `Charlotte Hornets win with ${charlotteHornetsPoints} points!!`
  }
}

const playerWithLongestName = () => {
  const allPlayers = {...gameObject().home.players,...gameObject().away.players}
  const allPlayerNames =Object.keys(allPlayers)
  let longestCharCount = 0;
  let longestName = '';
  for(const name of allPlayerNames){
    //Replace all spaces with ''
    const nameWithoutSpaces = name.replace(/\s/g, '');
    if(nameWithoutSpaces.length > longestCharCount){
      longestCharCount = nameWithoutSpaces.length;
      longestName = name;
    }
  }
  return longestName;
}
