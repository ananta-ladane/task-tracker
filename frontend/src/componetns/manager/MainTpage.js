import { useEffect } from 'react';
import CreateTeam from './CreateTeam';
// import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../Store';
import TeamSlidbar from './TeamSildbar';
import TeamNavbar from './TeamNavbar';
import TeamBody from './TeamBody';
import { Outlet } from 'react-router';


const MainTpage = () => {
    // const login = useSelector((state) => { return state.islogin })
     // const disptcher = useDispatch();

  

    // useEffect(() => {

        // if (login === false) {
        //     navigate("/login")
        // } else {

            // const edata = JSON.parse(localStorage.getItem("edata"));

            // const saveteamdata = JSON.parse(localStorage.getItem("tdata"));
            // console.log(saveteamdata)

            // disptcher(actions.saveLocalteam(saveteamdata));

            // disptcher(actions.addlocalData(edata));
        // }

    // }, [])
    
    return (
        <div>
            <TeamNavbar />
            <div>
                <TeamSlidbar />
                <div>
                   <Outlet/>
                </div>
            </div>

        </div>
    )
}

export default MainTpage;