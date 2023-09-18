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

const addComment = () => {
    const productName = document.getElementById("product").value;
    const comment = document.getElementById("comment").value;
    const rating = document.getElementById("rating").value;
    const userName = document.getElementById("username").value;
  
    const commentElement = document.createElement("div");
  
    commentElement.innerHTML = `
      <h2>${productName}</h2><p>${rating}/5 stars ${comment}</p]
      <br><p>by ${userName}</p>`;
  
    const commentContainer = document.getElementById("comment-container");
    commentContainer.appendChild(commentElement);
  
    document.getElementById("product").value = '';
    document.getElementById("comment").value = '';
    document.getElementById("rating").value = '';
    document.getElementById("username").value = '';
  };

window.onload = () =>{
    document.getElementById("button-show").onclick = showRaccoon;
    document.getElementById("button-hide").onclick = hideRaccoon;
    document.getElementById("button-dance").onclick = animateCircle;
    document.getElementById("button-comment").onclick = addComment;
}