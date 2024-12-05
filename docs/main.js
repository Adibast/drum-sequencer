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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! resources/background.webp */ \"./src/resources/background.webp\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! resources/Drumkit.png */ \"./src/resources/Drumkit.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! resources/Adibast-logo.png */ \"./src/resources/Adibast-logo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    scroll-behavior: smooth;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n/* Webkit Browsers (Chrome, Safari, Edge, Opera) */\r\n::-webkit-scrollbar {\r\n    width: 8px;\r\n    height: 8px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n/* background-color: rgba(0, 0, 255, 0.3); */\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    border: 2px solid transparent;\r\n}\r\n::-webkit-scrollbar-track {\r\n    background: rgba(0, 0, 0, 0.1);\r\n    border-radius: 10px;\r\n}\r\n::-webkit-scrollbar:hover {\r\n    width: 12px;\r\n}\r\n::-webkit-scrollbar-thumb:hover {\r\n    background-color: rgba(0, 0, 255, 0.5);\r\n}\r\n/* Firefox */\r\nhtml {\r\n    scrollbar-width: thin; /* Makes the scrollbar thin */\r\n    scrollbar-color: rgba(10, 0, 255, 0.8) rgba(255, 255, 255, 0.2); /* Thumb color, Track color */\r\n}\r\n.class-toggle {\r\n    background-color: rgb(0, 0, 255);\r\n}\r\nbody {\r\n    overflow-y: hidden;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n.container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 100%;\r\n    .sequencer {\r\n        height: 200px;\r\n    }\r\n}\r\n.sequencer {\r\n    bottom: 1em;\r\n    width: 50vw;\r\n    /* height: 21vh; */\r\n    border: 1px solid lightslategray;\r\n    border-radius: 1em;\r\n    overflow: clip;\r\n}\r\n.sounds-column, .options-menu, .sequencer {\r\n    background-color: rgba(0,0,0,0.5);\r\n}\r\n.sounds-column, .list-title, .sounds-list, .item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n.sounds-column {\r\n    flex: 1;\r\n    color: white;\r\n    border-right: 1px solid lightslategrey;\r\n    width: 20%;\r\n    height: 100%;\r\n}\r\n.list-title {\r\n    height: 18%;\r\n    justify-content: center;\r\n}\r\n.sounds-list {\r\n    justify-content: space-evenly;\r\n    flex: 1;\r\n    width: 80%;\r\n    height: 82%;\r\n\r\n    padding-bottom: 1em;\r\n} \r\n.item {\r\n    width: 100%;\r\n    height: 5%;\r\n    font-size: 50%;\r\n    letter-spacing: 0.2em;\r\n}\r\n.column-border {\r\n    border: 1px solid red;\r\n}\r\n.options-menu {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    right: 0;\r\n    border-bottom: 1px solid lightslategrey;\r\n    width: 80%;\r\n    height: 20%;\r\n}\r\n.play-button, .column-set, .stop-button {\r\n    color: white;\r\n    background-color: rgba(0,0,0,0.5);\r\n    border-color: lightslategrey;\r\n    width: 8%;\r\n    height: 80%;\r\n    font-size: 80%;\r\n}\r\n.stop-button {\r\n    margin-right: 1em;\r\n}\r\n.label {\r\n    font-size: 0.8em;\r\n    color: white;\r\n}\r\n.speed-input, .column-input {\r\n    width: 8%;\r\n}\r\n.sounds-selector {\r\n    display: grid;\r\n    overflow-x: auto;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 80%;\r\n    height: 80%;\r\n}\r\n.drumkit {\r\n    position: absolute;\r\n    width: 2288px;\r\n    height: 1830px;\r\n    transform: scale(0.2);\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n    background-size: contain;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n.hi-hat, \r\n.hi-hat-pedal, \r\n.crash, \r\n.ride, \r\n.snare, \r\n.hi-tom, \r\n.mid-tom, \r\n.floor-tom, \r\n.bass-drum, \r\n.logo,\r\n.animation, .sounds-column, .options-menu, .sounds-selector, .sequencer, .audio-files {\r\n    position: absolute;\r\n}\r\n.hi-hat:active .animation,\r\n.hi-hat-pedal:active .animation, \r\n.crash:active .animation, \r\n.ride:active .animation, \r\n.snare:active .animation, \r\n.hi-tom:active .animation,\r\n.mid-tom:active .animation, \r\n.floor-tom:active .animation,\r\n.bass-drum:active .animation \r\n{\r\n    animation: wave 0.1s ease-out;\r\n}\r\n.animating {\r\n    animation: wave 0.1s ease-out;\r\n}\r\n.hi-hat {\r\n    top: 12em;\r\n    right: 9em;\r\n    width: 23em;\r\n    height: 20em;\r\n}\r\n.hi-hat-pedal {\r\n    width: 37em;\r\n    height: 35em;\r\n    bottom: 5em;\r\n    right: 5em;\r\n}\r\n.crash {\r\n    width: 30em;\r\n    height: 15em;\r\n    top: 0em;\r\n    right: 20em;\r\n}\r\n.ride {\r\n    width: 40em;\r\n    height: 15em;\r\n    top: 15em;\r\n    left: 0em;\r\n}\r\n.snare {\r\n    width: 30em;\r\n    height: 15em;\r\n    right: 30em;\r\n    bottom: 55em;\r\n    z-index: 1;\r\n}\r\n.hi-tom {\r\n    width: 25em;\r\n    height: 25em;\r\n    top: 25em;\r\n    right: 47em;\r\n    z-index: 2;\r\n}\r\n.mid-tom {\r\n    width: 25em;\r\n    height: 25em;\r\n    top: 25em;\r\n    left: 45em;\r\n    z-index: 2;\r\n}\r\n.floor-tom {\r\n    width: 25em;\r\n    height: 30em;\r\n    top: 40em;\r\n    left: 28em;\r\n    z-index: 1;\r\n}\r\n.bass-drum {\r\n    width: 45em;\r\n    height: 45em;\r\n    left: 50em;\r\n    bottom: 5em;\r\n    z-index: 0;\r\n}\r\n.logo {\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    width: 20em;\r\n    height: 5em;\r\n    left: 61em;\r\n    bottom: 40em;\r\n    z-index: 20;\r\n}\r\n.animation {\r\n    transform: translate(-50%, -50%);\r\n    top: 50%;\r\n    left: 50%;\r\n    border: 5px solid white;\r\n    width: 5em;\r\n    height: 5em;\r\n    border-radius: 50%;\r\n    opacity: 0;\r\n}\r\n.audio-files {\r\n    top: 0;\r\n}\r\n@keyframes wave {\r\n    from {\r\n        transform: scale(1);\r\n        opacity: 1;\r\n    }\r\n    to {\r\n        transform: scale(10);\r\n        opacity: 0;\r\n    }\r\n}\r\n@media screen and (max-width: 390px) {\r\n    body {\r\n        overflow: clip !important;\r\n    }\r\n    .options-menu {\r\n        padding-right: 0.5em;\r\n    }\r\n    .sequencer {\r\n        width: 90%;\r\n    }\r\n    .sounds-column {\r\n        width: 30%;\r\n    }\r\n    .list-title {\r\n        font-size: small;\r\n        text-align: center;\r\n    }\r\n    .sounds-selector, .options-menu {\r\n        width: 70%;\r\n    }\r\n    .label {\r\n        width: 10%;\r\n        font-size: 0.5em;\r\n        line-height: 1em;\r\n        text-align: center;\r\n        padding-right: 5em;\r\n    }\r\n    .column-input {\r\n        width: 2em;\r\n    }\r\n    .speed-input {\r\n        width: 2.2em;\r\n        margin-left: -1em;\r\n    }\r\n    .column-set, .play-button, .stop-button {\r\n        width: 2.5em;\r\n        font-size: 0.5em;\r\n    }\r\n    .stop-button {\r\n        margin-right: unset;\r\n    }\r\n    .sounds-list {\r\n        padding-top: 0.2em;\r\n        margin-bottom: -0.2em;\r\n        line-height: 0%;\r\n        padding-bottom: unset;\r\n    }\r\n     .drumkit {\r\n        transform: scale(0.15);\r\n    } \r\n}\r\n@media screen and (min-width: 400px) and (max-width: 540px) {\r\n    body {\r\n        overflow: clip !important;\r\n    }\r\n    .sequencer {\r\n        width: 90%;\r\n    }\r\n    .sounds-column {\r\n        width: 30%;\r\n    }\r\n    .list-title {\r\n        text-align: center;\r\n    }\r\n    .sounds-selector, .options-menu {\r\n        width: 70%;\r\n    }\r\n    .label {\r\n        width: 10%;\r\n        font-size: xx-small;\r\n        text-align: center;\r\n        padding-right: 5em;\r\n    }\r\n    .speed-input, .column-input {\r\n        width: 2em;\r\n        margin-right: -0.1em;\r\n    }\r\n    .speed-input {\r\n        margin-left: -1.5em;\r\n        margin-right: -0.5em;\r\n    }\r\n    .column-set, .play-button, .stop-button {\r\n        width: 3em;\r\n        font-size: 0.5em;\r\n        margin-left: -1em;\r\n    }\r\n    .stop-button {\r\n        margin-right: unset;\r\n    }\r\n    .drumkit {\r\n        transform: scale(0.18);\r\n    }\r\n\r\n\r\n    .sounds-list {\r\n        padding-bottom: unset;\r\n    }\r\n}\r\n/* media query for iPad mini */\r\n@media screen and (width: 768px) and (height: 1024px) {\r\n    .sounds-list {\r\n        padding-bottom: unset;\r\n    }\r\n}\r\n@media screen and (min-width: 700px) and (max-width: 1024px) {\r\n    .sequencer {\r\n        width: 90%;\r\n    }\r\n    .drumkit {\r\n        transform: scale(0.3);\r\n    }\r\n}\r\n@media screen and (min-width: 1920px) and (max-width: 3790px) {\r\n    .list-title {\r\n        font-size: 1.5em;\r\n    }\r\n    .item {\r\n        font-size: 1em;\r\n        padding-bottom: 1em;\r\n    }\r\n    .label {\r\n        font-size: 1.5em;\r\n    }\r\n    .play-button, .column-set {\r\n        font-size: larger !important;\r\n    }\r\n    .drumkit {\r\n        transform: scale(0.4)\r\n    }\r\n    .container .sequencer {\r\n        height: 240px;\r\n        .sounds-column {\r\n            padding-bottom: 1em;\r\n        }\r\n    }\r\n}\r\n@media screen and (min-width: 3800px) {\r\n    .list-title {\r\n        font-size: 2.5em;\r\n    }\r\n    .item {\r\n        font-size: 1.5em;\r\n    }\r\n    .label {\r\n        font-size: 1.5em;\r\n    }\r\n    .play-button, .column-set {\r\n        font-size: larger !important;\r\n    }\r\n    .drumkit {\r\n        transform: scale(0.5)\r\n    }\r\n    .container .sequencer {\r\n        height: 300px;\r\n        transform: scale(1.5);\r\n        bottom: 10vh;\r\n    }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://drum-sequencer/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://drum-sequencer/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://drum-sequencer/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://drum-sequencer/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://drum-sequencer/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://drum-sequencer/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://drum-sequencer/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://drum-sequencer/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://drum-sequencer/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://drum-sequencer/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://drum-sequencer/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/programModule.js":
/*!******************************!*\
  !*** ./src/programModule.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   programStart: () => (/* binding */ programStart)\n/* harmony export */ });\nfunction programStart(){\n    const openHiHat = document.querySelector('.Open-Hi-Hat');\n    const closedHiHat = document.querySelector('.Closed-Hi-Hat');\n    const hiHatBark = document.querySelector('.Hi-Hat-Bark');\n    const hiHatPedal = document.querySelector('.Hi-Hat-pedal');\n    const crashSymbal = document.querySelector('.Crash-Cymbal');\n    const rideSymbal = document.querySelector('.Ride-Cymbal');\n    const snareDrum = document.querySelector('.Snare-Drum');\n    const hightTom = document.querySelector('.High-Tom');\n    const midTom = document.querySelector('.Mid-Tom');\n    const floorTom = document.querySelector('.Floor-Tom');\n    const bassDrum = document.querySelector('.Bass-Drum');\n    const drumkit = document.querySelector('.drumkit');\n    const columnNumber = document.querySelector('.column-input');\n    const sequencer = document.querySelector('.sequencer');\n    const soundSelector= document.querySelector('.sounds-selector');\n    const soundsArray = ['Open-Hi-Hat', 'Closed-Hi-Hat', 'Hi-Hat-Bark', 'Hi-Hat-pedal', 'Crash-Cymbal', 'Ride-Cymbal', 'Snare-Drum', 'High-Tom', 'Mid-Tom', 'Floor-Tom', 'Bass-Drum'];\n    const columnValue = () => {return columnNumber.value};\n    let shouldStop = false;\n\n    drumkit.addEventListener('click', (e)=> {\n      const sound = e.target.querySelector('audio');\n      const link = e.target.closest('.logo');\n      if (link) {\n        window.open(`https://adibast.github.io/portfolio`, '_blank')\n      } \n      if (!sound) return;\n      sound.currentTime = 0;\n      sound.play();\n    });\n    sequencer.addEventListener('click', (e)=> {\n      const target = e.target;\n      const noteElement = target.closest('.column');\n      const playButton = target.closest('.play-button');\n      const stopButton = target.closest('.stop-button');\n      const columnSet = target.closest('.column-set');\n      if (columnSet) {\n        createGrid(11, columnValue());\n      };\n      if (noteElement) {\n        noteElement.classList.toggle('class-toggle');\n      };\n      if (playButton) {\n        const bpm = parseInt(document.querySelector('.speed-input').value);\n        iterateColumns(11, columnValue(), bpm);\n      };\n      if (stopButton) {\n        shouldStop = true;\n      };\n    });\n    window.addEventListener('keydown', (e) => {\n      const audio = document.querySelector(`audio[data-key=\"${e.keyCode}\"]`);\n      const divAnimation = document.querySelector(`div[data-key=\"${e.keyCode}\"]`);\n      if (!audio || !divAnimation) return;\n      audio.currentTime = 0;\n      audio.play();\n      divAnimation.classList.toggle('animating');\n    });\n    function removeGrid() {\n      while (soundSelector.firstChild) {\n          soundSelector.removeChild(soundSelector.firstChild);\n      }\n    }\n    function createGrid(rows, columns) {\n      removeGrid();\n      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;\n      const width = isMobile ? '20px' : '30px';\n      for (let i = 0; i < rows; i++) {\n        const rowDiv = document.createElement('div');\n        rowDiv.className = `row-${i + 1} grid-row ${soundsArray[i]}`;\n        rowDiv.setAttribute('style', 'display: flex; flex: 1; background-color: white;');\n        soundSelector.appendChild(rowDiv);\n        for (let j = 0; j < columns; j++) {\n          const columnDiv = document.createElement('div');\n          columnDiv.className = 'column';\n          columnDiv.setAttribute('style', `display: flex; flex: 1; border: 1px solid black; width: ${width}`);\n          rowDiv.appendChild(columnDiv);\n        }\n      };\n    };\n    function isBlue(element) {\n      const computedColor = window.getComputedStyle(element).getPropertyValue('background-color');\n      const rgbColor = computedColor.match(/\\d+/g);\n      return rgbColor[0] === '0' && rgbColor[1] === '0' && rgbColor[2] === '255';\n    };\n    function iterateColumns(rows, columns, bpm) {\n      let columnIndex = 0; \n      const intervalDuration = 60000 / bpm; \n      const interval = setInterval(() => {\n        let columnElements = document.querySelectorAll(`.column:nth-child(${columnIndex + 1})`);\n        columnElements.forEach(element => {\n          let parentRow = element.parentElement;\n          if (isBlue(element)) {\n            if (parentRow.classList.contains('Open-Hi-Hat')) {\n              openHiHat.currentTime = 0;\n              openHiHat.play();\n            };\n            if (parentRow.classList.contains('Closed-Hi-Hat')) {\n              closedHiHat.currentTime = 0;\n              closedHiHat.play();\n            };\n            if (parentRow.classList.contains('Hi-Hat-Bark')) {\n              hiHatBark.currentTime = 0;\n              hiHatBark.play();\n            };\n            if (parentRow.classList.contains('Hi-Hat-pedal')) {\n              hiHatPedal.currentTime = 0;\n              hiHatPedal.play();\n            };\n            if (parentRow.classList.contains('Crash-Cymbal')) {\n              crashSymbal.currentTime = 0;\n              crashSymbal.play();\n            };\n            if (parentRow.classList.contains('Ride-Cymbal')) {\n              rideSymbal.currentTime = 0;\n              rideSymbal.play();\n            };\n            if (parentRow.classList.contains('Snare-Drum')) {\n              snareDrum.currentTime = 0;\n              snareDrum.play();\n            };\n            if (parentRow.classList.contains('High-Tom')) {\n              hightTom.currentTime = 0;\n              hightTom.play();\n            };\n            if (parentRow.classList.contains('Mid-Tom')) {\n              midTom.currentTime = 0;\n              midTom.play();\n            };\n            if (parentRow.classList.contains('Floor-Tom')) {\n              floorTom.currentTime = 0;\n              floorTom.play();\n            };\n            if (parentRow.classList.contains('Bass-Drum')) {\n              bassDrum.currentTime = 0;\n              bassDrum.play();\n            };\n          }\n        });\n        columnIndex++; \n        if (columnIndex >= columns || shouldStop === true) {\n          clearInterval(interval);\n          shouldStop = false;\n        }\n      }, intervalDuration);\n    };\n  };\n  \n\n//# sourceURL=webpack://drum-sequencer/./src/programModule.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _programModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./programModule.js */ \"./src/programModule.js\");\n\r\n\r\n(0,_programModule_js__WEBPACK_IMPORTED_MODULE_1__.programStart)();\n\n//# sourceURL=webpack://drum-sequencer/./src/script.js?");

/***/ }),

/***/ "./src/resources/Adibast-logo.png":
/*!****************************************!*\
  !*** ./src/resources/Adibast-logo.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"resources/Adibast-logo.png\";\n\n//# sourceURL=webpack://drum-sequencer/./src/resources/Adibast-logo.png?");

/***/ }),

/***/ "./src/resources/Drumkit.png":
/*!***********************************!*\
  !*** ./src/resources/Drumkit.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"resources/Drumkit.png\";\n\n//# sourceURL=webpack://drum-sequencer/./src/resources/Drumkit.png?");

/***/ }),

/***/ "./src/resources/background.webp":
/*!***************************************!*\
  !*** ./src/resources/background.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"resources/background.webp\";\n\n//# sourceURL=webpack://drum-sequencer/./src/resources/background.webp?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;