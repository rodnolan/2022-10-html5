const john = {
  name: "JL",
  instrument: "rhythm guitar",
  ranking: 1,
  soloRecordCount: 10,
};
console.log(john);

const yoko = new Object({name: "Yoko"});
console.log(yoko);

/*
console.log(typeof yoko);
console.log(typeof john);

const beatles = ['a', 'b'];
if (john instanceof Object) {
  console.log('yes');
} else {
  console.log('no');
}
// Array extends Object
*/

john.age = 90;
yoko.salary = 875764;


const newPropertyName = 'height';
// john.newPropertyName = '6foot 1inch';
john[newPropertyName] = '6foot 1inch';
console.log(john.height);


for (propName in john) {
  console.log(`${propName}: ${john[propName]}`);
}

const johnProps = Object.keys(john);
const johnValues = Object.values(john);

console.log(johnProps);
console.log(johnValues);

for (let i = 0; i < johnProps.length; i++) {
  console.log(`${johnProps[i]}: ${johnValues[i]}`);
}


Object.keys(john).forEach(val => console.log(val));
Object.values(john).forEach(val => console.log(val));

// const abc = [john, yoko];
// const ks = Object.keys(abc);
// const vs = Object.values(abc);

// console.log(ks);
// console.log(vs);
