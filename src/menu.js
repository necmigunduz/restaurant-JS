function menu() {
    const menu_div = document.createElement('div');
    menu_div.setAttribute('class','flex-column');

    const starters = document.createElement('div');
    starters.setAttribute('class', 'flex-display pb-10');

    const fishes = document.createElement('div');
    fishes.setAttribute('class', 'flex-display pb-10');

    const salads = document.createElement('div');
    salads.setAttribute('class', 'flex-display pb-10');

    const deserts = document.createElement('div');
    deserts.setAttribute('class', 'flex-display pb-10');

    starters.innerHTML = `<span>----------------Starters----------------</span>
    <span>Salty Pastries</span>
    <span>Cheese Plate</span>
    <span>Chef's Special Soup of Day</span>
    <span>Beverages and Spirits</span>`;
    fishes.innerHTML = `<span>----------------Fishes----------------</span>
    <span>Sea Trout</span>
    <span>Octopus and Calamar</span>
    <span>Cat Fish</span>
    <span>Whitey</span>
    <span>Branzino</span>`;
    salads.innerHTML = `<span>----------------Salads----------------</span>
    <span>Season Salad</span>
    <span>Onion Salad</span>
    <span>Greens Salad</span>
    <span>Seafood Salad</span>
    <span>Cheese Salad</span>
    <span>Mediterrenian Salad</span>`;
    desserts.innerHTML = `<span>----------------Desserts----------------</span>
    <span>Baked Halva</span>
    <span>Milk Pudding</span>
    <span>Baklava</span>
    <span>Fruit Yoghurd Kinds</span>
    <span>Kunefe</span>`;

    menu_div.appendChild('starters');
    menu_div.appendChild('fishes');
    menu_div.appendChild('salads');
    menu_div.appendChild('desserts');

    return menu_div;
};

export default menu;
