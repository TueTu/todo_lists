import React, { useState } from 'react'

const Form = ({submitTask}) => {

  const [userTask, setUserTask] = useState('');
  const submitHandling = ()=>{
    submitTask(userTask)
    setUserTask('')
  }
  return (
    <div>
      <div className='row mt-5'>
      <div className="col-5 offset-3 ">
        <input className=' form-control'onChange={e=>setUserTask(e.target.value)} value={userTask} placeholder='Enter your tasks!' />
      </div>
      <div className="col-3">
        <button type='button' onClick={()=>submitHandling()} className=' btn btn-primary'>Submit</button>
      </div>
      
    </div>
    </div>
  )
}

export default Form
