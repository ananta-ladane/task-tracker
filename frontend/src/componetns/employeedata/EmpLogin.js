
import { useDispatch, useSelector } from 'react-redux';
import mystyle from './EmpLogin.module.css'
import { useEffect, useState } from 'react';
import { actions } from '../Store';
import { useNavigate } from 'react-router';
import axios from 'axios';





const EmpLogin = () => {


    // const estask = useSelector((state) => { return state.emptask });

    // // const eid = estask[0].Eid;
    // console.log(estask)

    const dispatcher = useDispatch();
    const navigate = useNavigate();


    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    // const [vemp, setVemp] = useState();

    useEffect(() => {

        // const etask = JSON.parse(localStorage.getItem("emptaskdata"))

        // dispatcher(actions.addLocaltask(etask))




    }, [])

    const getName = (event) => {
        setName(event.target.value)
    }

    const getEmail = (event) => {
        setEmail(event.target.value)
    }

    const getPass = (event) => {
        setPass(event.target.value)
    }


    const empLogin = () => {



        console.log(name)

        if (!name || !email || !pass) {
            console.log("plz fill the diltes")

        }

        // if (!vemp) {
        //     console.log("plz fill the correct deatils")
        // }

        axios.post("http://localhost:5000/emplogin", { Email: email, password: pass }).then((success) => {
            console.log(success)
            if (success.data.length > 0) {

                let id = success.data[0]._id
                console.log(id)
                navigate(`/empmain/${id}`)
                dispatcher(actions.isLogin())
                console.log("login successfully...!")
            } else {
                console.log("plz fill the correct detilas")
            }
        }).catch((error) => {
            console.log(error)
        })


        // dispatcher(actions.empData({ Eid: empid }));





    }

    return (
        <div className={mystyle.main}>

            <div className={mystyle.sub}>
                <h1>User Login</h1>
                <div className={mystyle.sub1}>
                    <input type='text' placeholder='Enter your name' onChange={getName} />
                    <input tyep="email" placeholder='Enter your email' onChange={getEmail} />
                    <input type="number" placeholder='Enter your id' onChange={getPass} />
                    <button className={mystyle.btn1} onClick={empLogin} >login</button>
                </div>
            </div>
        </div>

    )
}


export default EmpLogin;