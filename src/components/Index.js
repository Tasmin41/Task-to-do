import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

import TaskCreator from './TaskCreator';


const Index = () => {

    const [tasks,setTasks] = useState([
        {
            id:1,
            name:"tasmin",
            age:23,
            done:true
        },
        {
            id:2,
            name:"fahim",
            age:23,
            done:false
        }
    ]);

    const newTaskAdd = (newTask)=>{
        setTasks((oldTask)=>{
            return [...oldTask,{id:uuidv4(),...newTask,done:false}]
        })

    }
    const handleRemove = (id)=>{
        setTasks((oldTask)=>{
            const filterTask = oldTask.filter((task)=>task.id!==id);
            return filterTask;
        })
    }

    const handleCheckbox=(id)=>{

   const newList= tasks.map((task)=>{
        if(task.id===id)
            return {...task,done:!task.done}
            return task
            
        
    });

        setTasks(newList);
    }
    console.log(tasks)
  return (
    <section >
        <div className='container'>
        <h1 className='task-titlte'>All Tasks</h1>
            <TaskCreator newTaskAdd = {newTaskAdd}/>
            <div className='tasks'>
            {
            tasks.map((task)=>{
                const {id,name,age,done} = task;
                return <div className='single-task' key={id}>
                    <div>  
                        <input type="checkbox" checked={done} onChange={()=>{handleCheckbox(id)}}/>
                        <div>                        
                            <h3>{name}</h3>
                            <p>{age}</p>
                        </div>                  

                    </div>
                    <button className='remove-btn' onClick={()=>{handleRemove(id)}}><i className="fa 2x fa-solid fa-trash"></i></button>
                </div>
            })
        }
            </div>
        </div>
    </section>
  )
}

export default Index
