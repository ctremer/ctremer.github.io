const fundsRaised = () => {
    const goal = 10000; 
    const fundsRaised = document.getElementById("funds").value;

    const fillPercentage = (fundsRaised / goal) * 100;

    document.documentElement.style.setProperty("--fill-height", `${fillPercentage}%`);
}

const intervalTime = 200;
const addedPosition = 10; 
const walkStatus = [
    "walking.jpg",
    "running.png"
];

let index = 0;

const startRunning = () => {
    const walkingMan = document.getElementById("walking");
    const runningManDiv = document.getElementById("running-man");

    const maxPosition = runningManDiv.offsetWidth - walkingMan.offsetWidth;

    let currentPosition = 0;

    const runningInterval = setInterval(() => {

        currentPosition += addedPosition;

        if (currentPosition >= maxPosition) {
            clearInterval(runningInterval);
        }

        walkingMan.src = walkStatus[index];
        if(index == 1){
            index = 0;
        }else{
            index = 1;
        }

        document.documentElement.style.setProperty("--image-position", `${currentPosition}px`);
    }, intervalTime);
}

window.onload = () => {
    document.getElementById("button-display").onclick = fundsRaised;
}