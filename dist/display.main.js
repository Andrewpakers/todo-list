/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5tYWluLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZ0JBQWdCO0FBQzFEO0FBQ0E7QUFDQSxzREFBc0Qsc0JBQXNCO0FBQzVFO0FBQ0E7QUFDQSwrQ0FBK0Msa0JBQWtCO0FBQ2pFO0FBQ0E7QUFDQSwwQ0FBMEMsZ0JBQWdCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR087QUFDUDtBQUNBOztBQUVBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuXG5cbi8vIGluaXRpYWxpemUgcGFnZVxuXG4vLyBpbml0aWFsaXplIG5hdmJhclxuY29uc3QgbmF2YmFySW5pdCA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gaW5pdCBob21lIGJ1dHRvblxuICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnbmF2YmFySXRlbScpO1xuICAgIGhvbWVCdG4udGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICAgIC8vIGluaXQgbmV3IHRvZG8gYnV0dG9uXG4gICAgY29uc3QgbmV3VG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1RvZG9CdG4uY2xhc3NMaXN0LmFkZCgnbmF2YmFySXRlbScpO1xuICAgIG5ld1RvZG9CdG4uY2xhc3NMaXN0LmFkZCgnbmV3VG9kb0J0bicpOyAgICBcbiAgICBuZXdUb2RvQnRuLnRleHRDb250ZW50ID0gJ05ldyBUb2RvJztcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobmV3VG9kb0J0bik7XG4gICAgLy8gaW5pdCBuZXcgcHJvamVjdCBidXR0b25cbiAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3UHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCduYXZiYXJJdGVtJyk7XG4gICAgbmV3UHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCduZXdQcm9qZWN0QnRuJyk7ICAgIFxuICAgIG5ld1Byb2plY3RCdG4udGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xuICAgIG5hdmJhci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnRuKTtcbiAgICAvLyBpbml0IHByb2plY3RzIHRpdGxlXG4gICAgY29uc3QgcHJvamVjdHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzVGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICAgIHByb2plY3RzVGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNUaXRsZScpO1xuICAgIHByb2plY3RzVGl0bGUuY2xhc3NMaXN0LmFkZCgnbmF2YmFySXRlbScpO1xuICAgIG5hdmJhci5hcHBlbmRDaGlsZChwcm9qZWN0c1RpdGxlKTtcbiAgICAvLyBpbml0IHByb2plY3RzIGNvbnRhaW5lclxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNDb250YWluZXInKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduYXZiYXJJdGVtJyk7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKHByb2plY3RzQ29udGFpbmVyKTtcblxuXG4gICAgLy8gZGlzcGxheSBuYXZiYXJcbiAgICBib2R5LmFwcGVuZENoaWxkKG5hdmJhcik7XG59O1xuXG4gICAgLy8gaXRlcmF0ZSBwcm9qZWN0cyAmIGFkZCB0byBwcm9qZWN0cyBjb250YWluZXJcbmV4cG9ydCBjb25zdCByZWZyZXNoUHJvamVjdHMgPSAocHJvamVjdHMpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c0NvbnRhaW5lcicpO1xuXG4gICAgLy8gcmVtb3ZlIGV4aXN0aW5nIHByb2plY3RzIGRpc3BsYXlzXG4gICAgY29uc3QgY3VycmVudFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RUaWxlJyk7XG4gICAgY3VycmVudFByb2plY3RzLmZvckVhY2goKHRlbXBQcm9qZWN0KSA9PiB7XG4gICAgICAgIHRlbXBQcm9qZWN0LnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gaXRlcmF0ZSBhbmQgZGlzcGxheSB1cGRhdGVkIHByb2plY3RzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0VGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdQcm9qZWN0VGlsZS50ZXh0Q29udGVudCA9IHByb2plY3RzW2ldLmdldFRpdGxlKCk7XG4gICAgICAgIG5ld1Byb2plY3RUaWxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RUaWxlJyk7XG4gICAgICAgIG5ld1Byb2plY3RUaWxlLmNsYXNzTGlzdC5hZGQoJ25hdmJhckl0ZW0nKTtcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFRpbGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvcFVwID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgcG9wdXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cERpdi5jbGFzc0xpc3QuYWRkKCdwb3B1cCcpO1xuICAgIC8vIFByb2plY3QgTmFtZVxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdE5hbWUnKTtcbiAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgcHJvamVjdE5hbWUuaWQgPSAncHJvamVjdE5hbWUnO1xuICAgIGNvbnN0IHByb2plY3ROYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByb2plY3ROYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdCBOYW1lOic7XG4gICAgcHJvamVjdE5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0TmFtZScpO1xuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lTGFiZWwpO1xuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICAvLyBQcm9qZWN0IER1ZSBEYXRlXG4gICAgY29uc3QgcHJvamVjdER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3REdWVEYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcm9qZWN0RHVlRGF0ZScpO1xuICAgIHByb2plY3REdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJylcbiAgICBwcm9qZWN0RHVlRGF0ZS5pZCA9ICdwcm9qZWN0RHVlRGF0ZSc7XG4gICAgY29uc3QgcHJvamVjdER1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJvamVjdER1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZTonO1xuICAgIHByb2plY3REdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJvamVjdE5hbWUnKTtcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RHVlRGF0ZUxhYmVsKTtcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RHVlRGF0ZSk7XG4gICAgLy8gQnV0dG9uc1xuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdEJ0bicpO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbEJ0bicpO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQocG9wdXBEaXYpO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlVG9kb1BvcFVwID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgcG9wdXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cERpdi5jbGFzc0xpc3QuYWRkKCdwb3B1cCcpO1xuICAgIC8vIFRvZG8gTmFtZVxuICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvTmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndG9kb05hbWUnKTtcbiAgICB0b2RvTmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgdG9kb05hbWUuaWQgPSAndG9kb05hbWUnO1xuICAgIGNvbnN0IHRvZG9OYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRvZG9OYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnVG9kbyBOYW1lOic7XG4gICAgdG9kb05hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b2RvTmFtZScpO1xuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKHRvZG9OYW1lTGFiZWwpO1xuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKHRvZG9OYW1lKTtcbiAgICAvLyBUb2RvIGRlc2NyaXB0aW9uXG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCduYW1lJywgJ3RvZG9EZXNjcmlwdGlvbicpO1xuICAgIHRvZG9EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgdG9kb0Rlc2NyaXB0aW9uLmlkID0gJ3RvZG9EZXNjcmlwdGlvbic7XG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRvZG9EZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ1RvZG8gRGVzY3JpcHRpb246JztcbiAgICB0b2RvRGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b2RvRGVzY3JpcHRpb24nKTtcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb25MYWJlbCk7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQodG9kb0Rlc2NyaXB0aW9uKTtcbiAgICAvLyBUb2RvIER1ZSBEYXRlXG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9EdWVEYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0b2RvRHVlRGF0ZScpO1xuICAgIHRvZG9EdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJylcbiAgICB0b2RvRHVlRGF0ZS5pZCA9ICd0b2RvRHVlRGF0ZSc7XG4gICAgY29uc3QgdG9kb0R1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdG9kb0R1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZTonO1xuICAgIHRvZG9EdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndG9kb05hbWUnKTtcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZUxhYmVsKTtcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZSk7XG4gICAgLy8gVG9kbyBub3Rlc1xuICAgIGNvbnN0IHRvZG9Ob3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb05vdGVzLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0b2RvTm90ZXMnKTtcbiAgICB0b2RvTm90ZXMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIHRvZG9Ob3Rlcy5pZCA9ICd0b2RvTm90ZXMnO1xuICAgIGNvbnN0IHRvZG9Ob3Rlc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0b2RvTm90ZXNMYWJlbC50ZXh0Q29udGVudCA9ICdUb2RvIE5vdGVzOic7XG4gICAgdG9kb05vdGVzTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndG9kb05vdGVzJyk7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQodG9kb05vdGVzTGFiZWwpO1xuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKHRvZG9Ob3Rlcyk7XG4gICAgLy8gQnV0dG9uc1xuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdEJ0bicpO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbEJ0bicpO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQocG9wdXBEaXYpO1xufVxuXG5leHBvcnQgY29uc3QgY2xvc2VQb3BVcCA9ICgpID0+IHtcbiAgICBjb25zdCBwb3B1cERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpO1xuICAgIHBvcHVwRGl2LnJlbW92ZSgpO1xufVxuXG5jb25zdCBjb250ZW50Q29udGFpbmVySW5pdCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250ZW50Q29udGFpbmVyJyk7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlQ29udGVudENvbnRhaW5lciA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Q29udGFpbmVyJyk7XG4gICAgLy8gZGVsZXRlIGN1cnJlbnQgdG9kbyBpdGVtc1xuICAgIGNvbnN0IGFsbFRvZG9JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvSXRlbScpO1xuICAgIGFsbFRvZG9JdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0ucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgY29uc3QgYWxsVG9kb3MgPSBwcm9qZWN0LmdldEFsbFRvZG9zKCk7XG4gICAgYWxsVG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZCgndG9kb0l0ZW0nKTtcbiAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSBgVGl0bGU6ICR7dG9kby5nZXRUaXRsZSgpfWA7XG4gICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgICAgICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgRGVzY3JpcHRpb246ICR7dG9kby5nZXREZXNjcmlwdGlvbigpfWA7XG4gICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRvZG9EdWVEYXRlLnRleHRDb250ZW50ID0gYER1ZSBEYXRlOiAke3RvZG8uZ2V0RHVlRGF0ZSgpfWA7XG4gICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGUpO1xuICAgICAgICBjb25zdCB0b2RvTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRvZG9Ob3Rlcy50ZXh0Q29udGVudCA9IGBOb3RlczogJHt0b2RvLmdldE5vdGVzKCl9YDtcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvTm90ZXMpO1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EaXYpO1xuICAgICAgICAvLyBBZGQgY2hlY2tsaXN0IGxhdGVyXG4gICAgfSk7XG59XG5cblxuZXhwb3J0IGNvbnN0IHBhZ2VJbml0ID0gKCkgPT4ge1xuICAgIG5hdmJhckluaXQoKTtcbiAgICBjb250ZW50Q29udGFpbmVySW5pdCgpO1xuXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==