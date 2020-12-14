import TaskView from '../views/task-view.js';

const TaskPresenter = function (element, model) {
  this._element = element;
  this._model = model;
};

TaskPresenter.prototype.render = function () {
  const newFragment = document.createDocumentFragment();
  this._element.innerHTML = ``;

  this._model.getItems().forEach((task) => {

    const taskView = new TaskView(task);
    const newElement = taskView.getElement();
    taskView.bindListeners(({ target }) => {
      this._model.complete(target.id);
      taskView.removeElement();
      this.render();
    });

    newFragment.appendChild(newElement);
  });

  this._element.appendChild(newFragment);
};

TaskPresenter.prototype.addTask = function (title) {
  if (title.trim() === ``) {
    return;
  }

  this._model.add(title);
  this.render();
};

TaskPresenter.prototype.clearTasks = function () {
  this._model.clear();
  this.render();
};

export default TaskPresenter;
