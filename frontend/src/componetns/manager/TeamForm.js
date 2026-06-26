import { useEffect, useState } from 'react';
import mystyle from './Teamform.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../Store';

import Select from 'react-select';
import axios from 'axios';
// import axios from 'axios';

const TeamForm = () => {

    // const mydata = useSelector((state) => { return state.mainData })

    // console.log(mydata.employeeData)




    // const getEmpid = (selected) => {
    //     setSelectedOption(selected);
    //     console.log(selected.value); // Employee ID
    // };


    const dispactcher = useDispatch();

    const [data, setData] = useState([])
    const [tname, setTname] = useState("");
    const [tproname, setTproname] = useState("");
    const [nofc, setNofc] = useState("");
    const [empid, setEmpid] = useState([]);
    const [head, setHead] = useState("");

    const options = data.map((emp) => ({
        value: emp.email,
        label: emp.email
    }));


    useEffect(() => {

        axios.get("http://localhost:5000/empgets").then((success) => {
            console.log(success)
            setData(success.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])


    const getTeamname = (event) => {
        setTname(event.target.value)
    }

    const getProname = (event) => {
        setTproname(event.target.value);
    }

    const getNumofcan = (event) => {
        setNofc(event.target.value);
    }

    const getEmpid = (ids) => {
        console.log(ids);

        setEmpid(ids);
    };

    const getHead = (event) => {
        setHead(event.target.value)
    }

    const sendData = () => {
        axios.post("http://localhost:5000/teamdatainsert", {
            teamname: tname,
            projectname: tproname,
            nofc: nofc,
            empid: empid,
            head: head
        }).then((success) => {
            console.log(success)
        }).catch((error) => {
            console.log(error)
        })
        // let tid = new Date().getTime();
        // dispactcher(actions.addteamData({ Tid: tid, teamname: tname, projectname: tproname, nofc: nofc, _empid: empid, hid: head }))



    }



    return (
        <div className={mystyle.main}>
            <div className={mystyle.sub}>
                <div className={mystyle.sub1}>
                    <h1>Add Team Data</h1>
                    <form>
                        <input type='text' placeholder='Enter team name' onChange={getTeamname} />
                        <input type="text" placeholder='Enter the team project name' onChange={getProname} />
                        <input type="number" placeholder='Number of candidates' onChange={getNumofcan} />
                        <Select
                            className={mystyle.select}
                            isMulti
                            options={options}
                            placeholder="Select Employee IDs"
                            onChange={(selected) => {
                                const ids = selected.map(item => item.value);
                                getEmpid(ids);
                            }}
                        />

                        {/* <input type="text" placeholder='Enter emp id'   onChange={getEmpid}  /> */}
                        <input type="email" placeholder='Enter the head of team' onChange={getHead} />

                        <button type='button' onClick={sendData}>Create team</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TeamForm;