/* eslint-disable no-plusplus */
import { createPopUp, closePopUp, refreshProjects, createTodoPopUp, updateContentContainer } from "./display";
import { projectItem, toDoItem, trackActiveProject, trackProjects } from "./objects";

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
                console.log(trackProjects.getProject(i).getTitle());
                allProjects.forEach((tempProj) => {
                    tempProj.classList.remove('selected');
                });
                projectTile.classList.add('selected');
            });
        }
    });

    cancelBtn.addEventListener('click', () => {
        closePopUp();
    });

}

export default () => {
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
}