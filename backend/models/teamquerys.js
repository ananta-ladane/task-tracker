const { ObjectId } = require("mongodb");


const getdb = require("../utils/database").getdb;


class Team {

    inserTeam(tname, pname, nofc, eids, head) {

        let db = getdb();

        let data = db.collection("team").insertOne({ teamname: tname, proname: pname, nofc: nofc, emp: [eids], head: head }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data
    }

    loginData(email) {

        let db = getdb();

        let data = db.collection("team").find({ head: email }).toArray().then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
        })

        return data;
    }

    dataGetid(id) {

        let db = getdb();

        let fid = new ObjectId(id)

        let data = db.collection("team").find({ _id: fid }).toArray().then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data;
    }

    getalldata() {

        let db = getdb();

        let data = db.collection("team").find().toArray().then((success) => {
            console.log(success)
            return success

        }).catch((error) => {
            console.log(error)
            return error
        })

        return data
    }

    datachange(id, udata) {

        let db = getdb();

        let fid = new ObjectId(id)

        let data = db.collection("team").updateOne({ _id: fid }, { $set: udata }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data;
    }
}


exports.Team = Team;