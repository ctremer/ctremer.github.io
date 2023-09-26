const toggleNav = () =>{
    document.getElementById("nav-items").classList.toggle("hide");
}

const toggleExercise1 = () => {
    document.getElementById("exercise-1").classList.remove("hide");
    document.getElementById("exercise-2").classList.add("hide");
    document.getElementById("list-1").classList.add("current");
    document.getElementById("list-2").classList.remove("current");
}

const toggleExercise2 = () => {
    document.getElementById("exercise-1").classList.add("hide");
    document.getElementById("exercise-2").classList.remove("hide");
    document.getElementById("list-1").classList.remove("current");
    document.getElementById("list-2").classList.add("current");
}

const fundsRaised = () => {
    const goal = 10000; 
    const fundsRaised = document.getElementById("funds").value;

    const fillPercentage = (fundsRaised / goal) * 100;

    let fillHeight = "0%";

    if (fillPercentage >= 0 && fillPercentage < 25) {
        fillHeight = "0%";
    } else if (fillPercentage >= 25 && fillPercentage < 50) {
        fillHeight = "25%";
    } else if (fillPercentage >= 50 && fillPercentage < 75) {
        fillHeight = "50%";
    } else if (fillPercentage >= 75 && fillPercentage < 100) {
        fillHeight = "75%";
    } else if (fillPercentage == 100){
        fillHeight = "100%";
    }

    document.querySelector(".fill").style.height = fillHeight;
}



const orderAges = () => {
    const name1 = document.getElementById("name-1").value;
    const name2 = document.getElementById("name-2").value;
    const name3 = document.getElementById("name-3").value;
    const age1 = document.getElementById("age-1").value;
    const age2 = document.getElementById("age-2").value;
    const age3 = document.getElementById("age-3").value;

    let smallestAge, middleAge, biggestAge;
    let smallestName, middleName, biggestName;

    if (age1 <= age2 && age1 <= age3) {
        smallestAge = age1;
        smallestName = name1;
        if (age2 <= age3) {
            middleAge = age2;
            middleName = name2;
            biggestAge = age3;
            biggestName = name3;
        } else {
            middleAge = age3;
            middleName = name3;
            biggestAge = age2;
            biggestName = name2;
        }
    } else if (age2 <= age1 && age2 <= age3) {
        smallestAge = age2;
        smallestName = name2;
        if (age1 <= age3) {
            middleAge = age1;
            middleName = name1;
            biggestAge = age3;
            biggestName = name3;
        } else {
            middleAge = age3;
            middleName = name3;
            biggestAge = age1;
            biggestName = name1;
        }
    } else {
        smallestAge = age3;
        smallestName = name3;
        if (age1 <= age2) {
            middleAge = age1;
            middleName = name1;
            biggestAge = age2;
            biggestName = name2;
        } else {
            middleAge = age2;
            middleName = name2;
            biggestAge = age1;
            biggestName = name1;
        }
    }

    const commentElement = document.createElement("div");

    commentElement.innerHTML = `Oldest to youngest: ${biggestName}, ${middleName}, ${smallestName}`;

    const commentContainer = document.getElementById("ordered-ages");
    commentContainer.appendChild(commentElement);

}

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("list-1").onclick = toggleExercise1;
    document.getElementById("list-2").onclick = toggleExercise2;
    document.getElementById("compare-ages").onclick = orderAges;
    document.getElementById("button-display").onclick = fundsRaised;
}