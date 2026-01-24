# React TO-DO App

This is my first project using React. I built this project to learn how to manage data, handle user input and store data to localStoarge.

**[Live Demo](https://KwnstantinosKitsos.github.io/ToDoList-react/)**

## Features

- **Add Task:** Add new items to your list via form.
- **Edit Task:** Click directly on a task name to switch to edit mode. Press Enter to save.
- **Delete Task:** Remove individual tasks with trash button.
- **Clear All:** A button that delete the whole taskList after a confirmation message.
- **Task Progress:** A h1 title showing "Completed / Total" tasks.
- **LocalStorage Save:** The tasks are saved in the browser, so they don't disappear when you refresh the page.

## The Logic

1. **The Source:** All tasks live in one main list in (`allTasks`) within `App.jsx`.
2. **Data Flow:** The "Parent" (App) passes data down to "Children" (Tasks) via props.
3. **Lifting State Up:** Children components "signal" updates (like renaming or deleting) back to the parent using callback functions.
4. **Storage** Every time the list changes, the app automatically updates the LocalStorage so your tasks are safe.

## Project Structure

- **App:** The "brain" that keeps the list and makes everything work.
- **TaskForm:** The input where user type new tasks.
- **Task:** Each row that shows user's task. It has buttons to edit or delete it.
- **CheckBox:** The visual part that shows if a task is done or not.

## Setup

To run this project locally:

### 1. **Clone the repo**

```bash
 git clone  https://github.com/KwnstantinosKitsos/ToDoList-react.git
```

### 2. **Install dependencies**

```bash
npm install
```

### 3. **Run the app**

```bash
# Start the development server
npm run dev
```
