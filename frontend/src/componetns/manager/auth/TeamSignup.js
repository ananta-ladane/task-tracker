
import { useState } from 'react';
import mystyle from './TeamSignup.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../Store';
import { useNavigate } from 'react-router';
import axios from 'axios';


const TeamSignup = () => {



    const tsignup = useSelector((state) => { return state.teamSignupdata })
    console.log(tsignup)

    const disptcher = useDispatch();
    const navigate = useNavigate();

    const [succ, setSucc] = useState(false);
    const [alert, setAlert] = useState(false);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();


    console.log(name);
    console.log(email);
    console.log(pass);


    const getName = (event) => {
        setName(event.target.value);
    }

    const getEmail = (event) => {
        setEmail(event.target.value)
    }

    const getPass = (event) => {
        setPass(event.target.value)
    }


    const addSignup = () => {

        if (!name || !email || !pass) {
            setAlert(true)
        } else {
            // let id = new Date().getTime();
            // disptcher(actions.sendteamSigndata({ Mid: id, Name: name, Email: email, Pass: pass }));

            console.log(name)
            console.log(email)
            console.log(pass)

            axios.post("http://localhost:5000/signupmanager", {username:name, email: email, password:pass}).then((success) => {
                console.log(success)
            }).catch((error) => {
                console.log(error)
            })

            // setSucc(true)
        }
    }

    const Close = () => {

        // localStorage.setItem("msignup", JSON.stringify(tsignup));

        navigate("/mlogin")
        setSucc(false)
    }

    const alClose = () => {
        setAlert(false)
    }

    return (
        <div className={mystyle.main}>
            {

                alert && <div className={mystyle.etalert}><p>Plz fill the details</p> <button className={mystyle.btn3} onClick={alClose}>close</button></div>
            }
            {
                succ && <div className={mystyle.succ}><p>signup successfully...!</p><button className={mystyle.btn2} onClick={Close}>ok</button></div>
            }
            <div className={mystyle.sub}>


                <h3>Manager Signup</h3>
                <div className={mystyle.sub1}>
                    <input type='text' placeholder='Enter your name' onChange={getName} />
                    <input type='email' placeholder='Enter your email' onChange={getEmail} />
                    <input type='password' placeholder='create password' onChange={getPass} />
                    <button className={mystyle.btn1} onClick={addSignup}>signup</button>
                    <p> if you hava a account click <a href='/mlogin'>here</a></p>
                </div>

            </div>
        </div>
    )
}

export default TeamSignup;