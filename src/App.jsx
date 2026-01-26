import './App.css';
import TaskForm from './components/TaskForm/TaskForm';
import Task from './components/Task/Task';
import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

function App() {
  //LIFTING THE STATE UP
  const [allTasks, setAllTasks] = useState(() => {
    const saved = localStorage.getItem('allTasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('allTasks', JSON.stringify(allTasks));
  }, [allTasks]);
  // Add Task
  function addTask(name) {
    setAllTasks((prev) => [
      ...prev,
      { name: name, done: false, id: crypto.randomUUID() },
    ]);
  }
  // Change Done
  function updateTaskDone(idTask, newDone) {
    setAllTasks((prev) => {
      return prev.map((task) =>
        task.id === idTask ? { ...task, done: newDone } : task,
      );
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
  }, [completeNumber, totalNumber]);
  // Remove Task
  function removeTask(idToRemove) {
    setAllTasks((prev) => prev.filter((task) => task.id !== idToRemove));
  }
  // Edit Task
  function renameTask(idToRename, newName) {
    setAllTasks((prev) => {
      return prev.map((task) =>
        task.id === idToRename ? { ...task, name: newName } : task,
      );
    });
  }
  // Clear all Tasks
  function clearAllTasks() {
    const confirmed = window.confirm('You want to clear all the Tasks?');
    if (confirmed) {
      setAllTasks([]);
    }
  }
  return (
    <main className="main-component">
      <TaskForm onAdd={addTask} />

      {allTasks.map((allTask) => (
        <Task
          key={allTask.id}
          id={allTask.id}
          name={allTask.name}
          done={allTask.done}
          toDelete={(id) => removeTask(id)}
          toToggle={(id, done) => updateTaskDone(id, done)}
          toRename={(id, newName) => renameTask(id, newName)}
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
