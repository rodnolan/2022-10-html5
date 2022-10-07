/* client side, calling async functions using Promises with async/await */
async function handleClick() {
  try {
    console.log('about to call an asynchronous function USING PROMISES to get some data');
    const results = await getSomeDataUsingPromises();
    console.log(results);
    console.log('note that this message appears AFTER the results');
    console.log('the function is ASYNCHRONOUS but it appears to behave SYNCHRONOUSLY');
  } catch (error) {
    console.log('an error occurred. ', error);
  }
};
