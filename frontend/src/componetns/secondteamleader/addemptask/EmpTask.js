
import { useState } from 'react';
import mystyle from './Emptask.module.css'
import { actions } from '../../Store';
import axios from 'axios';
import { useSelector } from 'react-redux';

const EmpTask = () => {


   const tid = useSelector((state)=>{return state.teamid})
    
   console.log(tid)
   console.log(typeof tid)
   console.log("this is the team id on the addtask page")

    const [email, setEmail] = useState();
    const [task, setTask] = useState();
    const [time, setTime] = useState();

    console.log(email);
    console.log(task);
    console.log(time);


    const getEmail = (event) => {
        setEmail(event.target.value)
    }

    const getTask = (event) => {
        setTask(event.target.value)
    }

    const getTime = (event) => {
        setTime(event.target.value)
    }

    const addTask = () => {

        // dispatcher(actions.empTaskadd({ Email: email, Task: task, Time: time }))

        axios.post("http://localhost:5000/savadata", { Tid:tid, Email: email, Task: task, Time: time }).then((success) => {
            console.log(success)
        }).catch((error) => {
            console.log(error)
        })

    }




    return (
        <div className={mystyle.main}>
            <div className={mystyle.sub}>
                <h3>Add Task</h3>
                <div className={mystyle.sub1}>
                    <input type ="yext" placeholder='team id' defaultValue={tid} disabled/>
                    <input type="text" placeholder="Enter emp email" onChange={getEmail} />
                    <input type="text" placeholder="Enter emp task" onChange={getTask} />
                    <input type="datetime-local" onChange={getTime} />
                    <button className={mystyle.btn1} onClick={addTask}>Add Task</button>

                </div>
            </div>
        </div>
    )
}

export default EmpTask;