import './App.css';
import TaskForm from './TaskForm';
import Task from './Task';
import { useEffect, useState } from 'react';

function App() {
  //LIFTING THE STATE UP
  const [allTasks, setAllTasks] = useState(() => {
    //
    const saved = localStorage.getItem('allTasks');
    return saved ? JSON.parse(saved) : [];
  });
  function addTask(name) {
    setAllTasks((a) => [...a, { name: name, done: false }]);
  }
  useEffect(() => {
    localStorage.setItem('allTasks', JSON.stringify(allTasks));
  }, [allTasks]);

  return (
    <main className="main-component">
      <TaskForm onAdd={addTask} />
      {allTasks.map((allTask) => (
        //spread ops (name={allTask.name}, done={allTask.done})
        <Task {...allTask} />
      ))}
    </main>
  );
}

export default App;
