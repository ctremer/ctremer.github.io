const showRaccoon = () =>{
    document.getElementById("raccoon").classList.remove("hide");
}

const hideRaccoon = () =>{
    document.getElementById("raccoon").classList.add("hide");
}

const animateCircle = () =>{
    document.getElementById("circle").classList.add("animate");
    document.getElementById("circle").classList.remove("hide");
}

const addComment = () =>{

}

window.onload = () =>{
    document.getElementById("button-show").onclick = showRaccoon;
    document.getElementById("button-hide").onclick = hideRaccoon;
    document.getElementById("button-dance").onclick = animateCircle;
    document.getElementById("button-comment").onclick = animateCircle;
}