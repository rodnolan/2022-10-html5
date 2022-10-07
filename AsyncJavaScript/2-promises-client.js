/* client side, calling async functions using Promises */
function handleClick() {
  console.log('about to call an asynchronous function USING PROMISES to get some data');
  getDataUsingPromises().then(
    (data) => {
      console.log('promise was resolved with: ', data);
    }, 
    (rejectReason) => {
      console.log('Promise was rejected because ', rejectReason);
    }
  ).catch((err) => { 
    console.log(err);
  });
  console.log('note that this message appears BEFORE the results are returned even though the console statement comes AFTER the asynchronous function call');
}
