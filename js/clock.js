const clock = document.querySelector("h2#clock");
const greetings = document.querySelector("#greetings");

function getClock() {
  const date = new Date();

  const hours = String(date.getHours()).padStart(2, "0");
  const minuts = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minuts}:${seconds}`;
  /*
  if (seconds < 10) {
    clock.innerText = `${hours}:${minuts}:0${seconds}`;
  } else {
    clock.innerText = `${hours}:${minuts}:${seconds}`;
  }
  */
}
getClock(); //웹사이트가 열리자마자 바로 getClock함수가 실행된다!
setInterval(getClock, 1000);

///변수들의 범위에 주의해라! 기계가 읽는 순서들을 계속해서 생각해라!
