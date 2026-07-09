
const Team = require("../models/teamquerys").Team;



exports.teaminsert = (req, res) => {
    console.log(req.body)

    let tname = req.body.teamname;
    let pname = req.body.projectname;
    let nofc = req.body.nofc;
    let eids = req.body.empid;
    let head = req.body.head;

    let data = new Team();

    let result = data.inserTeam(tname, pname, nofc, eids, head);

    result.then((success) => {
        console.log(success)
    }).catch((error) => {
        console.log(error)
    })
}


exports.headLogin = (req, res) => {
    console.log(req.body)

    let email = req.body.Email;
    let data = new Team();

    let result = data.loginData(email);

    result.then((success) => {
        console.log(success)

        res.json(success)
    }).catch((error) => {
        console.log(error)
    })

}

exports.getdataid = (req, res) => {
    console.log(req.params)

    let fid = req.params.id

    console.log(fid)
    console.log("this is the id find data on tam for head")

    let data = new Team();

    let result = data.dataGetid(fid);

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })
}

exports.getallteams = (req, res) => {


    let data = new Team();

    let result = data.getalldata();

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })

}

exports.chnageteamdata = (req, res) => {

    console.log(req.params)

    let id = req.params.id

    let udata = {
        teamname: req.body.Tname,
        proname: req.body.Pname,
        nofc: req.body.Nc,
        emp: req.body.Emp,
        head: req.body.Head
    }

    let data = new Team();

    let result = data.datachange(id, udata);

    result.then((success) => {
        console.log(success)
    }).catch((error) => {
        console.log(error)
    })

}