import introduction from './introduction';
import menu from './menu';
import contact from './contact';
import tabs from './tabs';

const content = document.getElementById('content');

const header = document.createElement('h1');
header.setAttribute('id', 'header');
header.textContent = "BlueOcean";

const div = document.createElement('div');
div.setAttribute('id','restaurant');
div.textContent = "Seafood Restaurant";

header.appendChild(div);
content.appendChild(header);
