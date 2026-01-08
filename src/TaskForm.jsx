import { useState } from 'react';

export default function TaskForm() {
  const [taskName, setTaskName] = useState('');
  function handleInputChange(event) {
    setTaskName(event.target.value);
    console.log(taskName);
  }
  return (
    <form>
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
