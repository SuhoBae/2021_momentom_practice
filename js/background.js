const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const lengthOfQfimages = images.length;
const choseonImage = images[Math.floor(Math.random() * lengthOfQfimages)];
//왜 이 부분 images[Math.floor(Math.random() * lengthOfQfimages)] 을 별도 변수로 설정하면 자꾸 image.length보다 큰 수에서 이미지가 안 읽히는 걸까..
const styletag = document.createElement("style");

styletag.innerHTML = `
#bgImg {
  background-image:
      url("img/${choseonImage}");
    background-size: cover;
}`;

document.head.appendChild(styletag); //prepend는 맨 앞에!
