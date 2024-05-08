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

const numPointsScored = (playerName) => {
  return findPlayer(playerName).Points
}

const shoeSize = (playerName) => {
  return findPlayer(playerName).Shoe
}

const findTeam = (teamName) => {
  if(gameObject().home.teamName === teamName){
    return gameObject().home.teamName
  }else{
    return gameObject().away.teamName
  }
}

// const teamColors = (teamName) => {
//   return teamColors(teamName)
// }

console.log(findTeam("Brooklyn Nets"))
