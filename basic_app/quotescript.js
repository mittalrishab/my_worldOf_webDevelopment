let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote-text');
let person = document.querySelector('.quote-author');

const url = "https://api.api-ninjas.com/v1/quotes";

let quotes = [
  {
    "person": "Albert Einstein",
    "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving."
  },
  {
    "person": "Maya Angelou",
    "quote": "Do the best you can until you know better. Then when you know better, do better."
  },
  {
    "person": "Oscar Wilde",
    "quote": "Be yourself; everyone else is already taken."
  },
  {
    "person": "Steve Jobs",
    "quote": "Your time is limited, so don’t waste it living someone else’s life."
  },
  {
    "person": "Mark Twain",
    "quote": "The secret of getting ahead is getting started."
  },
  {
    "person": "Nelson Mandela",
    "quote": "It always seems impossible until it’s done."
  },
  {
    "person": "Walt Disney",
    "quote": "The way to get started is to quit talking and begin doing."
  },
  {
    "person": "Confucius",
    "quote": "It does not matter how slowly you go as long as you do not stop."
  },
  {
    "person": "Babe Ruth",
    "quote": "Never let the fear of striking out keep you from playing the game."
  },
  {
    "person": "Eleanor Roosevelt",
    "quote": "The future belongs to those who believe in the beauty of their dreams."
  }
];

btn.addEventListener("click", function () {
  let n = quotes.length;
  let random = Math.floor(Math.random() * n);

  fetch(url, {
    headers: {
      'X-Api-Key': 'rxVc5iOr41k0lKLp8cySmw==iIvt4SSeLVM101SO'
    }
  })
    .then((data) => data.json())
    .then((item) => {
      console.log(item);
      quote.innerText = item[0].quote;
      person.innerText = item[0].author;
    })
    .catch(() => {
      // If API fails, fallback to local quotes
      quote.innerText = quotes[random].quote;
      person.innerText = quotes[random].person;
    });
});
