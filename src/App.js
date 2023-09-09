import React, { useState } from 'react';
import Todo from './components/Todo';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    const updatedTask = prompt('Editar tarea:', tasks[index]);
    if (updatedTask !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[index] = updatedTask;
      setTasks(updatedTasks);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Agregar tarea</button>
      {tasks.map((task, index) => (
        <Todo
          key={index}
          task={task}
          onDelete={() => deleteTask(index)}
          onEdit={() => editTask(index)}
        />
      ))}
    </div>
  );
}

export default App;
