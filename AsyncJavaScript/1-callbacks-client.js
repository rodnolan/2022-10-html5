/* client side, calling async functions using callbacks */
function handleClick() {

  function handleAsyncDataResponse(data) {
    console.log('callback received a response: ', data);
  }
  function handleAsyncDataError(error) {
    console.log('callback received an error: ', error.message);
  }

  console.log('about to call an asynchronous function USING CALLBACKS to get some data');
  getDataAsynchronously(handleAsyncDataError, handleAsyncDataResponse);
  console.log('note that this message appears BEFORE the results are returned even though the console statement comes AFTER the asynchronous function call');
}




// ===============================================================================
// it's easy to chain multiple function calls together to complete a complex
// multi-step task if the functions are synchronous
/* 
  const step1Results = getDataSYNC_Step1();
  const step2Results = getDataSYNC_Step2(step1Results);
  const step3Results = getDataSYNC_Step3(step2Results);
  const step4Results = getDataSYNC_Step4(step3Results);
*/

// but it can become complicated quickly when those functions are asynchronous
// the code below illustrates callback hell, also known as The Pyramid of Doom
/*
  getDataASYNC_Step1(
    (step1Error) => console.log('getDataASYNC_Step1 error: ', step1Error.message), 
    (step1Results) => getDataASYNC_Step2(
      (step2Error) => console.log('getDataASYNC_Step2 error: ', step2Error.message), 
      (step2Results) => getDataASYNC_Step3(
        (step3Error) => console.log('getDataASYNC_Step3 error: ', step3Error.message), 
        (step3Results) => getDataASYNC_Step4(
          (step4Error) => console.log('getDataASYNC_Step4 error: ', step4Error.message), 
          (step4Results) => console.log('final result: ', step4Results), 
          step3Results
        ),
        step2Results
      ),
      step1Results
    ),
    "step1, arg1", "step1, arg2", "etc"
  );
*/
// ===============================================================================
