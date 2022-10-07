/* client side, calling async functions using Promises with async/await */
async function handleClick() {
  const unFromFormField = document.querySelector('input[name = "username"]:checked').value;
  const pwFromFormField = document.getElementById('password').value;
  
  try {
    console.log('about to call an asynchronous function USING PROMISES to get some data');
    const userId = await login(unFromFormField, pwFromFormField);
    console.log('  CLIENT: login succeeded, requesting extra user details')
    const userDetails = await getUserDetails(userId);
    console.log(`  CLIENT: found user ${userDetails.firstName} ${userDetails.lastName}`)
    console.log('---')
  } catch (error) {
    console.log('  CLIENT:  ', error);
    console.log('---')
  }
};
