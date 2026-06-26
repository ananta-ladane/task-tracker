import { useEffect, useState } from 'react';
import mystyle from './Dashbord.module.css'
import NavBar from './NavBar';
import SlidBar from './SlidBar';
import { actions } from '../../Store';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router';
import MainBody from './MainBody';


const DashBord = () => {
    const login = useSelector((state) => { return state.islogin })
    const dispatcher = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        if (login === false) {
            navigate("/login")
        } else {
            // const savalocalData = JSON.parse(localStorage.getItem("edata") || "[]")
            // console.log(savalocalData)
            // const empdata = savalocalData || [];
            // console.log(empdata)

            // console.log("this is the app local store data")

            // dispatcher(actions.addlocalData(empdata));

        }
    }, [])

    return (
        <div className={mystyle.main}>

            <NavBar />
            <div>
                <SlidBar />
                <div>
                    <Outlet />
                </div>
            </div>


        </div>
    )
}

export default DashBord;