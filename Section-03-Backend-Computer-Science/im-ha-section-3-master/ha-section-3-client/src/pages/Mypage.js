import React from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

function Mypage ({ userinfo, handleLogout }) {
  // <Mypage userinfo={userinfo} handleLogout={handleLogout} />: app.js
  // TODO : props로 받은 유저정보를 화면에 표시하세요.
  return (
    <div>
      {userinfo && (
        <center>
          <h1>Mypage</h1>
            <div className='username'>{/* 이름 */userinfo.username}</div>
            <div className='email'>{/* 이메일 */userinfo.email}</div>
            <div className='mobile'>{/* 전화번호 */userinfo.mobile}</div>
            <button className='btn btn-logout' onClick={handleLogout}>
              logout
            </button>
        </center>
      )}
    </div>
  );
}

export default Mypage;
