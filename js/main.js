var Qoutes = 
[
    {
        qoute:"You miss 100% of the shots you don't take.",
        author:'--Wayne Gretzy',
    },    
    {
        qoute:"The best revenge is massive success.",
        author:'--Frank Sinatra',
    },
    {
        qoute:"Do not take life too seriously. You will not get out alive.",
        author:'--Elbert Hubbard',
    },
    {
        qoute:"Resentment is like drinking poison and waiting for your enemies to die.",
        author:'--Nelson Mandela',
    },
    {
        qoute:"It's not what happens to you, but how you react to it that matters.",
        author:'--Epictetus',
    },
];

var firstRandom;
var lastRandom;
function getQuote()
{
    do
    {
        firstRandom =  Math.floor(Math.random() * Qoutes.length);
    } 
    while(firstRandom == lastRandom);
    lastRandom = firstRandom;

//    var randomQuote = Math.floor(Math.random() * Qoutes.length);
    console.log(firstRandom);
    document.getElementById('qoute').innerHTML = Qoutes[firstRandom].qoute;       
    document.getElementById('author').innerHTML = Qoutes[firstRandom].author;       
}