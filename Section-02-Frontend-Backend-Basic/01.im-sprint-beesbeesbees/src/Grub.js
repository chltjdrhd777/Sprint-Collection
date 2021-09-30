class Grub {
  // TODO..
  constructor(age, color, food){
    this.age = 0;
    this.color = 'pink';
    this.food = 'jelly';
  }
  eat(){
    return `Mmmmmmmmm ${this.food}`
    //콘솔로그는 단순히 콘솔창에만 찍혀서 오류 뜬거임.
    //리턴값이 있어야함.
  }
}
//new를 안쓴 이유가 이미 값이 다 정해져있어서야.


module.exports = Grub;


/*
Grub class functionality
  14) `age` 속성은 `0`이어야 합니다 @
  15) `color` 속성은 `pink`이어야 합니다 @
  16) `food` 속성은 `jelly`이어야 합니다 @
  17) `eat` 메소드가 존재해야 합니다 @
  18) `eat` 메소드를 통해 `Grub`이 젤리를 먹습니다 @
*/
