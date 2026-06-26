
// import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import mystyle from "./Teamdata.module.css"
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../Store";
import { Link } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";


const TeamData = () => {



    // const tsdata = useSelector((state) => { return state.mainData })
    // console.log(tsdata)

    const dispatcher = useDispatch();
    const navigate = useNavigate();





    const [tdata, setTdata] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/getteamsdata").then((success) => {
            console.log(success)
            setTdata(success.data);
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const sendTdata = (item) => {
        // dispatcher(actions.savaTdata({ item }));

        let id = item._id;
        let tname = item.teamname;
        let pname = item.proname;
        let nc = item.nofc;
        let emp = item.emp;
        let head = item.head;

        navigate(`/maintpage/edittemdata/${id}`, { state: { Tname: tname, Pname: pname, Nc: nc, Emp: emp, Head: head } })
    }

    const reteamData = (rid) => {
        dispatcher(actions.removeteamData({ rid }))
    }


    return (
        <div className={mystyle.main}>


            <div className={mystyle.sub}>
                <h1>Team Data</h1>
                <div className={mystyle.sub1}>
                    {

                        tdata.map((item) => {

                            return (
                                <div key={item.id} className={mystyle.tda}>
                                    <p>id : {item._id}</p>
                                    <p>Tname : {item.teamname}</p>
                                    <p>Project : {item.proname}</p>
                                    <p>NofC : {item.nofc}</p>
                                    <p>empid : {item.emp.join(",")}</p>

                                    <p>Head : {item.head}</p>
                                    <div>
                                        <button className={mystyle.btn1} onClick={() => sendTdata(item)}><i class="bi bi-pen"></i></button>
                                        <button className={mystyle.btn2} onClick={() => reteamData(item._id)}><i class="bi bi-trash3"></i></button>
                                    </div>

                                </div>
                            )
                        })


                    }
                </div>

            </div>
        </div>
    )
}

export default TeamData;