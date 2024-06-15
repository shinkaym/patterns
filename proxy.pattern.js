class Leader {
  receiveRequest(offer) {
    console.log(`result:::${offer}`)
  }
}

class Secretary {
  constructor() {
    this.leader = new Leader()
  }

  receiveRequest(offer) {
    this.leader.receiveRequest(offer)
  }
}

class Developer {
  constructor(offer) {
    this.offer = offer
  }

  applyFor(target) {
    target.receiveRequest(this.offer)
  }
}

const devs = new Developer('upto 100k USD')
devs.applyFor(new Secretary())

