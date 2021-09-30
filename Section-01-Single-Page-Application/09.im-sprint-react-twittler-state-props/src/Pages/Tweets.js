// TODO : useState를 react로 부터 import 합니다.
import React, { useState } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';

const Tweets = () => {
  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.
  const [user, setUser] = useState('parkhacker');
  const [msg, setMsg] = useState('');
  const [submit, setSubmit] = useState(dummyTweets);
  const [id, setId] = useState(5);
  //셋 유저 셋 메시지 셋 서브밋에의
  //유즈스테이트 안의 값은 초기값

  const handleButtonClick = (event) => {
    //const tweet = {submit ? "fal"};
    const tweet={}
    tweet.id = submit.length + 1;
    tweet.username = user;
    tweet.content = msg;
    tweet.picture = `https://randomuser.me/api/portraits/men/98.jpg`;
    tweet.createdAt = new Date().toLocaleDateString('ko-kr');

    setSubmit([tweet, ...submit]);
    setId(id + 1);
    //버튼이 1번 클릭될때마다 1씩 늘어나라.

    //원래 초기트윗들을 스프레드로 받고
    //새 트윗들이 추가되는 형식으로.
    // TODO : Tweet button 엘리먼트 클릭시 작동하는 함수를 완성하세요.
    // 트윗 전송이 가능하게 작성해야 합니다.
  };

  const handleChangeUser = (event) => {
    setUser(event.target.value);
    // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
  };

  const handleChangeMsg = (event) => {
    setMsg(event.target.value);
    // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
  };

  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  value={user}
                  onChange={handleChangeUser}
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                ></input>
                {/*TODO : 트윗을 작성할 수 있는 textarea 엘리먼트를 작성하세요.*/}
                <textarea
                  type="text"
                  value={msg}
                  onChange={handleChangeMsg}
                  placeholder="your tweet here.."
                  className="tweetForm__input--message"
                ></textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
                  {`total: ${id}`}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
              <button className ="tweetForm__submitButton"
                      value={submit}
                      onClick={handleButtonClick}>
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser"></div>
      <ul className="tweets">
        {/* TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다. */}
        {submit.map((el)=>(
           <div><Tweet tweet={el} /></div>
        ))}
       {/* 
       el 하나하나가 배열 인덱스 번호니, 요 요소를 tweet 그 프롭스에 넣어줍니다. 객체의 형태로
       

       <Tweet tweet={dummyTweets[0]} />
        <Tweet tweet={dummyTweets[1]} />
        <Tweet tweet={dummyTweets[2]} />
        <Tweet tweet={dummyTweets[3]} />
        <Tweet tweet={dummyTweets[4]} />*/}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;

/* 
  const [tweetList, setTweetList] = useState(dummyTweets);
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');
  

  const handleButtonClick = (event) => {
    const newTweet = {};
    newTweet.id = tweetList.length + 1;
    newTweet.username = user;
    newTweet.content = message;
    newTweet.picture = `https://randomuser.me/api/portraits/men/98.jpg`;
    newTweet.createdAt = new Date().toLocaleDateString('ko-kr');

    setTweetList([newTweet, ...tweetList]);
    유저를 받아 수정?이 일어나면 핸들체인지유저 함수가 호출 그래서 렌더링

    */