
const Task = require("../models/taskquerys").Task;
const Tastatus = require("../models/tastatusquerys").Tastatus;


exports.taskDatainsert = (req, res) => {

    console.log(req.body)

    let tid = req.body.Tid;
    let email = req.body.Email;
    let etask = req.body.Task;
    let time = req.body.Time;

    let data = new Task();

    let result = data.insertData(tid, email, etask, time);

    result.then((success) => {
        console.log(success)

    }).catch((error) => {
        console.log(error)
    })


}


exports.getempteam = (req, res) => {
    console.log(req.params);

    let fid = req.params.id;

    let data = new Task();

    let result = data.alldataemptema(fid);

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })
}

exports.updateDatatask = (req, res) => {
    console.log(req.params)

    let id = req.params.id;

    let edata = {
        task: req.body.Task,
        time: req.body.Time
    }

    console.log(id)
    console.log(edata)

    let update = new Task();

    let result = update.updatetask(id, edata)

    result.then((success) => {
        console.log(success)
    }).catch((error) => {
        console.log(error)
    })
}


exports.taskDelete = (req, res) => {
    console.log(req.params)

    let id = req.params.id;

    let data = new Task();

    let result = data.deltask(id).then((success) => {
        console.log(success)
    }).catch((error) => {
        console.log(error)
    })
}

exports.statuschange = (req, res) => {
    console.log(req.params)

    let id = req.params.id;

    let data = new Task();

    let result = data.acceptstatus(id)

    result.then((success) => {
        console.log(success)
    }).catch((error) => {
        console.log(error)
    })


}

exports.statusdone = (req, res) => {
    console.log(req.params)

    let id = req.params.id;

    let data = new Task();

    let result = data.stadone(id);

    result.then((success) => {
        console.log(success)

    }).catch((error) => {
        console.log(error)
    })
}

exports.taskcancel = (req, res) => {

    console.log(req.params)

    let id = req.params.id;

    let data = new Task();

    let result = data.cnltask(id);

    result.then((success) => {
        console.log(success)
    }).catch((error) => {
        console.log(error)
    })
}