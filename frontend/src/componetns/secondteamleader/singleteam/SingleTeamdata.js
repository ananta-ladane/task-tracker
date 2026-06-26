
import { Link, useParams } from 'react-router';
import mystyle from './SingleTeam.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actions } from '../../Store';
import axios from 'axios';
import { useState } from 'react';


const SingleTeamdata = () => {

    // const tsdata = useSelector((state) => { return state.mainData })
    // console.log(tsdata)

    const disptcher = useDispatch();

    const { id } = useParams();
    console.log(id)


    const [data, setData] = useState([]);
    console.log(data)


    useEffect(() => {
        // const saveteamdata = JSON.parse(localStorage.getItem("tdata"));
        // console.log(saveteamdata)

        // disptcher(actions.saveLocalteam(saveteamdata));

        console.log("this is woking propery")

        axios.post(`http://localhost:5000/getheaddata/${id}`).then((success) => {
            console.log(success)
            setData(success.data)
        }).catch((error) => {
            console.log(error)
        })

    }, [])

    return (
        <div className={mystyle.main}>


            <div className={mystyle.sub}>
                <h1>Team Data</h1>
                <div className={mystyle.sub1}>
                    {

                        data.map((item) => {
                            // console.log(item._empid);
                            // console.log(typeof item._empid);
                            // console.log(Array.isArray(item._empid));
                            return (
                                <div key={item.id} className={mystyle.tda}>
                                    <p>id : {item._id}</p>
                                    <p>Tname : {item.teamname}</p>
                                    <p>Project : {item.proname}</p>
                                    <p>NofC : {item.nofc}</p>
                                    <p>empid : {item.emp.join (",")}</p>
                                    <p>Head : {item.head}</p>


                                </div>
                            )
                        })


                    }
                </div>

            </div>
        </div>
    )
}

export default SingleTeamdata;