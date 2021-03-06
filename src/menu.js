function Menu() {
  const menuDiv = document.createElement('div');
  menuDiv.setAttribute('class', 'flex-column');

  const starters = document.createElement('div');
  starters.setAttribute('class', 'flex-display pb-10');

  const fishes = document.createElement('div');
  fishes.setAttribute('class', 'flex-display pb-10');

  const salads = document.createElement('div');
  salads.setAttribute('class', 'flex-display pb-10');

  const desserts = document.createElement('div');
  desserts.setAttribute('class', 'flex-display pb-10');

  starters.innerHTML = '<span><strong>Starters: </strong></span><span>Salty Pastries</span><span>Cheese Plate</span>,<span>Chefs Special Soup of Day</span>,<span>Beverages and Spirits</span>';

  fishes.innerHTML = '<span><strong>Fishes: </strong></span><span>Sea Trout</span>,<span>Octopus and Calamar</span>,<span>Cat Fish</span>,<span>Whitey</span>,<span>Branzino</span>';

  salads.innerHTML = '<span><strong>Salads: </strong></span><span>Season Salad</span>,<span>Onion Salad</span>,<span>Greens Salad</span>,<span>Seafood Salad</span>,<span>Cheese Salad</span>,<span>Mediterrenian Salad</span>';

  desserts.innerHTML = '<span><strong>Desserts: </strong></span><span>Baked Halva</span>,<span>Milk Pudding</span>,<span>Baklava</span>,<span>Fruit Yoghurd Kinds</span>,<span>Kunefe</span>';

  menuDiv.appendChild(starters);
  menuDiv.appendChild(fishes);
  menuDiv.appendChild(salads);
  menuDiv.appendChild(desserts);

  return menuDiv;
}

export default Menu;
