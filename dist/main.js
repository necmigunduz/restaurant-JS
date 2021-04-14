/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Contact() {\n  const contactDiv = document.createElement('div');\n  contactDiv.setAttribute('class', 'flex-column, contact');\n\n  contactDiv.innerHTML = `<span><strong>To send your feedbacks about your experience in our restaurant: </strong></span><br /><br><span>myexperience@blueocean.com</span><br /><br><span><strong>For general information requests: </strong></span><br /><br><span>info@blueocean.com</span>`;\n\n  return contactDiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\n\n\n//# sourceURL=webpack://restaurant-js/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _introduction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./introduction */ \"./src/introduction.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nconst content = document.getElementById('content');\n\nconst header = document.createElement('h1');\nheader.setAttribute('id', 'header');\nheader.textContent = 'BlueOcean';\nconst div = document.createElement('div');\ndiv.setAttribute('id', 'restaurant');\ndiv.textContent = 'Seafood Restaurant';\nheader.appendChild(div);\n\nconst tabs_div = document.createElement('div');\ntabs_div.setAttribute('class', 'tab');\n\nconst container = document.createElement('div');\ncontainer.setAttribute('id', 'container');\n\nconst buttons = (0,_tabs__WEBPACK_IMPORTED_MODULE_2__.default)();\nfor (let i = 0; i < 3; i += 1) {\n  tabs_div.appendChild(buttons[i]);\n}\n\nfunction setStyle(button) {\n  button.style.backgroundColor = 'black';\n  button.style.color = 'white';\n}\n\nfunction resetStyle(button_index) {\n  for (let i = 0; i < buttons.length; i += 1) {\n    if (i !== button_index) {\n      buttons[i].style.backgroundColor = 'lightblue';\n      buttons[i].style.color = 'black';\n    }\n  }\n}\n\nbuttons[0].addEventListener('click', () => {\n  container.innerHTML = '';\n  const intro_div = (0,_introduction__WEBPACK_IMPORTED_MODULE_0__.default)();\n  container.appendChild(intro_div);\n  setStyle(buttons[0]);\n  resetStyle(0);\n});\n\nbuttons[1].addEventListener('click', () => {\n  container.innerHTML = '';\n  const menu = (0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)();\n  container.appendChild(menu);\n  setStyle(buttons[1]);\n  resetStyle(1);\n});\n\nbuttons[2].addEventListener('click', () => {\n  container.innerHTML = '';\n  const contact = (0,_contact__WEBPACK_IMPORTED_MODULE_3__.default)();\n  container.appendChild(contact);\n  setStyle(buttons[2]);\n  resetStyle(2);\n});\n\ncontent.appendChild(header);\ncontent.appendChild(tabs_div);\ncontent.appendChild(container);\n\n\n//# sourceURL=webpack://restaurant-js/./src/index.js?");

/***/ }),

/***/ "./src/introduction.js":
/*!*****************************!*\
  !*** ./src/introduction.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Introduction() {\n  const intro_text =\n    'We serve a constantly rotating selection of seasonal delights, including lobster and Alaskan king crab, to name a few. We’ve worked hard to develop close relationships with our suppliers, from small, family-owned companies in the Mediterranean, to independent fishermen right here in Florida, to ensure you the exceptional quality you desire.';\n\n  const intro_div = document.createElement('div');\n  intro_div.setAttribute('class', 'intro');\n\n  const p_intro = document.createElement('p');\n  p_intro.setAttribute('class', 'intro');\n  p_intro.innerText = intro_text;\n\n  intro_div.appendChild(p_intro);\n\n  return intro_div;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Introduction);\n\n\n//# sourceURL=webpack://restaurant-js/./src/introduction.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Menu() {\n  const menu_div = document.createElement('div');\n  menu_div.setAttribute('class', 'flex-column');\n\n  const starters = document.createElement('div');\n  starters.setAttribute('class', 'flex-display pb-10');\n\n  const fishes = document.createElement('div');\n  fishes.setAttribute('class', 'flex-display pb-10');\n\n  const salads = document.createElement('div');\n  salads.setAttribute('class', 'flex-display pb-10');\n\n  const desserts = document.createElement('div');\n  desserts.setAttribute('class', 'flex-display pb-10');\n\n  const space_1 = document.createElement('div');\n  space_1.setAttribute('class', 'space');\n\n  const space_2 = document.createElement('div');\n  space_2.setAttribute('class', 'space');\n\n  const space_3 = document.createElement('div');\n  space_3.setAttribute('class', 'space');\n\n  starters.innerHTML = `<span><strong>Starters: </strong></span>\n    <span>Salty Pastries</span>,\n    <span>Cheese Plate</span>,\n    <span>Chef's Special Soup of Day</span>,\n    <span>Beverages and Spirits</span>`;\n  space_1.innerHTML = `<br /><br />`;\n  fishes.innerHTML = `<span><strong>Fishes: </strong></span>\n    <span>Sea Trout</span>,\n    <span>Octopus and Calamar</span>,\n    <span>Cat Fish</span>,\n    <span>Whitey</span>,\n    <span>Branzino</span>`;\n  space_2.innerHTML = `<br /><br />`;\n  salads.innerHTML = `<span><strong>Salads: </strong></span>\n    <span>Season Salad</span>,\n    <span>Onion Salad</span>,\n    <span>Greens Salad</span>,\n    <span>Seafood Salad</span>,\n    <span>Cheese Salad</span>,\n    <span>Mediterrenian Salad</span>`;\n  space_3.innerHTML = `<br > <br/>`;\n  desserts.innerHTML = `<span><strong>Desserts: </strong></span>\n    <span>Baked Halva</span>,\n    <span>Milk Pudding</span>,\n    <span>Baklava</span>,\n    <span>Fruit Yoghurd Kinds</span>,\n    <span>Kunefe</span>`;\n\n  menu_div.appendChild(starters);\n  menu_div.appendChild(space_1);\n  menu_div.appendChild(fishes);\n  menu_div.appendChild(space_2);\n  menu_div.appendChild(salads);\n  menu_div.appendChild(space_3);\n  menu_div.appendChild(desserts);\n\n  return menu_div;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\n\n\n//# sourceURL=webpack://restaurant-js/./src/menu.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Tabs() {\n  const buttons = [];\n\n  buttons[0] = document.createElement('button');\n  buttons[0].innerText = 'Introduction';\n\n  buttons[1] = document.createElement('button');\n  buttons[1].innerText = 'Menu';\n\n  buttons[2] = document.createElement('button');\n  buttons[2].innerText = 'Contact Us';\n\n  return buttons;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);\n\n\n//# sourceURL=webpack://restaurant-js/./src/tabs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;