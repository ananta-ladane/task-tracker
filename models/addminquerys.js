
const getdb = require('../utils/database').getdb;



class comData {

    dataInser(username, email, password) {

        let db = getdb();

        let data = db.collection("admin").insertOne({ username: username, email: email, password: password }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data;

    }


    checkadmin(email, pass) {

        let db = getdb();

        let data = db.collection("admin").find({ email: email, password: pass }).toArray().then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data;
    }
}



exports.comData = comData;