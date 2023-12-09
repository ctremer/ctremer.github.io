function displayReview({ _id, name, rating, review }) {
    const reviewContainer = document.getElementById("review-container");

    if (reviewContainer) {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");

        const nameElement = document.createElement("div");
        const ratingElement = document.createElement("div");
        const reviewContentElement = document.createElement("div");
        const dLink = document.createElement("a");
        const eLink = document.createElement("a");

        nameElement.classList.add("review-name");
        ratingElement.classList.add("review-rating");
        reviewContentElement.classList.add("review-content");

        nameElement.innerHTML = `<strong>${name}</strong>`;
        ratingElement.innerHTML = rating + '/5';
        reviewContentElement.innerHTML = review;
        dLink.innerHTML = "Delete";
        eLink.innerHTML = "Edit";

        eLink.classList.add("edit-link");
        dLink.classList.add("delete-link");

        dLink.addEventListener("click", async () => {
            await deleteReview(_id);
            reviewElement.remove();
        });

        reviewElement.appendChild(nameElement);
        reviewElement.appendChild(eLink);
        reviewElement.appendChild(dLink);
        reviewElement.appendChild(ratingElement);
        reviewElement.appendChild(reviewContentElement);

        reviewContainer.appendChild(reviewElement);
    } else {
        console.error("Error: review-container not found");
    }
}

async function deleteReview(reviewId) {
    try {
        const response = await fetch(`/api/reviews/${reviewId}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            console.error("Failed to delete review");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

async function loadReviews() {
    try {
        const response = await fetch("/api/reviews");
        if (response.ok) {
            const reviews = await response.json();
            reviews.forEach((review) => displayReview(review));
        } else {
            console.error("Failed to load reviews");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

window.addEventListener("load", loadReviews);

document.getElementById("form-review").addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const review = document.querySelector('input[name="review"]').value;
    const rating = document.querySelector('input[name="rating"]').value;

    try {
        const response = await fetch("/api/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, rating, review }),
        });

        if (response.ok) {
            const newReview = await response.json();
            displayReview(newReview);

            document.getElementById("form-review").reset();
        } else {
            console.error("Failed to submit review");
        }
    } catch (error) {
        console.error("Error:", error);
    }
});
