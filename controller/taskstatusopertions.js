

const Tastatus = require("../models/tastatusquerys").Tastatus;




// exports.statuschange = (req, res) => {
//     console.log(req.params)

//     let id = req.params.id;

//     let data = new Tastatus();

//     let result = data.acceptstatus(id)

//     result.then((success) => {
//         console.log(success)
//     }).catch((error) => {
//         console.log(error)
//     })


// }

// exports.statusdone = (req, res) => {
//     console.log(req.params)

//     let id = req.params.id;

//     let data = new Tastatus();

//     let result = data.stadone(id);

//     result.then((success) => {
//         console.log(success)
//         console.log(success[0].cnltask)
//     }).catch((error) => {
//         console.log(error)
//     })
// }