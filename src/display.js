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
export const refreshProjects = (projects) => {
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

export const createPopUp = () => {
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

export const createTodoPopUp = () => {
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

export const closePopUp = () => {
    const popupDiv = document.querySelector('.popup');
    popupDiv.remove();
}

const contentContainerInit = () => {
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('contentContainer');
    const body = document.querySelector('body');
    body.appendChild(contentContainer);
}

export const updateContentContainer = (project) => {
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


export const pageInit = () => {
    navbarInit();
    contentContainerInit();

};