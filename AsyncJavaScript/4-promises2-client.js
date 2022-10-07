/* client side, calling multiple async functions using Promise chaining */
function handleClick() { 
  const unFromFormField = document.getElementById('username').value;
  const pwFromFormField = document.getElementById('password').value;
  
  login(unFromFormField, pwFromFormField)
    .then(
      id => {
        console.log('  CLIENT: login succeeded, requesting extra user details')
        return getUserDetails(id);
      }
    )
    .then(
      userDetails => {
        console.log(`  CLIENT: found user ${userDetails.firstName} ${userDetails.lastName}`)
        console.log('---');
      }
    )
    .catch(
      rejectReason => {
        console.log('  CLIENT:  ', rejectReason);
        console.log('---');
      }
    );
};
