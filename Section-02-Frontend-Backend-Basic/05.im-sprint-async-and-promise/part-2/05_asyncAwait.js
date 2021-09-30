const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsersAsyncAwait = async () => {
  let result1 = await getDataFromFilePromise(user1Path);
  let result2 = await getDataFromFilePromise(user2Path);
  let result = `[${result1},${result2}]`;

  return JSON.parse(result);
}

// readAllUsersAsyncAwait();

module.exports = {
  readAllUsersAsyncAwait
}
//  ● async/await Test › readAllUsersAsyncAwait › async 키워드를 사용한 함수는 AsyncFunction의 인스턴스입니다
//  ● async/await Test › readAllUsersAsyncAwait › await 키워드만 이용해 배열이 리턴되어야 합니다
//  ● async/await Test › readAllUsersAsyncAwait › user1.json의 내용과 user2.json 내용을 합쳐 배열로 리턴되어야 합니다
