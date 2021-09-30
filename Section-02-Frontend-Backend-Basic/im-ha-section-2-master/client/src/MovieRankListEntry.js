import React from 'react';

export default function MovieRankListEntry ({movie, handleCardClick}) {

  /*
    ✓ props로 전달받은 영화의 제목을 표현해야 합니다. 
    ✓ props로 전달받은 영화의 평점을 표현해야 합니다. 
    ✓ props로 전달받은 영화의 러닝 타임을 표현해야 합니다. 
    ✓ props로 전달받은 영화의 장르들을 표현해야 합니다. 
    ✓ 각각의 genre를 key로 지정하여 genres.map을 실행해야 합니다. 
  */

  const { //구조분해 할당
    runtime,
    rating,
    title, 
    medium_cover_image, 
    genres
  } = movie; //영화 띄워야할것들.

  return (
    <div className='card'>
      <div style={{ flex: 3 }}>
        <img
          width='100%'
          height='100%'
          src={medium_cover_image}
          alt = ''
        />
      </div>
      <div style={{ flex: 7 }}>
        <h3 className='title'>{title}</h3>
        <p className='rating'>Rating: {rating}</p>
        <p className='running-time'>Running Time: {runtime} min</p>
        <p>Genres</p>
        <div className='tag-list'>
          {genres.map((genre) => (
            <div className='tag' key={genre}>{genre}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
