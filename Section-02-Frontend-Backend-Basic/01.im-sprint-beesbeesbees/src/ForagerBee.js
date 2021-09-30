const Bee = require('./Bee');

class ForagerBee extends Bee{
  // TODO..
  constructor(age, job, color, food, canFly, treasureChest){
    super(color, food);
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(treasure){
    this.treasureChest.push(treasure);
    // treasure가 인자로 받아서
    // 메소드 안에서 배열에 추가가 되게끔
  }
}

module.exports = ForagerBee;


/*
ForagerBee class functionality
  6) `age` 속성은 `10`이어야 합니다 @
  7) `job` 속성은 `find pollen`이어야 합니다 @

  8) `color` 속성은 `Bee`로부터 상속받습니다 @
  9) `food` 속성은 `Grub`으로부터 상속받습니다 @
  10) `eat` 메소드는 `Grub`으로부터 상속받습니다 @

  11) `canFly` 속성은 `true`이어야 합니다 @
  12) `treasureChest` 속성은 빈 배열 `[]`이어야 합니다 @

  13) `forage` 메소드를 통해 `treasureChest` 속성에 보물을 추가할 수 있어야 합니다 @
*/
