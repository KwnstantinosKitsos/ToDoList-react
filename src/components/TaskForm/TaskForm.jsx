import { useState } from 'react';
import './TaskForm.css';
export default function TaskForm({ onAdd }) {
  const [taskName, setTaskName] = useState('');
  function handleInputChange(event) {
    setTaskName(event.target.value);
    console.log(taskName);
  }
  function handleSubmit(event) {
    event.preventDefault();
    // send to App the task from user
    if (taskName === '' || taskName.trim() === '') return;
    onAdd(taskName);
    setTaskName('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <button>+</button>
      <input
        type="text"
        placeholder="New Task..."
        value={taskName}
        onChange={handleInputChange}
      />
    </form>
  );
}
