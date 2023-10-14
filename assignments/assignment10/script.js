class Toy{
    constructor(name, imageFileName, price, age, rating){
        this.name = name;
        this.imageFileName = imageFileName;
        this.price = price;
        this.age = age;
        this.rating = rating;
    }

    getDetails(){
        return `<strong>${this.name}</strong><br>
                <strong>Price:</strong> ${this.price}<br>
                <strong>Age Range:</strong> ${this.age}<br>
                <strong>Rating:</strong> ${this.rating}`;
    }

    getToyItem(){
        const toyItem = document.createElement("div");
        toyItem.classList.add("toy");

        const img = document.createElement("img");
        img.src = `images/${this.imageFileName}`;
        toyItem.appendChild(img);

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        overlay.innerHTML = this.getDetails();
        toyItem.appendChild(overlay);

        return toyItem;
    }
}

const toys = [
    new Toy("Football", "football.png", "$10.42", "5-10", "4 stars"),
    new Toy("Yo-Yo", "yo-yo.png", "$5.54", "8-12", "4.5 Stars"),
    new Toy("Doll", "doll.jpg", "$15.05", "3-6", "5 Stars"),
    new Toy("Action Figure", "action-figure.jpg", "$12.99", "6-10", "3 Stars"),
    new Toy("Soccer Ball", "soccer.png", "$20.18", "5-12", "3 Stars"),
    new Toy("Nerf Gun", "nerf-gun.png", "$25.49", "6-14", "2 Stars"),
];

const toyContainer = document.getElementById("toys");

toys.forEach((toy) => {
    toyContainer.appendChild(toy.getToyItem());
});