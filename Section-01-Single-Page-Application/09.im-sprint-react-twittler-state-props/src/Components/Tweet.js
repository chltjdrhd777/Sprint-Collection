import React from 'react';
import './Tweet.css';

const Tweet = ({ tweet }) => {
  const parsedDate = new Date(tweet.createdAt).toLocaleDateString('ko-kr');
  {/*여기서 props가 tweet이고, 날짜 가져오는거니 크리에이티드엣. 그걸 파스드 데이트에 할당.
  new는 객체를 생성해준다*/}

  return (
    <li className="tweet" id={tweet.id}>
      <div className="tweet__profile">
        <img src={tweet.picture} />
        {/*여기서 props가 tweet이고, 사진속성이니까 픽쳐부분을 가져온다.*/}
      </div>
      <div className="tweet__content">
        <div className="tweet__userInfo">
          <div className="tweet__userInfo--wrapper">
            {/* TODO : 유져 이름이 있어야 합니다. */}
            <span className="tweet__username">{tweet.username}</span>
            {/* TODO : 트윗 생성 일자가 있어야 합니다. parsedDate를 이용하세요. */}
            {/*여기서 props가 tweet이고, 사진속성이니까 유저네임을 가져온다.*/}
            <span className="tweet__createdAt">{parsedDate}</span>
          </div>
        </div>
        <div className="tweet__message">
          {/*TODO : 트윗 메세지가 있어야 합니다.*/}
          {tweet.content}
          {/*여기서 props가 tweet이고, 콘텐츠를 가져온다.*/}
        </div>
      </div>
    </li>
  );
};

export default Tweet;
