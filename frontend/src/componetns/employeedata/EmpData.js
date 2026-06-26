
import { useLocation, useParams } from 'react-router';
import mystyle from './EmpData.module.css'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';


const EmpData = () => {


    const { id } = useParams();

    console.log(id)
    console.log("this data i got from storg")

    const [data, setData] = useState([]);
  

    useEffect(() => {

        console.log("this is the emp data id in empdata page got it :" + id)

        axios.post(`http://localhost:5000/empdataid/${id}`).then((success) => {
            console.log(success)
            setData(success.data)
        }).catch((error) => {
            console.log(error)
        })
    }, []); 

    return (
        <div className={mystyle.main}>
            <h2>this is the Profile data data</h2>

            <div className={mystyle}>
                {
                    data.map((d, index) => {
                        return (
                            <div key={index} className={mystyle.emp} >
                                <p>id: {d._id}</p>
                                <p>Name: {d.username}</p>
                                <p>Email: {d.email}</p>
                                <p>Age: {d.age}</p>
                                <p>Role: {d.role}</p>
                                <p>salary: {d.salary}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default EmpData;