import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';
import axios from 'axios';
import './App.css';

export default function App () {
  const [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserinfo] = useState(null);
  const history = useHistory();
  const isAuthenticated = () => {
    // TODO: 이제 인증은 성공했습니다. 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꿉시다.
    axios.get('https://localhost:4000/user') //get
      .then((response) => { //성공한 경우
        setUserinfo(response); //사용자 정보 업데이트
        setIsLogin(true); // 로그인 성공했으므로 true 바꾸기
        history.push("/");
      }).catch((err) => console.log(err)) //실패한 경우
  };
  const handleResponseSuccess = () => {
    isAuthenticated();
  };
  const handleLogout = () => {
    axios.post('https://localhost:4000/signout').then((res) => {
      setUserinfo(null);
      setIsLogin(false);
      history.push('/');
    });
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <div>
      <Switch>
        <Route path='/login'>
          <Login
            isLogin={isLogin}
            handleResponseSuccess={handleResponseSuccess}
          />
        </Route>
        <Route exact path='/signup'>
          <Signup isLogin={isLogin} />
        </Route>
        <Route exact path='/mypage'>
          <Mypage userinfo={userinfo} handleLogout={handleLogout} />
        </Route>
        <Route path='/'>
          {isLogin ? <Redirect to='/mypage' /> : <Redirect to='/login' />}
        </Route>
      </Switch>
    </div>
  );
}
