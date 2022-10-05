
let fname;
fname = 123;
console.log(typeof fname);
fname = null;
console.log(typeof fname);
fname = true;
console.log(typeof fname);
fname = false;
console.log(typeof fname);
fname = undefined;
console.log(typeof fname);
fname = "Rod";
console.log(typeof fname);
console.log(fname);


let lname = "Nolan";

console.log(fname + ' ' + lname);
console.log(fname, lname);

let fullName = fname + ' ' + lname;
fullName = `${fname} ${lname}`;
console.log(fullName);


console.log(`My Full Name is: ${fname} ${lname}`);
console.log(`My Full Name is: ${fullName}`);


fname = "Bill";
lname = "Gates";


let salary = 100;
let age = '65';


// primitive data types
// number
// string
// boolean
// null
// undefined

function addSalaryAndAge(salary, age) {

  // instanceof returns a boolean if op1 is an instance if op2
  let datatypeCheck1 = (salary instanceof Number && age instanceof Number);

  // typeof returns a string that describes the datatype of the operand
  let datatypeCheck2 = (typeof salary === 'number' && typeof age === 'number');

  if (datatypeCheck2) {
    let salaryPlusAge = salary + age;
    console.log(salaryPlusAge);
  } else {
    console.log('check your data types');
  }

}

// addSalaryAndAge(new Number(salary), new Number(age));
// addSalaryAndAge(salary, age);



let name = "John";
console.log(name instanceof String);

let nameString = new String("John");
console.log(nameString instanceof String);

console.log(name);
console.log(nameString);


let isLunchTime = true;
console.log(isLunchTime instanceof Boolean);
console.log(typeof isLunchTime === 'boolean');



let undefinedVariable;
let me = {fn: 'Rod', ln: 'Nolan'};
fname = null;

console.log(typeof undefinedVariable);
console.log(typeof me);
console.log(typeof fname);

let randomThing = false;

if (randomThing) {
  console.log('yes');
} else {
  console.log('no');
}
