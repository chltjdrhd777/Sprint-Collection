import fetch from 'node-fetch';

export function getMovies () {
  const endpoint = 'https://okie249pmk.execute-api.ap-northeast-2.amazonaws.com/movies';

  // TODO: fetch를 이용해 endpoint로부터 영화 정보를 받아오세요

  return fetch(endpoint).then(res => res.json())
}
