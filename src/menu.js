function Menu() {
  const menu_div = document.createElement('div');
  menu_div.setAttribute('class', 'flex-column');

  const starters = document.createElement('div');
  starters.setAttribute('class', 'flex-display pb-10');

  const fishes = document.createElement('div');
  fishes.setAttribute('class', 'flex-display pb-10');

  const salads = document.createElement('div');
  salads.setAttribute('class', 'flex-display pb-10');

  const desserts = document.createElement('div');
  desserts.setAttribute('class', 'flex-display pb-10');

  const space_1 = document.createElement('div');
  space_1.setAttribute('class', 'space');

  const space_2 = document.createElement('div');
  space_2.setAttribute('class', 'space');

  const space_3 = document.createElement('div');
  space_3.setAttribute('class', 'space');

  starters.innerHTML = `<span><strong>Starters: </strong></span>
    <span>Salty Pastries</span>,
    <span>Cheese Plate</span>,
    <span>Chef's Special Soup of Day</span>,
    <span>Beverages and Spirits</span>`;
  space_1.innerHTML = `<br /><br />`;
  fishes.innerHTML = `<span><strong>Fishes: </strong></span>
    <span>Sea Trout</span>,
    <span>Octopus and Calamar</span>,
    <span>Cat Fish</span>,
    <span>Whitey</span>,
    <span>Branzino</span>`;
  space_2.innerHTML = `<br /><br />`;
  salads.innerHTML = `<span><strong>Salads: </strong></span>
    <span>Season Salad</span>,
    <span>Onion Salad</span>,
    <span>Greens Salad</span>,
    <span>Seafood Salad</span>,
    <span>Cheese Salad</span>,
    <span>Mediterrenian Salad</span>`;
  space_3.innerHTML = `<br > <br/>`;
  desserts.innerHTML = `<span><strong>Desserts: </strong></span>
    <span>Baked Halva</span>,
    <span>Milk Pudding</span>,
    <span>Baklava</span>,
    <span>Fruit Yoghurd Kinds</span>,
    <span>Kunefe</span>`;

  menu_div.appendChild(starters);
  menu_div.appendChild(space_1);
  menu_div.appendChild(fishes);
  menu_div.appendChild(space_2);
  menu_div.appendChild(salads);
  menu_div.appendChild(space_3);
  menu_div.appendChild(desserts);

  return menu_div;
}

export default Menu;
