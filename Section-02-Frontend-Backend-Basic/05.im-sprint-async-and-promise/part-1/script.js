let player = document.querySelector('#player');
let title = document.querySelector('#title');

let btnCallback = document.querySelector('#btnCallback');
btnCallback.onclick = runCallback;
//callback 버튼은 runCallback 함수를 실행합니다.

let btnPromise = document.querySelector('#btnPromise');
btnPromise.onclick = runPromise;
//promise 버튼은 runPromise 함수를 실행합니다.

let btnAsync = document.querySelector('#btnAsync');
btnAsync.onclick = runAsync;
//async & await 버튼은 runAsync 함수를 실행합니다.

function runCallback() {
  resetTitle();
  playVideo();

  delay(1000, () => {
    pauseVideo();
    displayTitle();

    delay(500, () => {
      highlightTitle();

      delay(2000, resetTitle);
    });
  });
}

/*function runPromise() {
  resetTitle();
  playVideo();

  sleep(1000).then(() => {
    pauseVideo();
    displayTitle();
  })
    .then(sleep.bind(null, 500)) //이 부분이 빠졌다.
    //bind() 메소드가 호출되면 새로운 함수를 생성합니다
    .then(highlightTitle)
    .then(sleep.bind(null, 2000))
    .then(resetTitle)
}*/

function runPromise(){
  resetTitle();
  playVideo();

  sleep(1000).then((param)=>{ //param라는 인자를 주었다.
    console.log(param);//콘솔창에 그 인자를 나타내라.
    pauseVideo();
    displayTitle();
    return "world"; //월드라는 문자열을 리턴해라.
  })
  .then((param)=>{ //널 대신 파라메터를 인자로 넣어주었다.
    console.log(param);
    sleep(500);
  })
  .then(highlightTitle)
  .then(sleep.bind(null, 2000))
  .then(resetTitle)
  .catch(err => {
    console.log(err);
  })
}

async function runAsync() {
  resetTitle();
  playVideo();

  await sleep(1000);
  pauseVideo();
  displayTitle();

  await sleep(500);
  highlightTitle();

  await sleep(2000);
  resetTitle();
}


function resetTitle() {
  log('제목을 초기화합니다');
  title.classList.remove('visible', 'highlight');
}

function playVideo() {
  log('영상을 재생합니다');
  player.play();
}

function pauseVideo() {
  log('영상을 멈춥니다');
  player.pause();
}

function displayTitle() {
  log('제목을 표시합니다');
  title.classList.add('visible');
}

function highlightTitle() {
  log('제목을 강조합니다');
  title.classList.add('highlight');
}

function log(message) {
  let logger = document.querySelector('#logger');
  let l = document.createElement('div');
  l.textContent = `[${new Date().toISOString().slice(11, -5)}] ${message}`;
  logger.prepend(l);
}