const express = require("express");
const { dataInsert, adminCheck } = require("../controller/addminopretins");
const { insertMdata, loginManger } = require("../controller/manageroprations");
const { insertEmp, empgetdata, empdatadel, empidata, empupdate, loginemp, idwithdata, getalldata } = require("../controller/empoprations");
const { teaminsert, headLogin, getdataid, getallteams, chnageteamdata } = require("../controller/teamopetions");
const { taskDatainsert, getempteam, updateDatatask, taskDelete } = require("../controller/taskopertions");

const router = express.Router();



//taskemp
router.post("/deletetask/:id", taskDelete)
router.post("/changedata/:id", updateDatatask)
router.post("/savadata", taskDatainsert);
router.post("/teamempdata/:id", getempteam);


// team
router.post("/updateteamdata/:id", chnageteamdata)
router.get("/getteamsdata", getallteams)
router.post("/getheaddata/:id", getdataid);
router.post("/loginhead", headLogin);
router.post("/teamdatainsert", teaminsert);

//  emp data
router.post("/empalldata/:id", getalldata);
router.post("/empdataid/:id", idwithdata);
router.post("/emplogin", loginemp);
router.post("/updatedata/:id", empupdate);
router.post("/getidata/:id", empidata);
router.delete("/empdelete/:id", empdatadel);
router.get("/empgets", empgetdata);
router.post("/empinsert", insertEmp);


// manager signup & login

router.post("/managerlogin", loginManger);
router.post("/signupmanager", insertMdata);


// admmin signup & login 
router.post("/checkadmin", adminCheck);
router.post("/addmininsert", dataInsert);

router.get("/", (req, res) => {
    res.send("<h5>this is the router folder text</h5>")
})


module.exports = router;