// import { useLocation } from 'react-router';
import { Outlet, useNavigate } from 'react-router';
import EmpBody from './EmpBody';
import EmpFooter from './EmpFooter';
import mystyle from './EmpMain.module.css'
import EmpNav from './EmpNav';
import EmpSlider from './EmpSlider';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';



const EmpMain = () => {

    const islogin = useSelector((state) => { return state.islogin })

    const navigate = useNavigate();



    useEffect(() => {

    
        if (islogin == false) {
            navigate("/")
        }

    })


    return (
        <div className={mystyle.main}>

            <EmpNav />
            <div>
                <EmpSlider />
                <div>
                    <Outlet />
                    {/* <EmpFooter /> */}

                </div>
            </div>
        </div>
    )
}

export default EmpMain;