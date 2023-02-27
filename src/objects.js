/* eslint-disable no-plusplus */

import { storageAvailable } from "./buttons";

/* eslint-disable no-underscore-dangle */
export const toDoItem = (tempTitle, tempDescription, tempDueDate, tempPriority = 1, tempNotes = '', tempChecklist = []) => {
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
export const trackActiveProject = (() => {
    let _activeProject = 0;
    const setActiveProject = (id) => {
        _activeProject = id;
    }
    const getActiveProject = () => _activeProject;

    return {setActiveProject, getActiveProject};
})();

export const projectItem = (tempTitle, tempDueDate) => {
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

export const trackProjects = (() => {
    const _projects = [];
    if (storageAvailable('localStorage')) {
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