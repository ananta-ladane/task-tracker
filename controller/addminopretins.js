const { json } = require("body-parser");

const comData = require("../models/addminquerys").comData;



exports.dataInsert = (req, res) => {

    // console.log(req.body);

    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;

    console.log(username)
    console.log(email)
    console.log(password)


    let data = new comData();

    let result = data.dataInser(username, email, password);

    result.then((success) => {
        console.log(success)
    }).catch((error) => {
        console.log(error)
    })

}


exports.adminCheck = (req, res) => {


    console.log(req.body);
    let email = req.body.email;
    let pass = req.body.password;

    console.log(email)
    console.log(pass)

    let data = new comData();

    let result = data.checkadmin(email, pass);

    result.then((success) => {
        console.log(success);
        res.json(success)

    }).catch((error) => {
        console.log(error)
    })
}



