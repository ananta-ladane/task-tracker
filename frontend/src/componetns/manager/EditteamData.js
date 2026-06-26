import { useDispatch } from "react-redux"
import mystyle from './Editteam.module.css'
import { useEffect, useState } from "react";
import { actions } from "../Store";
import { useLocation, useNavigate, useParams } from "react-router";
import axios from "axios";


const EditteamData = () => {

    // const teamdata = useSelector((state) => { return state.selectedteam });
    // console.log(teamdata)

    const dispatcher = useDispatch();
    const navigate = useNavigate();

    const { id } = useParams();

    const location = useLocation();

    const ltname = location.state.Tname;
    const lpname = location.state.Pname;
    const lnc = location.state.Nc;
    const lemp = location.state.Emp;
    const lhead = location.state.Head;


    console.log(lemp)



    const [tname, setTname] = useState(ltname);
    const [pname, setPname] = useState(lpname);
    const [nofc, setNofc] = useState(lnc);
    const [emp, setEmp] = useState(lemp);
    const [head, setHead] = useState(lhead);



    const getTname = (event) => {
        setTname(event.target.value)
    }


    const getPname = (event) => {
        setPname(event.target.value)
    }

    const getNofc = (event) => {
        setNofc(event.target.value)
    }

    const getEmp = (event) => {
        setEmp(event.target.value)
    }

    const getHead = (event) => {
        setHead(event.target.value)
    }

    const savaData = () => {



        axios.post(`http://localhost:5000/updateteamdata/${id}`, { Tname: tname, Pname: pname, Nc: nofc, Emp: emp, Head: head }).then((success) => {
            console.log(success)
        }).catch((error) => {
            console.log(error)
        })

        // dispatcher(actions.uteamData(utdata));
        navigate("/maintpage")


    }


    return (

        <div className={mystyle.main}>
            <div className={mystyle.sub}>
                <h3>this is the tam id: {id}</h3>
                <div className={mystyle.myform}>
                    <input type="text" placeholder="Enter team id" defaultValue={id} disabled />
                    <input type="text" placeholder="Enter the team name" defaultValue={ltname} onChange={getTname} />
                    <input type="text" placeholder="Emter the team project name" defaultValue={lpname} onChange={getPname} />
                    <input type="number" placeholder="Number of candidates" defaultValue={lnc} onChange={getNofc} />
                    <input type="text" placeholder="Enter emp id" defaultValue={lemp} onChange={getEmp} disabled />
                    <input type="text" placeholder="Enter the head of team" defaultValue={lhead} onChange={getHead} />
                    <button className={mystyle.btn1} onClick={savaData}>update Data</button>
                </div>
            </div>
        </div>
    )
}

export default EditteamData