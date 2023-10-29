const getDrinks =  async ()  => {
    const url  = "drinks.json";

    try{
        const response = await fetch(url);
        return await response.json();
        }catch(error){
            console.log(error);
        }
}

const showDrinks = async () => {
    let drinks = await getDrinks();
    let drinkSection = document.getElementById("drinks-section");

    drinks.forEach((drink) => {
        drinkSection.append(getDrinkItem(drink));
    })
}

const getDrinkItem = (drink) => {
    let section = document.createElement("section");
    const url = "drinks.json";

    let name = document.createElement("p");
    name = drink.srtDrink;
    section.append(name);
    let img = document.createElement("img");
    //img = drink.strDrinkThumb;
    //img.width = 200;
    //img.height = 200;
    let p = document.createElement("p");

    section.append(img);

    return section;
}

window.onload = () => {
    showDrinks();
}