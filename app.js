// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes = [{

  quote: `"A rose by any other name would smell as sweet."`,
  person: `"William Shakespeare"`
},{

  quote: `"All that glitters is not gold."`,
  person: `"William Shakespeare"`
},{

  quote: `"All the world’s a stage, and all the men and women merely players."`,
  person: `"William Shakespeare"`
},{

  quote: `"Ask not what your country can do for you; ask what you can do for your country."`,
  person: `"John Kennedy"`
},{

  quote: `"Ask, and it shall be given you; seek, and you shall find."`,
  person: `"the Bible"`
},{

  quote: `"Eighty percent of success is showing up."`,
  person: `"Woody Allen"`
},{

  quote: `"For those to whom much is given, much is required."`,
  person: `"the Bible"`
},{

  quote: `"Genius is one percent inspiration and ninety-nine percent perspiration."`,
  person: `"Thomas Edison"`
},{

  quote: `"He travels the fastest who travels alone."`,
  person: `"Rudyard Kipling"`
},{

  quote: `"Life is like a box of chocolates. You never know what you are gonna get."`,
  person: `"Albert Einstein"`
},{

  quote: `"No one can make you feel inferior without your consent."`,
  person: `"Eleanor Roosevelt"`
},{

  quote: `"Not all those who wander are lost."`,
  person: `"J. R. R. Tolkein"`
},{

  quote: `"Nothing is certain except for death and taxes."`,
  person: `"Benjamin Franklin"`
},{

  quote: `"Power corrupts; absolute power corrupts absolutely."`,
  person: `"John Dalberg-Acton"`
},{

  quote: `"Speak softly and carry a big stick"`,
  person: `"Theodore Roosevelt"`
},{

  quote: `"The only thing we have to fear is fear itself."`,
  person: `"Franklin D. Roosevelt"`
},{

  quote: `"To be or not to be, that is the question."`,
  person: `"William Shakespeare"`
},{

  quote: `"Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the difference."`,
  person: `"Robert Frost	"`
},{

  quote: `"You must be the change you wish to see in the world."`,
  person: `"Mahatma Gandhi"`
},{

  quote: `"You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time."`,
  person: `"Abraham Lincoln"`
},{

  quote: `"Whatever you are, be a good one."`,
  person: `"Abraham Lincoln"`
},
];

btn.addEventListener('click', function(){
  let random = Math.floor(Math.random()*quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;



})