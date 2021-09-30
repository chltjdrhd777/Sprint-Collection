/**
 * 1. Broswer에 존재하는 JSON.stringfy 함수를 직접구현해봅니다.
 * JSON.stringfy 함수는 input 값을 JSON 형식으로 변환합니다.
 * 단, undefind와 function은 JSON으로 생략되거나 null 로 변환됩니다.
 *
 * 2. stringfyJSON은 아래와 같이 작동합니다.
 * - Bolean이 input으로 주어졌을 경우
 * stringifyJSON(true);                // 'true'
 * - String이 input으로 주어졌을 경우
 * stringifyJSON('foo');               // '"foo"'
 * - Array가 input으로 주어졌을 경우
 * stringifyJSON([1, 'false', false]); // '[1,"false",false]'
 * - Object가 input으로 주어졌을 경우
 * stringifyJSON({ x: 5 });            // '{"x":5}'
 * - undefind, function이 주어졌을 경우
 * stringifyJSON(undefined)            // undefined
 * stringifyJSON(function(){})         // undefined
 * stringifyJSON({ x: undefined, y: function(){} })   // '{}'
 *
 * 3. spec/fixtures.js를 참고해서 테스트에서 어떤 input 값들이
 * 주어지고, 어떻게 stringify해 주어야할지 생각해 보세요.
 *
 * 4. 그냥 테스트 통과를 하고 싶으시다면, 다음과 같이 구현하면 될거예요.
 *  const stringifyJSON = JSON.stringify;
 *
 * 하지만 이 과제의 목적은 재귀를 공부하는 것이니, 처음부터 구현해봐야겠지요?:
 */
function stringifyJSON(obj) {
  // your code goes here
  //let confo = JSON.stringify(obj)
  //return confo
  if(typeof obj ==='boolean' || typeof obj ==='number' || obj === null){
    return String(obj)
  }
  if(typeof obj ==='string'){
    return `"${obj}"`
  }
  if(typeof obj === undefined || typeof obj === 'function'){
    return 'undefined'
  }
  if(Array.isArray(obj) === true){
    let newArr = []; //빈 배열을 하나 선언
    for(let key of obj){ //obj의 모든 요소 순회
        newArr.push(stringifyJSON(key)) //새로운 요소를 추가해주는 
    }  
    return `[${newArr}]` //통으로 문자열 
  }

  if(typeof obj === 'object'){
    let newObj = '';
    for(let key in obj){
      if(typeof obj[key] === 'function' || typeof obj[key] === undefined){
        return `{}`
      }
      newObj = newObj + `${stringifyJSON(key)}:${stringifyJSON(obj[key])},`
    }
    newObj = newObj.slice(0, -1);
    return `{${newObj}}`
  }
};

// 다음 코드는 결과 제출을 위한 코드입니다. 신경쓰지 않아도 좋습니다.
if (typeof window === "undefined") {
  module.exports = stringifyJSON;
}

/*
stringifyJSON는 JSON.stringify 함수를 실행했을 때와 같은 결과를 리턴해야 합니다
    1) 객체는 문자열 "9"로 변환되어야 합니다 @
    2) 객체는 문자열 "null"로 변환되어야 합니다 @
    3) 객체는 문자열 "true"로 변환되어야 합니다 @
    4) 객체는 문자열 "false"로 변환되어야 합니다 @

    5) 객체는 문자열 ""Hello world""로 변환되어야 합니다 @

    6) 객체는 문자열 "[]"로 변환되어야 합니다 @
    7) 객체는 문자열 "[8]"로 변환되어야 합니다 @
    8) 객체는 문자열 "["hi"]"로 변환되어야 합니다 @
    9) 객체는 문자열 "[8,"hi"]"로 변환되어야 합니다 @
    10) 객체는 문자열 "[1,0,-1,-0.3,0.3,1343.32,3345,0.00011999]"로 변환되어야 합니다 @
    11) 객체는 문자열 "[8,[[],3,4]]"로 변환되어야 합니다 @
    12) 객체는 문자열 "[[[["foo"]]]]"로 변환되어야 합니다 @

    13) 객체는 문자열 "{}"로 변환되어야 합니다 @
    14) 객체는 문자열 "{"a":"apple"}"로 변환되어야 합니다 @
    15) 객체는 문자열 "{"foo":true,"bar":false,"baz":null}"로 변환되어야 합니다 @
    16) 객체는 문자열 "{"boolean, true":true,"boolean, false":false,"null":null}"로 변환되어야 합니다 @
    17) 객체는 문자열 "{"a":{"b":"c"}}"로 변환되어야 합니다 @
    18) 객체는 문자열 "{"a":["b","c"]}"로 변환되어야 합니다 @
    19) 객체는 문자열 "[{"a":"b"},{"c":"d"}]"로 변환되어야 합니다 @
    20) 객체는 문자열 "{"a":[],"c":{},"b":true}"로 변환되어야 합니다 @

    21) 함수와 undefined는 stringify되지 않습니다 @
*/