
export class Beatle {
  constructor (fullname, instrument, ranking, soloRecordCount) {
    this.fullname = fullname;
    this.instrument = instrument;
    this.ranking = ranking;
    this.soloRecordCount = soloRecordCount;
  }

  sayHi = function() {
    console.log(`Hello there, my name is ${this.fullname}`)
  }
}

export class Guitarist extends Beatle {
  constructor(fullname, instrument, ranking, soloRecordCount, guitarStyle) {
    super(fullname, instrument, ranking, soloRecordCount);
    this.guitarStyle = guitarStyle
  }
  logMe = function() {
    console.log(`I'm ranked ${this.ranking} and I play ${this.guitarStyle}`);
  }
}



