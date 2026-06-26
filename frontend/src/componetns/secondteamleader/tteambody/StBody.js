
import { useNavigate, useParams } from 'react-router'
import mystyle from './StBody.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';



const StBody = () => {

    const { id } = useParams();

    console.log("this is on the emp data data" + id)

    const navigate = useNavigate();

    const [data, setData] = useState([])

    useEffect(() => {

        axios.post(`http://localhost:5000/teamempdata/${id}`).then((success) => {
            console.log(success)
            setData(success.data)
        }).catch((error) => {
            console.log(error)
        })

    }, [])

    const getId = (d) => {

        let tid = d.tid
        let id = d._id
        console.log(tid)
        console.log(id)


        let email = d.email;
        let task = d.task;
        let time = d.time;
        let status = d.status;

        console.log("i got to edit data" + id + "and" + tid)
        navigate(`/tteam/${tid}/edittask/${id}`, { state: { Email: email, Task: task, Time: time, Status: status, Tid:tid } })

    }

    const getDelid = (id) => {
        console.log(id)
        console.log("this is the delete is i got after click the del button")

        axios.post(`http://localhost:5000/deletetask/${id}`).then((success) => {
            console.log(success)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className={mystyle.main}>
            <h1>Employee Data </h1>

            <div className={mystyle.sub}>
                {
                    data.map((d, index) => {
                        return (
                            <div key={index} className={mystyle.data}>
                                <p>Email: {d.email}</p>
                                <p>Task: {d.task}</p>
                                <p>Time: {d.time}</p>
                                <p>Status: {d.status}</p>
                                <button className={mystyle.btn1} onClick={() => { getId(d) }}>Edit</button>
                                <button className={mystyle.btn2} onClick={() => { getDelid(d._id) }}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}


export default StBody;