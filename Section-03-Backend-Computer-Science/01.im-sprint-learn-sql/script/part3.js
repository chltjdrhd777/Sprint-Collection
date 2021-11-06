//1. 현재 있는 데이터베이스에 존재하는 모든 테이블 정보를 보기위한 SQL을 작성해주세요.
const PART3_1 = `show tables`;

//2. user 테이블의 구조를 보기위한 SQL을 작성해주세요.
//요구사항에 맞는 user 테이블을 작성해야만, 테스트를 통과합니다.
const PART3_2 = `desc user`; //desc = describe

//3. content 테이블의 구조를 보기위한 SQL을 작성해주세요.
//요구사항에 맞는 content 테이블을 작성해야만, 테스트를 통과합니다.
const PART3_3 = `desc content`;

module.exports = { PART3_1, PART3_2, PART3_3 };
