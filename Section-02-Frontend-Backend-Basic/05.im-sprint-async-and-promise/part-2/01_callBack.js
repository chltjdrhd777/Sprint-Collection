const fs = require("fs");

//  ● callback Test › getDataFromFile › 파일을 읽고 나서 callback이 실행되어야 합니다
//  ● callback Test › getDataFromFile › 에러가 발생할 경우, callback 첫번째 인자에 에러 객체가 전달되어야 합니다
//  ● callback Test › getDataFromFile › callback 두번째 인자에 파일 내용이 전달되어야 합니다
const getDataFromFile = function (filePath, callback) {
  // TODO: fs.readFile을 이용해 작성합니다
  fs.readFile(filePath, function (err, data) {
    if(err){//에러가 발생한 경우
      callback(err, null);//콜백의 에러에 에러가 전달, 데이터는 파일을 못읽었으니 널이 전달
    }
    else{//그외의 경우 즉, 에러가 발생 안하면
      callback(null, data.toString());//당연 에러가 안났으니 에러에는 널값을 데이터의 내용을 불러오는거니 데이터 투 스트링
    }
  })
};

/*
fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});
*/

// getDataFromFile('README.md', (err, data) => console.log(data));

module.exports = {
  getDataFromFile
};

