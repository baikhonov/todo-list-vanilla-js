import model from './models/task-model.js';
import presenter from './presenters/task-presenter.js';

const mainElement = document.querySelector(`.main`);
const newTaskElement = mainElement.querySelector(`.new-task`);
const addTaskButtonElement = mainElement.querySelector(`.add-task-button`);
const clearTaskButtonElement = mainElement.querySelector(`.clear-task-button`);
const tasksListElement = mainElement.querySelector(`.tasks`);

const taskPresenter = presenter()(tasksListElement, model()());

const addTaskButtonHandler = (evt) => {
    evt.preventDefault();
    const { value: newTaskTitle } = newTaskElement;

    newTaskElement.value = ``;
    newTaskElement.focus();

    taskPresenter.addTask(newTaskTitle);
};

const clearTaskButtonHandler = () => {
    taskPresenter.clearTasks();
};

addTaskButtonElement.addEventListener(`click`, addTaskButtonHandler);
clearTaskButtonElement.addEventListener(`click`, clearTaskButtonHandler);


taskPresenter.render();