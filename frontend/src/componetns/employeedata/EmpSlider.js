
import { Link, useLocation, useParams } from 'react-router';
import mystyle from './EmpSlider.module.css';

const EmpSlider = () => {

    //  const location = useLocation();

    // const eid = location.state.eid;
    // console.log(eid)


    const {id } = useParams();
    console.log(id)
    console.log("this is the slider emp id")

    return (
        <div className={mystyle.main}>
            <div className={mystyle.di1}><p><button><i class="bi bi-lightning-charge"></i></button>NextTask</p></div>

            <div className={mystyle.di2}>
                <p className={mystyle.di2p1}>My Workspace</p>
                <p className={mystyle.di2p2}><i class="bi bi-columns-gap"></i> my Dashboard</p>
                <p className={mystyle.di2p3}><Link to={`/empmain/${id}/emptask/${id}`}><i class="bi bi-check2-square"></i> My Tasks </Link></p>
                <p className={mystyle.di2p4}><i class="bi bi-calendar4"></i> my Calender</p>
                <p className={mystyle.di2p5}><i class="bi bi-graph-up-arrow"></i> my Analytics</p>
            </div>
            <div className={mystyle.di3}>
                <p className={mystyle.di3p1}>collaboration</p>
                <p className={mystyle.di3p2}><i class="bi bi-people"></i> Team Directory</p>
            </div>
            <div className={mystyle.di4}>
                <p className={mystyle.di4p1}><Link to={`/empmain/${id}/empdata/${id}`}><i class="bi bi-gear"></i> Settings</Link></p>

                <div className={mystyle.di4sub1}>
                    <p className={mystyle.di4sub1p1}><i class="bi bi-person-circle"></i></p>
                    <div className={mystyle.di4sub1d1}>
                        <p className={mystyle.di4sub1d1p1} >Ananta Ladane</p>
                        <p className={mystyle.di4sub1d1p2}>Frontend Developer</p>
                    </div>
                    <p className={mystyle.di4sub1p2}><i class="bi bi-door-open"></i></p>
                </div>
            </div>
        </div>
    )
}

export default EmpSlider;