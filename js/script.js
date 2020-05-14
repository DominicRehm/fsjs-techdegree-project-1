/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


const quoteBox = document.getElementById('quote-box');

/*
 -- Array qith quotes
*/

const quotes = [
  {
    quote : 'I know that a Christmas tree farm in Pennsylvania is about the most random place for a country singer to come from, but I had an awesome childhood.',
    source : 'Taylor Swift',
    year : '2013',
    tags : 'Childhood, Tree, Know, Country',
    category : 'Story'
  },
  {
    quote : 'If you are walking down the right path and you are willing to keep walking, eventually you will make progress.',
    source : 'Barack Obama',
    tags : 'You, Path, Walking, Progress',
    category : 'Motivation'
  },
  {
    quote : 'I believe in love at first sight. You want that connection, and then you want some problems.',
    source : 'Keanu Reeves',
    citation : 'Twitter',
    tags : 'Love, You, Believe, Problems',
    category : 'Love'
  },
  {
    quote : 'We came into a broken world. And we are the cleanup crew',
    source : 'Kanye West',
    year : '2014',
    tags : 'World, Broken, Crew, Came',
    category : 'Motivation'
  },
  {
    quote : 'If you do not think about your future, you cannot have one.',
    source : 'John Galsworthy',
    citation : 'unknown',
    year : 'unknown',
    tags : 'Think, You, Future',
    category : 'Motivation'
  },
]

/*
 -- Function to get a random quote
*/

function getRandomQuote(quote) {
  // Create random number using the length of array
  let randomNumber = Math.floor(Math.random() * quote.length);
  // Store the random Quote by using index into a variable
  let randomQuote = quote[randomNumber];
  // Return the random Quote
  return randomQuote;
};

/*
 -- Function to get a random color
*/

function getRandomColor() {
  // Create a random value for hex-color
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // Change the background to a random color
  document.body.style.backgroundColor = "#" + randomColor;
};

/*
 -- Function to print the qoute
*/

function printQuote() {
  let quoteData = getRandomQuote(quotes);
  // Create the content of quoteHTML
  let quoteHtml = `
    <p class="quote">${quoteData.quote}</p>
    <p class="source">${quoteData.source}
  `;

  if (quoteData.hasOwnProperty('citation')) { 
      quoteHtml += `<span class="citation">${quoteData.citation}</span>`
  };

  if (quoteData.hasOwnProperty('year')) {
    quoteHtml += `<span class="year">${quoteData.year}</span>`
  };
  quoteHtml += `</p>`;

  if (quoteData.hasOwnProperty('tags')) {
    quoteHtml += `
      <p class="tags">${quoteData.tags}
    `
  }

  if (quoteData.hasOwnProperty('category')) {
    quoteHtml += `
      <p class="category">Category: ${quoteData.category}
    `
  }
  // Change the innerHTML to the quoteHTML
  quoteBox.innerHTML = quoteHtml;

  getRandomColor();
};

/*
 -- Auto-refresh quotes
*/

setInterval(printQuote, 8000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);