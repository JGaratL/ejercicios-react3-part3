import React from 'react';

function Todo({ task, onDelete, onEdit }) {
  return (
    <div>
      <span>{task}</span>
      <button onClick={onDelete}>Borrar</button>
      <button onClick={onEdit}>Editar</button>
    </div>
  );
}

export default Todo;
