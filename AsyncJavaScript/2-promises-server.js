/* server side, using Promises */
function getDataUsingPromises() {
  const isHappyCase = true; //Math.round(Math.random());

  return new Promise(
    (resolve, reject) => {
      setTimeout(
        () => {
          if (isHappyCase) {
            const data = {
              mode: 'promise success'
            };
            resolve(data);
          } else {
            reject('promise rejected because ...');
          }
        }, 
        2000
      );
    }
  );
}
