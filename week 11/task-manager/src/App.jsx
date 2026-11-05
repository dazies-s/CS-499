import { useState } from 'react';
import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.jsx';

export default function App() {
  // The shared task state lives in the closest common parent.
  const [tasks, setTasks] = useState([
    { id: 'sample-1', text: 'Review React props', completed: false },
    { id: 'sample-2', text: 'Practice useState', completed: true },
  ]);

  function addTask(text) {
    const newTask = { id: crypto.randomUUID(), text, completed: false };
    setTasks(previousTasks => [...previousTasks, newTask]);
  }

  function toggleTask(id) {
    setTasks(previousTasks => previousTasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  function deleteTask(id) {
    setTasks(previousTasks => previousTasks.filter(task => task.id !== id));
  }

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <main className="page">
      <h1>My Task Manager</h1>
      <p className="subtitle">React Forms, Controlled Components & Lifting State Up</p>
      <TaskForm onAddTask={addTask} />
      <p>{completedCount} of {tasks.length} tasks completed</p>
      <TaskList tasks={tasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
    </main>
  );
}
