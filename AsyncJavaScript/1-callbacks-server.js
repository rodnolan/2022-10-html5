/* server side, using callbacks */
function getDataAsynchronously(errorHandler, resultHandler) {
  const data = {
    mode: 'asynchronous'
  };
  const isHappyCase = true; //Math.round(Math.random());  
  
  setTimeout(
    () => {
        if (isHappyCase) {
          resultHandler(data);
          // this is the rough equivalent of `return data;` 
          // but explicitly returning data works only when operating in sync mode
        } else {
          errorHandler(new Error('database was down'));
        }
    }, 
    2000
  );
}
