function Tabs() {
  const buttons = [];

  buttons[0] = document.createElement("button");
  buttons[0].innerText = "Introduction";

  buttons[1] = document.createElement("button");
  buttons[1].innerText = "Menu";

  buttons[2] = document.createElement("button");
  buttons[2].innerText = "Contact Us";

  return buttons;
}

export default Tabs;
