// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

let elInputUsername = document.querySelector('#username');
let elInputPassword = document.querySelector('#password');
let elInputPasswordRetype = document.querySelector('#password-retype');

// elFailureMessage.style.display = 'none';
// elFailureMessage.classList.remove('hide');

let elFailureMessage = document.querySelector('.failure-message');
let elSuccessMessage = document.querySelector('.success-message');

let elmismatchMessage = document.querySelector('.mismatch-message');
let elmatchMessage = document.querySelector('.match-message');

let elInputPhoneNumber = document.querySelector('#digits');
let elCorrectNumber = document.querySelector('.numbers');
let elIncorrectNumber = document.querySelector('.non-numbers');

let elSignUpButton = document.querySelector('#sign-up');
//let elClickButton = document.querySelect
// onkeyup 키보드 눌리면
// function() 이벤트 핸들러

elInputUsername.onkeyup = function (){ // 아이디 입력창에 글자를 키보드로 입력할 떄
  console.log(elInputUsername.value);

  if(isMoreThan4Length(elInputUsername.value)){   // 글자수가 4개 이상이면
    elSuccessMessage.classList.remove('hide');   // 사용할 수 있는 아이디 입니다 메시지 출력
    elFailureMessage.classList.add('hide');
  }
  else{
    elSuccessMessage.classList.add('hide');
    elFailureMessage.classList.remove('hide');
  }
}

elInputPassword.onkeyup = function(){
  console.log(elInputPassword.value);
}

elInputPasswordRetype.onkeyup = function(){
  console.log(elInputPasswordRetype.value);

  if(isMatch(elInputPassword.value,elInputPasswordRetype.value)){
    elmatchMessage.classList.remove('hide');
    elmismatchMessage.classList.add('hide');
  }
  else{
    elmismatchMessage.classList.remove('hide');
    elmatchMessage.classList.add('hide');
  }
}

elInputPhoneNumber.onkeyup = function(){
  if(onlyNumbers(elInputPhoneNumber.value)){
    elCorrectNumber.classList.remove('hide');
    elIncorrectNumber.classList.add('hide');
    console.log(elInputPhoneNumber.value);
  }

  else{
    elCorrectNumber.classList.add('hide');
    elIncorrectNumber.classList.remove('hide');
    console.log(elInputPhoneNumber.value);
  }
}

elSignUpButton.onclick = function() {
  if(noClick(elInputPhoneNumber.value,elInputUsername.value,elInputPassword.value,elInputPasswordRetype.value)){
    alert('회원가입란을 전부 채우세요');
  }
}

function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value.length >= 4
}

/*[비밀번호 확인] 입력창에서 값을 입력(keyup)하면
[비밀번호] 값과 [비밀번호 확인] 값이 일치하는지 확인하고,
일치하지 않은 경우, 불일치 메시지를 화면에 표시합니다.*/

function isMatch (password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return String(password1) === String(password2);
}

//추가 도전 과제
//전화번호 숫자가 아니면 잘못된 입력이라는 피드백 [@]
//회원가입버튼이 활성화가 되어있는데 저 위에 칸 3개 다 안채우면 활성화가 안되게 []

function onlyNumbers(phonevalue){
  //let newValue = Number(value);
  //return (typeof(value)==='number')//숫자인지 판단해줌
  /*if(Number.isInteger(Number(phonevalue)) === true){
    return true
  }
  else return false*/

  return(Number.isInteger(Number(phonevalue)));

 /* let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for(let i = 0; i < phonevalue.length; i++){ //폰밸류랑 관련 있음
    for(let j = 0; j < alphabet.length; j++){ //알파벳 문자열과 관련
      if(phonevalue[i] === alphabet[j]){ // 
        return false
      }
    }
  }
  return true //매우 신박함!!!!! 이중포문 공부바람!!!
  */
}

function noClick(phone, id, password, passwordConfirmation){
  if (phone === '' || id === '' || password === '' || passwordConfirmation === ''){
    return true
  }
  else {
    return false
  }
}