import './App.css';
import TaskForm from './components/TaskForm/TaskForm';
import Task from './components/Task/Task';
import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

function App() {
  //LIFTING THE STATE UP
  const [allTasks, setAllTasks] = useState(() => {
    //
    const saved = localStorage.getItem('allTasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('allTasks', JSON.stringify(allTasks));
  }, [allTasks]);

  function addTask(name) {
    setAllTasks((a) => [...a, { name: name, done: false }]);
  }
  function updateTaskDone(indexTask, newDone) {
    setAllTasks((prev) => {
      const newTask = [...prev];
      newTask[indexTask].done = newDone;
      return newTask;
    });
  }

  const completeNumber = allTasks.filter((a) => a.done).length;
  const totalNumber = allTasks.length;

  useEffect(() => {
    if (allTasks.length > 0 && completeNumber === totalNumber) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [completeNumber, totalNumber, allTasks.length]);

  function removeTask(indexToRemove) {
    setAllTasks((prev) => prev.filter((_, index) => index !== indexToRemove));
  }

  function renameTask(index, newName) {
    setAllTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    });
  }
  function clearAllTasks() {
    const confirmed = window.confirm('You want to clear all the Tasks?');
    if (confirmed) {
      setAllTasks([]);
    }
  }
  return (
    <main className="main-component">
      <TaskForm onAdd={addTask} />

      {allTasks.map((allTask, index) => (
        <Task
          //spread props (name={allTask.name}, done={allTask.done})
          // {...allTask}
          key={index}
          name={allTask.name}
          done={allTask.done}
          onDelete={() => removeTask(index)}
          onToggle={(done) => updateTaskDone(index, done)}
          onRename={(newName) => renameTask(index, newName)}
        />
      ))}

      {allTasks.length > 0 && (
        <button className="btn-clear" onClick={clearAllTasks}>
          Clear All Tasks
        </button>
      )}

      <h3 className="myH3">
        {allTasks.length > 0 && completeNumber === totalNumber && (
          <h1 className="congrats-msg">🎉 Congrats! All tasks done! 🎉</h1>
        )}
        {completeNumber}/{totalNumber} Complete
      </h3>
    </main>
  );
}

export default App;
