const { ObjectId } = require("mongodb");

const getdb = require("../utils/database").getdb;



class Task {

    insertData(tid, email, etask, time) {
        let db = getdb()

        let data = db.collection("task").insertOne({ tid: tid, email: email, task: etask, time: time, status: "1" }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data;
    }

    alldataemptema(fid) {
        let db = getdb();

        let data = db.collection("task").find({  tid: fid }).toArray().then((success) => {
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

}

exports.Task = Task;