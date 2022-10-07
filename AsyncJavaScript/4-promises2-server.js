/* server side, multiple functions using Promises */
function login(un, pw) {
  console.log(`SERVER: Searching for user record with username: ${un}, password: ${pw}`);
  const users = [
    {username: 'u1', password: 'psswrd', id: 1},
    {username: 'u2', password: 'psswrd', id: 2},
    {username: 'u3', password: 'psswrd', id: 3},
    {username: 'u4', password: 'psswrd', id: 4},
  ];

  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        const validUser = users.find((element) => element.username === un && element.password === pw);
        if (validUser) {
          console.log('SERVER: RESOLVING PROMISE... found user record');
          resolve(validUser.id);
        } else {
          console.log('SERVER: REJECTING PROMISE... no user record found');
          reject('user not found');
        }
      },
      1000
    );  
  });
}

function getUserDetails(userId) {
  console.log(`SERVER: Searching for user details with userId: ${userId}`);
  const usersWithDetails = [
    {id: 1, firstName: 'bob', lastName: 'barker'},
    {id: 2, firstName: 'pat', lastName: 'sajak'},
    {id: 3, firstName: 'richard', lastName: 'dawson'}
  ];

  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        const userDetails = usersWithDetails.find((element) => element.id === userId);
        if (userDetails) {
          console.log('SERVER: RESOLVING PROMISE... found user details');
          resolve(userDetails)
        } else {
          console.log('SERVER: REJECTING PROMISE... no user details found');
          reject(`no user details found for id ${userId}`);
        }
      },
      1000
    );
  });
}
