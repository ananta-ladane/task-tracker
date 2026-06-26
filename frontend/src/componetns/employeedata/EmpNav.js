import mystyle from './EmpNav.module.css';


const EmpNav = () => {
    return (
        <div className={mystyle.main} >
            <div className={mystyle.sub}>
               <input type="text" placeholder='Serach my taks or files...' />

               <div className={mystyle.sub1}>
                <p><i class="bi bi-bell"></i></p>
                <p><i class="bi bi-plus"></i> Add Task</p>
                </div>
            </div>

        </div>

    )
}

export default EmpNav;