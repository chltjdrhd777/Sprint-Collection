const flights = require('../repository/flightList');
// 항공편 예약 데이터를 저장합니다.
let booking = [];
/*
Book Router
  ✓ GET /book 요청의 응답은 배열의 형태여야 합니다 (4 ms)
  ✓ GET /book 요청은 파싱 가능한 JSON 문자열을 돌려줘야 합니다 (5 ms)
  ✕ POST /book 요청시, flight_uuid, name, phone 데이터가 객체로 저장되어야 합니다. (40 ms)
  ✕ GET /book?flight_uuid=af6fa55c-da65-47dd-af23-578fdba50bed 요청은 특정 항공편에 대한 모든 예약 객체를 반환해야 합니다 (9 ms)
  ✕ GET /book?phone=010-1234-5678 요청은 번호에 해당하는 예약 내역을 반환해야 합니다 (4 ms)
  ✕ Delete /book?phone=010-1234-5678 요청을 하면 예약 목록에서 파라미터 phone에 해당하는 데이터가 삭제되어야 합니다 (9 ms)
*/
module.exports = {
  // [GET] /book 요청을 수행합니다.
  // 전체 데이터 혹은 요청 된 flight_uuid, phone 값과 동일한 예약 데이터를 조회합니다.
  findById: async (req, res) => {
  //GET /book?flight_uuid=af6fa55c-da65-47dd-af23-578fdba50bed 요청은 특정 항공편에 대한 모든 예약 객체를 반환해야 합니다 (9 ms)
  //✕ GET /book?phone=010-1234-5678 요청은 번호에 해당하는 예약 내역을 반환해야 합니다 (4 ms)
    //const queries = Object.keys(req.query); 
    //let arr = booking.slice(0); //넣어둘 배열 - 복사본
    if(req.query.phone !== undefined){//내가 요청?한 쿼리에 핸드폰 번호가 있다면 바로 폰 번호에 해당하는 객체만 나온다. 
      let arr = booking.filter((item) => {
        return (item.phone === req.query.phone)
      });
      return res.status(200).json(arr[0]);
    }
    if(req.query.flight_uuid !== undefined){//쿼리에 id가 있다면 그 객체를 모두 나오게.
      let arr = booking.filter((item) => {
        return (item.flight_uuid === req.query.flight_uuid)
      });
      return res.status(200).json(arr);
    }
    return res.status(200).json(booking); //전송 후 종료.
  },
  //return res.status(200).json(booking); 


  // [POST] /book 요청을 수행합니다.
  // 요청 된 예약 데이터를 저장합니다.
  create: async (req, res) => {
    //  ✕ POST /book 요청시, flight_uuid, name, phone 데이터가 객체로 저장되어야 합니다. (40 ms)
    //받은 데이터를 예약 리스트에 추가
    booking.push(req.body);
    
    return res.status(201).json({ message: 'Create success!' });
  },

  // [DELETE] /book?phone={phone} 요청을 수행합니다.
  // 요청 된 phone 값과 동일한 예약 데이터를 삭제합니다.
  deleteById: async (req, res) => {
//  Delete /book?phone=010-1234-5678 요청을 하면 예약 목록에서 파라미터 phone에 해당하는 데이터가 삭제되어야 합니다 (9 ms)
  if(req.query.phone !== undefined){//내가 요청?한 쿼리에 핸드폰 번호가 있다면 바로 폰 번호에 해당하는 객체만 나온다. 
    let idx = booking.findIndex((item) => {
      return (item.phone === req.query.phone)
    });//인덱스 번호를 할당.
    booking.splice(idx, 1);//해당하는 번호의 객체 요소를 삭제.
  }
    return res.status(200).json(booking);
  }

};