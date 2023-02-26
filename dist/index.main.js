/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    display: flex;\n}\n.navbar {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 30vw;\n    background-color: rgb(202,232,201);\n    border: 3px solid #73AD21;\n    align-items: center;\n}\n.navbarItem {\n    color: black;\n}\n.popup {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 300px;\n    height: 300px;\n    border: 3px solid #73AD21;\n    background-color: rgb(202,232,201);\n}\n.selected {\n    background-color: yellow;\n}\n.popup {\n    display: flex;\n    flex-direction: column;\n}\n.contentContainer {\n    display: flex;\n    flex-wrap: wrap;\n}\n.todoItem {\n    background-color: rgb(202,232,201);\n    border: 3px solid #73AD21;\n    margin: 10px;\n    display: flex;\n    flex-direction: column;\n    height: 300px;\n    width: 150px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,WAAW;IACX,kCAAkC;IAClC,yBAAyB;IACzB,mBAAmB;AACvB;AACA;IACI,YAAY;AAChB;AACA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,kCAAkC;AACtC;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,eAAe;AACnB;AACA;IACI,kCAAkC;IAClC,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,YAAY;AAChB","sourcesContent":["body {\n    display: flex;\n}\n.navbar {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 30vw;\n    background-color: rgb(202,232,201);\n    border: 3px solid #73AD21;\n    align-items: center;\n}\n.navbarItem {\n    color: black;\n}\n.popup {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 300px;\n    height: 300px;\n    border: 3px solid #73AD21;\n    background-color: rgb(202,232,201);\n}\n.selected {\n    background-color: yellow;\n}\n.popup {\n    display: flex;\n    flex-direction: column;\n}\n.contentContainer {\n    display: flex;\n    flex-wrap: wrap;\n}\n.todoItem {\n    background-color: rgb(202,232,201);\n    border: 3px solid #73AD21;\n    margin: 10px;\n    display: flex;\n    flex-direction: column;\n    height: 300px;\n    width: 150px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/buttons.js":
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects */ "./src/objects.js");
/* eslint-disable no-plusplus */



const initializeTodoPopupButtons = () => {
    const submitBtn = document.querySelector('.submitBtn');
    const cancelBtn = document.querySelector('.cancelBtn');
    const todoNameField = document.getElementById('todoName');
    const todoDescriptionField = document.getElementById('todoDescription');
    const todoDueDateField = document.getElementById('todoDueDate'); 
    const todoNotesField = document.getElementById('todoNotes');

    submitBtn.addEventListener('click', () => {
        const tempTodo = (0,_objects__WEBPACK_IMPORTED_MODULE_1__.toDoItem)(todoNameField.value, todoDescriptionField.value, todoDueDateField.value, 1, todoNotesField.value);
        const activeProject = _objects__WEBPACK_IMPORTED_MODULE_1__.trackProjects.getProject(_objects__WEBPACK_IMPORTED_MODULE_1__.trackActiveProject.getActiveProject());
        const allProjects = _objects__WEBPACK_IMPORTED_MODULE_1__.trackProjects.getProject(0);
        allProjects.addTodo(tempTodo);
        if (activeProject !== allProjects) {
            activeProject.addTodo(tempTodo);
        }
        (0,_display__WEBPACK_IMPORTED_MODULE_0__.updateContentContainer)(activeProject);
        (0,_display__WEBPACK_IMPORTED_MODULE_0__.closePopUp)();


    });

    cancelBtn.addEventListener('click', () => {
        (0,_display__WEBPACK_IMPORTED_MODULE_0__.closePopUp)();
    });

}

const initializePopUpButtons = () => {
    const submitBtn = document.querySelector('.submitBtn');
    const cancelBtn = document.querySelector('.cancelBtn');
    const projectNameField = document.getElementById('projectName');
    const projectDueDateField = document.getElementById('projectDueDate'); 

    submitBtn.addEventListener('click', () => {
        const tempItem = (0,_objects__WEBPACK_IMPORTED_MODULE_1__.projectItem)(projectNameField.value, projectDueDateField.value);
        
        _objects__WEBPACK_IMPORTED_MODULE_1__.trackProjects.addProject(tempItem);
        (0,_display__WEBPACK_IMPORTED_MODULE_0__.closePopUp)();
        (0,_display__WEBPACK_IMPORTED_MODULE_0__.refreshProjects)(_objects__WEBPACK_IMPORTED_MODULE_1__.trackProjects.getAllProjects());
        const allProjects = document.querySelectorAll('.projectTile');
        for (let i = 0; i < allProjects.length; i++) {
            const projectTile = allProjects[i];
            projectTile.addEventListener('click', () => {
                _objects__WEBPACK_IMPORTED_MODULE_1__.trackActiveProject.setActiveProject(i);
                (0,_display__WEBPACK_IMPORTED_MODULE_0__.updateContentContainer)(_objects__WEBPACK_IMPORTED_MODULE_1__.trackProjects.getProject(i));
                console.log(_objects__WEBPACK_IMPORTED_MODULE_1__.trackProjects.getProject(i).getTitle());
                allProjects.forEach((tempProj) => {
                    tempProj.classList.remove('selected');
                });
                projectTile.classList.add('selected');
            });
        }
    });

    cancelBtn.addEventListener('click', () => {
        (0,_display__WEBPACK_IMPORTED_MODULE_0__.closePopUp)();
    });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    const newProjectBtn = document.querySelector('.newProjectBtn');
    (0,_display__WEBPACK_IMPORTED_MODULE_0__.refreshProjects)(_objects__WEBPACK_IMPORTED_MODULE_1__.trackProjects.getAllProjects());
    newProjectBtn.addEventListener('click', () => {
        (0,_display__WEBPACK_IMPORTED_MODULE_0__.createPopUp)();
        initializePopUpButtons();
    });

    const newTodoBtn = document.querySelector('.newTodoBtn');
    newTodoBtn.addEventListener('click', () => {
        (0,_display__WEBPACK_IMPORTED_MODULE_0__.createTodoPopUp)();
        initializeTodoPopupButtons();
    });
});

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closePopUp": () => (/* binding */ closePopUp),
/* harmony export */   "createPopUp": () => (/* binding */ createPopUp),
/* harmony export */   "createTodoPopUp": () => (/* binding */ createTodoPopUp),
/* harmony export */   "pageInit": () => (/* binding */ pageInit),
/* harmony export */   "refreshProjects": () => (/* binding */ refreshProjects),
/* harmony export */   "updateContentContainer": () => (/* binding */ updateContentContainer)
/* harmony export */ });
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */


// initialize page

// initialize navbar
const navbarInit = () => {
    const body = document.querySelector('body');
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');
    const homeBtn = document.createElement('div');
    // init home button
    homeBtn.classList.add('navbarItem');
    homeBtn.textContent = 'Home';
    navbar.appendChild(homeBtn);
    // init new todo button
    const newTodoBtn = document.createElement('div');
    newTodoBtn.classList.add('navbarItem');
    newTodoBtn.classList.add('newTodoBtn');    
    newTodoBtn.textContent = 'New Todo';
    navbar.appendChild(newTodoBtn);
    // init new project button
    const newProjectBtn = document.createElement('div');
    newProjectBtn.classList.add('navbarItem');
    newProjectBtn.classList.add('newProjectBtn');    
    newProjectBtn.textContent = 'New Project';
    navbar.appendChild(newProjectBtn);
    // init projects title
    const projectsTitle = document.createElement('div');
    projectsTitle.textContent = 'Projects';
    projectsTitle.classList.add('projectsTitle');
    projectsTitle.classList.add('navbarItem');
    navbar.appendChild(projectsTitle);
    // init projects container
    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projectsContainer');
    projectsContainer.classList.add('navbarItem');
    navbar.appendChild(projectsContainer);


    // display navbar
    body.appendChild(navbar);
};

    // iterate projects & add to projects container
const refreshProjects = (projects) => {
    const projectsContainer = document.querySelector('.projectsContainer');

    // remove existing projects displays
    const currentProjects = document.querySelectorAll('.projectTile');
    currentProjects.forEach((tempProject) => {
        tempProject.remove();
    });

    // iterate and display updated projects
    for (let i = 0; i < projects.length; i++) {
        const newProjectTile = document.createElement('div');
        newProjectTile.textContent = projects[i].getTitle();
        newProjectTile.classList.add('projectTile');
        newProjectTile.classList.add('navbarItem');
        projectsContainer.appendChild(newProjectTile);
    }
}

const createPopUp = () => {
    const body = document.querySelector('body');
    const popupDiv = document.createElement('div');
    popupDiv.classList.add('popup');
    // Project Name
    const projectName = document.createElement('input');
    projectName.setAttribute('name', 'projectName');
    projectName.setAttribute('type', 'text')
    projectName.id = 'projectName';
    const projectNameLabel = document.createElement('label');
    projectNameLabel.textContent = 'Project Name:';
    projectNameLabel.setAttribute('for', 'projectName');
    popupDiv.appendChild(projectNameLabel);
    popupDiv.appendChild(projectName);
    // Project Due Date
    const projectDueDate = document.createElement('input');
    projectDueDate.setAttribute('name', 'projectDueDate');
    projectDueDate.setAttribute('type', 'date')
    projectDueDate.id = 'projectDueDate';
    const projectDueDateLabel = document.createElement('label');
    projectDueDateLabel.textContent = 'Due Date:';
    projectDueDateLabel.setAttribute('for', 'projectName');
    popupDiv.appendChild(projectDueDateLabel);
    popupDiv.appendChild(projectDueDate);
    // Buttons
    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'button');
    submitBtn.classList.add('submitBtn');
    submitBtn.textContent = 'Submit';
    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.classList.add('cancelBtn');
    cancelBtn.textContent = 'Cancel';
    popupDiv.appendChild(submitBtn);
    popupDiv.appendChild(cancelBtn);

    body.appendChild(popupDiv);
}

const createTodoPopUp = () => {
    const body = document.querySelector('body');
    const popupDiv = document.createElement('div');
    popupDiv.classList.add('popup');
    // Todo Name
    const todoName = document.createElement('input');
    todoName.setAttribute('name', 'todoName');
    todoName.setAttribute('type', 'text')
    todoName.id = 'todoName';
    const todoNameLabel = document.createElement('label');
    todoNameLabel.textContent = 'Todo Name:';
    todoNameLabel.setAttribute('for', 'todoName');
    popupDiv.appendChild(todoNameLabel);
    popupDiv.appendChild(todoName);
    // Todo description
    const todoDescription = document.createElement('input');
    todoDescription.setAttribute('name', 'todoDescription');
    todoDescription.setAttribute('type', 'text')
    todoDescription.id = 'todoDescription';
    const todoDescriptionLabel = document.createElement('label');
    todoDescriptionLabel.textContent = 'Todo Description:';
    todoDescriptionLabel.setAttribute('for', 'todoDescription');
    popupDiv.appendChild(todoDescriptionLabel);
    popupDiv.appendChild(todoDescription);
    // Todo Due Date
    const todoDueDate = document.createElement('input');
    todoDueDate.setAttribute('name', 'todoDueDate');
    todoDueDate.setAttribute('type', 'date')
    todoDueDate.id = 'todoDueDate';
    const todoDueDateLabel = document.createElement('label');
    todoDueDateLabel.textContent = 'Due Date:';
    todoDueDateLabel.setAttribute('for', 'todoName');
    popupDiv.appendChild(todoDueDateLabel);
    popupDiv.appendChild(todoDueDate);
    // Todo notes
    const todoNotes = document.createElement('input');
    todoNotes.setAttribute('name', 'todoNotes');
    todoNotes.setAttribute('type', 'text')
    todoNotes.id = 'todoNotes';
    const todoNotesLabel = document.createElement('label');
    todoNotesLabel.textContent = 'Todo Notes:';
    todoNotesLabel.setAttribute('for', 'todoNotes');
    popupDiv.appendChild(todoNotesLabel);
    popupDiv.appendChild(todoNotes);
    // Buttons
    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'button');
    submitBtn.classList.add('submitBtn');
    submitBtn.textContent = 'Submit';
    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.classList.add('cancelBtn');
    cancelBtn.textContent = 'Cancel';
    popupDiv.appendChild(submitBtn);
    popupDiv.appendChild(cancelBtn);

    body.appendChild(popupDiv);
}

const closePopUp = () => {
    const popupDiv = document.querySelector('.popup');
    popupDiv.remove();
}

const contentContainerInit = () => {
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('contentContainer');
    const body = document.querySelector('body');
    body.appendChild(contentContainer);
}

const updateContentContainer = (project) => {
    const contentContainer = document.querySelector('.contentContainer');
    // delete current todo items
    const allTodoItems = document.querySelectorAll('.todoItem');
    allTodoItems.forEach((item) => {
        item.remove();
    });
    const allTodos = project.getAllTodos();
    allTodos.forEach((todo) => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todoItem');
        const todoTitle = document.createElement('span');
        todoTitle.textContent = `Title: ${todo.getTitle()}`;
        todoDiv.appendChild(todoTitle);
        const todoDescription = document.createElement('span');
        todoDescription.textContent = `Description: ${todo.getDescription()}`;
        todoDiv.appendChild(todoDescription);
        const todoDueDate = document.createElement('span');
        todoDueDate.textContent = `Due Date: ${todo.getDueDate()}`;
        todoDiv.appendChild(todoDueDate);
        const todoNotes = document.createElement('span');
        todoNotes.textContent = `Notes: ${todo.getNotes()}`;
        todoDiv.appendChild(todoNotes);
        contentContainer.appendChild(todoDiv);
        // Add checklist later
    });
}


const pageInit = () => {
    navbarInit();
    contentContainerInit();

};

/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectItem": () => (/* binding */ projectItem),
/* harmony export */   "toDoItem": () => (/* binding */ toDoItem),
/* harmony export */   "trackActiveProject": () => (/* binding */ trackActiveProject),
/* harmony export */   "trackProjects": () => (/* binding */ trackProjects)
/* harmony export */ });
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
const toDoItem = (tempTitle, tempDescription, tempDueDate, tempPriority = 1, tempNotes = '', tempChecklist = []) => {
    // initialize variables
    let _title = tempTitle;
    let _description = tempDescription;
    let _dueDate = tempDueDate;
    let _priority = tempPriority;
    let _notes = tempNotes;
    let _checklist = tempChecklist;

    // return functions
    const getTitle = () => _title;
    const getDescription = () => _description;
    const getDueDate = () => _dueDate;
    const getPriority = () => _priority;
    const getNotes = () => _notes;
    const getChecklist = () => _checklist;

    // change functions
    const changeTitle = (newTitle) => {
        _title = newTitle;
    }
    const changeDescription = (newDescription) => {
        _description = newDescription;
    }
    const changeDate = (newDate) => {
        _dueDate = newDate;
    }
    const changePriority = (newPriority) => {
        _priority = newPriority;
    }
    const changeNotes = (newNotes) => {
        _notes = newNotes;
    }

    // Checklist functions
    const addToChecklist = (checklistStr) => {
        _checklist.push(checklistStr);
    }
    const strikeChecklist = (checklistID) => {
        _checklist[checklistID] = _checklist[checklistID].strike();
    }

    return {changeTitle, changeDescription, changeDate, changePriority, changeNotes, addToChecklist, strikeChecklist, getTitle, getPriority, getNotes, getDueDate, getDescription, getChecklist};
}
const trackActiveProject = (() => {
    let _activeProject = 0;
    const setActiveProject = (id) => {
        _activeProject = id;
    }
    const getActiveProject = () => _activeProject;

    return {setActiveProject, getActiveProject};
})();

const projectItem = (tempTitle, tempDueDate) => {
    const _title = tempTitle;
    const _dueDate = tempDueDate;
    const _todoItems = [];

    // return functions
    const getTitle = () => _title;
    const getDueDate = () => _dueDate;
    const addTodo = (todoItem) => {
        _todoItems.push(todoItem);
    }
    const getAllTodos = () => _todoItems;
    const getTodo = (id) => _todoItems[id];

    return {getTitle, getDueDate, addTodo, getAllTodos, getTodo};
}

const trackProjects = (() => {
    const allTodos = projectItem('All Projects', null);
    const _projects = [allTodos];
    const addProject = (newProject) => {
        _projects.push(newProject);
    }
    const getProject = (id) => _projects[id];
    const getProjectByName = (tempName) => {
        for (let i = 0; i < _projects.length; i++) {
            if (_projects[i].getTitle === tempName) {
                return _projects[i];
            }
        }
        return null;
    }
    const getAllProjects = () => _projects;

    return {addProject, getProject, getProjectByName, getAllProjects};
})();

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects */ "./src/objects.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons */ "./src/buttons.js");





(0,_display__WEBPACK_IMPORTED_MODULE_1__.pageInit)();

// initialize buttons
(0,_buttons__WEBPACK_IMPORTED_MODULE_3__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZ0JBQWdCO0FBQzFEO0FBQ0E7QUFDQSxzREFBc0Qsc0JBQXNCO0FBQzVFO0FBQ0E7QUFDQSwrQ0FBK0Msa0JBQWtCO0FBQ2pFO0FBQ0E7QUFDQSwwQ0FBMEMsZ0JBQWdCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR087QUFDUDtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hOQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7Ozs7OztVQzNGRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQThCO0FBQytDO0FBQ3JDO0FBQ0U7O0FBRTFDLGtEQUFROztBQUVSO0FBQ0Esb0RBQWlCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL29iamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5uYXZiYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwyMzIsMjAxKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzczQUQyMTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdmJhckl0ZW0ge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcbi5wb3B1cCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzczQUQyMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwyMzIsMjAxKTtcXG59XFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG4ucG9wdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uY29udGVudENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLnRvZG9JdGVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwyMzIsMjAxKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzczQUQyMTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5uYXZiYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwyMzIsMjAxKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzczQUQyMTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdmJhckl0ZW0ge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcbi5wb3B1cCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzczQUQyMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwyMzIsMjAxKTtcXG59XFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG4ucG9wdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uY29udGVudENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLnRvZG9JdGVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwyMzIsMjAxKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzczQUQyMTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5pbXBvcnQgeyBjcmVhdGVQb3BVcCwgY2xvc2VQb3BVcCwgcmVmcmVzaFByb2plY3RzLCBjcmVhdGVUb2RvUG9wVXAsIHVwZGF0ZUNvbnRlbnRDb250YWluZXIgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgeyBwcm9qZWN0SXRlbSwgdG9Eb0l0ZW0sIHRyYWNrQWN0aXZlUHJvamVjdCwgdHJhY2tQcm9qZWN0cyB9IGZyb20gXCIuL29iamVjdHNcIjtcblxuY29uc3QgaW5pdGlhbGl6ZVRvZG9Qb3B1cEJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdEJ0bicpO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWxCdG4nKTtcbiAgICBjb25zdCB0b2RvTmFtZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9OYW1lJyk7XG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Rlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgdG9kb0R1ZURhdGVGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRHVlRGF0ZScpOyBcbiAgICBjb25zdCB0b2RvTm90ZXNGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTm90ZXMnKTtcblxuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcFRvZG8gPSB0b0RvSXRlbSh0b2RvTmFtZUZpZWxkLnZhbHVlLCB0b2RvRGVzY3JpcHRpb25GaWVsZC52YWx1ZSwgdG9kb0R1ZURhdGVGaWVsZC52YWx1ZSwgMSwgdG9kb05vdGVzRmllbGQudmFsdWUpO1xuICAgICAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gdHJhY2tQcm9qZWN0cy5nZXRQcm9qZWN0KHRyYWNrQWN0aXZlUHJvamVjdC5nZXRBY3RpdmVQcm9qZWN0KCkpO1xuICAgICAgICBjb25zdCBhbGxQcm9qZWN0cyA9IHRyYWNrUHJvamVjdHMuZ2V0UHJvamVjdCgwKTtcbiAgICAgICAgYWxsUHJvamVjdHMuYWRkVG9kbyh0ZW1wVG9kbyk7XG4gICAgICAgIGlmIChhY3RpdmVQcm9qZWN0ICE9PSBhbGxQcm9qZWN0cykge1xuICAgICAgICAgICAgYWN0aXZlUHJvamVjdC5hZGRUb2RvKHRlbXBUb2RvKTtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVDb250ZW50Q29udGFpbmVyKGFjdGl2ZVByb2plY3QpO1xuICAgICAgICBjbG9zZVBvcFVwKCk7XG5cblxuICAgIH0pO1xuXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbG9zZVBvcFVwKCk7XG4gICAgfSk7XG5cbn1cblxuY29uc3QgaW5pdGlhbGl6ZVBvcFVwQnV0dG9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0QnRuJyk7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbEJ0bicpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWUnKTtcbiAgICBjb25zdCBwcm9qZWN0RHVlRGF0ZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3REdWVEYXRlJyk7IFxuXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wSXRlbSA9IHByb2plY3RJdGVtKHByb2plY3ROYW1lRmllbGQudmFsdWUsIHByb2plY3REdWVEYXRlRmllbGQudmFsdWUpO1xuICAgICAgICBcbiAgICAgICAgdHJhY2tQcm9qZWN0cy5hZGRQcm9qZWN0KHRlbXBJdGVtKTtcbiAgICAgICAgY2xvc2VQb3BVcCgpO1xuICAgICAgICByZWZyZXNoUHJvamVjdHModHJhY2tQcm9qZWN0cy5nZXRBbGxQcm9qZWN0cygpKTtcbiAgICAgICAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdFRpbGUnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpbGUgPSBhbGxQcm9qZWN0c1tpXTtcbiAgICAgICAgICAgIHByb2plY3RUaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyYWNrQWN0aXZlUHJvamVjdC5zZXRBY3RpdmVQcm9qZWN0KGkpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNvbnRlbnRDb250YWluZXIodHJhY2tQcm9qZWN0cy5nZXRQcm9qZWN0KGkpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0cmFja1Byb2plY3RzLmdldFByb2plY3QoaSkuZ2V0VGl0bGUoKSk7XG4gICAgICAgICAgICAgICAgYWxsUHJvamVjdHMuZm9yRWFjaCgodGVtcFByb2opID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcFByb2ouY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGlsZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xvc2VQb3BVcCgpO1xuICAgIH0pO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Byb2plY3RCdG4nKTtcbiAgICByZWZyZXNoUHJvamVjdHModHJhY2tQcm9qZWN0cy5nZXRBbGxQcm9qZWN0cygpKTtcbiAgICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjcmVhdGVQb3BVcCgpO1xuICAgICAgICBpbml0aWFsaXplUG9wVXBCdXR0b25zKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBuZXdUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1RvZG9CdG4nKTtcbiAgICBuZXdUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjcmVhdGVUb2RvUG9wVXAoKTtcbiAgICAgICAgaW5pdGlhbGl6ZVRvZG9Qb3B1cEJ1dHRvbnMoKTtcbiAgICB9KTtcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cblxuXG4vLyBpbml0aWFsaXplIHBhZ2VcblxuLy8gaW5pdGlhbGl6ZSBuYXZiYXJcbmNvbnN0IG5hdmJhckluaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJyk7XG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIGluaXQgaG9tZSBidXR0b25cbiAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ25hdmJhckl0ZW0nKTtcbiAgICBob21lQnRuLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIG5hdmJhci5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgICAvLyBpbml0IG5ldyB0b2RvIGJ1dHRvblxuICAgIGNvbnN0IG5ld1RvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUb2RvQnRuLmNsYXNzTGlzdC5hZGQoJ25hdmJhckl0ZW0nKTtcbiAgICBuZXdUb2RvQnRuLmNsYXNzTGlzdC5hZGQoJ25ld1RvZG9CdG4nKTsgICAgXG4gICAgbmV3VG9kb0J0bi50ZXh0Q29udGVudCA9ICdOZXcgVG9kbyc7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG5ld1RvZG9CdG4pO1xuICAgIC8vIGluaXQgbmV3IHByb2plY3QgYnV0dG9uXG4gICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Byb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnbmF2YmFySXRlbScpO1xuICAgIG5ld1Byb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnbmV3UHJvamVjdEJ0bicpOyAgICBcbiAgICBuZXdQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0JztcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ0bik7XG4gICAgLy8gaW5pdCBwcm9qZWN0cyB0aXRsZVxuICAgIGNvbnN0IHByb2plY3RzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0c1RpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgICBwcm9qZWN0c1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzVGl0bGUnKTtcbiAgICBwcm9qZWN0c1RpdGxlLmNsYXNzTGlzdC5hZGQoJ25hdmJhckl0ZW0nKTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNUaXRsZSk7XG4gICAgLy8gaW5pdCBwcm9qZWN0cyBjb250YWluZXJcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzQ29udGFpbmVyJyk7XG4gICAgcHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFySXRlbScpO1xuICAgIG5hdmJhci5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcik7XG5cblxuICAgIC8vIGRpc3BsYXkgbmF2YmFyXG4gICAgYm9keS5hcHBlbmRDaGlsZChuYXZiYXIpO1xufTtcblxuICAgIC8vIGl0ZXJhdGUgcHJvamVjdHMgJiBhZGQgdG8gcHJvamVjdHMgY29udGFpbmVyXG5leHBvcnQgY29uc3QgcmVmcmVzaFByb2plY3RzID0gKHByb2plY3RzKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNDb250YWluZXInKTtcblxuICAgIC8vIHJlbW92ZSBleGlzdGluZyBwcm9qZWN0cyBkaXNwbGF5c1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0VGlsZScpO1xuICAgIGN1cnJlbnRQcm9qZWN0cy5mb3JFYWNoKCh0ZW1wUHJvamVjdCkgPT4ge1xuICAgICAgICB0ZW1wUHJvamVjdC5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIC8vIGl0ZXJhdGUgYW5kIGRpc3BsYXkgdXBkYXRlZCBwcm9qZWN0c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdFRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3UHJvamVjdFRpbGUudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS5nZXRUaXRsZSgpO1xuICAgICAgICBuZXdQcm9qZWN0VGlsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0VGlsZScpO1xuICAgICAgICBuZXdQcm9qZWN0VGlsZS5jbGFzc0xpc3QuYWRkKCduYXZiYXJJdGVtJyk7XG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RUaWxlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQb3BVcCA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IHBvcHVwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXBEaXYuY2xhc3NMaXN0LmFkZCgncG9wdXAnKTtcbiAgICAvLyBQcm9qZWN0IE5hbWVcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Byb2plY3ROYW1lJyk7XG4gICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIHByb2plY3ROYW1lLmlkID0gJ3Byb2plY3ROYW1lJztcbiAgICBjb25zdCBwcm9qZWN0TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcm9qZWN0TmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QgTmFtZTonO1xuICAgIHByb2plY3ROYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJvamVjdE5hbWUnKTtcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUxhYmVsKTtcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgLy8gUHJvamVjdCBEdWUgRGF0ZVxuICAgIGNvbnN0IHByb2plY3REdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0RHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdER1ZURhdGUnKTtcbiAgICBwcm9qZWN0RHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG4gICAgcHJvamVjdER1ZURhdGUuaWQgPSAncHJvamVjdER1ZURhdGUnO1xuICAgIGNvbnN0IHByb2plY3REdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByb2plY3REdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6JztcbiAgICBwcm9qZWN0RHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3ROYW1lJyk7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQocHJvamVjdER1ZURhdGVMYWJlbCk7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQocHJvamVjdER1ZURhdGUpO1xuICAgIC8vIEJ1dHRvbnNcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdzdWJtaXRCdG4nKTtcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdjYW5jZWxCdG4nKTtcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKHBvcHVwRGl2KTtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRvZG9Qb3BVcCA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IHBvcHVwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXBEaXYuY2xhc3NMaXN0LmFkZCgncG9wdXAnKTtcbiAgICAvLyBUb2RvIE5hbWVcbiAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb05hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RvZG9OYW1lJyk7XG4gICAgdG9kb05hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIHRvZG9OYW1lLmlkID0gJ3RvZG9OYW1lJztcbiAgICBjb25zdCB0b2RvTmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0b2RvTmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ1RvZG8gTmFtZTonO1xuICAgIHRvZG9OYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndG9kb05hbWUnKTtcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZCh0b2RvTmFtZUxhYmVsKTtcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZCh0b2RvTmFtZSk7XG4gICAgLy8gVG9kbyBkZXNjcmlwdGlvblxuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0b2RvRGVzY3JpcHRpb24nKTtcbiAgICB0b2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIHRvZG9EZXNjcmlwdGlvbi5pZCA9ICd0b2RvRGVzY3JpcHRpb24nO1xuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0b2RvRGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdUb2RvIERlc2NyaXB0aW9uOic7XG4gICAgdG9kb0Rlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndG9kb0Rlc2NyaXB0aW9uJyk7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQodG9kb0Rlc2NyaXB0aW9uTGFiZWwpO1xuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbik7XG4gICAgLy8gVG9kbyBEdWUgRGF0ZVxuICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndG9kb0R1ZURhdGUnKTtcbiAgICB0b2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG4gICAgdG9kb0R1ZURhdGUuaWQgPSAndG9kb0R1ZURhdGUnO1xuICAgIGNvbnN0IHRvZG9EdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRvZG9EdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6JztcbiAgICB0b2RvRHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RvZG9OYW1lJyk7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGVMYWJlbCk7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGUpO1xuICAgIC8vIFRvZG8gbm90ZXNcbiAgICBjb25zdCB0b2RvTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9Ob3Rlcy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndG9kb05vdGVzJyk7XG4gICAgdG9kb05vdGVzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICB0b2RvTm90ZXMuaWQgPSAndG9kb05vdGVzJztcbiAgICBjb25zdCB0b2RvTm90ZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdG9kb05vdGVzTGFiZWwudGV4dENvbnRlbnQgPSAnVG9kbyBOb3RlczonO1xuICAgIHRvZG9Ob3Rlc0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RvZG9Ob3RlcycpO1xuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKHRvZG9Ob3Rlc0xhYmVsKTtcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZCh0b2RvTm90ZXMpO1xuICAgIC8vIEJ1dHRvbnNcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdzdWJtaXRCdG4nKTtcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdjYW5jZWxCdG4nKTtcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKHBvcHVwRGl2KTtcbn1cblxuZXhwb3J0IGNvbnN0IGNsb3NlUG9wVXAgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9wdXBEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcbiAgICBwb3B1cERpdi5yZW1vdmUoKTtcbn1cblxuY29uc3QgY29udGVudENvbnRhaW5lckluaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudENvbnRhaW5lcicpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNvbnRlbnRDb250YWluZXIgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudENvbnRhaW5lcicpO1xuICAgIC8vIGRlbGV0ZSBjdXJyZW50IHRvZG8gaXRlbXNcbiAgICBjb25zdCBhbGxUb2RvSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb0l0ZW0nKTtcbiAgICBhbGxUb2RvSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIGNvbnN0IGFsbFRvZG9zID0gcHJvamVjdC5nZXRBbGxUb2RvcygpO1xuICAgIGFsbFRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9JdGVtJyk7XG4gICAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gYFRpdGxlOiAke3RvZG8uZ2V0VGl0bGUoKX1gO1xuICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYERlc2NyaXB0aW9uOiAke3RvZG8uZ2V0RGVzY3JpcHRpb24oKX1gO1xuICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbik7XG4gICAgICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHt0b2RvLmdldER1ZURhdGUoKX1gO1xuICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlKTtcbiAgICAgICAgY29uc3QgdG9kb05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0b2RvTm90ZXMudGV4dENvbnRlbnQgPSBgTm90ZXM6ICR7dG9kby5nZXROb3RlcygpfWA7XG4gICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb05vdGVzKTtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcbiAgICAgICAgLy8gQWRkIGNoZWNrbGlzdCBsYXRlclxuICAgIH0pO1xufVxuXG5cbmV4cG9ydCBjb25zdCBwYWdlSW5pdCA9ICgpID0+IHtcbiAgICBuYXZiYXJJbml0KCk7XG4gICAgY29udGVudENvbnRhaW5lckluaXQoKTtcblxufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmV4cG9ydCBjb25zdCB0b0RvSXRlbSA9ICh0ZW1wVGl0bGUsIHRlbXBEZXNjcmlwdGlvbiwgdGVtcER1ZURhdGUsIHRlbXBQcmlvcml0eSA9IDEsIHRlbXBOb3RlcyA9ICcnLCB0ZW1wQ2hlY2tsaXN0ID0gW10pID0+IHtcbiAgICAvLyBpbml0aWFsaXplIHZhcmlhYmxlc1xuICAgIGxldCBfdGl0bGUgPSB0ZW1wVGl0bGU7XG4gICAgbGV0IF9kZXNjcmlwdGlvbiA9IHRlbXBEZXNjcmlwdGlvbjtcbiAgICBsZXQgX2R1ZURhdGUgPSB0ZW1wRHVlRGF0ZTtcbiAgICBsZXQgX3ByaW9yaXR5ID0gdGVtcFByaW9yaXR5O1xuICAgIGxldCBfbm90ZXMgPSB0ZW1wTm90ZXM7XG4gICAgbGV0IF9jaGVja2xpc3QgPSB0ZW1wQ2hlY2tsaXN0O1xuXG4gICAgLy8gcmV0dXJuIGZ1bmN0aW9uc1xuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gX3RpdGxlO1xuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gX2Rlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBfZHVlRGF0ZTtcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IF9wcmlvcml0eTtcbiAgICBjb25zdCBnZXROb3RlcyA9ICgpID0+IF9ub3RlcztcbiAgICBjb25zdCBnZXRDaGVja2xpc3QgPSAoKSA9PiBfY2hlY2tsaXN0O1xuXG4gICAgLy8gY2hhbmdlIGZ1bmN0aW9uc1xuICAgIGNvbnN0IGNoYW5nZVRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG4gICAgICAgIF90aXRsZSA9IG5ld1RpdGxlO1xuICAgIH1cbiAgICBjb25zdCBjaGFuZ2VEZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICBfZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgY29uc3QgY2hhbmdlRGF0ZSA9IChuZXdEYXRlKSA9PiB7XG4gICAgICAgIF9kdWVEYXRlID0gbmV3RGF0ZTtcbiAgICB9XG4gICAgY29uc3QgY2hhbmdlUHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IHtcbiAgICAgICAgX3ByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgfVxuICAgIGNvbnN0IGNoYW5nZU5vdGVzID0gKG5ld05vdGVzKSA9PiB7XG4gICAgICAgIF9ub3RlcyA9IG5ld05vdGVzO1xuICAgIH1cblxuICAgIC8vIENoZWNrbGlzdCBmdW5jdGlvbnNcbiAgICBjb25zdCBhZGRUb0NoZWNrbGlzdCA9IChjaGVja2xpc3RTdHIpID0+IHtcbiAgICAgICAgX2NoZWNrbGlzdC5wdXNoKGNoZWNrbGlzdFN0cik7XG4gICAgfVxuICAgIGNvbnN0IHN0cmlrZUNoZWNrbGlzdCA9IChjaGVja2xpc3RJRCkgPT4ge1xuICAgICAgICBfY2hlY2tsaXN0W2NoZWNrbGlzdElEXSA9IF9jaGVja2xpc3RbY2hlY2tsaXN0SURdLnN0cmlrZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB7Y2hhbmdlVGl0bGUsIGNoYW5nZURlc2NyaXB0aW9uLCBjaGFuZ2VEYXRlLCBjaGFuZ2VQcmlvcml0eSwgY2hhbmdlTm90ZXMsIGFkZFRvQ2hlY2tsaXN0LCBzdHJpa2VDaGVja2xpc3QsIGdldFRpdGxlLCBnZXRQcmlvcml0eSwgZ2V0Tm90ZXMsIGdldER1ZURhdGUsIGdldERlc2NyaXB0aW9uLCBnZXRDaGVja2xpc3R9O1xufVxuZXhwb3J0IGNvbnN0IHRyYWNrQWN0aXZlUHJvamVjdCA9ICgoKSA9PiB7XG4gICAgbGV0IF9hY3RpdmVQcm9qZWN0ID0gMDtcbiAgICBjb25zdCBzZXRBY3RpdmVQcm9qZWN0ID0gKGlkKSA9PiB7XG4gICAgICAgIF9hY3RpdmVQcm9qZWN0ID0gaWQ7XG4gICAgfVxuICAgIGNvbnN0IGdldEFjdGl2ZVByb2plY3QgPSAoKSA9PiBfYWN0aXZlUHJvamVjdDtcblxuICAgIHJldHVybiB7c2V0QWN0aXZlUHJvamVjdCwgZ2V0QWN0aXZlUHJvamVjdH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdEl0ZW0gPSAodGVtcFRpdGxlLCB0ZW1wRHVlRGF0ZSkgPT4ge1xuICAgIGNvbnN0IF90aXRsZSA9IHRlbXBUaXRsZTtcbiAgICBjb25zdCBfZHVlRGF0ZSA9IHRlbXBEdWVEYXRlO1xuICAgIGNvbnN0IF90b2RvSXRlbXMgPSBbXTtcblxuICAgIC8vIHJldHVybiBmdW5jdGlvbnNcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IF90aXRsZTtcbiAgICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gX2R1ZURhdGU7XG4gICAgY29uc3QgYWRkVG9kbyA9ICh0b2RvSXRlbSkgPT4ge1xuICAgICAgICBfdG9kb0l0ZW1zLnB1c2godG9kb0l0ZW0pO1xuICAgIH1cbiAgICBjb25zdCBnZXRBbGxUb2RvcyA9ICgpID0+IF90b2RvSXRlbXM7XG4gICAgY29uc3QgZ2V0VG9kbyA9IChpZCkgPT4gX3RvZG9JdGVtc1tpZF07XG5cbiAgICByZXR1cm4ge2dldFRpdGxlLCBnZXREdWVEYXRlLCBhZGRUb2RvLCBnZXRBbGxUb2RvcywgZ2V0VG9kb307XG59XG5cbmV4cG9ydCBjb25zdCB0cmFja1Byb2plY3RzID0gKCgpID0+IHtcbiAgICBjb25zdCBhbGxUb2RvcyA9IHByb2plY3RJdGVtKCdBbGwgUHJvamVjdHMnLCBudWxsKTtcbiAgICBjb25zdCBfcHJvamVjdHMgPSBbYWxsVG9kb3NdO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSAobmV3UHJvamVjdCkgPT4ge1xuICAgICAgICBfcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICB9XG4gICAgY29uc3QgZ2V0UHJvamVjdCA9IChpZCkgPT4gX3Byb2plY3RzW2lkXTtcbiAgICBjb25zdCBnZXRQcm9qZWN0QnlOYW1lID0gKHRlbXBOYW1lKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX3Byb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoX3Byb2plY3RzW2ldLmdldFRpdGxlID09PSB0ZW1wTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcHJvamVjdHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGdldEFsbFByb2plY3RzID0gKCkgPT4gX3Byb2plY3RzO1xuXG4gICAgcmV0dXJuIHthZGRQcm9qZWN0LCBnZXRQcm9qZWN0LCBnZXRQcm9qZWN0QnlOYW1lLCBnZXRBbGxQcm9qZWN0c307XG59KSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjc3MgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQge3BhZ2VJbml0LCBjcmVhdGVQb3BVcCwgY2xvc2VQb3BVcCwgcmVmcmVzaFByb2plY3RzfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQge3RyYWNrUHJvamVjdHN9IGZyb20gJy4vb2JqZWN0cyc7XG5pbXBvcnQgaW5pdGlhbGl6ZUJ1dHRvbnMgZnJvbSAnLi9idXR0b25zJztcblxucGFnZUluaXQoKTtcblxuLy8gaW5pdGlhbGl6ZSBidXR0b25zXG5pbml0aWFsaXplQnV0dG9ucygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==