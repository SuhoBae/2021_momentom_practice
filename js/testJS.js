const title = document.querySelector("#title");

function captureScreenSized() {
  const width = window.innerWidth;
  title.innerText = `Window innerwidth: ${width}`;
}

window.addEventListener("resize", captureScreenSized);
