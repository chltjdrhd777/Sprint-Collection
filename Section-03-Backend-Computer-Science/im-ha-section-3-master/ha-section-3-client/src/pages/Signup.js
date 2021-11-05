import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function Signup () {
  const [userinfo, setuserinfo] = useState({
    email: '',
    password: '',
    username: '',
    mobile: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };
  const handleSignup = () => {
    // TODO : 서버에 회원가입을 요청 후 로그인 페이지로 이동하세요.
    //        회원가입 성공 후 로그인 페이지 이동은 다음 코드를 이용하세요.
    //
    //        history.push("/");
    //
    // TODO : 모든 항목을 입력하지 않았을 경우 에러를 표시해야 합니다.
    const { email, password, mobile, username } = userinfo; //사용자 정보
    if(!email || !password || !mobile || !username){ //하나라도 만족 못하는 경우
      setErrorMessage("모든 항목은 필수입니다"); //에러 메시지 띄우기
    } else{ //전부 만족하는 경우
      axios.post('https://localhost:4000/signup', { //post
        email, password, mobile, username
      }).then((response) => { //성공하면
        history.push("/");
        setErrorMessage(''); //에러 메시지 초기화
      })
    }
  };
  return (
    <div>
      <center>
        <h1>Sign Up</h1>
        <div>모든 항목은 필수입니다</div>
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
            <span>이름</span>
            <input type='text' onChange={handleInputValue('username')} />
          </div>
          <div>
            {' '}
            <span>전화번호</span>{' '}
            <input type='tel' onChange={handleInputValue('mobile')} />
          </div>
          <div>
            <Link to='/login'>이미 아이디가 있으신가요?</Link>
          </div>
          <button
            className='btn btn-signup'
            type='submit'
            onClick={handleSignup}
          >
            회원가입
          </button>
          <div className='alert-box'>{errorMessage}</div>
        </form>
      </center>
    </div>
  );
}
