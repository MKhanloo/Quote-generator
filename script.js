const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterQouteBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");



let apiQuotes = [];

// show new quote
function newQuote(){
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    quoteText.textContent = quote.text;
    authorText.textContent = quote.author;
}

// Get quotes from API
async function getQuotes(){
    const apiUrl = "https://type.fit/api/quotes";
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch(error){
        // Catch error here
        console.log("Error")
    }
}

// On Load
getQuotes()