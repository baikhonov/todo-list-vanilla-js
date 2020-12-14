import { nanoid } from './vendor/nanoid.js';

import TaskModel from './models/task-model.js';
import TaskPresenter from './presenters/task-presenter.js';

const mainElement = document.querySelector(`.main`);
const newTaskElement = mainElement.querySelector(`.new-task`);
const addTaskButtonElement = mainElement.querySelector(`.add-task-button`);
const clearTaskButtonElement = mainElement.querySelector(`.clear-task-button`);
const tasksListElement = mainElement.querySelector(`.tasks`);

const taskModel = new TaskModel([
  {
    id: nanoid(),
    title: `Вынести мусор`,
    isDone: false,
  },
  {
    id: nanoid(),
    title: `Защитить интенсив на соточку`,
    isDone: true,
  }
]);

const taskPresenter = new TaskPresenter(tasksListElement, taskModel);

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
