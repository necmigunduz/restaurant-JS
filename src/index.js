import Introduction from './introduction';
import Menu from './menu';
import Tabs from './tabs';
import Contact from './contact';

const content = document.getElementById('content');

const header = document.createElement('h1');
header.setAttribute('id', 'header');
header.textContent = 'BlueOcean';
const div = document.createElement('div');
div.setAttribute('id', 'restaurant');
div.textContent = 'Seafood Restaurant';
header.appendChild(div);

const tabsDiv = document.createElement('div');
tabsDiv.setAttribute('class', 'tab');

const container = document.createElement('div');
container.setAttribute('id', 'container');

const buttons = Tabs();
for (let i = 0; i < 3; i += 1) {
  tabsDiv.appendChild(buttons[i]);
}

const setStyle = (button) => {
  button.style.backgroundColor = 'black';
  button.style.color = 'white';
}

const resetStyle = (buttonIndex) => {
  for (let i = 0; i < buttons.length; i += 1) {
    if (i !== buttonIndex) {
      buttons[i].style.backgroundColor = 'lightblue';
      buttons[i].style.color = 'black';
    }
  }
}

buttons[0].addEventListener('click', () => {
  container.innerHTML = '';
  const introDiv = Introduction();
  container.appendChild(introDiv);
  setStyle(buttons[0]);
  resetStyle(0);
});

buttons[1].addEventListener('click', () => {
  container.innerHTML = '';
  const menu = Menu();
  container.appendChild(menu);
  setStyle(buttons[1]);
  resetStyle(1);
});

buttons[2].addEventListener('click', () => {
  container.innerHTML = '';
  const contact = Contact();
  container.appendChild(contact);
  setStyle(buttons[2]);
  resetStyle(2);
});

content.appendChild(header);
content.appendChild(tabsDiv);
content.appendChild(container);
