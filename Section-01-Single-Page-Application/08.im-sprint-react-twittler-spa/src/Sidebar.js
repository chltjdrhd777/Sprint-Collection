import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
// TODO - import문을 이용하여 react-router-dom 라이브러리의 Link 컴포넌트를 불러옵니다.

const Sidebar = () => {
  return (
    <section className="sidebar">
      {/* TODO : About 메뉴 아이콘과 Mypage 메뉴 아이콘을 작성하고 Link 컴포넌트를 이용하여 경로(path)를 연결합니다. */}
      <Link to="/">
        <i className="far fa-comment-dots"></i>
      </Link>
      <Link to="/about">
        <i className="far fa-question-circle"></i>
      </Link>
      <Link to="/mypage">
        <i className="far fa-user"></i>
      </Link>
    </section>
  );
};

export default Sidebar;
