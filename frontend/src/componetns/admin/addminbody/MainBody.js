import mystyle from './MainBody.module.css'

const MainBody = () => {
    return (
        <div className={mystyle.main1}>
          
            <div className={mystyle.di1}>
                <div className={mystyle.di1sub1} >
                    <h3>System Command Center</h3>
                    <p>Adminstrative oversight for NextTask Pro Infrastructure</p>
                </div>
                <div className={mystyle.di1sub2}>
                    <button className={mystyle.di1sub2btn1}><i class="bi bi-download"></i> expoert analytics</button>
                    <button className={mystyle.di1sub2btn2}><i class="bi bi-plus"></i> provision resource</button>
                </div>
            </div>
            <div className={mystyle.di2}>
                <div className={mystyle.di2sub1}>
                    <div className={mystyle.di2sub11}>
                        <p className={mystyle.di2sub11p1}><i class="bi bi-people"></i></p>
                        <p className={mystyle.di2sub11p2}>+4.2%</p>
                    </div>
                    <p className={mystyle.di2sub1p1}>total active users</p>
                    <p className={mystyle.di2sub1p2}>12,842</p>
                </div>
                <div className={mystyle.di2sub2}>
                    <div className={mystyle.di2sub21}>
                        <p className={mystyle.di2sub21p1}><i class="bi bi-check2-circle"></i></p>
                        <p className={mystyle.di2sub21p2}>+10%</p>
                    </div>
                    <p className={mystyle.di2sub2p1}>total tasks executed</p>
                    <p className={mystyle.di2sub2p2}>1.2M</p>
                </div>
                <div className={mystyle.di2sub3}>
                    <div className={mystyle.di2sub31}>
                        <p className={mystyle.di2sub31p1}><i class="bi bi-cpu"></i></p>
                        <p className={mystyle.di2sub31p2}>42.8%</p>
                    </div>
                    <p className={mystyle.di2sub3p1}>server load (avg)</p>
                    <p className={mystyle.di2sub3p2}>42.8%</p>
                </div>
                <div className={mystyle.di2sub4}>
                    <div className={mystyle.di2sub41}>
                        <p className={mystyle.di2sub41p1}><i class="bi bi-activity"></i></p>
                        <p className={mystyle.di2sub41p2}>99.99%</p>
                    </div>
                    <p className={mystyle.di2sub4p1}>uptime(330D)</p>
                    <p className={mystyle.di2sub4p2}>100%</p>
                </div>

            </div>
            <div className={mystyle.di3}>
                <div className={mystyle.di3sub1}>
                    <div className={mystyle.di3sub11}>
                        <div className={mystyle.di3sub111}>
                            <b>Employee Management</b>
                            <p>Admin perminissinons and monitor employee activity</p>
                        </div>
                        <div className={mystyle.di3sub112}>
                            <p>All</p>
                            <p>Actions</p>
                            <p>Guests</p>
                        </div>
                    </div>
                    <div className={mystyle.di3sub12}>
                        <p className={mystyle.di3sub12p1}>Employee</p>
                        <p className={mystyle.di3sub12p2}>Role</p>
                        <p className={mystyle.di3sub12p3}>Status</p>
                        <p className={mystyle.di3sub12p4}>Last Active</p>
                        <p className={mystyle.di3sub12p5}>Actions</p>

                    </div>
                    <div className={mystyle.di3sub13}>
                        <div className={mystyle.di3sub131}>

                            <img src="" alt="img" />

                            <div className={mystyle.di3sub1312}>
                                <p>Sarah Connor</p>
                                <p>sarah11@gmail.com</p>
                            </div>

                        </div>
                        <p className={mystyle.di3sub13p1}>Manager</p>
                        <p className={mystyle.di3sub13p2}>active</p>
                        <p className={mystyle.di3sub13p3}>-</p>
                        <p className={mystyle.di3sub13p4}>---</p>
                    </div>
                    <div className={mystyle.di3sub14}>
                        <div className={mystyle.di3sub141}>

                            <img src="" alt="img" />

                            <div className={mystyle.di3sub1412}>
                                <p>Sarah Connor</p>
                                <p>sarah11@gmail.com</p>
                            </div>

                        </div>
                        <p className={mystyle.di3sub14p1}>senior Dev</p>
                        <p className={mystyle.di3sub14p2}>active</p>
                        <p className={mystyle.di3sub14p3}>-</p>
                        <p className={mystyle.di3sub14p4}>---</p>
                    </div>
                    <div className={mystyle.di3sub15}>
                        <div className={mystyle.di3sub151}>

                            <img src="" alt="img" />

                            <div className={mystyle.di3sub1512}>
                                <p>Sarah Connor</p>
                                <p>sarah11@gmail.com</p>
                            </div>

                        </div>
                        <p className={mystyle.di3sub15p1}>system admin</p>
                        <p className={mystyle.di3sub15p2}>subspended</p>
                        <p className={mystyle.di3sub15p3}>-</p>
                        <p className={mystyle.di3sub15p4}>---</p>
                    </div>

                </div>
                <div className={mystyle.di3sub2}>
                    <div className={mystyle.di3sub2d1}>
                        <div className={mystyle.di3sub2d11}>
                            <p className={mystyle.au}>Audit Log</p>
                            <p className={mystyle.li}>live stymeam</p>
                        </div>
                        <div className={mystyle.di3sub2d12}>
                            <p className={mystyle.lo}><i class="bi bi-lock"></i></p>
                            <div className={mystyle.lo1}>
                                <p className={mystyle.login}>login failure</p>
                                <p className={mystyle.login1}>just now</p>
                            </div>
                        </div>
                        <div className={mystyle.di3sub2d13}>
                            <p className={mystyle.lo}><i class="bi bi-person-plus-fill"></i></p>
                            <div className={mystyle.lo1}>
                                <p className={mystyle.new}>new asmin role created 'auditor</p>
                                <p p className={mystyle.new1}>14 min ago</p>
                            </div>
                        </div>
                        <div className={mystyle.di3sub2d14}>
                            <p className={mystyle.lo}><i class="bi bi-database"></i></p>
                            <div className={mystyle.lo1}>
                                <p className={mystyle.week}>weekly DB maintence Frished</p>
                                <p className={mystyle.week1}>2 hours ago</p>
                            </div>
                        </div>

                    </div>
                    <div className={mystyle.di3sub2d2} >

                        <p className={mystyle.node}>node cluster 01</p>

                        <div className={mystyle.cpu} >
                            <div className={mystyle.cpu1}>
                                <p> cpu usage</p>
                                <p>42%</p>
                            </div>
                            <p className={mystyle.li1}></p>
                            <p className={mystyle.cli1}></p>
                        </div>
                        <div className={mystyle.memo}>
                            <div className={mystyle.memo1}>
                                <p> memory pool</p>
                                <p>68%</p>
                            </div>
                            <p className={mystyle.li2}></p>
                            <p className={mystyle.cli2}></p>
                        </div>
                        <div className={mystyle.disk}>
                            <div className={mystyle.disk1}>
                                <p>disk i/o</p>
                                <p>12%</p>
                            </div>
                            <p className={mystyle.li3}></p>
                            <p className={mystyle.cli3}></p>
                        </div>

                        <button className={mystyle.view}>view Resourec Monitor</button>

                    </div>
                </div>

            </div>
        </div >
    )
}

export default MainBody;