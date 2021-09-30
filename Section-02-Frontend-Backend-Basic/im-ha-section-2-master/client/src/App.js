import { useState, useEffect } from 'react';
import Header from './Header';
import MovieRankList from './MovieRankList';
import CurrentMovie from './CurrentMovie';

// 기본값으로 주어지는 영화 목록은 다음을 이용하세요.
import mockMovie from './mockMovie';
import { getMovies } from './api/movieDataApi';

/*
App test
  ✓ `현재 선택한 영화`라는 상태와 `영화 목록`은 상태로 다뤄져야 합니다. 
  ✕ 영화 목록 클릭 시, 현재 영화정보를 업데이트해야 합니다. 
  ✓  mockMovie 대신, 직접 REST API를 호출하도록 바꿉니다 
*/

export const App = () => {

  const [currentMovie, setCurrentMovie] = useState(mockMovie[0]);
  const [movies, setMovies] = useState(mockMovie);

  useEffect(() => {
    getMovies().then(data => {
      setMovies(data);
      setCurrentMovie(data[0]);
    })
  }, [currentMovie]);

  const handleCardClick = (movie) => {
    console.log('영화 목록을 클릭했군요!');
    // TODO: 현재 선택한 영화가 바뀌어야 합니다
    setCurrentMovie(movie);
  };

  global.handleCardClick = handleCardClick; 
  // 이 코드는 테스트를 위한 코드입니다. 실행에는 지장이 없지만, 지우면 테스트를 통과하지 않을 수 있습니다.

  return (
    <>
      <div className='header'>
        <Header />
      </div>
      <div className='body'>
        <CurrentMovie movie={currentMovie}/>
        <MovieRankList handleClick={handleCardClick} movies={movies} />
      </div>
    </>
  );
};
