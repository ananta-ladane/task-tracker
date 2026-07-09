const { ObjectId, ReturnDocument } = require("mongodb");
const { get } = require("../router/router");


const getdb = require("../utils/database").getdb;


class Employee {

    insertemp(name, email, age, role, salary) {
        let db = getdb();

        let data = db.collection("employee").insertOne({ username: name, email: email, age: age, role: role, salary: salary }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data

    }

    empdata() {
        let db = getdb();

        let data = db.collection("employee").find().toArray().then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data
    }

    empdatadel(id) {
        let db = getdb();

        let did = new ObjectId(id)
        let data = db.collection("employee").deleteOne({ _id: did }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data
    }

    idempdata(id) {
        let db = getdb();
        let fid = new ObjectId(id)
        let data = db.collection("employee").findOne({ _id: fid }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data
    }

    updateemp(id, data) {

        let db = getdb();
        let uid = new ObjectId(id)

        let udata = db.collection("employee").updateOne({ _id: uid }, { $set: data }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return udata
    }

    empLogin(email) {

        let db = getdb();

        let data = db.collection("employee").find({ email: email }).toArray().then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data
    }

    empwithid(id) {
        let db = getdb();

        let fid = new ObjectId(id);
        let data = db.collection("employee").find({ _id: fid }).toArray().then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data;
    }

    dataallemp(id) {


        let db = getdb()

        let fid = new ObjectId(id)

        let data = db.collection("employee").aggregate([{ $match: { _id: fid } }, { $lookup: { from: "task", localField: "email", foreignField: "email", as: "taskData" }} ]).toArray().then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data;
    }
}


exports.Employee = Employee;

