// import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import mystyle from './SlidBar.module.css';
import { useState } from 'react';
import { actions } from '../../Store';
import { Link, useNavigate } from 'react-router';
import EmpAdd from '../../employeedata/EmpAdd';


const SlidBar = () => {

    const edata = useSelector((state) => { return state.mainData.employeeData })

    const dispacher = useDispatch();
    const navigate = useNavigate();

    const [show, setShow] = useState(false);



    const logOut = () => {
        localStorage.setItem(
            "edata",
            JSON.stringify(edata)
        )

        dispacher(actions.logOut());
        navigate("/")

    }




    const showForm = () => {
        setShow(true);
    }

    const Close = () => {
        setShow(false);
    }

    // const [show, setShow] = useState(false);
    return (
        <div className={mystyle.main}>

            {
                show && <div style={{ left: show === true ? "0" : "100%" }} className={mystyle.slidup}><button className={mystyle.btn2} onClick={Close}>Close</button> <EmpAdd /></div>
            }
            <div className={mystyle.di1}>
                <p className={mystyle.log}><button ><i class="bi bi-shield-check"></i></button> Admin<span>HQ</span></p>
            </div>
            <div className={mystyle.di2}>
                <p className={mystyle.di2p1}>system</p>
                <p className={mystyle.di2p2}><i class="bi bi-grid"></i> System overview</p>
                <p className={mystyle.di2p3}><i class="bi bi-graph-up"></i> network traffic</p>
            </div>
            <div className={mystyle.di3}>
                <p className={mystyle.di3p1}>employee mangament</p>
                <p className={mystyle.di3p2} onClick={showForm}><i class="bi bi-people"></i> add employees</p>
                <p className={mystyle.di3p3}><Link to="employeedata" className={mystyle.di3p3li}><i class="bi bi-person-fill-gear"></i> manage employees</Link></p>
                <p className={mystyle.di3p4}><i class="bi bi-stack"></i> organization units</p>
            </div>
            <div className={mystyle.di4}>
                <p className={mystyle.di3p1}>security</p>
                <p className={mystyle.di3p2}><i class="bi bi-file-earmark"></i> audit logd</p>
                <p className={mystyle.di3p3}><i class="bi bi-clipboard2-check"></i> compliance</p>

            </div>
            <div className={mystyle.di5}>
                <p className={mystyle.di5p1}><i class="bi bi-gear"></i> global config</p>
                <p className={mystyle.di5p2} onClick={logOut}><i class="bi bi-door-closed"></i>Logout</p>
                <div className={mystyle.di5di1}>
                    <img src="jj" alt="img" />
                    <div className={mystyle.di5sub1}>
                        <p className={mystyle.di5sub1p1}>root admin</p>
                        <p className={mystyle.di5sub1p2}>level 99</p>
                    </div>
                </div>
            </div>


            {/* <button className={mystyle.btn1} onClick={logOut}>logout</button> */}
        </div>
    )
}

export default SlidBar;