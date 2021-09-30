var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

async function getNewsAndWeatherAsync() {
  // TODO: async/await 키워드를 이용해 작성합니다
  let json1 = await fetch(newsURL).then((response) => response.json());
  let json2 = await fetch(weatherURL).then((response) => response.json());

  return {
    news: json1.data,
    weather: json2
  }
}

/*
const readAllUsersAsyncAwait = async () => {
  let result1 = await getDataFromFilePromise(user1Path);
  let result2 = await getDataFromFilePromise(user2Path);
  let result = `[${result1},${result2}]`;

  return JSON.parse(result);
}
*/

/*
function getNewsAndWeather() {
  // TODO: fetch을 이용해 작성합니다
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  return fetch(newsURL).then((response) => response.json()).then((json1) => {
                        return fetch(weatherURL)
                              .then((response) => response.json())
                              .then((json2) => {
                                return{
                                  news: json1.data,
                                  weather: json2
                                }
                              })
                      })
}
*/

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync
  }
}

/*
async 키워드를 사용한 함수는 AsyncFunction의 인스턴스입니다‣
/data/latest 의 응답 내용과 /data/weather 응답 내용을 합쳐 새로운 객체로 리턴되어야 합니다‣
async/await을 활용하세요. 총 두 번 사용해야 합니다
*/