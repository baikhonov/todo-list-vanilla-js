const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstElementChild;
};

class TaskView {
  constructor(task) {
    this._element = null;
    this._callback = {};
    this._task = task;
  };

  getTemplate() {
    const { id, title, isDone } = this._task;
    return `
        <li class="task ${isDone ? `task--complete` : ``}">
          <label for="${id}">${title}
            <input id="${id}" type="checkbox" ${isDone ? `checked` : ``} />
          </label>
        </li>`;
  };

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  };

  removeElement() {
    const taskElement = this.getElement();

    taskElement.querySelector(`input`)
      .removeEventListener(`click`, this._callback.completeButtonClick);

    this._element = null;
    this._callback = {};
  };

  bindListeners(completeButtonHandler) {
    const taskElement = this.getElement();
    taskElement.querySelector(`input`)
      .addEventListener(`click`, completeButtonHandler);

    this._callback.completeButtonClick = completeButtonHandler;
  };
}

export default TaskView;