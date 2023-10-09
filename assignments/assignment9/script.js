const quoteElements = document.querySelectorAll(".quote");
let currentQuoteIndex = 0;

function displayNextQuote() {

    quoteElements[currentQuoteIndex].classList.add("hidden");
    
    currentQuoteIndex++;
    
    if(currentQuoteIndex == 5){
        currentQuoteIndex = 0;
    }

    quoteElements[currentQuoteIndex].classList.remove("hidden");
}

const rainbowColors = ["red", "orange", "yellow", "green", "blue", "purple"];
const rainbowContainer = document.getElementById("rainbow");
let currentIndex = 0; 

function drawRainbow() {
    function drawNextColor() {
        if (currentIndex < rainbowColors.length) {
            const currentColor = rainbowColors[currentIndex];
            const rainbowColor = rainbowContainer.querySelector(`.${currentColor}`);
            rainbowColor.style.width = "83%";
            currentIndex++;
            setTimeout(drawNextColor, 1100);
        } else {
            document.getElementById("pot").classList.remove("hidden");
        }
    }
    drawNextColor();
}

window.onload = () =>{
    setInterval(displayNextQuote, 2000);
    document.getElementById("button-rainbow").onclick = drawRainbow;
}


