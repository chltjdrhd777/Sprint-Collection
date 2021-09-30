import React from 'react';

/*
  CurrentMovie test
  ✓ props로 전달받은 현재 영화의 제목을 표현해야 합니다. (5 ms)
  ✓ props로 전달받은 현재 영화의 포스터(medium 사이즈)를 표현해야 합니다. (3 ms)
  ✓ props로 전달받은 현재 영화의 평점을 표현해야 합니다. (1 ms)
  ✓ props로 전달받은 현재 영화의 러닝 타임을 표현해야 합니다. (2 ms)
  ✓ props로 전달받은 현재 영화의 설명을 표현해야 합니다. (28 ms)
  ✓ 영화 정보를 넘기지 않으면, `영화를 선택하세요`라는 메시지를 표시해야 합니다. (2 ms)
  ✓ 아무런 영화 정보를 넘기지 않아도 렌더링할 때에 문제가 없어야 합니다. (2 ms)

*/

export default function CurrentMovie ({movie}) {

  if(!movie){
    return `영화를 선택하세요`
  }

  const { //구조분해 할당
    runtime,
    rating,
    title, 
    medium_cover_image, 
    description_full
  } = movie; //영화 띄워야할것들.

  // if(!movie){ => 이러니까 테스트를 통과를 안하는디
  //   return `영화를 선택하세요` => 애네들을 맨 위로 올려야 통과가 됨.
  // }

  return (
    <>
      <div className='left-current-side'>
        <div className='current-movie'>
          <h1 className='title'>{title}</h1>
          <img className='thumbnail' src={medium_cover_image} alt='thumbnail' />
          <p className='rating'>rating : {rating}</p>
          <p className='running-time'>runtime : {runtime}min</p>
          <p>description</p>
          <p className='description'>{description_full}</p>
        </div>
      </div>
    </>
  );
}
