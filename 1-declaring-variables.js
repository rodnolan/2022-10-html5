

// var fname = 'Rod';
// var fname = 'Bill';
// var fname = 'John';
// console.log('before', fname);

// var lname = 'Nolan';
// var mname;
// console.log(lname);
// mname = 'David';
// console.log(mname);

function test() {
  // JS hoisted the declarations
  var fname;
  // var fname;
  var lname;

  console.log('inside before', fname);
  console.log('inside before', lname);

  // var fname = 'Bob';
  // var lname = 'Barker';
  // JS 'compiler' hoists var-declared variables to the top of their scope


  if (true) {
    // var fname = 'Mickey';
    fname = 'Mickey';
  }
  // JS assigned the values
  fname = 'Bob';
  lname = 'Barker';

  console.log('inside after', fname);
  console.log('inside after', lname);
}

test();
// console.log('after', fname);

// var test = function() {
//   fname = 'Bob';
//   console.log(fname);
// }


function test2 () {
  // console.log('inside before', fname);
  let fname;
  fname = "Mickey";
  console.log('inside before if', fname);

  if (true) {
    let fname = 'Mouse';
    console.log('inside the if ', fname);
  }

  fname = 'Goofy';
  console.log('inside after if', fname);

}

test2();

// console.log('outside', fname);




function test3 () {
  const lname = 'minnie';
  const fname = 'mouse';


  if (true) {
    const lname = 'donald';
    const fname = 'duck';
    console.log(lname)
    console.log(fname)
  }

  console.log(lname)
  console.log(fname)
}

test3();













