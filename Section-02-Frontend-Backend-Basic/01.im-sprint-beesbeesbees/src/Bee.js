const Grub = require('./Grub');

class Bee extends Grub {
  // 슈퍼 : 부모 속성 가져오는것
  // 익스텐즈 : 상속을 시켜주는 것

  constructor(age, color, job, food){
    //슈퍼 비워도 됬던게 푸드 이거 때매...
    //컨스터럭터에서 정의가 안된건 안가져온다?
    //아래 선언 안된거만, 이제 부모에서 가져온다.
    
    super(food);
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
  }
}

module.exports = Bee;


/* 
Bee class functionality
  1) `age` 속성은 `5`이어야 합니다 @
  2) `color` 속성은 `yellow`이어야 합니다 @
  3) `food` 속성은 Grub으로부터 상속받습니다 @
  4) `eat` 메소드는 Grub으로부터 상속받습니다 @
  5) `job` 속성은 `Keep on growing`이어야 합니다 @
*/