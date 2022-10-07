// synchronous functions typically return their data just before the end of the function body
function getDataSynchronously() {
  const data = {
    mode: 'synchronous'
  };
  return data;
}
// but if that function is called remotely, latency will prevent the caller from receiving 
// the response immediately

function handleClick() {
  console.log('about to call a synchronous function to get some data');
  const results = getDataSynchronously();
  console.log('got the data: ', results);
}  
