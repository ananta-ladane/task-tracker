
import { useState } from 'react'
import mystyle from './Teamlogin.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../Store';
import { useNavigate } from 'react-router';
import axios from 'axios';


const TeamLogin = () => {

    const login = useSelector((state) => { return state });

    const ilogin = login.islogin

    const dispatcher = useDispatch();
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [alert, setAltrt] = useState(false);


    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    // useEffect(() => {

    //     // let tsdata = JSON.parse(localStorage.getItem("msignup"));

    //     // console.log(tsdata);

    //     // dispatcher(actions.signupTeamdata(tsdata))


    //     if (ilogin) {

    //     }


    // }, [ilogin, count])

    const getName = (event) => {
        setName(event.target.value)
    }

    const getEmail = (event) => {
        setEmail(event.target.value)
    }

    const getPass = (event) => {
        setPass(event.target.value)
    }

    const tsignupData = () => {

        if (!name || !email || !pass) {
            setShow(true)
        } else {
            // dispatcher(actions.checkLogin({ Name: name, Email: email, Pass: pass }))
            // setCount(count + 1)

            axios.post("http://localhost:5000/managerlogin", {
                email: email, password: pass
            }).then((success) => {
                console.log(success)
                if (success.data.length < 1) {
                    console.log("plz enter the valid data")
                    setAltrt(true)
                } else {
                    console.log("login successfully...!")
                    dispatcher(actions.isLogin());
                    navigate("/maintpage")
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    const Close = () => {
        setAltrt(false)
    }

    const Hide = () => {
        setShow(false)
    }


    return (
        <div className={mystyle.main}>
            {
                alert && <div className={mystyle.inva}><p>plz fill the correct details</p><button className={mystyle.btn2} onClick={Close}>close</button></div>
            }

            {
                show && <div className={mystyle.alldata}><p>Plz fill the all details</p><button className={mystyle.btn3} onClick={Hide}>ok</button></div>
            }
            <div className={mystyle.sub}>
                <h1>Manager login page</h1>
                <div className={mystyle.sub1}>
                    <input type="text" placeholder='Enter your name' onChange={getName} />
                    <input type="email" placeholder='Enter your email' onChange={getEmail} />
                    <input type="password" placeholder='Enter your Password' onChange={getPass} />
                    <button className={mystyle.btn1} onClick={tsignupData}>login</button>
                </div>
            </div>

        </div>
    )

}
export default TeamLogin;