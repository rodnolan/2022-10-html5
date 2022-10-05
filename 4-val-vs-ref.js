// primitives are passed by value (separate copies)

let a = 10;
let b = a;

console.log(a);
a = 4;
console.log(b);

// non-primitives are passed by reference

let c = {x: 10};
let d = c;
console.log(c);
c.x = 4;
console.log(d);


const changePrimitive = (prim) => {
  console.log('before', prim);
  prim = 'something different';
  console.log('after', prim);

  // return
}

let myPrimitive = 'abc';
console.log(myPrimitive);

changePrimitive(myPrimitive);


console.log(myPrimitive);




const changeObject = (obj) => {
  console.log('before mutation', obj);
  obj.x = 4;
  console.log('after mutation', obj);
}
let e = {x: 36};

console.log('before bad function call', e);
// changeObject(e);
console.log('after bad function call', e);




const changeObjectSafely = (obj) => {
  console.log('SAFE:::before mutation', obj);
  // debugger;
  let copyOfObj = {...obj};

  copyOfObj.x = 4;
  console.log('SAFE:::after mutation', copyOfObj);

  return copyOfObj;
}
console.log('before SAFE function call', e);
const f = changeObjectSafely(e);
console.log('after SAFE function call', e);
console.log(f);
