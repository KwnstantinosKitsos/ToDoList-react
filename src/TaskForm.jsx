import { useState } from 'react';

export default function TaskForm({ onAdd }) {
  const [taskName, setTaskName] = useState('');
  function handleInputChange(event) {
    setTaskName(event.target.value);
    console.log(taskName);
  }
  function handleSubmit(event) {
    event.preventDefault();
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
