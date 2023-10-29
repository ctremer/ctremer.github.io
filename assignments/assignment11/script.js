const getMovies = async () => {
    const url = "https://portiaportia.github.io/json/movies.json";

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

const showMovies = async () => {
    let movies = await getMovies();
    let movieSection = document.getElementById("movie-section");

    movies.forEach((movie) => {
        movieSection.append(getMovieItem(movie));
    });
};

const getMovieItem = (movie) => {
    let section = document.createElement("section");
    section.classList.add("movie-item");

    let imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    let img = document.createElement("img");
    img.src = `https://portiaportia.github.io/json/${movie.img}`;
    img.classList.add("movie-image");
    imageContainer.appendChild(img);

    let textContainer = document.createElement("div");
    textContainer.classList.add("text-container");

    let title = document.createElement("h3");
    title.textContent = movie.title;
    textContainer.appendChild(title);

    let director = document.createElement("p");
    director.textContent = `Director: ${movie.director}`;
    textContainer.appendChild(director);

    let actors = document.createElement("p");
    actors.textContent = `Actors: ${movie.actors.join(", ")}`;
    textContainer.appendChild(actors);

    let year = document.createElement("p");
    year.textContent = `Year: ${movie.year}`;
    textContainer.appendChild(year);

    let genres = document.createElement("p");
    genres.textContent = `Genres: ${movie.genres.join(", ")}`;
    textContainer.appendChild(genres);

    let description = document.createElement("p");
    description.textContent = movie.description;
    textContainer.appendChild(description);

    section.appendChild(imageContainer);
    section.appendChild(textContainer);

    return section;
};


window.onload = () => {
    showMovies();
};
