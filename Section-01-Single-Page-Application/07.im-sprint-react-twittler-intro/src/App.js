import React from 'react';
import './App.css';
import { dummyTweets } from './static/dummyData';
// ! 위 코드는 수정하지 않습니다.
console.log(dummyTweets) // 개발 단계에서 사용하는 더미 데이터입니다.

const Sidebar = () => {
  return (
    <section className="sidebar">
      {/* TODO : 메세지 아이콘을 작성합니다. */}
      <i class="far fa-comment-dots"></i>
    </section>
  );
};

const Counter = () => {
  return (
    <div className="tweetForm__input">
      <div className="tweetForm__inputWrapper">
        <div className="tweetForm__count" role="status">
        <div>total : {dummyTweets.length}</div>
          {/*TODO : dummyTweet로 전달되는 데이터의 갯수를 보여줍니다. 더미트윗 객체 안에 수가 5개니 이걸 렝스로 받아오자*/}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return <footer>Copyright @ 2021 Code States</footer>;
};
/*TODO : Footer 함수 컴포넌트를 작성합니다. 시멘틱 엘리먼트 footer가 포함되어야 합니다. 말 그대로 풋터
나타내는 태그를 넣어라. 시멘틱 태그가 태그 특성을 아주 잘 보여준다!*/


const Tweets = () => {
  
  
  return (
    <ul className="tweets">
      {dummyTweets.map((tweet) => {
        
        const isParkHacker = tweet.username === 'parkhacker'

        const tweetUserNameClass = isParkHacker
                ? 'tweet__username tweet__username--purple'
                : 'tweet__username';

        return (
          <li className="tweet" key={tweet.id}>
            <div className="tweet__profile">
              {/* TODO: 트윗 저자의 프로필 사진이 있어야 합니다. 
              하나씩 숫자를 늘려가라!
              배열이라 배열 해당하는 번호에 해당하는 사진을 가져와야함 */}
              <img src = {tweet.picture} />
              {/*위에 넘버하고 아래 넘버++ 인덱스를 초과할까봐라는 초과하면 undefined가 나오니까 2번씩 
              계산을 거치게 되므로 통째로 맵을 돌기 때문에 더하기는 한 번만*/}
            </div>
            <div className="tweet__content">
              <div className="tweet__userInfo">
                {/* TODO : 유져 이름이 있어야 합니다. */}
                {/*<span className="tweet__username">{dummyTweets[number].username}</span>*/}
                {/*저 삼항 연산자따라서 클래스 이름이 바뀌니까 기존의 유저는 저 위꺼를 지워야함. 안그럼 중복*/}
                {/* TODO : 이름이 "parkhacker"인 경우, 이름 배경색을 rgb(235, 229, 249)으로 바꿔야 합니다. */}
                <span className={tweetUserNameClass}>{tweet.username}</span>
                {/* TODO : 트윗 생성 일자가 있어야 합니다. */}
                <span className="tweet__createdAt">{tweet.createdAt}</span>
              </div>
              <div className="tweet__message">{tweet.content}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const Features = () => {
  return (
    <section className="features">
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile"></div>
          <Counter />
        </div>
      </div>
      <Tweets />
      <Footer />
      {/*TODO : Footer 컴포넌트를 작성합니다.*/}
    </section>
  );
};

const App = () => {
  return (
    <div className="App">
      <main>
        <Sidebar />
        <Features /> 
      </main>
    </div>
  );
};

// < /> : 셀프클로징태그 이 안의 모든 내용이 다 들어가게 된다.
// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Counter, Tweets, Features, Footer };
