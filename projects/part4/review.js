const showDataEntryResult = (e) => {
    e.preventDefault();
    const form = document.getElementById("form-review");
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    const successMessage = document.getElementById("successMessage");
    successMessage.innerHTML = `Review submitted successfully!<br>Name: ${data.name}<br>Review: ${data.review}`;
    successMessage.classList.remove("hidden");
};

document.getElementById("form-review").addEventListener("submit", showDataEntryResult);
