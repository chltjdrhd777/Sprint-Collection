import React from 'react';
import MovieRankListEntry from './MovieRankListEntry';

export default function MovieRankList ({movies, handleCardClick}) {
  return (
    <div className='right-movie-list'>
      {/*
        TODO : props로 받아온 영화정보의 갯수 만큼 MovieRankListEntry를 렌더링합니다.
          (1) props로 빈 배열을 받은 경우, MovieRankListEntry가 존재하지 않고 `영화 목록이 비었습니다` 라는 문구를 표시해야 합니다. 조건부 렌더링을 활용해 보세요.
          (2) 각 MovieRankListEntry는 고유의 key를 가지고 있어야 합니다.
          (3) 각 MovieRankListEntry 컴포넌트를 클릭하면 handleCardClick 메소드가 실행됩니다.
      */
        movies.length > 0 ?
        movies.map((item) => (
          <MovieRankListEntry key={item.id} movie={item} handleCardClick={handleCardClick} />
        )) :
        `영화 목록이 비었습니다`
      }
    </div>
  );
}
/*
  ✓ props로 빈 배열을 받은 경우, MovieRankListEntry가 존재하면 안됩니다.
  ✓ props로 빈 배열을 받은 경우, 리스트 대신 `영화 목록이 비었습니다` 라는 문구를 표시해야 합니다.
  ✓ props에 담긴 영화정보의 갯수 만큼 MovieRankListEntry를 렌더링해야 합니다.
  ✓ MovieRankListEntry를 여러개 출력할 때, 고유의 key를 가지고 있어야 합니다
*/