import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskCreator = (props) => {
    const [newTask,setNewTask]= useState(
        {
            name:'',
            age:'',
        }
        )
    const [nameValidate,setNameValidate] = useState(null);
    const [ageValidate,setAgeValidate] = useState(null);

    const {name,age} = newTask;
    const handleChange = (e)=>{
         const name = e.target.name;
        setNewTask((oldTask)=>{
            return {...oldTask,[name]:e.target.value}
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const nameType = newTask.name;
        console.log(typeof nameType);

        if(!(isNaN(newTask.name))){
            setNameValidate("Name type sring");
        }
        else if(isNaN(newTask.age)){
            setAgeValidate("Age Number");
        }
        else{
            props.newTaskAdd(newTask);
            setNewTask({name:'',age:''});
        }   
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='form-field'>
                <label>Enter Your Name</label>
                <input type="text" className='form-control' name='name' value={name} onChange={handleChange} required/>
                {nameValidate && <span style={{color:"red"}}>{nameValidate}</span>}
 
            </div>
            <div className='form-field'>
                <label>Enter Your Age</label>
                <input type="text" className='form-control' name='age' value={age} onChange={handleChange} required/>
                {ageValidate && <span style={{color:"red"}}>{ageValidate}</span>}
            </div>
            <button type='submit ' className='btn btn-danger'>Add Task</button>
        </form>
        
    </div>
  )
}

export default TaskCreator
