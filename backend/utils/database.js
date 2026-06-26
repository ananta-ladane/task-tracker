
const mongooes = require("mongodb");
const MongoClient = mongooes.MongoClient;
let _db;

const mongoconnect = (callback) => {

    MongoClient.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.6").then((success) => {
        console.log(success)
        _db = success.db("companydata");
        console.log("database connect successfully...!")
    }).catch((error) => {
        console.log(error)
    })

    callback();
}


const getdb = () => {
    if (_db) {
        return _db
    } else {
        console.log("databse not found")
    }
}

exports.mongoconnect = mongoconnect;
exports.getdb = getdb;


