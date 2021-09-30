const express = require('express');
const cors = require('cors');

// HINT: 영화 데이터는 다음 movies 변수를 이용하세요
/*
  ✓ 모든 영화의 정보를 요청받은 경우, 응답의 상태 코드는 200으로 설정되어야 합니다 (5017ms)
  ✓ 모든 영화의 정보를 요청받은 경우, 응답으로 모든 영화의 정보를 보내줘야 합니다 (5006ms)
  ✓ 특정 id에 대한 영화정보를 요청받은 경우, 해당하는 영화의 정보를 응답으로 보내줘야 합니다 (5002ms)
  ✓ 요청받은 영화의 id가 존재하지 않는경우, 응답의 상태 코드는 404으로 설정되어야 합니다. (5001ms)
*/

const { movies } = require('./data.json');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/movies', (req, res) => {
  // 여기가 모든 영화 정보 보내는 곳
  res.status(200).json(movies)
});

app.get('/movies/:id', (req, res) => {
  // 여기가 특정 아이디 거름망
  const filtered = movies.filter((item) => item.id === Number(req.params.id));
  if(filtered.length > 0){
    return res.status(200).json(filtered[0])
  }
  else{
    return res.status(404).json(null)
  }
});

// 테스트를 위한 코드입니다. 수정하지 마세요.
if (process.env.NODE_ENV !== 'test') {
  app.listen(3001, () => {
    console.log('server listen on 3001');
  });
}

module.exports = app;
