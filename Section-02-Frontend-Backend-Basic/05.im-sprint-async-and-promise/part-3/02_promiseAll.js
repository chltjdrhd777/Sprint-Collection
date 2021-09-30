var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다
  return Promise.all([fetch(newsURL),fetch(weatherURL)])
    .then(([result1, result2]) => { // 두 url 모두에 fetch를 적용
        return Promise.all([result1.json(), result2.json()]) //리절트1이랑 리절트2를 각각 json형식으로 변형
    })
    .then(([json1, json2]) => {
      return {// 그 결과를 각각 json1, json2라고 할 때 
        news: json1.data, // 다음과 같은 객체로 리턴한다.
        weather: json2
      }
    })
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}

/*
Promise 형태로 리턴되어야 합니다‣
Promise.all을 사용해서 풀어야 합니다‣
/data/latest 의 응답 내용과 /data/weather 응답 내용을 합쳐 새로운 객체로 리턴되어야 합니다
*/