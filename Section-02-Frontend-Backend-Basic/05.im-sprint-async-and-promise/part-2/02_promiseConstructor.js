const fs = require("fs");

const getDataFromFilePromise = filePath => {
  return new Promise((resolve, reject) => {//프로미스 리턴
    fs.readFile(filePath, (err, data) => {//리드파일 사용
      if(err){//에러가 발생하면
        reject(err);//실패한거니까 에러를 리젝트에 담는다
      }//그게 아니면
      else resolve(data.toString());//데이터의 내용을 리졸브에 담는다 성공한거니까
    });
  })
  // TODO: Promise 및 fs.readFile을 이용해 작성합니다.

};

// getDataFromFilePromise('README.md').then(data => console.log(data));

module.exports = {
  getDataFromFilePromise
};

//  ● Promise Test › getDataFromFilePromise › Promise 형태로 리턴되어야 합니다
//  ● Promise Test › getDataFromFilePromise › then 블록을 통하여 파일 내용이 전달되어야 합니다
//  ● Promise Test › getDataFromFilePromise › 에러가 발생할 경우, catch 블록을 통하여 에러 객체가 전달되어야 합니다

