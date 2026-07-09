
const getdb = require("../utils/database").getdb;


class managerData {

    managerInsert(name, email, pass) {

        let db = getdb();

        let data = db.collection("manager").insertOne({ username: name, email: email, password: pass }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data;
    }

    mLogin(email, pass) {
        let db = getdb();

        let data = db.collection("manager").find({ email: email, password: pass }).toArray().then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data

    }
}

exports.managerData = managerData;