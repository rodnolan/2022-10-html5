


const apiEndPoint1 = 'https://rodnolan.github.io/fed-files/customers.json';
const apiEndPoint2 = 'https://jsonplaceholder.typicode.com/todos';

console.log('about to request data');
goGetExternalData(apiEndPoint1);
console.log('just requested data');

async function goGetExternalData(url) {
  const response = await fetch(url);
  const responseAsJSON = response.ok ? await response.json() : null;

  console.log(responseAsJSON);
}


// axios

// ajax: async js and xml
