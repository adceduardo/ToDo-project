import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';

import './global.css';
import { useState } from 'react';

export function App() {
  const [tasks, setTasks] = useState([]);

  function createNewTask(task) {
    if (task.title != '') {
      setTasks([...tasks, task]);
    }
  }

  function completeTask(index) {
    var aux = [...tasks];
    aux[index] = { ...aux[index], isComplete: !aux[index].isComplete };
    setTasks(aux);
  }

  function deleteTask(index) {
    const aux = tasks.filter((task, i) => i != index);
    setTasks(aux);
  }

  return (
    <>
      <Header tasks={tasks} createNewTask={createNewTask} />
      <Content
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </>
  );
}
