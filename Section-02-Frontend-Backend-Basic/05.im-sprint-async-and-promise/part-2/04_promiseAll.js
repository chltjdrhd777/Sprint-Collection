const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsers = () => {
  return Promise.all([getDataFromFilePromise(user1Path), getDataFromFilePromise(user2Path)]).then(([result1, result2])=>{
    return `[${result1},${result2}]`
  }).then((result)=>JSON.parse(result))
}

/* value는 배열 이 형식을 기억바람
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
*/

// readAllUsers()

module.exports = {
  readAllUsers
}
//  ● Promise.all Test › readAllUsers › Promise 형태로 리턴되어야 합니다
//  ● Promise.all Test › readAllUsers › Promise.all을 사용해서 풀어야 합니다
//  ● Promise.all Test › readAllUsers › user1.json의 내용과 user2.json 내용을 합쳐 객체로 리턴되어야 합니다