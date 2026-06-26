
const managerData = require("../models/managerquerys").managerData;



exports.insertMdata = (req, res) => {

    console.log(req.body)

    let name = req.body.username;
    let email = req.body.email;
    let pass = req.body.password;

    let data = new managerData();

    let result = data.managerInsert(name, email, pass);

    result.then((success) => {
        console.log(success)
    }).catch((error) => {
        console.log(error)
    })
}




exports.loginManger = (req, res) => {
    console.log(req.body)

    let email = req.body.email;
    let pass = req.body.password;

    let data = new managerData();

    let result = data.mLogin(email, pass);

    result.then((success) => {
        console.log(success)

        res.json(success)

    }).catch((error) => {
        console.log(error)
    })
}