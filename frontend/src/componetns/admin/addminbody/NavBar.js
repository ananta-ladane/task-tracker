import { useState } from 'react';
import mystyle from './Navbar.module.css'


const NavBar = () => {

   

    return (
        <div className={mystyle.main}>

            <div className={mystyle.sub}>

                <div className={mystyle.di1}>
                    <p><i>0</i> system status: normal</p>
                    <input type="text"  placeholder='Auick search command...' />
                </div>
                <ul>
                    {/* <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contac</a></li>
                    <li><a href='#'>More Info</a></li> */}
                    {/* <button className={mystyle.btn1} onClick={showForm}>ADD emp</button> */}
                </ul>

                <div className={mystyle.di2}>
                    <p className={mystyle.di2p1}><i class="bi bi-hdd-stack"></i> us-east-1</p>
                    <p className={mystyle.di2p2}><i class="bi bi-bell"></i></p>
                    <p className={mystyle.di2p3}><i class="bi bi-question-circle"></i></p>
                </div>

               


            </div>

        </div>
    )
}

export default NavBar;