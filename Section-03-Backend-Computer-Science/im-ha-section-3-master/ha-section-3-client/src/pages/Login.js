import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function Login ({ handleResponseSuccess }) {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  const handleLogin = () => {
    // TODO : 서버에 로그인을 요청하고, props로 전달된 callback을 호출합니다.
    // TODO : 이메일 및 비밀번호를 입력하지 않았을 경우 에러를 표시해야 합니다.
    const { email, password } = loginInfo; //입력 로그인 정보
    if(!email || !password){ // 하나라도 만족 못하는 경우
      setErrorMessage('이메일과 비밀번호를 입력하세요'); //에러 메시지
    } else { // 전부 만족하는 경우
      axios.post('https://localhost:4000/signin', loginInfo) //post
        .then((response) => { //성공하면
          setErrorMessage(''); //에러 메시지 초기화
          handleResponseSuccess(); //콜백 함수 호출
        })
    }
  };
  return (
    <div>
      <center>
        <h1>Sign In</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <span>이메일</span>
            <input type='email' onChange={handleInputValue('email')} />
          </div>
          <div>
            <span>비밀번호</span>
            <input
              type='password'
              onChange={handleInputValue('password')}
            />
          </div>
          <div>
            <Link to='/signup'>아직 아이디가 없으신가요?</Link>
          </div>
          <button className='btn btn-login' type='submit' onClick={handleLogin}>
            로그인
          </button>
          <div className='alert-box'>{errorMessage}</div>
        </form>
      </center>
    </div>
  );
}
