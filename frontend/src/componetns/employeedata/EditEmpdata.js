import { useNavigate, useParams } from "react-router";
import mystyle from './Edit.module.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../Store";

const EditEmpdata = () => {
    const { id } = useParams();


    console.log(typeof id)
    console.log(id)
    console.log("this is the update emp id")

    // const sedata = useSelector((state) => { return state.selectedemp });
    // console.log(sedata);
    // console.log(sedata.item.id)
    const navigate = useNavigate();

    const dispatcher = useDispatch();

    // const eid = Number(id); no need to convert string into Number
    const [data, setData] = useState({});
    console.log(data)

    // let Name = data.Name;
    // console.log(Name)

    const [eid, setEid] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [role, setRole] = useState("");
    const [salary, setSalary] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        axios.post(`http://localhost:5000/getidata/${id}`).then((success) => {
            console.log(success)
            setData(success.data);
            setEid(success.data._id)
            setName(success.data.username);
            setEmail(success.data.email);
            setAge(success.data.age);
            setRole(success.data.role);
            setSalary(success.data.salary);
            console.log("this is the useffect data")

        }).catch((error) => {
            console.log(error)
        })


    }, [])



    const getId = (event) => {
        setEid(event.target.value)
    }

    const getName = (event) => {
        setName(event.target.value)
    }

    const getEmail = (event) => {
        setEmail(event.target.value)
    }

    const getAge = (event) => {
        setAge(event.target.value)
    }

    const getRole = (event) => {
        setRole(event.target.value)
    }

    const getSalary = (event) => {
        setSalary(event.target.value)
    }

    const getStatus = (event) => {
        setStatus(event.target.value)
    }




    const chnageData = () => {


        axios.post(`http://localhost:5000/updatedata/${id}`, { Name: name, Email: email, Age: age, Role: role, Salary: salary, }).then((success) => {
            console.log(success.data)
          
        }).catch((error) => {
            console.log(error)

        })

          navigate("/dashbord/employeedata")


        // dispatcher(actions.upData(uempdata));
   


    }

    return (
        <div className={mystyle.main}>
            <div className={mystyle.sub}>
                <p>Edit Data From user_id :{data._id} </p>

                <div className={mystyle.sub1}>
                    <input type="number" placeholder="Enter Emp id" defaultValue={data._id} onChange={getId} disabled />
                    <input type="text" placeholder="Enter Emp name" defaultValue={data.username} onChange={getName} />
                    <input type="email" placeholder="Enter Emp Email" defaultValue={data.email} onChange={getEmail} />
                    <input type="number" placeholder="Enter Emp Age" defaultValue={data.age} onChange={getAge} />
                    <input type="text" placeholder="Enterr Emp Role" defaultValue={data.role} onChange={getRole} />
                    <input type="number" placeholder="Enter Emp Salary" defaultValue={data.salary} onChange={getSalary} />

                    <button className={mystyle.btn1} onClick={chnageData}>UpdateData</button>


                </div>

            </div>

        </div>
    )
}

export default EditEmpdata;