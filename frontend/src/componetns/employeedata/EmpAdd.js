import { useState } from "react";
// import axios from "axios";
import mystyle from './EmpAdd.module.css'
// import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { actions } from "../Store";
import axios from "axios";


const EmpAdd = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [role, setRole] = useState('');
    const [salary, setSalary] = useState('');

    const dispatcher = useDispatch();


    const getName = (event) => {
        setName(event.target.value);
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

    const addData = () => {

        axios.post("http://localhost:5000/empinsert", {
            Name: name, Email: email, Age: age, Role: role, Salary: salary
        }).then((success) => {
            console.log(success)
          
        }).catch((error) => {
            console.log(error)
        })

        // const eid = new Date().getTime();
        // console.log(eid)
        // dispatcher(actions.addDataa({ Eid: eid, Name: name, Email: email, Age: age, Role: role, Salary: salary, status: "1" }))
           
      

    }


    return (
        <div className={mystyle.main}>
            {/* <button className={mystyle.btn1}><Link to="/employeedata">Emp_Data</Link></button> */}
            <div>
                <h3>Add Employee Data</h3>
                <div className={mystyle.sub}>

                    <input type="text" placeholder="Enter Employee Name"  onChange={getName} />
                    <input type="email" placeholder="Enter Employee Email"  value={email} onChange={getEmail} />
                    <input type="number" placeholder="Enter Employee Age"  onChange={getAge} />
                    <input type="text" placeholder="Enter Employee Role"  onChange={getRole} />
                    <input type="number" placeholder="Enter Employee Salary"  onChange={getSalary} />
                    <button className={mystyle.btn2} onClick={addData}>Add Employee</button>
                </div>
            </div>

        </div>
    )
}

export default EmpAdd;