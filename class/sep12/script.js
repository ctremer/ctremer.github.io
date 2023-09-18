const changeText = () =>{
    const helloP = document.getElementById("date");
    helloP.innerHTML = "hi, to you, portia";
    helloP.classList.add("special");
}

const showRaccoon = () =>{
    document.getElementById("raccoon").classList.remove("hide");
}

const hideRaccoon = () =>{
    document.getElementById("raccoon").classList.add("hide");
}

window.onload = () =>{
    const clickButton = document.getElementById("button-click");
    clickButton.onclick = changeText;
    document.getElementById("button-show").onclick = showRaccoon;
    document.getElementById("button-hide").onclick = hideRaccoon;
}