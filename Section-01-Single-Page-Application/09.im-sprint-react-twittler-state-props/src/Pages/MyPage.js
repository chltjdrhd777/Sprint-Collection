import React from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './MyPage.css';
import dummyTweets from '../static/dummyData';

const MyPage = () => {
  const filteredTweets = dummyTweets.filter(
    (tweet) => tweet.username === "parkhacker");
    //필터를 써서 유저네임이 박해커씨인지 판단?
   // TODO : 주어진 트윗 목록(dummyTweets)중 현재 유져인 parkhacker의 트윗만 보여줘야 합니다.

  return (
    <section className="myInfo">
      {filteredTweets.map(tweet =>{
        return(
          <div>
            <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">
            <img src={tweet.picture} />
          </div>
          <div className="myInfo__detail">
            <p className="myInfo__detailName">
              {tweet.username} Profile
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
        </div>
      </div>
      <ul className="tweets__mypage">
        <Tweet tweet={tweet}/>
        {/* TODO : 주어진 트윗 목록(dummyTweets)중 현재 유져인 parkhacker의 트윗만 보여줘야 합니다. */}
      </ul>
      <Footer />
          </div>
        )
      })}
    </section>
  );
};
        
      {/*<div className="myInfo__container">
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
        <Tweet tweet={filteredTweets[0]} />
        {/*filteredTweets.map((tweet)=>{
          return(
            <Tweet tweet={tweet.content}/>
          );
        })*/}
        {/* TODO : 주어진 트윗 목록(dummyTweets)중 현재 유져인 parkhacker의 트윗만 보여줘야 합니다. */}
     

export default MyPage;
