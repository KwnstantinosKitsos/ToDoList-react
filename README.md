# React TO-DO App

A simple fully functional To-Do application. I built this project to practice React's data management patterns and persistent storage.

## Features

- **Add Task:** Quickly add new items to your list via a dynamic form.
- **Edit Task:** Click directly on a task name to switch to edit mode. Press Enter to save.

- **Delete Task:** Remove individual tasks with a single click.
- **Clear All:** A button to wipe the entire list after a confirmation prompt.
- **Progress Tracking:** A h1 title showing "Completed / Total" tasks.
- **LocalStorage Save:** The tasks are saved in the browser, so they don't disappear when you refresh the page.

## The Logic

1. **The Source:** All tasks live in one main list in (`allTasks`) within `App.jsx`.
2. **Data Flow:** The "Parent" (App) passes data down to "Children" (Tasks) via props.
3. **Lifting State Up:** Children components "signal" updates (like renaming or deleting) back to the parent using callback functions.
4. **Saving** Every time the list changes, the app automatically updates the LocalStorage so your tasks are safe.

## Project Structure

- **App:** The "brain" that keeps the list and makes everything work.
- **TaskForm:** The input where you type and add new tasks.
- **Task:** Each row that shows your task and lets you edit it.
- **CheckBox:** The visual part that shows if a task is done or not.

## Setup

To run this project locally:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```
