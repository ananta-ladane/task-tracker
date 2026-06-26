import mystyle from './EmpFoo.module.css'

const EmpFooter = () => {
    return (
        <div className={mystyle.main}>
            <div className={mystyle.sub}>
                <p><i class="bi bi-c-circle"></i> 2026 NexTask Platforms Inc.</p>
                <div className={mystyle.sub1}>
                    <p><i class="bi bi-circle-fill"></i> online  |</p>
                    <p>Direct Support</p>
                </div>
            </div>
        </div>
    )
}

export default EmpFooter;