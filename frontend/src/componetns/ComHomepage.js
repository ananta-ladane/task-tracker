
import { useState } from 'react';
import mystyle from './Comhome.module.css'
import { Link } from 'react-router';


const ComHomepage = () => {


    const [login, setLogin] = useState(false);
    const [signup, setSigup] = useState(false);


    const getLogin = () => {
        setLogin(true)
    }

    const getSignup = () => {
        setSigup(true)
    }

    const close = () => {
        setLogin(false)
        setSigup(false)
    }

    return (
        <div className={mystyle.main}>
            {
                login && <div className={mystyle.log}>
                    <p><Link className={mystyle.lin} to="/mlogin">Manager</Link></p>
                    <p><Link className={mystyle.lin} to="/teamllogin">Team Leader</Link></p>
                    <p><Link className={mystyle.lin} to="/emplogin">Employee</Link></p>
                    <p><Link className={mystyle.lin} to="/login">Addmin</Link></p>
                    <button className={mystyle.btn1} onClick={close}>Close</button>
                </div>
            }

            {
                signup && <div className={mystyle.sign}>
                    <p><Link className={mystyle.lin} to="/msignup">Manager</Link></p>
                    <p><Link className={mystyle.lin} to="/addminsigup">Addmin</Link></p>
                    <button className={mystyle.btn1} onClick={close}>Close</button>
                </div>
            }


            <div className={mystyle.nav}>
                <div className={mystyle.nav1}>
                    <p>Task<span>Tracker</span></p>
                    <ul>
                        <li onClick={getLogin}>Login</li>
                        <li onClick={getSignup}>Signup</li>
                    </ul>

                </div>
            </div>
            <div className={mystyle.sect1}>
                <h3>Task Tracker Project in Developing Mode</h3>
            </div>

        </div>
    )
}

export default ComHomepage;