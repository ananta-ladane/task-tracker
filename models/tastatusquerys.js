const { ObjectId } = require("mongodb");


const getdb = require("../utils/database").getdb;



class Tastatus {

    // inserttasks(taid, tid, email) {

    //     let db = getdb();

    //     let data = db.collection("taskstatus").insertOne({ taskid: taid, teamid: tid, email: email, tstatus: "0", cnltask: "5" }).then((success) => {
    //         console.log(success)
    //         return success
    //     }).catch((error) => {
    //         console.log(error)
    //         return error
    //     })

    //     return data
      
    // }

    // acceptstatus(id) {

    //     let db = getdb();

    //     let fid = new ObjectId(id)

    //     let data = db.collection("taskstatus").updateOne({ _id: fid }, { $set: { tstatus: "1" } }).then((success) => {
    //         console.log(success)
    //         return success
    //     }).catch((error) => {
    //         console.log(error)
    //         return error
    //     })

    //     return data;
    // }

    // stadone(id) {


    //     let db = getdb(id);

    //     let fid = new ObjectId(id);

    //     let data = db.collection("taskstatus").updateOne({ _id: fid }, { $set: { tstatus: "2" } }).then((success) => {
    //         console.log(success)
    //         return success
    //     }).catch((error) => {
    //         console.log(error)
    //         return error
    //     })

    //     return data;

    // }

}


exports.Tastatus = Tastatus;