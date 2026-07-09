
const express = require("express");
const app = express();

const bodyparser = require("body-parser");
const router = require("./router/router");
const mongoconnect = require("./utils/database").mongoconnect;
const cors = require("cors");


app.use(cors());

app.use(express.json());

app.use(bodyparser.urlencoded({ extended: false }));



app.use(router)


mongoconnect(() => {
    app.listen(5000)
})
