const airports = require('../repository/airportList');

module.exports = {
  // [GET] /airport?query(이름)={query}(쿼리값-데이터) 요청을 수행합니다. 
  //엔드포인트가 에어포트까지 ? 뒤부터는 쿼리!
  
  // 공항 이름 자동완성 기능을 수행합니다!
  findAll: async (req, res) => {
    if (req.query.query !== undefined) { //쿼리가 있으면
      console.log(req.query);
      const list = airports.filter((item) => {
        return item.code.includes(req.query.query.toUpperCase());
      });
      return res.status(200).json(list); //필터링한 것을 보내고, 여기서 종료를 시캄
    }
    //else인 경우 - 쿼리가 없는 경우의 시작점
    res.json(airports); //쿼리가 없는 경우의 시작점 - 공항 리스트 째로 json으로 넘겨버린다.
  }
};
