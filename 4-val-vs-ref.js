/*
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


console.log('before bad function call', e);
// changeObject(e);
console.log('after bad function call', e);

*/



let e = {
  x: 36,
  phoneNumbers: {
    home: "9054527901",
    office: "9058977790",
  }
};

const changeObjectSafely = (obj) => {
  // console.log('SAFE:::before mutation', obj);
  // SHALLOW COPIES
  // let copyOfObj = {...obj};
  // let copyOfObj = Object.assign({}, obj);
  // copyOfObj.x = 4;
  // copyOfObj.phoneNumbers.home = 'non-existent';
  // return copyOfObj;
  // SHALLOW COPIES

  // let deepCopyOfObj = JSON.parse(JSON.stringify(obj));
  // a dirty hack that works with older browsers

  let deepCopyOfObj = structuredClone(obj);
  // preferred as long as your user's are on 'newer' browsers
  // please see caniuse.com

  deepCopyOfObj.x = 4;
  deepCopyOfObj.phoneNumbers.home = 'non-existent';
  // console.log('SAFE:::after mutation', copyOfObj);

  return deepCopyOfObj;
}

console.log('before SAFE function call', e);
const f = changeObjectSafely(e);
console.log('after SAFE function call', e);
console.log(f);
