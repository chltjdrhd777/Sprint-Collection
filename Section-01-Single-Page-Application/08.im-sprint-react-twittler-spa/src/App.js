import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// TODO - react-router-dom을 설치 후, import 구문을 이용하여 BrowserRouter, Route, Switch 컴포넌트를 불러오세요.

import Sidebar from './Sidebar';
import Tweets from './Pages/Tweets';
import MyPage from './Pages/MyPage';
import About from './Pages/About';
// TODO - import문을 이용하여 MyPage, About 컴포넌트를 불러오세요.

const App = () => {
  return (    
    <BrowserRouter>
        <div className="App">
          <main>
            <Sidebar />
            <section className="features">
              {/* TODO - Switch와 Route 컴포넌트를 이용하여 경로(path)를 설정하고 Tweets, Mypage, About 컴포넌트를 연결합니다. */}
              <Switch>
                <Route exact path="/">
                  <Tweets />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/mypage">
                  <MyPage />
                </Route>
                  </Switch>
            </section>
          </main>
        
    

    </div>
    </BrowserRouter>
    
  );
};

// ! 아래 코드는 수정하지 않습니다.
export default App;
