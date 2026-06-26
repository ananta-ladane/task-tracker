import { useState } from 'react';
import mystyle from './Singup.module.css';
import { actions } from '../../Store';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';


// import mystyle from './Addmin.module.css';

const LoginPage = () => {

    const adminsigupdata = useSelector((state) => { return state.aaddminData })
    console.log(adminsigupdata);

    const dispatcher = useDispatch();
    const navigate = useNavigate();

    const [alert, setAlert] = useState(false);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    console.log(name)
    console.log(email)
    console.log(pass)

    const getName = (event) => {
        setName(event.target.value)
    }

    const getEmail = (event) => {
        setEmail(event.target.value)
    }

    const getPass = (event) => {
        setPass(event.target.value)
    }

    const sumitAdata = () => {

        // dispatcher(actions.savaAdata({ Name: name, Email: email, Password: pass }))

        if (!name || !email || !pass) {
            alert("plz fill the all details");
            console.log("plz fill the all details");

        } else {

            // axios.post("https://serve.faux-api.com/5671dcdc6dcd56e6955de245/addmindata",
            //     { Username: name, Email: email, Pass: pass }
            // ).then((success) => {
            //     console.log(success);
            // }).catch((error) => {
            //     console.log(error)
            // })

            // let aid = new Date().getTime();

            // dispatcher(actions.addAmindata({ aid: aid, Username: name, Email: email, Pass: pass }));

            axios.post("http://localhost:5000/addmininsert", { username: name, email: email, password: pass }).then((success) => {
                console.log(success)
            }).catch((error) => {
                console.log(error)
            })

            setAlert(true)




        }
    }

    const Close = () => {
        setAlert(false)
        // localStorage.setItem("adminsigupdata", JSON.stringify(adminsigupdata))
        // navigate("/login")

    }


    return (


        <div className={mystyle.main}>

            {
                alert && <div className={mystyle.alert}><p>signup successfully...!</p><button className={mystyle.btn2} onClick={Close}>OK</button></div>
            }

            <div className={mystyle.sub}>

                <h3>If you hava alredy a accound plz  <a href="/login">login</a></h3>

                <input type="text" placeholder="Enter Your Name" onChange={getName} />
                <input type="email" placeholder="Enter Your Email " onChange={getEmail} />
                <input type="Password" placeholder="Enter Your Password" onChange={getPass} />
                <button onClick={sumitAdata}>Sign up</button>
            </div>

        </div >

    )

}

export default LoginPage;