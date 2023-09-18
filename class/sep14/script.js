//const add = (a, b) => a + b;             one line, so don't need return
//const add = (a, b) => {return a + b;}    one line, but using return

//console.log(5,7);

//const square = a => a * a;               one parameter, so don't need parentheses
//const square = (a) => a * a;             one parameter, but using parantheses(looks weird)

//console.log(5);

//const hello = () => console.log("Hello me!");

//hello();

//const helloSpecific = userName => console.log("Hello " + userName + "!");

//helloSpecific("Collin");

//const helloFullName = (firstName, lastName) => console.log("Hello " + firstName + " " + lastName + "!");

//helloFullName("Collin","Remer");

/*Not okay to change a constant
const myName = "Collin";
myName = "Jeff"; */

const animate = () => {
    document.getElementById("square").classList.add("animation");
}

const displayName = () => {
    const firstName = document.getElementById("txt-first-name").value;
    console.log("Hello " + firstName + "!");
}

window.onload= () => {
    document.getElementById("begin-button").onclick = animate;
    document.getElementById("button-show-name").onclick = displayName;
}