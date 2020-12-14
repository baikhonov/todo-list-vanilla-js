const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstElementChild;
};

const TaskView = function (task) {
  this._element = null;
  this._callback = {};
  this._task = task;
};

TaskView.prototype.getTemplate = function () {
  const {id, title, isDone} = this._task;
  return `
      <li class="task ${isDone ? `task--complete` : ``}">
        <label for="${id}">${title}
          <input id="${id}" type="checkbox" ${isDone ? `checked` : ``} />
        </label>
      </li>`;
};

TaskView.prototype.getElement = function () {
  if (!this._element) {
    this._element = createElement(this.getTemplate());
  }

  return this._element;
};

TaskView.prototype.removeElement = function () {
  const taskElement = this.getElement();

  taskElement.querySelector(`input`)
    .removeEventListener(`click`, this._callback.completeButtonClick);

  this._element = null;
  this._callback = {};
};

TaskView.prototype.bindListeners = function (completeButtonHandler) {
  const taskElement = this.getElement();
  taskElement.querySelector(`input`)
    .addEventListener(`click`, completeButtonHandler);

  this._callback.completeButtonClick = completeButtonHandler;
};

export default TaskView;
