const flights = require('../repository/flightList');

module.exports = {
  // [GET] /flight
  // 요청 된 departure_times, arrival_times, destination, departure 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  findAll: async (req, res) => {
    //TODO:  GET /flight?departure_times=2021-12-03T12:00:00&arrival_times=2021-12-03T12:00:00를 입력하면 조건에 해당하는 객체를 리턴해야 합니다 (28 ms)
    const queries = Object.keys(req.query); //얘는 배열
    let arr = flights.slice(0); //넣어둘 배열 - 복사본
    if(queries.length >= 1){ // 저 4개의 요청 값 - 적어도 1개 이상의 요청이 들어온 경우?
      for(let i = 0; i < queries.length; i++){ //배열 순회
        arr = arr.filter((item) => {//item은 배열 안의 요소 => 객체 덩어리 하나하나 를 거른다.
          return (req.query[queries[i]] === item[queries[i]])
          //요청 조건 값이 데이터 조건 값의 일치여부
        });
        //배열에 새로운 내용을 할당. -> 쿼리 요소의 필터링 결과물
      }
      return res.status(200).json(arr); //전송 후 종료.
    }
    return res.json(flights); //else에 해당
  },
  // [GET] /flight/{:id} -> 엔드포인트가 더 붙음.
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 조회합니다.
  findById: async (req, res) => {
    // /GET /flight/{:id} 요청의 응답 객체는 `uuid, departure, destination, departure_times, arrival_times`를 포함해야 합니다
    const arr = flights.filter((item) => {
      return (req.params.id === item.uuid)
    })
    return res.status(200).json(arr); //전송 후 종료.
  },

  // [PUT] /flight/{:id} 요청을 수행합니다.
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 요청 된 Body 데이터로 수정합니다.
  update: async (req, res) => {
    /*
    ✕ PUT /flight/{:id} 요청의 업데이트 된 객체를 반환해야 합니다 (5 ms)
    ✕ PUT /flight/{:id} 요청의 일부 데이터만 업데이트 된 객체를 반환해야 합니다 (3 ms)
    */
    let idx = flights.findIndex((item) => {
      return (req.params.id === item.uuid)
    });//요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터 -> 인덱스를 찾는다.
    let data = flights[idx]; //그 인덱스에 해당하는 객체 요소를 할당. -> 참조 자료형이니까.
    //데이터를 수정 (여기서 바꾸기.)
    for(let key in req.body){ //수정 요청의 키를 순회
      data[key] = req.body[key]; //데이터 키에 해당하는 요청 키값으로 바꾼다.
    }
    return res.status(200).json(data);
  }
};