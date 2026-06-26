import mystyle from './EmpBody.module.css';


const EmpBody = () => {
    return (
        <div className={mystyle.main}>
            <div className={mystyle.di1}>
                <div className={mystyle.di1sub1}>
                    <h4>My Productivity</h4>
                    <p>Focus on your goals Alex. You hava 5 tasks due in the next 48 hours.</p>
                </div>
                <div className={mystyle.di1sub2}>
                    <p>my day</p>
                    <p>Reports</p>
                </div>
            </div>
            <div className={mystyle.di2}>
                <div className={mystyle.di2sub1}>
                    <div className={mystyle.di2sub1d1}>
                        <p><i class="bi bi-check2-circle"></i></p>
                        <p>85%</p>
                    </div>
                    <p className={mystyle.di2sub1p1}>Tasks Completed</p>
                    <p className={mystyle.di2sub1p2}>32</p>
                </div>
                <div className={mystyle.di2sub2}>
                    <div className={mystyle.di2sub2d1}>
                        <p><i class="bi bi-clock"></i></p>
                        <p><i class="bi bi-arrow-up-short"></i>12</p>
                    </div>
                    <p className={mystyle.di2sub2p1}>Pending Items</p>
                    <p className={mystyle.di2sub2p2}>12</p>
                </div>
                <div className={mystyle.di2sub3}>
                    <div className={mystyle.di2sub3d1}>
                        <p><i class="bi bi-stopwatch"></i></p>
                        <p><i class="bi bi-plus"></i>2h</p>
                    </div>
                    <p className={mystyle.di2sub3p1}>Time Tracked</p>
                    <p className={mystyle.di2sub3p2}>24.5h</p>
                </div>
                <div className={mystyle.di2sub4}>
                    <div className={mystyle.di2sub4d1}>
                        <p><i class="bi bi-arrow-up-right"></i></p>
                        <p>+5%</p>
                    </div>
                    <p className={mystyle.di2sub4p1}>Weekly Progress</p>
                    <p className={mystyle.di2sub4p2}>72%</p>
                </div>
            </div>
            <div className={mystyle.di3}>
                <div className={mystyle.di3sub1}>
                    <div className={mystyle.di3sub1d1}>
                        <h4>My Assigned Tasks</h4>
                        <div className={mystyle.di3sub1d1sub1}>
                            <p className={mystyle.di3sub1d1sub1p1}><i class="bi bi-filter"></i></p>
                            <p className={mystyle.di3sub1d1sub1p2}><i class="bi bi-grid"></i></p>
                        </div>
                    </div>
                    <div className={mystyle.di3sub1d2}>
                        <div className={mystyle.di3sub1d2sub1}>
                            <p className={mystyle.di3sub1d2sub1p1}><i class="bi bi-circle-fill"></i> DOING <span>02</span></p>
                            <div className={mystyle.di3sub1d2sub1d1}>
                                <div className={mystyle.di3sub1d2sub1d1sub1}>
                                    <p>Feature Dev</p>
                                    <p>83%</p>
                                </div>
                                <p className={mystyle.dark}>Dark Mode Toggle Component</p>
                                <p className={mystyle.dark1}>Implement theme swiching logic using talwind dark selector and locaStorags state</p>
                                <div className={mystyle.di3sub1d2sub1sub2}>
                                    <p> <i class="bi bi-calendar"></i> Dua Today</p>
                                    <p><i class="bi bi-person-circle"></i></p>
                                </div>
                            </div>
                            <div className={mystyle.di3sub1d2sub1d2}>
                                <p>UI FIX</p>
                                <p>Mobile Responsive Sidebar</p>
                                <p>Fix hamburger menu oerlap on iPhone SE 375px viweport breakpoint </p>
                                <p><i class="bi bi-clock"></i> 2h</p>
                            </div>
                        </div>
                        <div className={mystyle.di3sub1d2sub2}>
                            <p className={mystyle.di3sub1d2sub2p1}><i class="bi bi-circle-fill"></i> DONE <span>05</span></p>

                            <div className={mystyle.di3sub1d2sub2d1}>
                                <p className={mystyle.auth}>Auth Middleware setup</p>
                                <div className={mystyle.di3sub1d2sub2d1sub1}>
                                    <p>SECURITY</p>
                                    <p><i class="bi bi-check-circle"></i></p>
                                </div>
                            </div>
                            <div className={mystyle.di3sub1d2sub2d1}>
                                <p className={mystyle.auth}>Reduc Store Initialization</p>
                                <div className={mystyle.di3sub1d2sub2d1sub1}>
                                    <p>AECHITECTURE</p>
                                    <p><i class="bi bi-check-circle"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={mystyle.di3sub2}>
                    <div className={mystyle.di3sub2d1}>
                        <h4>Personal Activity</h4>
                        <div className={mystyle.di3sub2d1sub1}>
                            <p className={mystyle.pen}><i class="bi bi-pen"></i></p>
                            <div className={mystyle.di3sub2d1sub1d1}>
                                <p>You updated Feature Dev documenttion</p>
                                <p>15 minites ago</p>
                            </div>
                        </div>
                        <div className={mystyle.di3sub2d1sub2}>
                            <p className={mystyle.msg}><i class="bi bi-chat-left"></i></p>
                            <div className={mystyle.di3sub2d1sub2d1}>
                                <p>Sarah Chen Meantioned you in Task 241</p>
                                <p>2 hour ago</p>
                            </div>
                        </div>
                        <div className={mystyle.di3sub2d1sub3}>
                            <p className={mystyle.check}><i class="bi bi-check-lg"></i></p>
                            <div className={mystyle.di3sub2d1sub3d1}>
                                <p>Task API Design marksed as complete</p>
                                <p>Yasteday</p>
                            </div>
                        </div>
                    </div>
                    <div className={mystyle.di3sub2d2}>
                        <h4>Upcomong Deadline</h4>

                        <div className={mystyle.di3sub2d2sub1}>
                            <p></p>
                            <p>Brand Guidelines v2</p>
                            <p>Dun in 4 hour</p>
                        </div>
                        <div className={mystyle.di3sub2d2sub2}>
                            <p></p>
                            <p>Sprint Restrospective</p>
                            <p>Dua Tommarow</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EmpBody;