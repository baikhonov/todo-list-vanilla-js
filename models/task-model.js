import { nanoid } from '../vendor/nanoid.js';

export default () => () => {

    let tasks = [
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
    ];
  
    const add = (title) => (tasks.push({
      id: nanoid(),
      title,
      isDone: false,
    }));
  
    const clear = () => (tasks = []);
  
    const complete = (id) => {
      const existTask = tasks.find((task) => task.id === id);
      existTask.isDone = !existTask.isDone;
    };
  
    const getItems = () => tasks;
  
    return {
      add,
      clear,
      complete,
      getItems,
    };
  };