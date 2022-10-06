const paul = { name: "PM", instrument: "bass", ranking: 2, soloRecordCount: 12 };
const george = { name: "GH", instrument: "lead guitar", ranking: 3, soloRecordCount: 4 };
const georgem = { name: "GM", instrument: "mixing board", ranking: 5, soloRecordCount: 0 };
const ringo = { name: "RS", instrument: "drums", ranking: 4, soloRecordCount: 6 };
const john = { name: "JL", instrument: "rhythm guitar", ranking: 1, soloRecordCount: 10 };

const beatles = [ringo, john, paul, george];
beatles.push(georgem);
// console.table(beatles);

const removedBeatle = beatles.pop();
// console.log(removedBeatle, ' was removed');
// console.table(beatles);

beatles.unshift(removedBeatle);
// console.table(beatles);

const removedAgain = beatles.shift();
// console.log(removedAgain, ' was removed again');
// console.table(beatles);
// console.log('There are ', beatles.length, ' people in the band.');


beatles.splice(2, 0, removedAgain);
// console.table(beatles);

// beatles.push('abc');
// beatles.push(1);
// beatles.push(null);
// beatles.push(undefined);
// console.table(beatles);

// beatles.push(['a', 'b', 'c']);
// console.table(beatles);
// console.log(beatles[9][2]);

// for (let i = 0; i < beatles.length; i++) {
//   // console.log('item #', i+1, ' plays ', beatles[i].instrument);
//   if (beatles[i].instrument === 'mixing board') {
//     // beatles = beatles.splice(i, 1);
//     delete beatles[i];
//   }
// }

// for (let i = beatles.length - 1; i >= 0; i--) {
//   console.log('item #', i+1, ' plays ', beatles[i].instrument);
//   if (beatles[i].instrument === 'mixing board') {
//     // beatles = beatles.splice(i, 1);
//     delete beatles[i];
//   }
// }

console.table(beatles);

const beatlesLoopingFunction = (element, indexPosition, allTheBeatles) => {
  console.log(`The element at position ${indexPosition+1} of ${allTheBeatles.length} plays the ${element.instrument}`);
}
beatles.forEach(beatlesLoopingFunction);

beatles.forEach(beatle => console.log(beatle.name));


// sort
const beatlesSorter = (b1, b2) => {
  // return 0 | 1 | -1

  const rank1 = b1.ranking;
  const rank2 = b2.ranking;

  if (rank1 > rank2) {
    return 1;
  } else if (rank1 < rank2) {
    return -1;
  } else {
    return 0;
  }

}

beatles.sort(beatlesSorter);
console.table(beatles);

// beatles = [];


// filter out the non-musicians

function filterBeatles (beatle) {
  return beatle.instrument !== 'mixing board';
}
const filteredBeatles = beatles.filter(filterBeatles);

// const filteredBeatles = beatles.filter((beatle) => {
//   console.log(beatle.name);

//   return beatle.instrument !== 'mixing board';
// });
// const filteredBeatles = beatles.filter(beatle => beatle.instrument !== 'mixing board');
// const filteredBeatles = beatles.filter((beatle) => beatle.instrument !== 'mixing board');
// const filteredBeatles = beatles.filter((beatle, index, array) => beatle.instrument !== 'mixing board');
// const filteredBeatles = beatles.filter((beatle, index, array) => index > 2);
// const filteredBeatles = beatles.filter((beatle, index, array) => array.length > 6);
console.table(beatles);
console.table(filteredBeatles);


const soloRecordsReducer = (accumulatedTotal, currentBeatle) => accumulatedTotal + currentBeatle.soloRecordCount;
const soloRecordTotal = beatles.reduce(soloRecordsReducer, 0);
// reducer functions can also be specified inline
// const soloRecordTotal = beatles.reduce((accumulatedTotal, currentBeatle) => accumulatedTotal + currentBeatle.soloRecordCount, 0);
console.log('the beatles released a total of ', soloRecordTotal, ' records');

const guitarPlayersFilterFunction = (beatle) => beatle.instrument.indexOf('guitar') > 0;
const beatlesGuitarists = beatles.filter(guitarPlayersFilterFunction);
const beatlesGuitaristsSRC = beatlesGuitarists.reduce(soloRecordsReducer, 0);
console.log('the guitarists pumped out ', beatlesGuitaristsSRC);

// here's another option (a little less readable) that uses function chaining
/*
const beatlesGuitaristsSRC2 = beatles
  .filter(guitarPlayersFilterFunction)
  .reduce(soloRecordsReducer, 0);
console.log('the guitarists pumped out ', beatlesGuitaristsSRC2);
*/


// array destructuring
// let first = beatles[0];
// let second = beatles[1];
// let second = beatles[2];
// let second = beatles[3];
let [first, second, third, fourth] = beatles;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);


