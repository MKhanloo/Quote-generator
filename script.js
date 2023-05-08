const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterQouteBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");



let apiQuotes = [];

// show new quote
function newQuote(){
    // A ranndome quote from api quotes
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Check if author is blank and replace it with "Unknown"
if (!quote.author){
    authorText.textContent = "Unknown";
}else{
    authorText.textContent = quote.author;
}
// Check quote length to determine styling
if (quote.text.length > 100) {
    quoteText.classList.add("long-quote");
}else {
    quoteText.classList.remove("long-quote");
}
quoteText.textContent = quote.text;
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

//  tweet quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}
//  Event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterQouteBtn.addEventListener('click', tweetQuote);
// On Load
getQuotes()