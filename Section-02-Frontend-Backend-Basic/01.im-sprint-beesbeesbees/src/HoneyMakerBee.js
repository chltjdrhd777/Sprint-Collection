const Bee = require('./Bee');

class HoneyMakerBee extends Bee {
  // TODO..
  constructor(age, job, color, food, honeyPot){
    super(color, food)
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }
  makeHoney(){
    return this.honeyPot++
  }
  giveHoney(){
    return this.honeyPot--
  }
}

module.exports = HoneyMakerBee;

/*
HoneyMakerBee class functionality
  19) `age` 속성은 `10`이어야 합니다 @
  20) `job` 속성은 `make honey`이어야 합니다 @

  21) `color` 속성은 `Bee`로부터 상속받습니다 @
  22) `food` 속성은 `Grub`으로부터 상속받습니다 @

  23) `eat` 메소드는 `Grub`으로부터 상속받습니다 @

  24) `honeyPot` 속성은 `0`이어야 합니다 @

  25) `makeHoney` 메소드는 `honeyPot`에 1씩 추가합니다 @
  26) `giveHoney` 메소드는 `honeyPot`에 1씩 뺍니다 @
*/