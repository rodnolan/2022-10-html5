let a = 9;
let b = 10;


if (a == b) {
  console.log('yes');
}

if (Number(a) == Number(b)) {
  console.log('yes');
}

// let a = new Number(9);
// let b = new Number(10);
// instanceof
// if (a instanceof Number && b instanceof Number) {


if (typeof a == 'number' && typeof b === 'number') {
  console.log('yes');

  const sum = a + b;
  console.log(sum);
} else {
  console.log('no');
  const sum = Number(a) + Number(b);
  console.log(sum);
}
