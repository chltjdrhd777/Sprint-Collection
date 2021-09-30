/*const sleep = (wait) => {
  return new Promise((resolve) => {
    setTimeout(resolve, wait); //단순히 리졸브 함수만
  });
}*/

const sleep = (wait) => {
  return new Promise((resolve) => {
    setTimeout(() => { //여기는 인자를 주는
      resolve('hello world'); //resolve인자로 헬로우를 준다.
    }, wait);
  }); //helo world가 나옴.
};
/*const sleep = (wait) => {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      reject(new Error('에러 발생'));
    }, wait);
  });//Uncaught Error: 에러at 02_promiseConstructor.js:17
  //02_promiseConstructor.js:18 Uncaught Error: 에러 발생

}*/
/*
const sleep = (wait) => {
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve("helllo");
    }, wait);
  })
};//helllo
*/
/*
() => {
      resolve('helllo');
    }, => resolve
*/