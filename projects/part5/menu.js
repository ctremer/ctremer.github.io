const getItems = async () => {
    const url = "https://ctremer.github.io/projects/part5/json/menu.json";

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

const showItems = async () => {
    let items = await getItems();
    let itemSection = document.getElementById("item-section");
    let drinkContainer = document.getElementById("drink-container");
    let section = '';

    if (Array.isArray(items.menuItems)) {
        items.menuItems.forEach((item) => {
            section += getItemItem(item);
        });
    } else {
        console.error("Items not in the expected format.");
    }

    itemSection.innerHTML = section;

    const drinkItem = items.drinkItem;

    const drinkSection = getItemItem(drinkItem);
    drinkContainer.innerHTML = drinkSection;
};

const getItemItem = (item) => {
    let section = `
        <div class="col1of2">
            <p id="menu-item">
                <img src="images/${item.image}" id="menu-image">
                <span>${item.name}</span>
                <span class="menu-item-price"><strong>${item.price}</strong></span>
            </p>
            <hr id="menu-line">
        </div>
    `;
    return section;
};

window.onload = () => {
    showItems();
}
