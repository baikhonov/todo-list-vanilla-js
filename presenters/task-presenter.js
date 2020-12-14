import TaskView from '../views/task-view.js';

 class TaskPresenter {
  constructor (element, model) {
    this._element = element;
    this._model = model;
  };

  render() {
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

  addTask(title) {
    if (title.trim() === ``) {
      return;
    }

    this._model.add(title);
    this.render();
  };

  clearTasks() {
    this._model.clear();
    this.render();
  };
}

export default TaskPresenter;
