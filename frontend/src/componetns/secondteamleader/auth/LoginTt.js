

import { useState } from 'react';
import mystyle from './Login.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../Store';
import { useNavigate } from 'react-router';
import axios from 'axios';


const LoginTt = () => {

    // const hdata = useSelector((state) => { return state.mainData.teamData })
    // console.log(hdata)

    const dispatcher = useDispatch();

    const navigate = useNavigate();


    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const [vdata, setVdata] = useState(true)


    // useEffect(() => {

    //     const tldata = JSON.parse(localStorage.getItem("tdata"));
    //     console.log(tldata)

    //     dispatcher(actions.saveLocalteam(tldata))

    // }, [])


    const getName = (event) => {
        setName(event.target.value)
    }

    const getEmail = (event) => {
        setEmail(event.target.value)
    }

    const getData = () => {

        console.log(name)
        console.log(email)

        // setVdata(hdata.find((p) => { return Number(p.hid) === hid }))

        if (!name || !email) {
            console.log("plz enter the valid data")
        }


        axios.post("http://localhost:5000/loginhead", { Email: email }).then((success) => {
            console.log(success)
            if (success.data.length > 0) {

                let id = success.data[0]._id

                navigate(`/tteam/${id}`)

                dispatcher(actions.addTeamid(id))
                console.log("team leader login succefully")
            } else {
                console.log("plz fill the correct deatils")
            }

        }).catch((error) => {
            console.log(error)
        })




    }


    return (
        <div className={mystyle.main}>
            <div className={mystyle.sub}>
                <h1>Team Leader login</h1>
                <div className={mystyle.sub1}>
                    <input type="text" placeholder="Enter your name" onChange={getName} />
                    <input tyep="email" placeholder="Enter your email" onChange={getEmail} />
                    <button className={mystyle.btn1} onClick={getData}>login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginTt;