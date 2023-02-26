/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQzhHO0FBQ3pCOztBQUVyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixrREFBUTtBQUNqQyw4QkFBOEIsOERBQXdCLENBQUMseUVBQW1DO0FBQzFGLDRCQUE0Qiw4REFBd0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdFQUFzQjtBQUM5QixRQUFRLG9EQUFVOzs7QUFHbEIsS0FBSzs7QUFFTDtBQUNBLFFBQVEsb0RBQVU7QUFDbEIsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLHFEQUFXO0FBQ3BDO0FBQ0EsUUFBUSw4REFBd0I7QUFDaEMsUUFBUSxvREFBVTtBQUNsQixRQUFRLHlEQUFlLENBQUMsa0VBQTRCO0FBQ3BEO0FBQ0Esd0JBQXdCLHdCQUF3QjtBQUNoRDtBQUNBO0FBQ0EsZ0JBQWdCLHlFQUFtQztBQUNuRCxnQkFBZ0IsZ0VBQXNCLENBQUMsOERBQXdCO0FBQy9ELDRCQUE0Qiw4REFBd0I7QUFDcEQ7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7O0FBRUw7QUFDQSxRQUFRLG9EQUFVO0FBQ2xCLEtBQUs7O0FBRUw7O0FBRUEsaUVBQWU7QUFDZjtBQUNBLElBQUkseURBQWUsQ0FBQyxrRUFBNEI7QUFDaEQ7QUFDQSxRQUFRLHFEQUFXO0FBQ25CO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsUUFBUSx5REFBZTtBQUN2QjtBQUNBLEtBQUs7QUFDTCxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL29iamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2J1dHRvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5cblxuLy8gaW5pdGlhbGl6ZSBwYWdlXG5cbi8vIGluaXRpYWxpemUgbmF2YmFyXG5jb25zdCBuYXZiYXJJbml0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBpbml0IGhvbWUgYnV0dG9uXG4gICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKCduYXZiYXJJdGVtJyk7XG4gICAgaG9tZUJ0bi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG4gICAgLy8gaW5pdCBuZXcgdG9kbyBidXR0b25cbiAgICBjb25zdCBuZXdUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3VG9kb0J0bi5jbGFzc0xpc3QuYWRkKCduYXZiYXJJdGVtJyk7XG4gICAgbmV3VG9kb0J0bi5jbGFzc0xpc3QuYWRkKCduZXdUb2RvQnRuJyk7ICAgIFxuICAgIG5ld1RvZG9CdG4udGV4dENvbnRlbnQgPSAnTmV3IFRvZG8nO1xuICAgIG5hdmJhci5hcHBlbmRDaGlsZChuZXdUb2RvQnRuKTtcbiAgICAvLyBpbml0IG5ldyBwcm9qZWN0IGJ1dHRvblxuICAgIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ25hdmJhckl0ZW0nKTtcbiAgICBuZXdQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ25ld1Byb2plY3RCdG4nKTsgICAgXG4gICAgbmV3UHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCc7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdG4pO1xuICAgIC8vIGluaXQgcHJvamVjdHMgdGl0bGVcbiAgICBjb25zdCBwcm9qZWN0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHNUaXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gICAgcHJvamVjdHNUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c1RpdGxlJyk7XG4gICAgcHJvamVjdHNUaXRsZS5jbGFzc0xpc3QuYWRkKCduYXZiYXJJdGVtJyk7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKHByb2plY3RzVGl0bGUpO1xuICAgIC8vIGluaXQgcHJvamVjdHMgY29udGFpbmVyXG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c0NvbnRhaW5lcicpO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25hdmJhckl0ZW0nKTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNDb250YWluZXIpO1xuXG5cbiAgICAvLyBkaXNwbGF5IG5hdmJhclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobmF2YmFyKTtcbn07XG5cbiAgICAvLyBpdGVyYXRlIHByb2plY3RzICYgYWRkIHRvIHByb2plY3RzIGNvbnRhaW5lclxuZXhwb3J0IGNvbnN0IHJlZnJlc2hQcm9qZWN0cyA9IChwcm9qZWN0cykgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzQ29udGFpbmVyJyk7XG5cbiAgICAvLyByZW1vdmUgZXhpc3RpbmcgcHJvamVjdHMgZGlzcGxheXNcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdFRpbGUnKTtcbiAgICBjdXJyZW50UHJvamVjdHMuZm9yRWFjaCgodGVtcFByb2plY3QpID0+IHtcbiAgICAgICAgdGVtcFByb2plY3QucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBpdGVyYXRlIGFuZCBkaXNwbGF5IHVwZGF0ZWQgcHJvamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RUaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld1Byb2plY3RUaWxlLnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0uZ2V0VGl0bGUoKTtcbiAgICAgICAgbmV3UHJvamVjdFRpbGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdFRpbGUnKTtcbiAgICAgICAgbmV3UHJvamVjdFRpbGUuY2xhc3NMaXN0LmFkZCgnbmF2YmFySXRlbScpO1xuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGlsZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlUG9wVXAgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBwb3B1cERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwRGl2LmNsYXNzTGlzdC5hZGQoJ3BvcHVwJyk7XG4gICAgLy8gUHJvamVjdCBOYW1lXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcm9qZWN0TmFtZScpO1xuICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICBwcm9qZWN0TmFtZS5pZCA9ICdwcm9qZWN0TmFtZSc7XG4gICAgY29uc3QgcHJvamVjdE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJvamVjdE5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0IE5hbWU6JztcbiAgICBwcm9qZWN0TmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3ROYW1lJyk7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVMYWJlbCk7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgIC8vIFByb2plY3QgRHVlIERhdGVcbiAgICBjb25zdCBwcm9qZWN0RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdER1ZURhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Byb2plY3REdWVEYXRlJyk7XG4gICAgcHJvamVjdER1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKVxuICAgIHByb2plY3REdWVEYXRlLmlkID0gJ3Byb2plY3REdWVEYXRlJztcbiAgICBjb25zdCBwcm9qZWN0RHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcm9qZWN0RHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOic7XG4gICAgcHJvamVjdER1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0TmFtZScpO1xuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKHByb2plY3REdWVEYXRlTGFiZWwpO1xuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKHByb2plY3REdWVEYXRlKTtcbiAgICAvLyBCdXR0b25zXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0QnRuJyk7XG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnY2FuY2VsQnRuJyk7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChwb3B1cERpdik7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUb2RvUG9wVXAgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBwb3B1cERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwRGl2LmNsYXNzTGlzdC5hZGQoJ3BvcHVwJyk7XG4gICAgLy8gVG9kbyBOYW1lXG4gICAgY29uc3QgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9OYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0b2RvTmFtZScpO1xuICAgIHRvZG9OYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICB0b2RvTmFtZS5pZCA9ICd0b2RvTmFtZSc7XG4gICAgY29uc3QgdG9kb05hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdG9kb05hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdUb2RvIE5hbWU6JztcbiAgICB0b2RvTmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RvZG9OYW1lJyk7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQodG9kb05hbWVMYWJlbCk7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQodG9kb05hbWUpO1xuICAgIC8vIFRvZG8gZGVzY3JpcHRpb25cbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndG9kb0Rlc2NyaXB0aW9uJyk7XG4gICAgdG9kb0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICB0b2RvRGVzY3JpcHRpb24uaWQgPSAndG9kb0Rlc2NyaXB0aW9uJztcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdG9kb0Rlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnVG9kbyBEZXNjcmlwdGlvbjonO1xuICAgIHRvZG9EZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RvZG9EZXNjcmlwdGlvbicpO1xuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbkxhYmVsKTtcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pO1xuICAgIC8vIFRvZG8gRHVlIERhdGVcbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0R1ZURhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RvZG9EdWVEYXRlJyk7XG4gICAgdG9kb0R1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKVxuICAgIHRvZG9EdWVEYXRlLmlkID0gJ3RvZG9EdWVEYXRlJztcbiAgICBjb25zdCB0b2RvRHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0b2RvRHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOic7XG4gICAgdG9kb0R1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b2RvTmFtZScpO1xuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlTGFiZWwpO1xuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlKTtcbiAgICAvLyBUb2RvIG5vdGVzXG4gICAgY29uc3QgdG9kb05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvTm90ZXMuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RvZG9Ob3RlcycpO1xuICAgIHRvZG9Ob3Rlcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgdG9kb05vdGVzLmlkID0gJ3RvZG9Ob3Rlcyc7XG4gICAgY29uc3QgdG9kb05vdGVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRvZG9Ob3Rlc0xhYmVsLnRleHRDb250ZW50ID0gJ1RvZG8gTm90ZXM6JztcbiAgICB0b2RvTm90ZXNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b2RvTm90ZXMnKTtcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZCh0b2RvTm90ZXNMYWJlbCk7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQodG9kb05vdGVzKTtcbiAgICAvLyBCdXR0b25zXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0QnRuJyk7XG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnY2FuY2VsQnRuJyk7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChwb3B1cERpdik7XG59XG5cbmV4cG9ydCBjb25zdCBjbG9zZVBvcFVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJyk7XG4gICAgcG9wdXBEaXYucmVtb3ZlKCk7XG59XG5cbmNvbnN0IGNvbnRlbnRDb250YWluZXJJbml0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRDb250YWluZXInKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDb250ZW50Q29udGFpbmVyID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRDb250YWluZXInKTtcbiAgICAvLyBkZWxldGUgY3VycmVudCB0b2RvIGl0ZW1zXG4gICAgY29uc3QgYWxsVG9kb0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9JdGVtJyk7XG4gICAgYWxsVG9kb0l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5yZW1vdmUoKTtcbiAgICB9KTtcbiAgICBjb25zdCBhbGxUb2RvcyA9IHByb2plY3QuZ2V0QWxsVG9kb3MoKTtcbiAgICBhbGxUb2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvSXRlbScpO1xuICAgICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IGBUaXRsZTogJHt0b2RvLmdldFRpdGxlKCl9YDtcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGBEZXNjcmlwdGlvbjogJHt0b2RvLmdldERlc2NyaXB0aW9uKCl9YDtcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pO1xuICAgICAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdG9kb0R1ZURhdGUudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7dG9kby5nZXREdWVEYXRlKCl9YDtcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZSk7XG4gICAgICAgIGNvbnN0IHRvZG9Ob3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdG9kb05vdGVzLnRleHRDb250ZW50ID0gYE5vdGVzOiAke3RvZG8uZ2V0Tm90ZXMoKX1gO1xuICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9Ob3Rlcyk7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XG4gICAgICAgIC8vIEFkZCBjaGVja2xpc3QgbGF0ZXJcbiAgICB9KTtcbn1cblxuXG5leHBvcnQgY29uc3QgcGFnZUluaXQgPSAoKSA9PiB7XG4gICAgbmF2YmFySW5pdCgpO1xuICAgIGNvbnRlbnRDb250YWluZXJJbml0KCk7XG5cbn07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5leHBvcnQgY29uc3QgdG9Eb0l0ZW0gPSAodGVtcFRpdGxlLCB0ZW1wRGVzY3JpcHRpb24sIHRlbXBEdWVEYXRlLCB0ZW1wUHJpb3JpdHkgPSAxLCB0ZW1wTm90ZXMgPSAnJywgdGVtcENoZWNrbGlzdCA9IFtdKSA9PiB7XG4gICAgLy8gaW5pdGlhbGl6ZSB2YXJpYWJsZXNcbiAgICBsZXQgX3RpdGxlID0gdGVtcFRpdGxlO1xuICAgIGxldCBfZGVzY3JpcHRpb24gPSB0ZW1wRGVzY3JpcHRpb247XG4gICAgbGV0IF9kdWVEYXRlID0gdGVtcER1ZURhdGU7XG4gICAgbGV0IF9wcmlvcml0eSA9IHRlbXBQcmlvcml0eTtcbiAgICBsZXQgX25vdGVzID0gdGVtcE5vdGVzO1xuICAgIGxldCBfY2hlY2tsaXN0ID0gdGVtcENoZWNrbGlzdDtcblxuICAgIC8vIHJldHVybiBmdW5jdGlvbnNcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IF90aXRsZTtcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IF9kZXNjcmlwdGlvbjtcbiAgICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gX2R1ZURhdGU7XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBfcHJpb3JpdHk7XG4gICAgY29uc3QgZ2V0Tm90ZXMgPSAoKSA9PiBfbm90ZXM7XG4gICAgY29uc3QgZ2V0Q2hlY2tsaXN0ID0gKCkgPT4gX2NoZWNrbGlzdDtcblxuICAgIC8vIGNoYW5nZSBmdW5jdGlvbnNcbiAgICBjb25zdCBjaGFuZ2VUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xuICAgICAgICBfdGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9XG4gICAgY29uc3QgY2hhbmdlRGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgX2Rlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgfVxuICAgIGNvbnN0IGNoYW5nZURhdGUgPSAobmV3RGF0ZSkgPT4ge1xuICAgICAgICBfZHVlRGF0ZSA9IG5ld0RhdGU7XG4gICAgfVxuICAgIGNvbnN0IGNoYW5nZVByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiB7XG4gICAgICAgIF9wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH1cbiAgICBjb25zdCBjaGFuZ2VOb3RlcyA9IChuZXdOb3RlcykgPT4ge1xuICAgICAgICBfbm90ZXMgPSBuZXdOb3RlcztcbiAgICB9XG5cbiAgICAvLyBDaGVja2xpc3QgZnVuY3Rpb25zXG4gICAgY29uc3QgYWRkVG9DaGVja2xpc3QgPSAoY2hlY2tsaXN0U3RyKSA9PiB7XG4gICAgICAgIF9jaGVja2xpc3QucHVzaChjaGVja2xpc3RTdHIpO1xuICAgIH1cbiAgICBjb25zdCBzdHJpa2VDaGVja2xpc3QgPSAoY2hlY2tsaXN0SUQpID0+IHtcbiAgICAgICAgX2NoZWNrbGlzdFtjaGVja2xpc3RJRF0gPSBfY2hlY2tsaXN0W2NoZWNrbGlzdElEXS5zdHJpa2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2NoYW5nZVRpdGxlLCBjaGFuZ2VEZXNjcmlwdGlvbiwgY2hhbmdlRGF0ZSwgY2hhbmdlUHJpb3JpdHksIGNoYW5nZU5vdGVzLCBhZGRUb0NoZWNrbGlzdCwgc3RyaWtlQ2hlY2tsaXN0LCBnZXRUaXRsZSwgZ2V0UHJpb3JpdHksIGdldE5vdGVzLCBnZXREdWVEYXRlLCBnZXREZXNjcmlwdGlvbiwgZ2V0Q2hlY2tsaXN0fTtcbn1cbmV4cG9ydCBjb25zdCB0cmFja0FjdGl2ZVByb2plY3QgPSAoKCkgPT4ge1xuICAgIGxldCBfYWN0aXZlUHJvamVjdCA9IDA7XG4gICAgY29uc3Qgc2V0QWN0aXZlUHJvamVjdCA9IChpZCkgPT4ge1xuICAgICAgICBfYWN0aXZlUHJvamVjdCA9IGlkO1xuICAgIH1cbiAgICBjb25zdCBnZXRBY3RpdmVQcm9qZWN0ID0gKCkgPT4gX2FjdGl2ZVByb2plY3Q7XG5cbiAgICByZXR1cm4ge3NldEFjdGl2ZVByb2plY3QsIGdldEFjdGl2ZVByb2plY3R9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RJdGVtID0gKHRlbXBUaXRsZSwgdGVtcER1ZURhdGUpID0+IHtcbiAgICBjb25zdCBfdGl0bGUgPSB0ZW1wVGl0bGU7XG4gICAgY29uc3QgX2R1ZURhdGUgPSB0ZW1wRHVlRGF0ZTtcbiAgICBjb25zdCBfdG9kb0l0ZW1zID0gW107XG5cbiAgICAvLyByZXR1cm4gZnVuY3Rpb25zXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiBfdGl0bGU7XG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IF9kdWVEYXRlO1xuICAgIGNvbnN0IGFkZFRvZG8gPSAodG9kb0l0ZW0pID0+IHtcbiAgICAgICAgX3RvZG9JdGVtcy5wdXNoKHRvZG9JdGVtKTtcbiAgICB9XG4gICAgY29uc3QgZ2V0QWxsVG9kb3MgPSAoKSA9PiBfdG9kb0l0ZW1zO1xuICAgIGNvbnN0IGdldFRvZG8gPSAoaWQpID0+IF90b2RvSXRlbXNbaWRdO1xuXG4gICAgcmV0dXJuIHtnZXRUaXRsZSwgZ2V0RHVlRGF0ZSwgYWRkVG9kbywgZ2V0QWxsVG9kb3MsIGdldFRvZG99O1xufVxuXG5leHBvcnQgY29uc3QgdHJhY2tQcm9qZWN0cyA9ICgoKSA9PiB7XG4gICAgY29uc3QgYWxsVG9kb3MgPSBwcm9qZWN0SXRlbSgnQWxsIFByb2plY3RzJywgbnVsbCk7XG4gICAgY29uc3QgX3Byb2plY3RzID0gW2FsbFRvZG9zXTtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKG5ld1Byb2plY3QpID0+IHtcbiAgICAgICAgX3Byb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgfVxuICAgIGNvbnN0IGdldFByb2plY3QgPSAoaWQpID0+IF9wcm9qZWN0c1tpZF07XG4gICAgY29uc3QgZ2V0UHJvamVjdEJ5TmFtZSA9ICh0ZW1wTmFtZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9wcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKF9wcm9qZWN0c1tpXS5nZXRUaXRsZSA9PT0gdGVtcE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3Byb2plY3RzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBnZXRBbGxQcm9qZWN0cyA9ICgpID0+IF9wcm9qZWN0cztcblxuICAgIHJldHVybiB7YWRkUHJvamVjdCwgZ2V0UHJvamVjdCwgZ2V0UHJvamVjdEJ5TmFtZSwgZ2V0QWxsUHJvamVjdHN9O1xufSkoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5pbXBvcnQgeyBjcmVhdGVQb3BVcCwgY2xvc2VQb3BVcCwgcmVmcmVzaFByb2plY3RzLCBjcmVhdGVUb2RvUG9wVXAsIHVwZGF0ZUNvbnRlbnRDb250YWluZXIgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgeyBwcm9qZWN0SXRlbSwgdG9Eb0l0ZW0sIHRyYWNrQWN0aXZlUHJvamVjdCwgdHJhY2tQcm9qZWN0cyB9IGZyb20gXCIuL29iamVjdHNcIjtcblxuY29uc3QgaW5pdGlhbGl6ZVRvZG9Qb3B1cEJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdEJ0bicpO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWxCdG4nKTtcbiAgICBjb25zdCB0b2RvTmFtZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9OYW1lJyk7XG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Rlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgdG9kb0R1ZURhdGVGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRHVlRGF0ZScpOyBcbiAgICBjb25zdCB0b2RvTm90ZXNGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTm90ZXMnKTtcblxuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcFRvZG8gPSB0b0RvSXRlbSh0b2RvTmFtZUZpZWxkLnZhbHVlLCB0b2RvRGVzY3JpcHRpb25GaWVsZC52YWx1ZSwgdG9kb0R1ZURhdGVGaWVsZC52YWx1ZSwgMSwgdG9kb05vdGVzRmllbGQudmFsdWUpO1xuICAgICAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gdHJhY2tQcm9qZWN0cy5nZXRQcm9qZWN0KHRyYWNrQWN0aXZlUHJvamVjdC5nZXRBY3RpdmVQcm9qZWN0KCkpO1xuICAgICAgICBjb25zdCBhbGxQcm9qZWN0cyA9IHRyYWNrUHJvamVjdHMuZ2V0UHJvamVjdCgwKTtcbiAgICAgICAgYWxsUHJvamVjdHMuYWRkVG9kbyh0ZW1wVG9kbyk7XG4gICAgICAgIGlmIChhY3RpdmVQcm9qZWN0ICE9PSBhbGxQcm9qZWN0cykge1xuICAgICAgICAgICAgYWN0aXZlUHJvamVjdC5hZGRUb2RvKHRlbXBUb2RvKTtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVDb250ZW50Q29udGFpbmVyKGFjdGl2ZVByb2plY3QpO1xuICAgICAgICBjbG9zZVBvcFVwKCk7XG5cblxuICAgIH0pO1xuXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbG9zZVBvcFVwKCk7XG4gICAgfSk7XG5cbn1cblxuY29uc3QgaW5pdGlhbGl6ZVBvcFVwQnV0dG9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0QnRuJyk7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbEJ0bicpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWUnKTtcbiAgICBjb25zdCBwcm9qZWN0RHVlRGF0ZUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3REdWVEYXRlJyk7IFxuXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wSXRlbSA9IHByb2plY3RJdGVtKHByb2plY3ROYW1lRmllbGQudmFsdWUsIHByb2plY3REdWVEYXRlRmllbGQudmFsdWUpO1xuICAgICAgICBcbiAgICAgICAgdHJhY2tQcm9qZWN0cy5hZGRQcm9qZWN0KHRlbXBJdGVtKTtcbiAgICAgICAgY2xvc2VQb3BVcCgpO1xuICAgICAgICByZWZyZXNoUHJvamVjdHModHJhY2tQcm9qZWN0cy5nZXRBbGxQcm9qZWN0cygpKTtcbiAgICAgICAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdFRpbGUnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpbGUgPSBhbGxQcm9qZWN0c1tpXTtcbiAgICAgICAgICAgIHByb2plY3RUaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyYWNrQWN0aXZlUHJvamVjdC5zZXRBY3RpdmVQcm9qZWN0KGkpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNvbnRlbnRDb250YWluZXIodHJhY2tQcm9qZWN0cy5nZXRQcm9qZWN0KGkpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0cmFja1Byb2plY3RzLmdldFByb2plY3QoaSkuZ2V0VGl0bGUoKSk7XG4gICAgICAgICAgICAgICAgYWxsUHJvamVjdHMuZm9yRWFjaCgodGVtcFByb2opID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcFByb2ouY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGlsZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xvc2VQb3BVcCgpO1xuICAgIH0pO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Byb2plY3RCdG4nKTtcbiAgICByZWZyZXNoUHJvamVjdHModHJhY2tQcm9qZWN0cy5nZXRBbGxQcm9qZWN0cygpKTtcbiAgICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjcmVhdGVQb3BVcCgpO1xuICAgICAgICBpbml0aWFsaXplUG9wVXBCdXR0b25zKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBuZXdUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1RvZG9CdG4nKTtcbiAgICBuZXdUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjcmVhdGVUb2RvUG9wVXAoKTtcbiAgICAgICAgaW5pdGlhbGl6ZVRvZG9Qb3B1cEJ1dHRvbnMoKTtcbiAgICB9KTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=