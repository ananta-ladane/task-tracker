
import { useState } from 'react';
import mystyle from './Navbartt.module.css';
import EmpTask from '../addemptask/EmpTask';


const NavBartt = () => {

    const [show, setShow] = useState(false);

    const getForm = () => {
        setShow(true)
    }

    const Close = () => {
        setShow(false)
    }

    return (
        <div className={mystyle.main} >
            {
                show&&<div style={{ top: show === true ? "0%" : "100%" }} className={mystyle.sho1}> <button onClick={Close} className={mystyle.btn1}>Close</button> <EmpTask /></div>
            }
            <div className={mystyle.sub}>
                <input type="text" placeholder='Serach my taks or files...' />

                <div className={mystyle.sub1}>
                    <p><i class="bi bi-bell"></i></p>
                    <p  onClick={getForm}><i class="bi bi-plus"></i> Add Task</p>
                </div>
            </div>

        </div>

    )
}

export default NavBartt;