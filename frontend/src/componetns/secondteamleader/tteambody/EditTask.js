
import { useEffect, useState } from 'react';
import mystyle from './EditTask.module.css';
import { useLocation, useNavigate, useParams } from 'react-router';
import axios from 'axios';


const EditTask = () => {

    const { id } = useParams();
    // const {tid} = useParams();

    const location = useLocation();

    const navigate = useNavigate();

    const email = location.state.Email;
    const task = location.state.Task;
    const time = location.state.Time;
    const status = location.state.Status;
    const tid = location.state.Tid;


    console.log(tid)
    console.log(id)
    console.log(email)
    console.log(task)
    console.log(time)
    console.log(status)
    console.log("this value i got on the edit from page")

    const [etask, setEtask] = useState(task);
    const [etime, setEtime] = useState(time);
    const [estatus, setEstatus] = useState(status);

    // useEffect(() => {
    //     console.log("useeffect work propary")

    //     setEtask(task)
    //     setEtime(time)
    // })

    const getEtask = (event) => {
        console.log("task")
        setEtask(event.target.value)
    }

    const getEtime = (event) => {
        console.log("time")
        setEtime(event.target.value)
    }

    const getEstatus = (event) => {
        setEstatus(event.target.value)
    }

    const getData = () => {
        console.log("work getdata funcation")
        console.log(etask)
        console.log(etime)

        axios.post(`http://localhost:5000/changedata/${id}`, { Task: etask, Time: etime, Status: estatus }).then((success) => {
            console.log(success)
        }).catch((error) => {
            console.log(error)
        })
        navigate(`/tteam/${tid}`)

    }

    return (
        <div className={mystyle.main}>
            <div className={mystyle.sub}>
                <h3>Edit Emp Task</h3>
                <div className={mystyle.sub1}>
                    <input type="email" value={email} disabled />
                    <input type="text" placeholder='Enter the emp task' defaultValue={task} onChange={getEtask} />
                    <input type="datetime-local" defaultValue={time} onChange={getEtime} />
                    <input type="text" placeholder='Enter state status' defaultValue={status} onChange={getEstatus} />
                    <button className={mystyle.btn1} onClick={getData}>submit</button>
                </div>
            </div>
        </div>
    )
}

export default EditTask;