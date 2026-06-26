import { useEffect, useState } from 'react';
import mystyle from './LoginApage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from "../../Store";
import { useNavigate } from 'react-router';
import axios from 'axios';



const LoginApage = () => {

    

        

    const navigate = useNavigate();
    const dispacher = useDispatch();

    const [alert, setAlert] = useState(false);
    const [show, setShow] = useState(false)

    const [uname, setUname] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();



    const getUname = (event) => {
        setUname(event.target.value)
    }

    const getEmail = (event) => {
        setEmail(event.target.value)
    }

    const getPass = (event) => {
        setPass(event.target.value)
    }

    const Close = () => {
        setAlert(false)
    }

    const Hide = () => {
        setShow(false)
    }

    const loginData = () => {


        if (!uname || !email || !pass) {
            setShow(true)
        } else {
            let adata = { Email: email, Pass: pass }
            console.log(adata)

            // dispacher(actions.checkData(adata))

            axios.post("http://localhost:5000/checkadmin", { email: email, password: pass }).then((success) => {
                console.log(success)
                if (success.data.length > 0) {
                    console.log("login successfully")
                    navigate("/dashbord")
                    dispacher(actions.isLogin());
                } else {
                    console.log("plz fill the valid detailes")
                    setAlert(true)
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    return (
        <div className={mystyle.main}>
            {

                alert && <div className={mystyle.alert}><p>plz fill the correct details</p><button className={mystyle.btn2} onClick={Close}>close</button></div>
            }

            {

                show && <div className={mystyle.show}><p>Plz fill the details</p><button className={mystyle.btn3} onClick={Hide}>ok</button></div>

            }
            <div className={mystyle.sub}>
                <h3>Addmin Login Page</h3>
                <div className={mystyle.sub1}>
                    <input type="text" placeholder="Enter your username" onChange={getUname} />
                    <input type="email" placeholder="Enter your email" onChange={getEmail} />
                    <input type="Password" placeholder="Enter your password" onChange={getPass} />
                    <button onClick={loginData}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginApage;