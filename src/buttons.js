/* eslint-disable no-plusplus */
import { createPopUp, closePopUp, refreshProjects, createTodoPopUp, updateContentContainer } from "./display";
import { projectItem, toDoItem, trackActiveProject, trackProjects } from "./objects";

export function storageAvailable(type) {
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
    const allProjects = trackProjects.getAllProjects();
    const allProjectsObjects = [];
    for (let i = 0; i < allProjects.length; i++) {
        // iterate and objectify todolist
        const todoArray = [];
        for (let j = 0; j < trackProjects.getProject(i).getAllTodos().length; j++) {
            const todoObject = {
                title: trackProjects.getProject(i).getTodo(j).getTitle(),
                description: trackProjects.getProject(i).getTodo(j).getDescription(),
                dueDate: trackProjects.getProject(i).getTodo(j).getDueDate(),
                priority: trackProjects.getProject(i).getTodo(j).getPriority(),
                notes: trackProjects.getProject(i).getTodo(j).getPriority(),
                checklist: trackProjects.getProject(i).getTodo(j).getChecklist()
            }
            todoArray.push(todoObject);
        }

        const projectObject = {
            title: trackProjects.getProject(i).getTitle(),
            dueDate: trackProjects.getProject(i).getDueDate(),
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
        const tempTodo = toDoItem(todoNameField.value, todoDescriptionField.value, todoDueDateField.value, 1, todoNotesField.value);
        const activeProject = trackProjects.getProject(trackActiveProject.getActiveProject());
        const allProjects = trackProjects.getProject(0);
        allProjects.addTodo(tempTodo);
        if (activeProject !== allProjects) {
            activeProject.addTodo(tempTodo);
        }
        updateContentContainer(activeProject);
        closePopUp();

        // Store in localStorage
        if (storageAvailable('localStorage')) {
            storeData();
        }

    });

    cancelBtn.addEventListener('click', () => {
        closePopUp();
    });

}

const initializePopUpButtons = () => {
    const submitBtn = document.querySelector('.submitBtn');
    const cancelBtn = document.querySelector('.cancelBtn');
    const projectNameField = document.getElementById('projectName');
    const projectDueDateField = document.getElementById('projectDueDate'); 

    submitBtn.addEventListener('click', () => {
        const tempItem = projectItem(projectNameField.value, projectDueDateField.value);
        
        trackProjects.addProject(tempItem);
        closePopUp();
        refreshProjects(trackProjects.getAllProjects());
        const allProjects = document.querySelectorAll('.projectTile');
        for (let i = 0; i < allProjects.length; i++) {
            const projectTile = allProjects[i];
            projectTile.addEventListener('click', () => {
                trackActiveProject.setActiveProject(i);
                updateContentContainer(trackProjects.getProject(i));
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
        closePopUp();
    });
}


export default () => {
    // Initialize the local storage

    const newProjectBtn = document.querySelector('.newProjectBtn');
    refreshProjects(trackProjects.getAllProjects());
    newProjectBtn.addEventListener('click', () => {
        createPopUp();
        initializePopUpButtons();
    });

    const newTodoBtn = document.querySelector('.newTodoBtn');
    newTodoBtn.addEventListener('click', () => {
        createTodoPopUp();
        initializeTodoPopupButtons();
    });
    refreshProjects(trackProjects.getAllProjects());
    const allProjects = document.querySelectorAll('.projectTile');
    allProjects[0].classList.add('selected');
    for (let i = 0; i < allProjects.length; i++) {
        const projectTile = allProjects[i];
        updateContentContainer(trackProjects.getProject(0));
        projectTile.addEventListener('click', () => {
            trackActiveProject.setActiveProject(i);
            updateContentContainer(trackProjects.getProject(i));
            allProjects.forEach((tempProj) => {
                tempProj.classList.remove('selected');
            });
            projectTile.classList.add('selected');
        });
    }

}