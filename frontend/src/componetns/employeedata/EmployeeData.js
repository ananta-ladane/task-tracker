// import { useEffect, useState } from "react";
// import axios from "axios";
import mystyle from './EmployeeData.module.css'
import { useNavigate } from "react-router";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../Store";
import { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeData = () => {

    const login = useSelector((state) => { return state.islogin })

    // const edata = useSelector((state) => { return state.mainData });

    const dispacher = useDispatch();

    // const [dataa, setDataa] = useState([]);
    // console.log(edata);

    const [edata, setEdata] = useState([]);

    console.log(edata)

    const navigate = useNavigate();


    useEffect(() => {
        // axios.get("https://69691fb369178471522caa48.mockapi.io/demo_one").then((success) => {
        //     console.log(success);
        //     setDataa(success.data)
        // }).catch((error) => {
        //     console.log(error)
        // })
        if (login === false) {
            navigate("/login")
        }


        axios.get("http://localhost:5000/empgets").then((success) => {
            console.log(success)
            setEdata(success.data)
        }).catch((error) => {
            console.log(error)
        })



    },[axios]);


    const sendData = (item) => {
        // // axios.get(`https://69691fb369178471522caa48.mockapi.io/demo_one ${id}`)

        // dispacher(actions.saveId({ item }))
        navigate(`/dashbord/editempdata/${item._id}`)

    }

    const removData = (did) => {

        axios.delete(`http://localhost:5000/empdelete/${did}`).then((success) => {
            console.log(success)
            navigate(0)
        }).catch((error) => {
            console.log(error)
        })

    }

    return (
        <div className={mystyle.main}>
            <div className={mystyle.sub}>

                <h1>New Hiring Candidate List</h1>
                {

                    edata.map((item) => {
                        return (
                            <div key={item._id } className={mystyle.edata} >
                                <p>{item._id}</p>
                                <p>{item.name}</p>
                                <p>{item.email}</p>
                                <p>{item.age}</p>
                                <p>{item.role}</p>
                                <p>{item.salary}</p>

                                <div>
                                    <button className={mystyle.btn1} onClick={() => sendData(item)}><i class="bi bi-pen"></i></button>
                                    <button className={mystyle.btn2} onClick={() => removData(item._id)}><i class="bi bi-trash"></i></button>
                                </div>
                            </div>


                        )
                    })

                }
            </div>


        </div>
    )
}

export default EmployeeData;