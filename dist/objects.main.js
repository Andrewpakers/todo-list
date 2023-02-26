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
  !*** ./src/objects.js ***!
  \************************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0cy5tYWluLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvb2JqZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuZXhwb3J0IGNvbnN0IHRvRG9JdGVtID0gKHRlbXBUaXRsZSwgdGVtcERlc2NyaXB0aW9uLCB0ZW1wRHVlRGF0ZSwgdGVtcFByaW9yaXR5ID0gMSwgdGVtcE5vdGVzID0gJycsIHRlbXBDaGVja2xpc3QgPSBbXSkgPT4ge1xuICAgIC8vIGluaXRpYWxpemUgdmFyaWFibGVzXG4gICAgbGV0IF90aXRsZSA9IHRlbXBUaXRsZTtcbiAgICBsZXQgX2Rlc2NyaXB0aW9uID0gdGVtcERlc2NyaXB0aW9uO1xuICAgIGxldCBfZHVlRGF0ZSA9IHRlbXBEdWVEYXRlO1xuICAgIGxldCBfcHJpb3JpdHkgPSB0ZW1wUHJpb3JpdHk7XG4gICAgbGV0IF9ub3RlcyA9IHRlbXBOb3RlcztcbiAgICBsZXQgX2NoZWNrbGlzdCA9IHRlbXBDaGVja2xpc3Q7XG5cbiAgICAvLyByZXR1cm4gZnVuY3Rpb25zXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiBfdGl0bGU7XG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBfZGVzY3JpcHRpb247XG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IF9kdWVEYXRlO1xuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gX3ByaW9yaXR5O1xuICAgIGNvbnN0IGdldE5vdGVzID0gKCkgPT4gX25vdGVzO1xuICAgIGNvbnN0IGdldENoZWNrbGlzdCA9ICgpID0+IF9jaGVja2xpc3Q7XG5cbiAgICAvLyBjaGFuZ2UgZnVuY3Rpb25zXG4gICAgY29uc3QgY2hhbmdlVGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICAgICAgX3RpdGxlID0gbmV3VGl0bGU7XG4gICAgfVxuICAgIGNvbnN0IGNoYW5nZURlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIF9kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBjb25zdCBjaGFuZ2VEYXRlID0gKG5ld0RhdGUpID0+IHtcbiAgICAgICAgX2R1ZURhdGUgPSBuZXdEYXRlO1xuICAgIH1cbiAgICBjb25zdCBjaGFuZ2VQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4ge1xuICAgICAgICBfcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICB9XG4gICAgY29uc3QgY2hhbmdlTm90ZXMgPSAobmV3Tm90ZXMpID0+IHtcbiAgICAgICAgX25vdGVzID0gbmV3Tm90ZXM7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2tsaXN0IGZ1bmN0aW9uc1xuICAgIGNvbnN0IGFkZFRvQ2hlY2tsaXN0ID0gKGNoZWNrbGlzdFN0cikgPT4ge1xuICAgICAgICBfY2hlY2tsaXN0LnB1c2goY2hlY2tsaXN0U3RyKTtcbiAgICB9XG4gICAgY29uc3Qgc3RyaWtlQ2hlY2tsaXN0ID0gKGNoZWNrbGlzdElEKSA9PiB7XG4gICAgICAgIF9jaGVja2xpc3RbY2hlY2tsaXN0SURdID0gX2NoZWNrbGlzdFtjaGVja2xpc3RJRF0uc3RyaWtlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtjaGFuZ2VUaXRsZSwgY2hhbmdlRGVzY3JpcHRpb24sIGNoYW5nZURhdGUsIGNoYW5nZVByaW9yaXR5LCBjaGFuZ2VOb3RlcywgYWRkVG9DaGVja2xpc3QsIHN0cmlrZUNoZWNrbGlzdCwgZ2V0VGl0bGUsIGdldFByaW9yaXR5LCBnZXROb3RlcywgZ2V0RHVlRGF0ZSwgZ2V0RGVzY3JpcHRpb24sIGdldENoZWNrbGlzdH07XG59XG5leHBvcnQgY29uc3QgdHJhY2tBY3RpdmVQcm9qZWN0ID0gKCgpID0+IHtcbiAgICBsZXQgX2FjdGl2ZVByb2plY3QgPSAwO1xuICAgIGNvbnN0IHNldEFjdGl2ZVByb2plY3QgPSAoaWQpID0+IHtcbiAgICAgICAgX2FjdGl2ZVByb2plY3QgPSBpZDtcbiAgICB9XG4gICAgY29uc3QgZ2V0QWN0aXZlUHJvamVjdCA9ICgpID0+IF9hY3RpdmVQcm9qZWN0O1xuXG4gICAgcmV0dXJuIHtzZXRBY3RpdmVQcm9qZWN0LCBnZXRBY3RpdmVQcm9qZWN0fTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0SXRlbSA9ICh0ZW1wVGl0bGUsIHRlbXBEdWVEYXRlKSA9PiB7XG4gICAgY29uc3QgX3RpdGxlID0gdGVtcFRpdGxlO1xuICAgIGNvbnN0IF9kdWVEYXRlID0gdGVtcER1ZURhdGU7XG4gICAgY29uc3QgX3RvZG9JdGVtcyA9IFtdO1xuXG4gICAgLy8gcmV0dXJuIGZ1bmN0aW9uc1xuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gX3RpdGxlO1xuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBfZHVlRGF0ZTtcbiAgICBjb25zdCBhZGRUb2RvID0gKHRvZG9JdGVtKSA9PiB7XG4gICAgICAgIF90b2RvSXRlbXMucHVzaCh0b2RvSXRlbSk7XG4gICAgfVxuICAgIGNvbnN0IGdldEFsbFRvZG9zID0gKCkgPT4gX3RvZG9JdGVtcztcbiAgICBjb25zdCBnZXRUb2RvID0gKGlkKSA9PiBfdG9kb0l0ZW1zW2lkXTtcblxuICAgIHJldHVybiB7Z2V0VGl0bGUsIGdldER1ZURhdGUsIGFkZFRvZG8sIGdldEFsbFRvZG9zLCBnZXRUb2RvfTtcbn1cblxuZXhwb3J0IGNvbnN0IHRyYWNrUHJvamVjdHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFsbFRvZG9zID0gcHJvamVjdEl0ZW0oJ0FsbCBQcm9qZWN0cycsIG51bGwpO1xuICAgIGNvbnN0IF9wcm9qZWN0cyA9IFthbGxUb2Rvc107XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChuZXdQcm9qZWN0KSA9PiB7XG4gICAgICAgIF9wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIH1cbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKGlkKSA9PiBfcHJvamVjdHNbaWRdO1xuICAgIGNvbnN0IGdldFByb2plY3RCeU5hbWUgPSAodGVtcE5hbWUpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChfcHJvamVjdHNbaV0uZ2V0VGl0bGUgPT09IHRlbXBOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9wcm9qZWN0c1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgZ2V0QWxsUHJvamVjdHMgPSAoKSA9PiBfcHJvamVjdHM7XG5cbiAgICByZXR1cm4ge2FkZFByb2plY3QsIGdldFByb2plY3QsIGdldFByb2plY3RCeU5hbWUsIGdldEFsbFByb2plY3RzfTtcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9