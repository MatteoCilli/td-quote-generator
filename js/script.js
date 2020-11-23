/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator - Matteo Cilli
******************************************/

// Array of Objects for the Quotes, each object has 5 properties

let quotes = [{
        quote: "Although the shooting war is over, we are in the midst of a cold war which is getting warmer.",
        source: "George Marshall",
        citation: "CIA",
        city: "Washington",
        year: 1947
    },
    {
        quote: "A shadow has fallen upon the scenes so lately lighted by the Allied victory…. From Stettin in the Baltic to Trieste in the Adriatic an iron curtain has descended across the Continent.",
        source: "Winston Churchill",
        citation: "Former Prime Minister of the UK",
        city: "London",
        year: 1946
    },
    {
        quote: "We may be likened to two scorpions in a bottle, each capable of killing the other, but only at the risk of his own life.",
        source: "Unknown Agent",
        citation: "Foreign Affairs",
        city: "New York",
        year: 1947
    },
    {
        quote: "These are the stakes! To make a world in which all of God\'s children can live, or to go into the dark. We must either love each other, or we must die.",
        source: "Lindon B. Johnson",
        citation: "Washington Post",
        city: "New York",
        year: 1965
    },
    {
        quote: "The main element of any United States policy toward the Soviet Union must be that of a long-term, patient but firm and vigilant containment of Russian expansive tendencies.",
        source: "X [George Kennan]",
        citation: "Foreign Affairs",
        city: "London",
        year: 1946
    },
    {
        quote: "If you don’t like us, don’t accept our invitations and don’t invite us to come to see you. Whether you like it or not, history is on our side. We will bury you.",
        source: "Nikita Krushchev",
        citation: "NYT",
        city: "Leningrad",
        year: 1959
    },
    {
        quote: "We’re eyeball to eyeball… and I think the other fellow just blinked.",
        source: "Dean Rusk",
        citation: "SecState",
        city: "Washington",
        year: 1962
    },
    {
        quote: "You Russians like to think you\'re poets but perhaps you\'re just touchy.",
        source: "Jack Ryan",
        citation: "The Hunt for the Red October",
        city: "Norfolk",
        year: 1984
    },
    {
        quote: "My fellow Americans, I am pleased to tell you today that I’ve signed legislation that will outlaw Russia forever. We begin bombing in five minutes.",
        source: "Ronald Reagan",
        citation: "Few minutes before speaking on National TV",
        city: "Washington",
        year: 1987
    },
    {
        quote: "When all the world is socialist, Switzerland will have to remain capitalist, so that it can tell us the price of everything.",
        source: "Nikita Krushchev",
        citation: "The Man himself",
        city: "Moscow",
        year: 1957
    }
];

// An array of colors that we'll need later. Found at: https://gist.github.com/mucar/3898821

let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
];



// Function that provides me with a random object from the Quotes Array

function getRandomQuote(arr) {
    let randomNum = Math.floor(Math.random() * arr.length);
    return arr[randomNum];
}

// Same job, different array, similar function

function getRandomColor(arr) {
    let randomNum = Math.floor(Math.random() * arr.length);
    return arr[randomNum];
}

// Function that prints the Quote with its additional Tags plus changes the background color

function printQuote() {
    let randomQuoteObj = getRandomQuote(quotes);
    let randomColor = getRandomColor(colorArray);

    let randomQuote = randomQuoteObj.quote;
    let randomQuoteSource = randomQuoteObj.source;
    let randomQuoteCitation = randomQuoteObj.citation;
    let randomQuoteYear = randomQuoteObj.year;
    let randomQuoteCity = randomQuoteObj.city;

    //console.log(randomQuote);
    //console.log(randomColor);
    //console.log(randomQuoteSource);
    //console.log(randomQuoteCitation);
    //console.log(randomQuoteYear);
    //console.log(randomQuoteCity);

    $(".quote").text(randomQuote);
    $("#quote-source").text(randomQuoteSource);
    $(".citation").text(randomQuoteCitation);
    $(".city").text(randomQuoteCity);
    $(".year").text(randomQuoteYear);

    $("body").css("background-color", randomColor);
    $("#load-quote").css("background-color", randomColor);
}

printQuote();

// We need to call printQuote every 20 secs, Autopilot On!

let autoRefresh = setInterval(function() { printQuote() }, 20000);

// Resetting Altitude when pressing button, by calling printQuote, clearing the interval and resetting the timer

function newInterval() {
    printQuote();
    clearInterval(autoRefresh);
    autoRefresh = setInterval(function() { printQuote() }, 20000);
}

// Dindunuffin!

document.getElementById('load-quote').addEventListener("click", printQuote, false);