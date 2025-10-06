let quote = document.getElementById('quote');
let author = document.getElementById('author');
let btn = document.getElementById('btn');

const apiUrl = 'https://quotes-api-self.vercel.app/quote';

let getQuote = () => {
    fetch(apiUrl) 
        .then((data) => data.json())
        .then((item) => {
            quote.innerText = item.quote;
            author.innerText = item.author;
        });
}

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);