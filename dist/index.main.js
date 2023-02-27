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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "storageAvailable": () => (/* binding */ storageAvailable)
/* harmony export */ });
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects */ "./src/objects.js");
/* eslint-disable no-plusplus */



function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
function storeData() {
    // need to iterate through all the items
    const allProjects = _objects__WEBPACK_IMPORTED_MODULE_1__.trackProjects.getAllProjects();
    const allProjectsObjects = [];
    for (let i = 0; i < allProjects.length; i++) {
        // iterate and objectify todolist
        const todoArray = [];
        for (let j = 0; j < _objects__WEBPACK_IMPORTED_MODULE_1__.trackProjects.getProject(i).getAllTodos().length; j++) {
            const todoObject = {
                title: _objects__WEBPACK_IMPORTED_MODULE_1__.trackProjects.getProject(i).getTodo(j).getTitle(),
                description: _objects__WEBPACK_IMPORTED_MODULE_1__.trackProjects.getProject(i).getTodo(j).getDescription(),
                dueDate: _objects__WEBPACK_IMPORTED_MODULE_1__.trackProjects.getProject(i).getTodo(j).getDueDate(),
                priority: _objects__WEBPACK_IMPORTED_MODULE_1__.trackProjects.getProject(i).getTodo(j).getPriority(),
                notes: _objects__WEBPACK_IMPORTED_MODULE_1__.trackProjects.getProject(i).getTodo(j).getPriority(),
                checklist: _objects__WEBPACK_IMPORTED_MODULE_1__.trackProjects.getProject(i).getTodo(j).getChecklist()
            }
            todoArray.push(todoObject);
        }

        const projectObject = {
            title: _objects__WEBPACK_IMPORTED_MODULE_1__.trackProjects.getProject(i).getTitle(),
            dueDate: _objects__WEBPACK_IMPORTED_MODULE_1__.trackProjects.getProject(i).getDueDate(),
            todoItems: todoArray
        }
        allProjectsObjects.push(projectObject);
    }
    localStorage.setItem('allProjects', JSON.stringify(allProjectsObjects));

}

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

        // Store in localStorage
        if (storageAvailable('localStorage')) {
            storeData();
        }

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
                allProjects.forEach((tempProj) => {
                    tempProj.classList.remove('selected');
                });
                projectTile.classList.add('selected');
            });
        }

        // Store in localStorage
        if (storageAvailable('localStorage')) {
           storeData();
        }
    });

    cancelBtn.addEventListener('click', () => {
        (0,_display__WEBPACK_IMPORTED_MODULE_0__.closePopUp)();
    });
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    // Initialize the local storage

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
    (0,_display__WEBPACK_IMPORTED_MODULE_0__.refreshProjects)(_objects__WEBPACK_IMPORTED_MODULE_1__.trackProjects.getAllProjects());
    const allProjects = document.querySelectorAll('.projectTile');
    allProjects[0].classList.add('selected');
    for (let i = 0; i < allProjects.length; i++) {
        const projectTile = allProjects[i];
        (0,_display__WEBPACK_IMPORTED_MODULE_0__.updateContentContainer)(_objects__WEBPACK_IMPORTED_MODULE_1__.trackProjects.getProject(0));
        projectTile.addEventListener('click', () => {
            _objects__WEBPACK_IMPORTED_MODULE_1__.trackActiveProject.setActiveProject(i);
            (0,_display__WEBPACK_IMPORTED_MODULE_0__.updateContentContainer)(_objects__WEBPACK_IMPORTED_MODULE_1__.trackProjects.getProject(i));
            allProjects.forEach((tempProj) => {
                tempProj.classList.remove('selected');
            });
            projectTile.classList.add('selected');
        });
    }

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
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ "./src/buttons.js");
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
    const _projects = [];
    if ((0,_buttons__WEBPACK_IMPORTED_MODULE_0__.storageAvailable)('localStorage')) {
        if (localStorage.getItem('allProjects')) {
            // parse JSON String to get Object
            const allProjectsObjects = JSON.parse(localStorage.getItem('allProjects'));
            // iterate to convert objects to factor functions
            for (let i = 0; i < allProjectsObjects.length; i++) {
                const tempProject = projectItem(allProjectsObjects[i].title, allProjectsObjects[i].dueDate);
                for (let j = 0; j < allProjectsObjects[i].todoItems.length; j++) {
                    const tempTodo = toDoItem(allProjectsObjects[i].todoItems[j].title, allProjectsObjects[i].todoItems[j].description, allProjectsObjects[i].todoItems[j].dueDate, allProjectsObjects[i].todoItems[j].priority, allProjectsObjects[i].todoItems[j].notes, allProjectsObjects[i].todoItems[j].checklist);
                    tempProject.addTodo(tempTodo);
                }
                _projects.push(tempProject);
            }
        } else {
            const allTodos = projectItem('All Projects', null);
            _projects.push(allTodos);         
        }
    } else {
        const allTodos = projectItem('All Projects', null);
        _projects.push(allTodos);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7VUNsSEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUMrQztBQUNyQztBQUNFOztBQUUxQyxrREFBUTs7QUFFUjtBQUNBLG9EQUFpQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9idXR0b25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9vYmplY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubmF2YmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsMjMyLDIwMSk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM3M0FEMjE7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5uYXZiYXJJdGVtIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG4ucG9wdXAge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM3M0FEMjE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsMjMyLDIwMSk7XFxufVxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuLnBvcHVwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmNvbnRlbnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi50b2RvSXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsMjMyLDIwMSk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM3M0FEMjE7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsV0FBVztJQUNYLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubmF2YmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsMjMyLDIwMSk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM3M0FEMjE7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5uYXZiYXJJdGVtIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG4ucG9wdXAge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM3M0FEMjE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsMjMyLDIwMSk7XFxufVxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuLnBvcHVwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmNvbnRlbnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi50b2RvSXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsMjMyLDIwMSk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM3M0FEMjE7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IHsgY3JlYXRlUG9wVXAsIGNsb3NlUG9wVXAsIHJlZnJlc2hQcm9qZWN0cywgY3JlYXRlVG9kb1BvcFVwLCB1cGRhdGVDb250ZW50Q29udGFpbmVyIH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IHsgcHJvamVjdEl0ZW0sIHRvRG9JdGVtLCB0cmFja0FjdGl2ZVByb2plY3QsIHRyYWNrUHJvamVjdHMgfSBmcm9tIFwiLi9vYmplY3RzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICBsZXQgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgICBjb25zdCB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIChcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XG4gICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmXG4gICAgICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICAgICAgKHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN0b3JlRGF0YSgpIHtcbiAgICAvLyBuZWVkIHRvIGl0ZXJhdGUgdGhyb3VnaCBhbGwgdGhlIGl0ZW1zXG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSB0cmFja1Byb2plY3RzLmdldEFsbFByb2plY3RzKCk7XG4gICAgY29uc3QgYWxsUHJvamVjdHNPYmplY3RzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBpdGVyYXRlIGFuZCBvYmplY3RpZnkgdG9kb2xpc3RcbiAgICAgICAgY29uc3QgdG9kb0FycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdHJhY2tQcm9qZWN0cy5nZXRQcm9qZWN0KGkpLmdldEFsbFRvZG9zKCkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9PYmplY3QgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRyYWNrUHJvamVjdHMuZ2V0UHJvamVjdChpKS5nZXRUb2RvKGopLmdldFRpdGxlKCksXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRyYWNrUHJvamVjdHMuZ2V0UHJvamVjdChpKS5nZXRUb2RvKGopLmdldERlc2NyaXB0aW9uKCksXG4gICAgICAgICAgICAgICAgZHVlRGF0ZTogdHJhY2tQcm9qZWN0cy5nZXRQcm9qZWN0KGkpLmdldFRvZG8oaikuZ2V0RHVlRGF0ZSgpLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiB0cmFja1Byb2plY3RzLmdldFByb2plY3QoaSkuZ2V0VG9kbyhqKS5nZXRQcmlvcml0eSgpLFxuICAgICAgICAgICAgICAgIG5vdGVzOiB0cmFja1Byb2plY3RzLmdldFByb2plY3QoaSkuZ2V0VG9kbyhqKS5nZXRQcmlvcml0eSgpLFxuICAgICAgICAgICAgICAgIGNoZWNrbGlzdDogdHJhY2tQcm9qZWN0cy5nZXRQcm9qZWN0KGkpLmdldFRvZG8oaikuZ2V0Q2hlY2tsaXN0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvZG9BcnJheS5wdXNoKHRvZG9PYmplY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvamVjdE9iamVjdCA9IHtcbiAgICAgICAgICAgIHRpdGxlOiB0cmFja1Byb2plY3RzLmdldFByb2plY3QoaSkuZ2V0VGl0bGUoKSxcbiAgICAgICAgICAgIGR1ZURhdGU6IHRyYWNrUHJvamVjdHMuZ2V0UHJvamVjdChpKS5nZXREdWVEYXRlKCksXG4gICAgICAgICAgICB0b2RvSXRlbXM6IHRvZG9BcnJheVxuICAgICAgICB9XG4gICAgICAgIGFsbFByb2plY3RzT2JqZWN0cy5wdXNoKHByb2plY3RPYmplY3QpO1xuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0c09iamVjdHMpKTtcblxufVxuXG5jb25zdCBpbml0aWFsaXplVG9kb1BvcHVwQnV0dG9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0QnRuJyk7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbEJ0bicpO1xuICAgIGNvbnN0IHRvZG9OYW1lRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb05hbWUnKTtcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb25GaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCB0b2RvRHVlRGF0ZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EdWVEYXRlJyk7IFxuICAgIGNvbnN0IHRvZG9Ob3Rlc0ZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Ob3RlcycpO1xuXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wVG9kbyA9IHRvRG9JdGVtKHRvZG9OYW1lRmllbGQudmFsdWUsIHRvZG9EZXNjcmlwdGlvbkZpZWxkLnZhbHVlLCB0b2RvRHVlRGF0ZUZpZWxkLnZhbHVlLCAxLCB0b2RvTm90ZXNGaWVsZC52YWx1ZSk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSB0cmFja1Byb2plY3RzLmdldFByb2plY3QodHJhY2tBY3RpdmVQcm9qZWN0LmdldEFjdGl2ZVByb2plY3QoKSk7XG4gICAgICAgIGNvbnN0IGFsbFByb2plY3RzID0gdHJhY2tQcm9qZWN0cy5nZXRQcm9qZWN0KDApO1xuICAgICAgICBhbGxQcm9qZWN0cy5hZGRUb2RvKHRlbXBUb2RvKTtcbiAgICAgICAgaWYgKGFjdGl2ZVByb2plY3QgIT09IGFsbFByb2plY3RzKSB7XG4gICAgICAgICAgICBhY3RpdmVQcm9qZWN0LmFkZFRvZG8odGVtcFRvZG8pO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZUNvbnRlbnRDb250YWluZXIoYWN0aXZlUHJvamVjdCk7XG4gICAgICAgIGNsb3NlUG9wVXAoKTtcblxuICAgICAgICAvLyBTdG9yZSBpbiBsb2NhbFN0b3JhZ2VcbiAgICAgICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgICAgICAgICBzdG9yZURhdGEoKTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlUG9wVXAoKTtcbiAgICB9KTtcblxufVxuXG5jb25zdCBpbml0aWFsaXplUG9wVXBCdXR0b25zID0gKCkgPT4ge1xuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRCdG4nKTtcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsQnRuJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWVGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZScpO1xuICAgIGNvbnN0IHByb2plY3REdWVEYXRlRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdER1ZURhdGUnKTsgXG5cbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXBJdGVtID0gcHJvamVjdEl0ZW0ocHJvamVjdE5hbWVGaWVsZC52YWx1ZSwgcHJvamVjdER1ZURhdGVGaWVsZC52YWx1ZSk7XG4gICAgICAgIFxuICAgICAgICB0cmFja1Byb2plY3RzLmFkZFByb2plY3QodGVtcEl0ZW0pO1xuICAgICAgICBjbG9zZVBvcFVwKCk7XG4gICAgICAgIHJlZnJlc2hQcm9qZWN0cyh0cmFja1Byb2plY3RzLmdldEFsbFByb2plY3RzKCkpO1xuICAgICAgICBjb25zdCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0VGlsZScpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VGlsZSA9IGFsbFByb2plY3RzW2ldO1xuICAgICAgICAgICAgcHJvamVjdFRpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJhY2tBY3RpdmVQcm9qZWN0LnNldEFjdGl2ZVByb2plY3QoaSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ29udGVudENvbnRhaW5lcih0cmFja1Byb2plY3RzLmdldFByb2plY3QoaSkpO1xuICAgICAgICAgICAgICAgIGFsbFByb2plY3RzLmZvckVhY2goKHRlbXBQcm9qKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBQcm9qLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdFRpbGUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3RvcmUgaW4gbG9jYWxTdG9yYWdlXG4gICAgICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgICAgICAgICBzdG9yZURhdGEoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbG9zZVBvcFVwKCk7XG4gICAgfSk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIC8vIEluaXRpYWxpemUgdGhlIGxvY2FsIHN0b3JhZ2VcblxuICAgIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3UHJvamVjdEJ0bicpO1xuICAgIHJlZnJlc2hQcm9qZWN0cyh0cmFja1Byb2plY3RzLmdldEFsbFByb2plY3RzKCkpO1xuICAgIG5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZVBvcFVwKCk7XG4gICAgICAgIGluaXRpYWxpemVQb3BVcEJ1dHRvbnMoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG5ld1RvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3VG9kb0J0bicpO1xuICAgIG5ld1RvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZVRvZG9Qb3BVcCgpO1xuICAgICAgICBpbml0aWFsaXplVG9kb1BvcHVwQnV0dG9ucygpO1xuICAgIH0pO1xuICAgIHJlZnJlc2hQcm9qZWN0cyh0cmFja1Byb2plY3RzLmdldEFsbFByb2plY3RzKCkpO1xuICAgIGNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RUaWxlJyk7XG4gICAgYWxsUHJvamVjdHNbMF0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaWxlID0gYWxsUHJvamVjdHNbaV07XG4gICAgICAgIHVwZGF0ZUNvbnRlbnRDb250YWluZXIodHJhY2tQcm9qZWN0cy5nZXRQcm9qZWN0KDApKTtcbiAgICAgICAgcHJvamVjdFRpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0cmFja0FjdGl2ZVByb2plY3Quc2V0QWN0aXZlUHJvamVjdChpKTtcbiAgICAgICAgICAgIHVwZGF0ZUNvbnRlbnRDb250YWluZXIodHJhY2tQcm9qZWN0cy5nZXRQcm9qZWN0KGkpKTtcbiAgICAgICAgICAgIGFsbFByb2plY3RzLmZvckVhY2goKHRlbXBQcm9qKSA9PiB7XG4gICAgICAgICAgICAgICAgdGVtcFByb2ouY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHJvamVjdFRpbGUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5cblxuLy8gaW5pdGlhbGl6ZSBwYWdlXG5cbi8vIGluaXRpYWxpemUgbmF2YmFyXG5jb25zdCBuYXZiYXJJbml0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBpbml0IGhvbWUgYnV0dG9uXG4gICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKCduYXZiYXJJdGVtJyk7XG4gICAgaG9tZUJ0bi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG4gICAgLy8gaW5pdCBuZXcgdG9kbyBidXR0b25cbiAgICBjb25zdCBuZXdUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3VG9kb0J0bi5jbGFzc0xpc3QuYWRkKCduYXZiYXJJdGVtJyk7XG4gICAgbmV3VG9kb0J0bi5jbGFzc0xpc3QuYWRkKCduZXdUb2RvQnRuJyk7ICAgIFxuICAgIG5ld1RvZG9CdG4udGV4dENvbnRlbnQgPSAnTmV3IFRvZG8nO1xuICAgIG5hdmJhci5hcHBlbmRDaGlsZChuZXdUb2RvQnRuKTtcbiAgICAvLyBpbml0IG5ldyBwcm9qZWN0IGJ1dHRvblxuICAgIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ25hdmJhckl0ZW0nKTtcbiAgICBuZXdQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ25ld1Byb2plY3RCdG4nKTsgICAgXG4gICAgbmV3UHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCc7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdG4pO1xuICAgIC8vIGluaXQgcHJvamVjdHMgdGl0bGVcbiAgICBjb25zdCBwcm9qZWN0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHNUaXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gICAgcHJvamVjdHNUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c1RpdGxlJyk7XG4gICAgcHJvamVjdHNUaXRsZS5jbGFzc0xpc3QuYWRkKCduYXZiYXJJdGVtJyk7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKHByb2plY3RzVGl0bGUpO1xuICAgIC8vIGluaXQgcHJvamVjdHMgY29udGFpbmVyXG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c0NvbnRhaW5lcicpO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25hdmJhckl0ZW0nKTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNDb250YWluZXIpO1xuXG5cbiAgICAvLyBkaXNwbGF5IG5hdmJhclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobmF2YmFyKTtcbn07XG5cbiAgICAvLyBpdGVyYXRlIHByb2plY3RzICYgYWRkIHRvIHByb2plY3RzIGNvbnRhaW5lclxuZXhwb3J0IGNvbnN0IHJlZnJlc2hQcm9qZWN0cyA9IChwcm9qZWN0cykgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzQ29udGFpbmVyJyk7XG5cbiAgICAvLyByZW1vdmUgZXhpc3RpbmcgcHJvamVjdHMgZGlzcGxheXNcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdFRpbGUnKTtcbiAgICBjdXJyZW50UHJvamVjdHMuZm9yRWFjaCgodGVtcFByb2plY3QpID0+IHtcbiAgICAgICAgdGVtcFByb2plY3QucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBpdGVyYXRlIGFuZCBkaXNwbGF5IHVwZGF0ZWQgcHJvamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RUaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld1Byb2plY3RUaWxlLnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0uZ2V0VGl0bGUoKTtcbiAgICAgICAgbmV3UHJvamVjdFRpbGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdFRpbGUnKTtcbiAgICAgICAgbmV3UHJvamVjdFRpbGUuY2xhc3NMaXN0LmFkZCgnbmF2YmFySXRlbScpO1xuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGlsZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlUG9wVXAgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBwb3B1cERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwRGl2LmNsYXNzTGlzdC5hZGQoJ3BvcHVwJyk7XG4gICAgLy8gUHJvamVjdCBOYW1lXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcm9qZWN0TmFtZScpO1xuICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICBwcm9qZWN0TmFtZS5pZCA9ICdwcm9qZWN0TmFtZSc7XG4gICAgY29uc3QgcHJvamVjdE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJvamVjdE5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0IE5hbWU6JztcbiAgICBwcm9qZWN0TmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3ROYW1lJyk7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVMYWJlbCk7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgIC8vIFByb2plY3QgRHVlIERhdGVcbiAgICBjb25zdCBwcm9qZWN0RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdER1ZURhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Byb2plY3REdWVEYXRlJyk7XG4gICAgcHJvamVjdER1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKVxuICAgIHByb2plY3REdWVEYXRlLmlkID0gJ3Byb2plY3REdWVEYXRlJztcbiAgICBjb25zdCBwcm9qZWN0RHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcm9qZWN0RHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOic7XG4gICAgcHJvamVjdER1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0TmFtZScpO1xuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKHByb2plY3REdWVEYXRlTGFiZWwpO1xuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKHByb2plY3REdWVEYXRlKTtcbiAgICAvLyBCdXR0b25zXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0QnRuJyk7XG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnY2FuY2VsQnRuJyk7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChwb3B1cERpdik7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUb2RvUG9wVXAgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBwb3B1cERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwRGl2LmNsYXNzTGlzdC5hZGQoJ3BvcHVwJyk7XG4gICAgLy8gVG9kbyBOYW1lXG4gICAgY29uc3QgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9OYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0b2RvTmFtZScpO1xuICAgIHRvZG9OYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICB0b2RvTmFtZS5pZCA9ICd0b2RvTmFtZSc7XG4gICAgY29uc3QgdG9kb05hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdG9kb05hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdUb2RvIE5hbWU6JztcbiAgICB0b2RvTmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RvZG9OYW1lJyk7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQodG9kb05hbWVMYWJlbCk7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQodG9kb05hbWUpO1xuICAgIC8vIFRvZG8gZGVzY3JpcHRpb25cbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndG9kb0Rlc2NyaXB0aW9uJyk7XG4gICAgdG9kb0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICB0b2RvRGVzY3JpcHRpb24uaWQgPSAndG9kb0Rlc2NyaXB0aW9uJztcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdG9kb0Rlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnVG9kbyBEZXNjcmlwdGlvbjonO1xuICAgIHRvZG9EZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RvZG9EZXNjcmlwdGlvbicpO1xuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbkxhYmVsKTtcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pO1xuICAgIC8vIFRvZG8gRHVlIERhdGVcbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0R1ZURhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RvZG9EdWVEYXRlJyk7XG4gICAgdG9kb0R1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKVxuICAgIHRvZG9EdWVEYXRlLmlkID0gJ3RvZG9EdWVEYXRlJztcbiAgICBjb25zdCB0b2RvRHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0b2RvRHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOic7XG4gICAgdG9kb0R1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b2RvTmFtZScpO1xuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlTGFiZWwpO1xuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlKTtcbiAgICAvLyBUb2RvIG5vdGVzXG4gICAgY29uc3QgdG9kb05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvTm90ZXMuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RvZG9Ob3RlcycpO1xuICAgIHRvZG9Ob3Rlcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgdG9kb05vdGVzLmlkID0gJ3RvZG9Ob3Rlcyc7XG4gICAgY29uc3QgdG9kb05vdGVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRvZG9Ob3Rlc0xhYmVsLnRleHRDb250ZW50ID0gJ1RvZG8gTm90ZXM6JztcbiAgICB0b2RvTm90ZXNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b2RvTm90ZXMnKTtcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZCh0b2RvTm90ZXNMYWJlbCk7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQodG9kb05vdGVzKTtcbiAgICAvLyBCdXR0b25zXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0QnRuJyk7XG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnY2FuY2VsQnRuJyk7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChwb3B1cERpdik7XG59XG5cbmV4cG9ydCBjb25zdCBjbG9zZVBvcFVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJyk7XG4gICAgcG9wdXBEaXYucmVtb3ZlKCk7XG59XG5cbmNvbnN0IGNvbnRlbnRDb250YWluZXJJbml0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRDb250YWluZXInKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDb250ZW50Q29udGFpbmVyID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRDb250YWluZXInKTtcbiAgICAvLyBkZWxldGUgY3VycmVudCB0b2RvIGl0ZW1zXG4gICAgY29uc3QgYWxsVG9kb0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9JdGVtJyk7XG4gICAgYWxsVG9kb0l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5yZW1vdmUoKTtcbiAgICB9KTtcbiAgICBjb25zdCBhbGxUb2RvcyA9IHByb2plY3QuZ2V0QWxsVG9kb3MoKTtcbiAgICBhbGxUb2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvSXRlbScpO1xuICAgICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IGBUaXRsZTogJHt0b2RvLmdldFRpdGxlKCl9YDtcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGBEZXNjcmlwdGlvbjogJHt0b2RvLmdldERlc2NyaXB0aW9uKCl9YDtcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pO1xuICAgICAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdG9kb0R1ZURhdGUudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7dG9kby5nZXREdWVEYXRlKCl9YDtcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZSk7XG4gICAgICAgIGNvbnN0IHRvZG9Ob3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdG9kb05vdGVzLnRleHRDb250ZW50ID0gYE5vdGVzOiAke3RvZG8uZ2V0Tm90ZXMoKX1gO1xuICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9Ob3Rlcyk7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XG4gICAgICAgIC8vIEFkZCBjaGVja2xpc3QgbGF0ZXJcbiAgICB9KTtcbn1cblxuXG5leHBvcnQgY29uc3QgcGFnZUluaXQgPSAoKSA9PiB7XG4gICAgbmF2YmFySW5pdCgpO1xuICAgIGNvbnRlbnRDb250YWluZXJJbml0KCk7XG5cbn07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cblxuaW1wb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gXCIuL2J1dHRvbnNcIjtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmV4cG9ydCBjb25zdCB0b0RvSXRlbSA9ICh0ZW1wVGl0bGUsIHRlbXBEZXNjcmlwdGlvbiwgdGVtcER1ZURhdGUsIHRlbXBQcmlvcml0eSA9IDEsIHRlbXBOb3RlcyA9ICcnLCB0ZW1wQ2hlY2tsaXN0ID0gW10pID0+IHtcbiAgICAvLyBpbml0aWFsaXplIHZhcmlhYmxlc1xuICAgIGxldCBfdGl0bGUgPSB0ZW1wVGl0bGU7XG4gICAgbGV0IF9kZXNjcmlwdGlvbiA9IHRlbXBEZXNjcmlwdGlvbjtcbiAgICBsZXQgX2R1ZURhdGUgPSB0ZW1wRHVlRGF0ZTtcbiAgICBsZXQgX3ByaW9yaXR5ID0gdGVtcFByaW9yaXR5O1xuICAgIGxldCBfbm90ZXMgPSB0ZW1wTm90ZXM7XG4gICAgbGV0IF9jaGVja2xpc3QgPSB0ZW1wQ2hlY2tsaXN0O1xuXG4gICAgLy8gcmV0dXJuIGZ1bmN0aW9uc1xuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gX3RpdGxlO1xuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gX2Rlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBfZHVlRGF0ZTtcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IF9wcmlvcml0eTtcbiAgICBjb25zdCBnZXROb3RlcyA9ICgpID0+IF9ub3RlcztcbiAgICBjb25zdCBnZXRDaGVja2xpc3QgPSAoKSA9PiBfY2hlY2tsaXN0O1xuXG4gICAgLy8gY2hhbmdlIGZ1bmN0aW9uc1xuICAgIGNvbnN0IGNoYW5nZVRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG4gICAgICAgIF90aXRsZSA9IG5ld1RpdGxlO1xuICAgIH1cbiAgICBjb25zdCBjaGFuZ2VEZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICBfZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgY29uc3QgY2hhbmdlRGF0ZSA9IChuZXdEYXRlKSA9PiB7XG4gICAgICAgIF9kdWVEYXRlID0gbmV3RGF0ZTtcbiAgICB9XG4gICAgY29uc3QgY2hhbmdlUHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IHtcbiAgICAgICAgX3ByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgfVxuICAgIGNvbnN0IGNoYW5nZU5vdGVzID0gKG5ld05vdGVzKSA9PiB7XG4gICAgICAgIF9ub3RlcyA9IG5ld05vdGVzO1xuICAgIH1cblxuICAgIC8vIENoZWNrbGlzdCBmdW5jdGlvbnNcbiAgICBjb25zdCBhZGRUb0NoZWNrbGlzdCA9IChjaGVja2xpc3RTdHIpID0+IHtcbiAgICAgICAgX2NoZWNrbGlzdC5wdXNoKGNoZWNrbGlzdFN0cik7XG4gICAgfVxuICAgIGNvbnN0IHN0cmlrZUNoZWNrbGlzdCA9IChjaGVja2xpc3RJRCkgPT4ge1xuICAgICAgICBfY2hlY2tsaXN0W2NoZWNrbGlzdElEXSA9IF9jaGVja2xpc3RbY2hlY2tsaXN0SURdLnN0cmlrZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB7Y2hhbmdlVGl0bGUsIGNoYW5nZURlc2NyaXB0aW9uLCBjaGFuZ2VEYXRlLCBjaGFuZ2VQcmlvcml0eSwgY2hhbmdlTm90ZXMsIGFkZFRvQ2hlY2tsaXN0LCBzdHJpa2VDaGVja2xpc3QsIGdldFRpdGxlLCBnZXRQcmlvcml0eSwgZ2V0Tm90ZXMsIGdldER1ZURhdGUsIGdldERlc2NyaXB0aW9uLCBnZXRDaGVja2xpc3R9O1xufVxuZXhwb3J0IGNvbnN0IHRyYWNrQWN0aXZlUHJvamVjdCA9ICgoKSA9PiB7XG4gICAgbGV0IF9hY3RpdmVQcm9qZWN0ID0gMDtcbiAgICBjb25zdCBzZXRBY3RpdmVQcm9qZWN0ID0gKGlkKSA9PiB7XG4gICAgICAgIF9hY3RpdmVQcm9qZWN0ID0gaWQ7XG4gICAgfVxuICAgIGNvbnN0IGdldEFjdGl2ZVByb2plY3QgPSAoKSA9PiBfYWN0aXZlUHJvamVjdDtcblxuICAgIHJldHVybiB7c2V0QWN0aXZlUHJvamVjdCwgZ2V0QWN0aXZlUHJvamVjdH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdEl0ZW0gPSAodGVtcFRpdGxlLCB0ZW1wRHVlRGF0ZSkgPT4ge1xuICAgIGNvbnN0IF90aXRsZSA9IHRlbXBUaXRsZTtcbiAgICBjb25zdCBfZHVlRGF0ZSA9IHRlbXBEdWVEYXRlO1xuICAgIGNvbnN0IF90b2RvSXRlbXMgPSBbXTtcblxuICAgIC8vIHJldHVybiBmdW5jdGlvbnNcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IF90aXRsZTtcbiAgICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gX2R1ZURhdGU7XG4gICAgY29uc3QgYWRkVG9kbyA9ICh0b2RvSXRlbSkgPT4ge1xuICAgICAgICBfdG9kb0l0ZW1zLnB1c2godG9kb0l0ZW0pO1xuICAgIH1cbiAgICBjb25zdCBnZXRBbGxUb2RvcyA9ICgpID0+IF90b2RvSXRlbXM7XG4gICAgY29uc3QgZ2V0VG9kbyA9IChpZCkgPT4gX3RvZG9JdGVtc1tpZF07XG5cbiAgICByZXR1cm4ge2dldFRpdGxlLCBnZXREdWVEYXRlLCBhZGRUb2RvLCBnZXRBbGxUb2RvcywgZ2V0VG9kb307XG59XG5cbmV4cG9ydCBjb25zdCB0cmFja1Byb2plY3RzID0gKCgpID0+IHtcbiAgICBjb25zdCBfcHJvamVjdHMgPSBbXTtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxQcm9qZWN0cycpKSB7XG4gICAgICAgICAgICAvLyBwYXJzZSBKU09OIFN0cmluZyB0byBnZXQgT2JqZWN0XG4gICAgICAgICAgICBjb25zdCBhbGxQcm9qZWN0c09iamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxQcm9qZWN0cycpKTtcbiAgICAgICAgICAgIC8vIGl0ZXJhdGUgdG8gY29udmVydCBvYmplY3RzIHRvIGZhY3RvciBmdW5jdGlvbnNcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHNPYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcFByb2plY3QgPSBwcm9qZWN0SXRlbShhbGxQcm9qZWN0c09iamVjdHNbaV0udGl0bGUsIGFsbFByb2plY3RzT2JqZWN0c1tpXS5kdWVEYXRlKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbFByb2plY3RzT2JqZWN0c1tpXS50b2RvSXRlbXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcFRvZG8gPSB0b0RvSXRlbShhbGxQcm9qZWN0c09iamVjdHNbaV0udG9kb0l0ZW1zW2pdLnRpdGxlLCBhbGxQcm9qZWN0c09iamVjdHNbaV0udG9kb0l0ZW1zW2pdLmRlc2NyaXB0aW9uLCBhbGxQcm9qZWN0c09iamVjdHNbaV0udG9kb0l0ZW1zW2pdLmR1ZURhdGUsIGFsbFByb2plY3RzT2JqZWN0c1tpXS50b2RvSXRlbXNbal0ucHJpb3JpdHksIGFsbFByb2plY3RzT2JqZWN0c1tpXS50b2RvSXRlbXNbal0ubm90ZXMsIGFsbFByb2plY3RzT2JqZWN0c1tpXS50b2RvSXRlbXNbal0uY2hlY2tsaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcFByb2plY3QuYWRkVG9kbyh0ZW1wVG9kbyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9wcm9qZWN0cy5wdXNoKHRlbXBQcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFsbFRvZG9zID0gcHJvamVjdEl0ZW0oJ0FsbCBQcm9qZWN0cycsIG51bGwpO1xuICAgICAgICAgICAgX3Byb2plY3RzLnB1c2goYWxsVG9kb3MpOyAgICAgICAgIFxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYWxsVG9kb3MgPSBwcm9qZWN0SXRlbSgnQWxsIFByb2plY3RzJywgbnVsbCk7XG4gICAgICAgIF9wcm9qZWN0cy5wdXNoKGFsbFRvZG9zKTtcbiAgICB9XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChuZXdQcm9qZWN0KSA9PiB7XG4gICAgICAgIF9wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIH1cbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKGlkKSA9PiBfcHJvamVjdHNbaWRdO1xuICAgIGNvbnN0IGdldFByb2plY3RCeU5hbWUgPSAodGVtcE5hbWUpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChfcHJvamVjdHNbaV0uZ2V0VGl0bGUgPT09IHRlbXBOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9wcm9qZWN0c1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgZ2V0QWxsUHJvamVjdHMgPSAoKSA9PiBfcHJvamVjdHM7XG5cbiAgICByZXR1cm4ge2FkZFByb2plY3QsIGdldFByb2plY3QsIGdldFByb2plY3RCeU5hbWUsIGdldEFsbFByb2plY3RzfTtcbn0pKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGNzcyBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7cGFnZUluaXQsIGNyZWF0ZVBvcFVwLCBjbG9zZVBvcFVwLCByZWZyZXNoUHJvamVjdHN9IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCB7dHJhY2tQcm9qZWN0c30gZnJvbSAnLi9vYmplY3RzJztcbmltcG9ydCBpbml0aWFsaXplQnV0dG9ucyBmcm9tICcuL2J1dHRvbnMnO1xuXG5wYWdlSW5pdCgpO1xuXG4vLyBpbml0aWFsaXplIGJ1dHRvbnNcbmluaXRpYWxpemVCdXR0b25zKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9