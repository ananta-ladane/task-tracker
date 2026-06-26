import { useEffect } from 'react';
import mystyle from './EmpTask.module.css'
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const EmpTask = () => {

    const { id } = useParams();

    console.log(id)
    console.log("this data i got from storg")

    const [data, setData] = useState([]);

    useEffect(() => {

        console.log("this is the emp data id in emptask page got it :" + id)

        axios.post(`http://localhost:5000/empalldata/${id}`).then((success) => {
            console.log(success)
            setData(success.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (

        <div className={mystyle.main}>
            <div>

                <h2>Employee Task  Data</h2>
                <div className={mystyle}>
                    {
                        data.map((d, index) => {
                            return (
                                <div key={index} className={mystyle.emp} >
                                    <p>{d.taskData.map((t)=>{
                                        return(
                                            <div>
                                                <p>Email: {t.email}</p>
                                                <p>Task: {t.task}</p>
                                                <p>Time: {t.time}</p>
                                            </div>
                                        )
                                    })}</p>
                                   
                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </div>
    )
}
export default EmpTask;