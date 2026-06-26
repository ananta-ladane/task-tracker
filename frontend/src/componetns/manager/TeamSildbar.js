
import { useDispatch, useSelector } from 'react-redux'
import mystyle from './TeamSildbar.module.css'

import { Link, useNavigate } from 'react-router';
import { actions } from '../Store';

const TeamSlidbar = () => {

    const tdata = useSelector((state) => { return state.mainData.teamData });

    const dispacher = useDispatch();
    const navigate = useNavigate();

    const teamLogout = () => {

        localStorage.setItem(
            "tdata",
            JSON.stringify(tdata)
        );

        dispacher(actions.tLogout())
        navigate("/")
    }
    return (
        <div className={mystyle.main}>
            <div className={mystyle.di1}><p><button><i class="bi bi-lightning-charge"></i></button>NextTask</p></div>

            <div className={mystyle.di2}>
                <p className={mystyle.di2p1}>leadership</p>
                <p className={mystyle.di2p2}><Link to='teamdata'><i class="bi bi-people"></i> team overview</Link></p>
                <p className={mystyle.di2p3}><i class="bi bi-stack"></i> project</p>
                <p className={mystyle.di2p4}><i class="bi bi-pie-chart"></i> workload</p>
            </div>

            <div className={mystyle.di3}>
                <p className={mystyle.di3p1}>repoets</p>
                <p className={mystyle.di3p2}><i class="bi bi-graph-up-arrow"></i> productivity</p>
                <p className={mystyle.di3p3}><i class="bi bi-flag"></i> milestones</p>

            </div>

            <div className={mystyle.di4}>
                <div className={mystyle.di4d1}>
                    <p className={mystyle.di4d1p1}>team velovity</p>
                    <p className={mystyle.di4d1p2}>4.8 <span>+0.4 this week</span></p>
                </div>
                <div className={mystyle.di4d2}>
                    <img src="" alt="img" />
                    <div className={mystyle.di4sub1}>
                        <p className={mystyle.di4sub1p1}>Ananta Ladane</p>
                        <p className={mystyle.di4sub1p2}>enginnering manager</p>
                    </div>
                </div>
            </div>
            <div className={mystyle.di5}>
                <button className={mystyle.di5but1} onClick={teamLogout}><i class="bi bi-door-open"></i>Logout</button>
            </div>
        </div>
    )
}

export default TeamSlidbar