const { ObjectId } = require("mongodb");

const getdb = require("../utils/database").getdb;



class Task {

    insertData(tid, email, etask, time) {
        let db = getdb()

        let data = db.collection("task").insertOne({ tid: tid, email: email, task: etask, time: time, dstatus: "1", tstatus: "0", taskcnl: "5" }).then((success) => {
            console.log(success)

            // if (success.acknowledged === true) {  // insert task status....
            //     console.log("task status data insert successfully...!")
            //     let taid = success.insertedId;
            //     let sdata = db.collection("taskstatus").insertOne({ taskid: taid, teamid: tid, email: email, tstatus: "0", taskcnl:"5" }).then((success) => {
            //         console.log(success)
            //         return success
            //     }).catch((error) => {
            //         console.log(error)
            //         return error
            //     })

            //     return sdata
            // } else {
            //     console.log("data isnot insert")
            // }
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data;
    }

    alldataemptema(fid) {
        let db = getdb();

        let data = db.collection("task").aggregate([{ $match: { tid: fid } }]).toArray().then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data;
    }

    updatetask(id, edata) {
        let db = getdb();
        let fid = new ObjectId(id)
        let data = db.collection("task").updateOne({ _id: fid }, { $set: edata }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data
    }

    deltask(id) {

        let db = getdb()
        let fid = new ObjectId(id);
        let data = db.collection("task").updateOne({ _id: fid }, { $set: { status: "0" } }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data
    }

    acceptstatus(id) {

        let db = getdb();

        let fid = new ObjectId(id)

        let data = db.collection("task").updateOne({ _id: fid }, { $set: { tstatus: "1" } }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data;
    }

    cnltask(id) {
        let db = getdb();

        let fid = new ObjectId(id)

        let data = db.collection("task").updateOne({ _id: fid }, { $set: { tstatus: "3" } }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data;
    }

    stadone(id) {


        let db = getdb(id);

        let fid = new ObjectId(id);

        let data = db.collection("task").updateOne({ _id: fid }, { $set: { tstatus: "2" } }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data;

    }



}

exports.Task = Task;