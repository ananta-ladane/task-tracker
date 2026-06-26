import { useState } from 'react';
import mystyle from './Create.module.css'
import TeamForm from './TeamForm';
import { useSelector } from 'react-redux';
// import { actions } from '../Store';



const CreateTeam = () => {

    const [move, setMove] = useState(false);

    const tdata = useSelector((state) => { return state.mainData.teamData });

    // const dispatcher = useDispatch();


    const slidDown = () => {
        setMove(true);
    }


    const Close = () => {
        setMove(false)
    }

    const logOut = () => {
        // localStorage.setItem(
        //     "tdata",
        //     JSON.stringify(tdata)
        // );

        // dispatcher(actions.logOut());
        // navigate("/login")

    }

    return (
        <div className={mystyle.main}>

            <div className={mystyle.sub}>

               

                {/* <ul>
                    <li onClick={logOut}>logout</li>
                    <li onClick={slidDown}>Create Team <i class="bi bi-plus-lg"></i></li>
                </ul> */}


            </div>


        </div>

    )
}

export default CreateTeam;