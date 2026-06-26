
import { useState } from 'react'
import mystyle from './TeamNavbar.module.css'
import TeamForm from './TeamForm';


const TeamNavbar = () => {
    const [move, setMove] = useState(false);


    const slidDown = () => {
        setMove(true)
    }

    const Close = () => {
        setMove(false)
    }


    return (
        <div className={mystyle.main}>

            {
                move && <div style={{ top: move === true ? "0%" : "100%" }} className={mystyle.sli}> <button className={mystyle.btn2} onClick={Close}>Close</button>  <TeamForm /></div>
            }

            <div className={mystyle.sub}>

                <div className={mystyle.di1}>
                    <p className={mystyle.di1p1}>Team Leadership</p>
                    <input type="text" placeholder='Filter team tasks...' />
                </div>
                <div className={mystyle.di2}>
                    <p className={mystyle.di2p1}><i class="bi bi-plus"></i>10</p>
                    <p className={mystyle.di2p2} onClick={slidDown}><i class="bi bi-plus"></i> create team</p>
                    <p className={mystyle.di2p3}><i class="bi bi-bell"></i></p>
                </div>
            </div>
        </div>
    )
}

export default TeamNavbar