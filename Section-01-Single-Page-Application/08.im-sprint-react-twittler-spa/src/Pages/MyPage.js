import React from "react";
import { dummyTweets } from "../static/dummyData";
import "./MyPage.css";
import Footer from "../Footer";
// ! 위 코드는 수정하지 않습니다.

// TODO - import문을 이용하여 Footer 컴포넌트를 불러옵니다.

const MyPage = () => {
  const filteredTweet = dummyTweets.filter(el=>el.username === "kimcoding");
  // TODO - filter 메소드를 이용하여 username이 kimcoding인 요소만 있는 배열을 filteredTweet에 할당합니다.
  const filteredTweets = dummyTweets;

  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">
            <img src={filteredTweets[0].picture} />
          </div>
          <div className="myInfo__detail">
            <p className="myInfo__detailName">
              {filteredTweets[0].username} Profile
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
        </div>
      </div>
      <ul className="tweets__mypage">
        {/* TODO : dummyTweets중 kimcoding 이 작성한 트윗 메세지만 있어야 합니다. 
        filteredtweet은 객체가 아니라 배열이므로, filteredtweet.id를 하면 당연 안나오겠구나!! 배열이니까 그래서 [0]을
        쓰는 이유가 배열의 요소를 지정해서 거기의 키에 해당하는 값을 받은거지.*/}
        <li className="tweet" id={filteredTweet[0].id}>
          <div className="tweet__profile">
            <img src={filteredTweet[0].picture} />
          </div>
          <div className="tweet__content">
            <div className="tweet__userInfo">
              <span className="tweet__username">{filteredTweet[0].username}</span>
              <span className="tweet__createdAt">{filteredTweet[0].createdAt}</span>
            </div>
            <div className="tweet__message">{filteredTweet[0].content}</div>
          </div>
        </li>
      </ul>
      <Footer />
    </section>
  );
};

export default MyPage;
