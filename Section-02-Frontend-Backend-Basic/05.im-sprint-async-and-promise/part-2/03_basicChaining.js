const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

// HINT: getDataFromFilePromise(user1Path) 맟 getDataFromFilePromise(user2Path) 를 이용해 작성합니다
const readAllUsersChaining = () => {
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  return getDataFromFilePromise(user1Path).then((user1) => {
    return getDataFromFilePromise(user2Path).then((user2) => {
      return `[${user1},${user2}]`
    })
  }).then((result)=>JSON.parse(result))
}

// readAllUsersChaining();

module.exports = {
  readAllUsersChaining
}
//  ● Basic chaining Test › readAllUsersChaining › 체이닝의 결과가 Promise 형태로 리턴되어야 합니다
//  ● Basic chaining Test › readAllUsersChaining › user1.json의 내용과 user2.json 내용을 합쳐 객체로 리턴되어야 합니다
//  ● Basic chaining Test › readAllUsersChaining › fs module을 직접 사용하지 말고, getDataFromFilePromise을 두 번 사용해야 합니다
//  ● Basic chaining Test › readAllUsersChaining › Promise.all 또는 async/await을 사용하지 않고 풀어보세요