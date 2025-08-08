import './App.css';
import List from './components/List';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form';
import { api } from './api/api';
import { useEffect, useState } from 'react';
import uuid from 'react-uuid';

function App() {
  const [task, setTask] = useState([]);
  const fetchData = async()=>{
    const res = await api.get("/todolists");
    setTask(res.data);
  }

  useEffect(()=>{
    fetchData();
  },[task]);

  const submitTask = async (userTask)=>{
    const data = {
      "id": uuid,
      "task": userTask,
      "complete": false
    }
   await api.post("todolists", data);  
    
  }

  const deleteTask= async (task_id)=>{
    await api.delete(`/todolists/${task_id}`)
    
  }

  const updateTask= async(id, complete)=>{
    await api.patch(`/todolists/${id}`,{complete})
    
  }
  return (
    <div className='container m-2'>
      <Form submitTask={submitTask} />
      <List task = {task} deleteTask= {deleteTask} updateTask= {updateTask} />
      
    </div>
  );
}

export default App;
