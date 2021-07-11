const quotes = [
  {
    quote:
      "The meaning of life is not simply to exist, to survive, but to move ahead, to go up, to conquer.",
    author: "Arnold Schwarzenegger, 7-time Mr Olympia",
  },
  {
    quote:
      "Don’t be scared to LIFT HEAVY! You won’t get huge and bulky, you’ll just get amazing.",
    author: "Jessie Hilgenberg IFBB Figure Pro",
  },
  {
    quote:
      "Forget failure. Forget Mistakes. Forget Everything, except what you’re going to do now. And do it.",
    author: "Lou Ferrigno, 2-time Mr Universe",
  },
  {
    quote: "Winners do what they fear.",
    author: "Franco Columbu, 2-time Mr Olympia",
  },
  {
    quote: "Victory isn’t defined by wins and losses, it’s defined by effort.",
    author: "Kai Greene, IFBB Professional Bodybuilder.",
  },
  {
    quote:
      "If you have discipline, drive, determination, nothing is impossible.",
    author: "Dana Linn Bailey, First Ever Women’s Physique Olympia Champion.",
  },
  {
    quote:
      "If you want something you’ve never had before, you have to be willing to do something you’ve never done before. ",
    author: "Phil Heath, 4-time Mr Olympia.",
  },
  {
    quote: "The real workout starts when you want to stop.",
    author: "Ronnie Coleman, 8-time Mr Olympia",
  },
  {
    quote:
      "Don’t let someone who gave up on their dreams talk you out of yours.",
    author: "Flex Lewis, 3-time Olympia 212 Champion.",
  },
  {
    quote: "Wake up determined. Go to bed satisfied.",
    author: "Dwayne ‘The Rock’ Johnson, 10-time WWF/E Champion",
  },
  {
    quote: "Wake up determined. Go to bed satisfied.",
    author: "Dwayne ‘The Rock’ Johnson, 10-time WWF/E Champion",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const lengthOfQuotes = quotes.length;
const randomNumberOfQuotes = Math.floor(Math.random() * lengthOfQuotes);
const todaysQuotes = quotes[randomNumberOfQuotes];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;

console.log(randomNumberOfQuotes);

// 내내 lengthOfQuotes 가 10이 넘어가면 작동이 안되는가 싶어 고민했는데 9보다 큰 수로 가면
// 자동으로 9번으로 수렴시켜주는듯..? 혹은 Math.floor의 영향인가.. 왜냐면 10이 떠도 9번 quote를 출력한다.
