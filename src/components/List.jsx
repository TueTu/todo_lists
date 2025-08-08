import React from "react";


const List = ({task, deleteTask, updateTask}) => {
  
  const deleteHandle = (task_id)=>{
    // eslint-disable-next-line no-restricted-globals
    if(confirm("Are you sure?")){
      deleteTask(task_id)
    }
  }
  
  return (
    <div>

      {
  task.map((task) => (
    <div className="col-6 offset-3 mt-4" key={task.id}>
  <ul className="list-group">
    <li
      className={`list-group-item d-flex justify-content-between ${task.complete ? 'bg-success text-decoration-line-through' : ''}`}
    >
      <input
        type="checkbox"
        checked={task.complete}
        onChange={() => updateTask(task.id, !task.complete)}
      />
      {task.task}
      <i
        className="fa-solid fa-trash"
        onClick={() => deleteHandle(task.id)}
      ></i>
    </li>
  </ul>
</div>

  ))
}

    </div>
  );
};

export default List;
