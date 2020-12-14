import { nanoid } from '../vendor/nanoid.js';

class TaskModel {
  constructor(initialTasks = []) {
    this._tasks = [...initialTasks];
  };

  add(title) {
    this._tasks.push({
      id: nanoid(),
      title,
      isDone: false,
    });
  };

  clear() {
    this._tasks = [];
  };

  complete(id) {
    const existTask = this._tasks.find((task) => task.id === id);
    existTask.isDone = !existTask.isDone;
  };

  getItems() {
    return this._tasks;
  };
}

export default TaskModel;