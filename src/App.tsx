import { Header } from './components/Header/Header'
import { Content } from './components/Content/Content'

import './global.css'
import { useState } from 'react';

export function App() {
  const [ tasks, setTasks ] = useState([]);
  
  function createNewTask(task){
    setTasks([...tasks, 
      task
    ])
  }

  function completeTask(index) {
    var aux = [...tasks]; 
    console.log(index);
    aux[index] = { ...aux[index], isComplete: !aux[index].isComplete}; 
    setTasks(aux); 
  }

  return (
    <>
      <Header tasks={tasks} createNewTask={createNewTask}/>
      <Content tasks={tasks} completeTask={completeTask}/>
    </>
  )
}


