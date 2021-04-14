import Introduction from "./introduction.js";
import Menu from "./menu.js";
import Tabs from "./tabs.js";
import Contact from "./contact.js";

const content = document.getElementById("content");

const header = document.createElement("h1");
header.setAttribute("id", "header");
header.textContent = "BlueOcean";
const div = document.createElement("div");
div.setAttribute("id", "restaurant");
div.textContent = "Seafood Restaurant";
header.appendChild(div);

const tabs_div = document.createElement("div");
tabs_div.setAttribute("class", "tab");

const container = document.createElement("div");
container.setAttribute("id", "container");

const buttons = Tabs();
for (let i = 0; i < 3; i += 1) {
  tabs_div.appendChild(buttons[i]);
}

function setStyle(button) {
  button.style.backgroundColor = "black";
  button.style.color = "white";
}

function resetStyle(button_index) {
  for (let i = 0; i < buttons.length; i += 1) {
    if (i !== button_index) {
      buttons[i].style.backgroundColor = "lightblue";
      buttons[i].style.color = "black";
    }
  }
}

buttons[0].addEventListener("click", () => {
  container.innerHTML = "";
  const intro_div = Introduction();
  container.appendChild(intro_div);
  setStyle(buttons[0]);
  resetStyle(0);
});

buttons[1].addEventListener("click", () => {
  container.innerHTML = "";
  const menu = Menu();
  container.appendChild(menu);
  setStyle(buttons[1]);
  resetStyle(1);
});

buttons[2].addEventListener("click", () => {
  container.innerHTML = "";
  const contact = Contact();
  container.appendChild(contact);
  setStyle(buttons[2]);
  resetStyle(2);
});

content.appendChild(header);
content.appendChild(tabs_div);
content.appendChild(container);
