const john = {
  fullname: "JL",
  instrument: "rhythm guitar",
  ranking: 1,
  soloRecordCount: 10,
};
const george = {
  fullname: "GH",
  instrument: "lead guitar",
  ranking: 2,
  soloRecordCount: 4,
};


// function sayHi(name) {
//   console.log('Hi, my name is ', name);
// }
// sayHi(john.name);
// sayHi(george.name);


let fullname = 'Rod';
console.log(this);

// function sayHello() {
const sayHello = function() {
  console.log('Hello, my name is ', this.fullname);
}
sayHello();


// john.sayHello = sayHello;
// john.sayHello();

// george.sayHello = sayHello;
// george.sayHello();


function sayGoodbye () {
  console.log(`I'm outta this band... I don't want to play ${this.instrument} anymore.`)
}
// sayGoodbye.call(john);
// sayGoodbye.apply(george);


function sayGoodbyeV2 (finalWords) {
  console.log(`I'm outta this band... I don't want to play ${this.instrument} anymore. But before I leave, I'd like to say ${finalWords}.`)
}

sayGoodbyeV2.apply(george, ['I never liked those guys anyway']);
sayGoodbyeV2.call(john, 'I will always love those guys');

// console.log(john.sayGoodbyeV2);
// this is undefined I never created a property by that name on the john object
// I didn't need to because apply and call allow me to invoke the function and pass the value for `this` on the fly, at call time




// object destructuring

// let ranking = john.ranking;
// let soloRecordCount = john.soloRecordCount;
const {ranking, soloRecordCount} = john;

console.log(ranking, soloRecordCount);

