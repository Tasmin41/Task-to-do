import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskCreator = (props) => {
    const [newTask,setNewTask]= useState(
        {
            name:"",
            age:"",
        }
)

    const {name,age} = newTask;
    const handleChange = (e)=>{
        const name = e.target.name;
        setNewTask((oldTask)=>{
            return {...oldTask,[name]:e.target.value}
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        props.newTaskAdd(newTask)
        setNewTask({name:" ",age:" "})
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='form-field'>
                <label>Enter Your Name</label>
                <input type="text" className='form-control' name='name' value={name} onChange={handleChange}/>
            </div>
            <div className='form-field'>
                <label>Enter Your Age</label>
                <input type="text" className='form-control' name='age' value={age} onChange={handleChange}/>
            </div>
            <button type='submit ' className='btn btn-danger'>Add Task</button>
        </form>
    </div>
  )
}

export default TaskCreator
