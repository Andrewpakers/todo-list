/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/buttons.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGdCQUFnQjtBQUMxRDtBQUNBO0FBQ0Esc0RBQXNELHNCQUFzQjtBQUM1RTtBQUNBO0FBQ0EsK0NBQStDLGtCQUFrQjtBQUNqRTtBQUNBO0FBQ0EsMENBQTBDLGdCQUFnQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdPO0FBQ1A7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaE5BOztBQUU2Qzs7QUFFN0M7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFTztBQUNQO0FBQ0EsUUFBUSwwREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0JBQStCO0FBQzNEO0FBQ0EsZ0NBQWdDLDRDQUE0QztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7Ozs7O1VDbEhEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL29iamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5pbXBvcnQgeyBjcmVhdGVQb3BVcCwgY2xvc2VQb3BVcCwgcmVmcmVzaFByb2plY3RzLCBjcmVhdGVUb2RvUG9wVXAsIHVwZGF0ZUNvbnRlbnRDb250YWluZXIgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgeyBwcm9qZWN0SXRlbSwgdG9Eb0l0ZW0sIHRyYWNrQWN0aXZlUHJvamVjdCwgdHJhY2tQcm9qZWN0cyB9IGZyb20gXCIuL29iamVjdHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RvcmVEYXRhKCkge1xuICAgIC8vIG5lZWQgdG8gaXRlcmF0ZSB0aHJvdWdoIGFsbCB0aGUgaXRlbXNcbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IHRyYWNrUHJvamVjdHMuZ2V0QWxsUHJvamVjdHMoKTtcbiAgICBjb25zdCBhbGxQcm9qZWN0c09iamVjdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGl0ZXJhdGUgYW5kIG9iamVjdGlmeSB0b2RvbGlzdFxuICAgICAgICBjb25zdCB0b2RvQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0cmFja1Byb2plY3RzLmdldFByb2plY3QoaSkuZ2V0QWxsVG9kb3MoKS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgdG9kb09iamVjdCA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdHJhY2tQcm9qZWN0cy5nZXRQcm9qZWN0KGkpLmdldFRvZG8oaikuZ2V0VGl0bGUoKSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdHJhY2tQcm9qZWN0cy5nZXRQcm9qZWN0KGkpLmdldFRvZG8oaikuZ2V0RGVzY3JpcHRpb24oKSxcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiB0cmFja1Byb2plY3RzLmdldFByb2plY3QoaSkuZ2V0VG9kbyhqKS5nZXREdWVEYXRlKCksXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IHRyYWNrUHJvamVjdHMuZ2V0UHJvamVjdChpKS5nZXRUb2RvKGopLmdldFByaW9yaXR5KCksXG4gICAgICAgICAgICAgICAgbm90ZXM6IHRyYWNrUHJvamVjdHMuZ2V0UHJvamVjdChpKS5nZXRUb2RvKGopLmdldFByaW9yaXR5KCksXG4gICAgICAgICAgICAgICAgY2hlY2tsaXN0OiB0cmFja1Byb2plY3RzLmdldFByb2plY3QoaSkuZ2V0VG9kbyhqKS5nZXRDaGVja2xpc3QoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9kb0FycmF5LnB1c2godG9kb09iamVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qZWN0T2JqZWN0ID0ge1xuICAgICAgICAgICAgdGl0bGU6IHRyYWNrUHJvamVjdHMuZ2V0UHJvamVjdChpKS5nZXRUaXRsZSgpLFxuICAgICAgICAgICAgZHVlRGF0ZTogdHJhY2tQcm9qZWN0cy5nZXRQcm9qZWN0KGkpLmdldER1ZURhdGUoKSxcbiAgICAgICAgICAgIHRvZG9JdGVtczogdG9kb0FycmF5XG4gICAgICAgIH1cbiAgICAgICAgYWxsUHJvamVjdHNPYmplY3RzLnB1c2gocHJvamVjdE9iamVjdCk7XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzT2JqZWN0cykpO1xuXG59XG5cbmNvbnN0IGluaXRpYWxpemVUb2RvUG9wdXBCdXR0b25zID0gKCkgPT4ge1xuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRCdG4nKTtcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsQnRuJyk7XG4gICAgY29uc3QgdG9kb05hbWVGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTmFtZScpO1xuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbkZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHRvZG9EdWVEYXRlRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0R1ZURhdGUnKTsgXG4gICAgY29uc3QgdG9kb05vdGVzRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb05vdGVzJyk7XG5cbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXBUb2RvID0gdG9Eb0l0ZW0odG9kb05hbWVGaWVsZC52YWx1ZSwgdG9kb0Rlc2NyaXB0aW9uRmllbGQudmFsdWUsIHRvZG9EdWVEYXRlRmllbGQudmFsdWUsIDEsIHRvZG9Ob3Rlc0ZpZWxkLnZhbHVlKTtcbiAgICAgICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IHRyYWNrUHJvamVjdHMuZ2V0UHJvamVjdCh0cmFja0FjdGl2ZVByb2plY3QuZ2V0QWN0aXZlUHJvamVjdCgpKTtcbiAgICAgICAgY29uc3QgYWxsUHJvamVjdHMgPSB0cmFja1Byb2plY3RzLmdldFByb2plY3QoMCk7XG4gICAgICAgIGFsbFByb2plY3RzLmFkZFRvZG8odGVtcFRvZG8pO1xuICAgICAgICBpZiAoYWN0aXZlUHJvamVjdCAhPT0gYWxsUHJvamVjdHMpIHtcbiAgICAgICAgICAgIGFjdGl2ZVByb2plY3QuYWRkVG9kbyh0ZW1wVG9kbyk7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlQ29udGVudENvbnRhaW5lcihhY3RpdmVQcm9qZWN0KTtcbiAgICAgICAgY2xvc2VQb3BVcCgpO1xuXG4gICAgICAgIC8vIFN0b3JlIGluIGxvY2FsU3RvcmFnZVxuICAgICAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbiAgICAgICAgICAgIHN0b3JlRGF0YSgpO1xuICAgICAgICB9XG5cbiAgICB9KTtcblxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xvc2VQb3BVcCgpO1xuICAgIH0pO1xuXG59XG5cbmNvbnN0IGluaXRpYWxpemVQb3BVcEJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdEJ0bicpO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWxCdG4nKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lJyk7XG4gICAgY29uc3QgcHJvamVjdER1ZURhdGVGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0RHVlRGF0ZScpOyBcblxuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcEl0ZW0gPSBwcm9qZWN0SXRlbShwcm9qZWN0TmFtZUZpZWxkLnZhbHVlLCBwcm9qZWN0RHVlRGF0ZUZpZWxkLnZhbHVlKTtcbiAgICAgICAgXG4gICAgICAgIHRyYWNrUHJvamVjdHMuYWRkUHJvamVjdCh0ZW1wSXRlbSk7XG4gICAgICAgIGNsb3NlUG9wVXAoKTtcbiAgICAgICAgcmVmcmVzaFByb2plY3RzKHRyYWNrUHJvamVjdHMuZ2V0QWxsUHJvamVjdHMoKSk7XG4gICAgICAgIGNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RUaWxlJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaWxlID0gYWxsUHJvamVjdHNbaV07XG4gICAgICAgICAgICBwcm9qZWN0VGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0cmFja0FjdGl2ZVByb2plY3Quc2V0QWN0aXZlUHJvamVjdChpKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVDb250ZW50Q29udGFpbmVyKHRyYWNrUHJvamVjdHMuZ2V0UHJvamVjdChpKSk7XG4gICAgICAgICAgICAgICAgYWxsUHJvamVjdHMuZm9yRWFjaCgodGVtcFByb2opID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcFByb2ouY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGlsZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdG9yZSBpbiBsb2NhbFN0b3JhZ2VcbiAgICAgICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgICAgICAgIHN0b3JlRGF0YSgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlUG9wVXAoKTtcbiAgICB9KTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgbG9jYWwgc3RvcmFnZVxuXG4gICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdQcm9qZWN0QnRuJyk7XG4gICAgcmVmcmVzaFByb2plY3RzKHRyYWNrUHJvamVjdHMuZ2V0QWxsUHJvamVjdHMoKSk7XG4gICAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY3JlYXRlUG9wVXAoKTtcbiAgICAgICAgaW5pdGlhbGl6ZVBvcFVwQnV0dG9ucygpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbmV3VG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdUb2RvQnRuJyk7XG4gICAgbmV3VG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY3JlYXRlVG9kb1BvcFVwKCk7XG4gICAgICAgIGluaXRpYWxpemVUb2RvUG9wdXBCdXR0b25zKCk7XG4gICAgfSk7XG4gICAgcmVmcmVzaFByb2plY3RzKHRyYWNrUHJvamVjdHMuZ2V0QWxsUHJvamVjdHMoKSk7XG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdFRpbGUnKTtcbiAgICBhbGxQcm9qZWN0c1swXS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpbGUgPSBhbGxQcm9qZWN0c1tpXTtcbiAgICAgICAgdXBkYXRlQ29udGVudENvbnRhaW5lcih0cmFja1Byb2plY3RzLmdldFByb2plY3QoMCkpO1xuICAgICAgICBwcm9qZWN0VGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRyYWNrQWN0aXZlUHJvamVjdC5zZXRBY3RpdmVQcm9qZWN0KGkpO1xuICAgICAgICAgICAgdXBkYXRlQ29udGVudENvbnRhaW5lcih0cmFja1Byb2plY3RzLmdldFByb2plY3QoaSkpO1xuICAgICAgICAgICAgYWxsUHJvamVjdHMuZm9yRWFjaCgodGVtcFByb2opID0+IHtcbiAgICAgICAgICAgICAgICB0ZW1wUHJvai5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwcm9qZWN0VGlsZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cblxuXG4vLyBpbml0aWFsaXplIHBhZ2VcblxuLy8gaW5pdGlhbGl6ZSBuYXZiYXJcbmNvbnN0IG5hdmJhckluaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJyk7XG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIGluaXQgaG9tZSBidXR0b25cbiAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ25hdmJhckl0ZW0nKTtcbiAgICBob21lQnRuLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIG5hdmJhci5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgICAvLyBpbml0IG5ldyB0b2RvIGJ1dHRvblxuICAgIGNvbnN0IG5ld1RvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUb2RvQnRuLmNsYXNzTGlzdC5hZGQoJ25hdmJhckl0ZW0nKTtcbiAgICBuZXdUb2RvQnRuLmNsYXNzTGlzdC5hZGQoJ25ld1RvZG9CdG4nKTsgICAgXG4gICAgbmV3VG9kb0J0bi50ZXh0Q29udGVudCA9ICdOZXcgVG9kbyc7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG5ld1RvZG9CdG4pO1xuICAgIC8vIGluaXQgbmV3IHByb2plY3QgYnV0dG9uXG4gICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Byb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnbmF2YmFySXRlbScpO1xuICAgIG5ld1Byb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnbmV3UHJvamVjdEJ0bicpOyAgICBcbiAgICBuZXdQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0JztcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ0bik7XG4gICAgLy8gaW5pdCBwcm9qZWN0cyB0aXRsZVxuICAgIGNvbnN0IHByb2plY3RzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0c1RpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgICBwcm9qZWN0c1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzVGl0bGUnKTtcbiAgICBwcm9qZWN0c1RpdGxlLmNsYXNzTGlzdC5hZGQoJ25hdmJhckl0ZW0nKTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNUaXRsZSk7XG4gICAgLy8gaW5pdCBwcm9qZWN0cyBjb250YWluZXJcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzQ29udGFpbmVyJyk7XG4gICAgcHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFySXRlbScpO1xuICAgIG5hdmJhci5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcik7XG5cblxuICAgIC8vIGRpc3BsYXkgbmF2YmFyXG4gICAgYm9keS5hcHBlbmRDaGlsZChuYXZiYXIpO1xufTtcblxuICAgIC8vIGl0ZXJhdGUgcHJvamVjdHMgJiBhZGQgdG8gcHJvamVjdHMgY29udGFpbmVyXG5leHBvcnQgY29uc3QgcmVmcmVzaFByb2plY3RzID0gKHByb2plY3RzKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNDb250YWluZXInKTtcblxuICAgIC8vIHJlbW92ZSBleGlzdGluZyBwcm9qZWN0cyBkaXNwbGF5c1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0VGlsZScpO1xuICAgIGN1cnJlbnRQcm9qZWN0cy5mb3JFYWNoKCh0ZW1wUHJvamVjdCkgPT4ge1xuICAgICAgICB0ZW1wUHJvamVjdC5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIC8vIGl0ZXJhdGUgYW5kIGRpc3BsYXkgdXBkYXRlZCBwcm9qZWN0c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdFRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3UHJvamVjdFRpbGUudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS5nZXRUaXRsZSgpO1xuICAgICAgICBuZXdQcm9qZWN0VGlsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0VGlsZScpO1xuICAgICAgICBuZXdQcm9qZWN0VGlsZS5jbGFzc0xpc3QuYWRkKCduYXZiYXJJdGVtJyk7XG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RUaWxlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQb3BVcCA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IHBvcHVwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXBEaXYuY2xhc3NMaXN0LmFkZCgncG9wdXAnKTtcbiAgICAvLyBQcm9qZWN0IE5hbWVcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Byb2plY3ROYW1lJyk7XG4gICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIHByb2plY3ROYW1lLmlkID0gJ3Byb2plY3ROYW1lJztcbiAgICBjb25zdCBwcm9qZWN0TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcm9qZWN0TmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QgTmFtZTonO1xuICAgIHByb2plY3ROYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJvamVjdE5hbWUnKTtcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUxhYmVsKTtcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgLy8gUHJvamVjdCBEdWUgRGF0ZVxuICAgIGNvbnN0IHByb2plY3REdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0RHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdER1ZURhdGUnKTtcbiAgICBwcm9qZWN0RHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG4gICAgcHJvamVjdER1ZURhdGUuaWQgPSAncHJvamVjdER1ZURhdGUnO1xuICAgIGNvbnN0IHByb2plY3REdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByb2plY3REdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6JztcbiAgICBwcm9qZWN0RHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3ROYW1lJyk7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQocHJvamVjdER1ZURhdGVMYWJlbCk7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQocHJvamVjdER1ZURhdGUpO1xuICAgIC8vIEJ1dHRvbnNcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdzdWJtaXRCdG4nKTtcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdjYW5jZWxCdG4nKTtcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKHBvcHVwRGl2KTtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRvZG9Qb3BVcCA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IHBvcHVwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXBEaXYuY2xhc3NMaXN0LmFkZCgncG9wdXAnKTtcbiAgICAvLyBUb2RvIE5hbWVcbiAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb05hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RvZG9OYW1lJyk7XG4gICAgdG9kb05hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIHRvZG9OYW1lLmlkID0gJ3RvZG9OYW1lJztcbiAgICBjb25zdCB0b2RvTmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0b2RvTmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ1RvZG8gTmFtZTonO1xuICAgIHRvZG9OYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndG9kb05hbWUnKTtcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZCh0b2RvTmFtZUxhYmVsKTtcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZCh0b2RvTmFtZSk7XG4gICAgLy8gVG9kbyBkZXNjcmlwdGlvblxuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0b2RvRGVzY3JpcHRpb24nKTtcbiAgICB0b2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIHRvZG9EZXNjcmlwdGlvbi5pZCA9ICd0b2RvRGVzY3JpcHRpb24nO1xuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0b2RvRGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdUb2RvIERlc2NyaXB0aW9uOic7XG4gICAgdG9kb0Rlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndG9kb0Rlc2NyaXB0aW9uJyk7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQodG9kb0Rlc2NyaXB0aW9uTGFiZWwpO1xuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbik7XG4gICAgLy8gVG9kbyBEdWUgRGF0ZVxuICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndG9kb0R1ZURhdGUnKTtcbiAgICB0b2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG4gICAgdG9kb0R1ZURhdGUuaWQgPSAndG9kb0R1ZURhdGUnO1xuICAgIGNvbnN0IHRvZG9EdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRvZG9EdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6JztcbiAgICB0b2RvRHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RvZG9OYW1lJyk7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGVMYWJlbCk7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGUpO1xuICAgIC8vIFRvZG8gbm90ZXNcbiAgICBjb25zdCB0b2RvTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9Ob3Rlcy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndG9kb05vdGVzJyk7XG4gICAgdG9kb05vdGVzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICB0b2RvTm90ZXMuaWQgPSAndG9kb05vdGVzJztcbiAgICBjb25zdCB0b2RvTm90ZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdG9kb05vdGVzTGFiZWwudGV4dENvbnRlbnQgPSAnVG9kbyBOb3RlczonO1xuICAgIHRvZG9Ob3Rlc0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RvZG9Ob3RlcycpO1xuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKHRvZG9Ob3Rlc0xhYmVsKTtcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZCh0b2RvTm90ZXMpO1xuICAgIC8vIEJ1dHRvbnNcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdzdWJtaXRCdG4nKTtcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdjYW5jZWxCdG4nKTtcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKHBvcHVwRGl2KTtcbn1cblxuZXhwb3J0IGNvbnN0IGNsb3NlUG9wVXAgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9wdXBEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcbiAgICBwb3B1cERpdi5yZW1vdmUoKTtcbn1cblxuY29uc3QgY29udGVudENvbnRhaW5lckluaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudENvbnRhaW5lcicpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNvbnRlbnRDb250YWluZXIgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudENvbnRhaW5lcicpO1xuICAgIC8vIGRlbGV0ZSBjdXJyZW50IHRvZG8gaXRlbXNcbiAgICBjb25zdCBhbGxUb2RvSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb0l0ZW0nKTtcbiAgICBhbGxUb2RvSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIGNvbnN0IGFsbFRvZG9zID0gcHJvamVjdC5nZXRBbGxUb2RvcygpO1xuICAgIGFsbFRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9JdGVtJyk7XG4gICAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gYFRpdGxlOiAke3RvZG8uZ2V0VGl0bGUoKX1gO1xuICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYERlc2NyaXB0aW9uOiAke3RvZG8uZ2V0RGVzY3JpcHRpb24oKX1gO1xuICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbik7XG4gICAgICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHt0b2RvLmdldER1ZURhdGUoKX1gO1xuICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlKTtcbiAgICAgICAgY29uc3QgdG9kb05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0b2RvTm90ZXMudGV4dENvbnRlbnQgPSBgTm90ZXM6ICR7dG9kby5nZXROb3RlcygpfWA7XG4gICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb05vdGVzKTtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcbiAgICAgICAgLy8gQWRkIGNoZWNrbGlzdCBsYXRlclxuICAgIH0pO1xufVxuXG5cbmV4cG9ydCBjb25zdCBwYWdlSW5pdCA9ICgpID0+IHtcbiAgICBuYXZiYXJJbml0KCk7XG4gICAgY29udGVudENvbnRhaW5lckluaXQoKTtcblxufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuXG5pbXBvcnQgeyBzdG9yYWdlQXZhaWxhYmxlIH0gZnJvbSBcIi4vYnV0dG9uc1wiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuZXhwb3J0IGNvbnN0IHRvRG9JdGVtID0gKHRlbXBUaXRsZSwgdGVtcERlc2NyaXB0aW9uLCB0ZW1wRHVlRGF0ZSwgdGVtcFByaW9yaXR5ID0gMSwgdGVtcE5vdGVzID0gJycsIHRlbXBDaGVja2xpc3QgPSBbXSkgPT4ge1xuICAgIC8vIGluaXRpYWxpemUgdmFyaWFibGVzXG4gICAgbGV0IF90aXRsZSA9IHRlbXBUaXRsZTtcbiAgICBsZXQgX2Rlc2NyaXB0aW9uID0gdGVtcERlc2NyaXB0aW9uO1xuICAgIGxldCBfZHVlRGF0ZSA9IHRlbXBEdWVEYXRlO1xuICAgIGxldCBfcHJpb3JpdHkgPSB0ZW1wUHJpb3JpdHk7XG4gICAgbGV0IF9ub3RlcyA9IHRlbXBOb3RlcztcbiAgICBsZXQgX2NoZWNrbGlzdCA9IHRlbXBDaGVja2xpc3Q7XG5cbiAgICAvLyByZXR1cm4gZnVuY3Rpb25zXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiBfdGl0bGU7XG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBfZGVzY3JpcHRpb247XG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IF9kdWVEYXRlO1xuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gX3ByaW9yaXR5O1xuICAgIGNvbnN0IGdldE5vdGVzID0gKCkgPT4gX25vdGVzO1xuICAgIGNvbnN0IGdldENoZWNrbGlzdCA9ICgpID0+IF9jaGVja2xpc3Q7XG5cbiAgICAvLyBjaGFuZ2UgZnVuY3Rpb25zXG4gICAgY29uc3QgY2hhbmdlVGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICAgICAgX3RpdGxlID0gbmV3VGl0bGU7XG4gICAgfVxuICAgIGNvbnN0IGNoYW5nZURlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIF9kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBjb25zdCBjaGFuZ2VEYXRlID0gKG5ld0RhdGUpID0+IHtcbiAgICAgICAgX2R1ZURhdGUgPSBuZXdEYXRlO1xuICAgIH1cbiAgICBjb25zdCBjaGFuZ2VQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4ge1xuICAgICAgICBfcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICB9XG4gICAgY29uc3QgY2hhbmdlTm90ZXMgPSAobmV3Tm90ZXMpID0+IHtcbiAgICAgICAgX25vdGVzID0gbmV3Tm90ZXM7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2tsaXN0IGZ1bmN0aW9uc1xuICAgIGNvbnN0IGFkZFRvQ2hlY2tsaXN0ID0gKGNoZWNrbGlzdFN0cikgPT4ge1xuICAgICAgICBfY2hlY2tsaXN0LnB1c2goY2hlY2tsaXN0U3RyKTtcbiAgICB9XG4gICAgY29uc3Qgc3RyaWtlQ2hlY2tsaXN0ID0gKGNoZWNrbGlzdElEKSA9PiB7XG4gICAgICAgIF9jaGVja2xpc3RbY2hlY2tsaXN0SURdID0gX2NoZWNrbGlzdFtjaGVja2xpc3RJRF0uc3RyaWtlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtjaGFuZ2VUaXRsZSwgY2hhbmdlRGVzY3JpcHRpb24sIGNoYW5nZURhdGUsIGNoYW5nZVByaW9yaXR5LCBjaGFuZ2VOb3RlcywgYWRkVG9DaGVja2xpc3QsIHN0cmlrZUNoZWNrbGlzdCwgZ2V0VGl0bGUsIGdldFByaW9yaXR5LCBnZXROb3RlcywgZ2V0RHVlRGF0ZSwgZ2V0RGVzY3JpcHRpb24sIGdldENoZWNrbGlzdH07XG59XG5leHBvcnQgY29uc3QgdHJhY2tBY3RpdmVQcm9qZWN0ID0gKCgpID0+IHtcbiAgICBsZXQgX2FjdGl2ZVByb2plY3QgPSAwO1xuICAgIGNvbnN0IHNldEFjdGl2ZVByb2plY3QgPSAoaWQpID0+IHtcbiAgICAgICAgX2FjdGl2ZVByb2plY3QgPSBpZDtcbiAgICB9XG4gICAgY29uc3QgZ2V0QWN0aXZlUHJvamVjdCA9ICgpID0+IF9hY3RpdmVQcm9qZWN0O1xuXG4gICAgcmV0dXJuIHtzZXRBY3RpdmVQcm9qZWN0LCBnZXRBY3RpdmVQcm9qZWN0fTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0SXRlbSA9ICh0ZW1wVGl0bGUsIHRlbXBEdWVEYXRlKSA9PiB7XG4gICAgY29uc3QgX3RpdGxlID0gdGVtcFRpdGxlO1xuICAgIGNvbnN0IF9kdWVEYXRlID0gdGVtcER1ZURhdGU7XG4gICAgY29uc3QgX3RvZG9JdGVtcyA9IFtdO1xuXG4gICAgLy8gcmV0dXJuIGZ1bmN0aW9uc1xuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gX3RpdGxlO1xuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBfZHVlRGF0ZTtcbiAgICBjb25zdCBhZGRUb2RvID0gKHRvZG9JdGVtKSA9PiB7XG4gICAgICAgIF90b2RvSXRlbXMucHVzaCh0b2RvSXRlbSk7XG4gICAgfVxuICAgIGNvbnN0IGdldEFsbFRvZG9zID0gKCkgPT4gX3RvZG9JdGVtcztcbiAgICBjb25zdCBnZXRUb2RvID0gKGlkKSA9PiBfdG9kb0l0ZW1zW2lkXTtcblxuICAgIHJldHVybiB7Z2V0VGl0bGUsIGdldER1ZURhdGUsIGFkZFRvZG8sIGdldEFsbFRvZG9zLCBnZXRUb2RvfTtcbn1cblxuZXhwb3J0IGNvbnN0IHRyYWNrUHJvamVjdHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IF9wcm9qZWN0cyA9IFtdO1xuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFByb2plY3RzJykpIHtcbiAgICAgICAgICAgIC8vIHBhcnNlIEpTT04gU3RyaW5nIHRvIGdldCBPYmplY3RcbiAgICAgICAgICAgIGNvbnN0IGFsbFByb2plY3RzT2JqZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFByb2plY3RzJykpO1xuICAgICAgICAgICAgLy8gaXRlcmF0ZSB0byBjb252ZXJ0IG9iamVjdHMgdG8gZmFjdG9yIGZ1bmN0aW9uc1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0c09iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wUHJvamVjdCA9IHByb2plY3RJdGVtKGFsbFByb2plY3RzT2JqZWN0c1tpXS50aXRsZSwgYWxsUHJvamVjdHNPYmplY3RzW2ldLmR1ZURhdGUpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsUHJvamVjdHNPYmplY3RzW2ldLnRvZG9JdGVtcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wVG9kbyA9IHRvRG9JdGVtKGFsbFByb2plY3RzT2JqZWN0c1tpXS50b2RvSXRlbXNbal0udGl0bGUsIGFsbFByb2plY3RzT2JqZWN0c1tpXS50b2RvSXRlbXNbal0uZGVzY3JpcHRpb24sIGFsbFByb2plY3RzT2JqZWN0c1tpXS50b2RvSXRlbXNbal0uZHVlRGF0ZSwgYWxsUHJvamVjdHNPYmplY3RzW2ldLnRvZG9JdGVtc1tqXS5wcmlvcml0eSwgYWxsUHJvamVjdHNPYmplY3RzW2ldLnRvZG9JdGVtc1tqXS5ub3RlcywgYWxsUHJvamVjdHNPYmplY3RzW2ldLnRvZG9JdGVtc1tqXS5jaGVja2xpc3QpO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wUHJvamVjdC5hZGRUb2RvKHRlbXBUb2RvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3Byb2plY3RzLnB1c2godGVtcFByb2plY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYWxsVG9kb3MgPSBwcm9qZWN0SXRlbSgnQWxsIFByb2plY3RzJywgbnVsbCk7XG4gICAgICAgICAgICBfcHJvamVjdHMucHVzaChhbGxUb2Rvcyk7ICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhbGxUb2RvcyA9IHByb2plY3RJdGVtKCdBbGwgUHJvamVjdHMnLCBudWxsKTtcbiAgICAgICAgX3Byb2plY3RzLnB1c2goYWxsVG9kb3MpO1xuICAgIH1cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKG5ld1Byb2plY3QpID0+IHtcbiAgICAgICAgX3Byb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgfVxuICAgIGNvbnN0IGdldFByb2plY3QgPSAoaWQpID0+IF9wcm9qZWN0c1tpZF07XG4gICAgY29uc3QgZ2V0UHJvamVjdEJ5TmFtZSA9ICh0ZW1wTmFtZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9wcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKF9wcm9qZWN0c1tpXS5nZXRUaXRsZSA9PT0gdGVtcE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3Byb2plY3RzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBnZXRBbGxQcm9qZWN0cyA9ICgpID0+IF9wcm9qZWN0cztcblxuICAgIHJldHVybiB7YWRkUHJvamVjdCwgZ2V0UHJvamVjdCwgZ2V0UHJvamVjdEJ5TmFtZSwgZ2V0QWxsUHJvamVjdHN9O1xufSkoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2J1dHRvbnMuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=