const animate = () => {
    const square = document.getElementById("square");
    const button = document.getElementById("button-move");

    //document.getElementById("square").classList.add("animation");

    if (square.classList.contains("animation")){
        square.classList.remove("animation");
        button.innerHTML("Start");
    }else{
            square.classList.add("animation");
            button.innerHTML("Stop");
        }
    }

    const toggleNav = () =>{
        document.getElementById("nav-items").classList.toggle("hide");
    }

window.onload= () => {
    document.getElementById("button-move").onclick = animate;
    document.getElementById("hamburger").onclick = toggleNav;
}