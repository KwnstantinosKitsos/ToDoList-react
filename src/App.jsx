import './App.css';
import TaskForm from './TaskForm';
import Task from './Task';
import { useState } from 'react';

function App() {
  //LIFTING THE STATE UP
  const [allTasks, setAllTasks] = useState([]);
  function addTask(name) {
    setAllTasks((a) => [...a, { name: name, done: false }]);
  }
  return (
    <main className="main-component">
      <TaskForm onAdd={addTask} />
      {allTasks.map((allTask) => (
        <Task {...allTask} />
      ))}
    </main>
  );
}

export default App;
