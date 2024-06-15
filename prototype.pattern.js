class FifaOnlinePlayer {
  constructor(name, team, position, goals) {
    this.name = name
    this.team = team
    this.position = position
    this.goals = goals
  }

  score() {
    this.goals++
  }

  clone(){
    return new FifaOnlinePlayer(this.name, this.team, this.position, this.goals)
  }
}

FifaOnlinePlayer.prototype.stats = {
  minutesPlayed: 0
}

const prototypePattern = new FifaOnlinePlayer('CR7', 'Khoadzai', 'FW', 0)

const cr7 = prototypePattern.clone()
cr7.stats.minutesPlayed = 1000;
const m10 = prototypePattern.clone()
m10.name = 'Messi'
m10.team = 'PSG'

cr7.score()
console.log(`${cr7.name} has record ${cr7.goals} this season ${JSON.stringify(cr7.stats)}`)

m10.score()
console.log(`${m10.name} has record ${m10.goals} this season ${JSON.stringify(m10.stats)}`)

