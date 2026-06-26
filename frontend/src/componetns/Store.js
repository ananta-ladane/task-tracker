import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import TeamSignup from "./manager/auth/TeamSignup";


const comData = createSlice({

    name: "myreducer",
    initialState: {

        mainData: {
            employeeData: [

            ],

            teamData: [

            ]
        },

        aaddminData: [],

        teamSignupdata: [],

        currentid: [],

        selectedemp: null,

        emptask: [],

        teamid: [], // in working

        // verified task emp id sava
        // currentemp: [],
        selectedteam: null,

        islogin: false    // in working


    },
    reducers: {



        addTeamid(state, action) {

            state.teamid = action.payload
            console.log(state.teamid)
            console.log("this is the team id in store")
        },

        // addminapiData(state, action) {
        //     console.log(action.payload)
        //     state.aaddminData = action.payload
        //      console.log(JSON.parse(JSON.stringify(state)))
        //      console.log(JSON.parse(JSON.stringify(state.aaddminData)));
        //      console.log(state.aaddminData)
        //     console.log("this is the addminapi data")
        // },


        addAdminlocalData(state, action) {
            state.aaddminData = action.payload;
            console.log(state.aaddminData)
        },



        // addAmindata(state, action) {

        //     state.aaddminData = [...state.aaddminData || [], action.payload]
        //     console.log(state.aaddminData);

        // },


        //login validation


        // checkData(state, action) {

        //     let Username = action.payload.Username;
        //     let Email = action.payload.Email;
        //     let Pass = action.payload.Pass;

        //     console.log(Username);
        //     console.log(Email);
        //     console.log(Pass);
        //     console.log(state.aaddminData);
        //     // state.aaddminData.map((e) => {
        //     //     console.log(e)
        //     // });

        //     let demoaa = JSON.parse(JSON.stringify(state.aaddminData));
        //     console.log(demoaa);
        //     const aldata = demoaa.find((p) => { return (p.Pass === Pass) });
        //     console.log(aldata)

        //     if (aldata) {
        //         state.islogin = true
        //         console.log(state.islogin)
        //         console.log("Login Successfully...!")
        //     }

        // },



        // team signup operation

        // signupTeamdata(state, action) {

        //     state.teamSignupdata = action.payload;
        //     console.log(state.teamSignupdata)
        // },

        // sendteamSigndata(state, action) {

        //     state.teamSignupdata = [...state.teamSignupdata, action.payload];
        //     console.log(state.teamSignupdata);

        // },


        // checkLogin(state, action) {

        //     let name = action.payload.Name;
        //     let email = action.payload.Email;
        //     let pass = action.payload.Pass;

        //     console.log(name)
        //     console.log(email)
        //     console.log(pass)
        //     console.log("this is the login data in store")

        //     let demoaa = JSON.parse(JSON.stringify(state.teamSignupdata));
        //     console.log(demoaa)

        //     let tldata = demoaa.find((p) => { return (p.Pass === pass) })

        //     if (tldata) {
        //         state.islogin = true;
        //         console.log(state.islogin)
        //         console.log("login susseccsully..")
        //     }
        // },


        tLogout(state, action) {
            state.islogin = false
        },



        //   emp data come to aip
        // empapiData(state, action) {
        //     state.mainData.employeeData = action.payload;
        // },

        // // team data come to api
        // temaapiData(state, action) {
        //     state.mainData.teamData = action.payload;
        // },

        // emp data opeartiones

        // addlocalData(state, action) {
        //     state.mainData.employeeData = action.payload
        // },

        // addDataa(state, action) {
        //     state.mainData.employeeData = [...state.mainData.employeeData, action.payload]
        //     // console.log(state.employeeData);
        // },

        // saveId(state, action) {
        //     state.selectedemp = action.payload;

        //     console.log(state.selectedemp)
        // },

        // upData(state, action) {

        //     let id = action.payload.id;
        //     let Eid = action.payload.Eid;
        //     console.log(id || Eid)

        //     console.log("this is the whole updated data" + action.payload)
        //     console.log(JSON.stringify(action.payload))

        //     let empIndex = state.mainData.employeeData.findIndex(
        //         (p) => (p.id || p.Eid) === (id || Eid)
        //     );

        //     if (empIndex !== -1) {
        //         state.mainData.employeeData[empIndex] = action.payload;
        //     }
        // },

        // empData(state, action) {

        //     state.currentemp = action.payload.Eid;
        //     console.log(state.currentemp)
        // },

        isLogin(state, action) {

            state.islogin = true
        },
        // removeData(state, action) {
        //     let id = action.payload.did;
        //     console.log("this is the remove id i found" + id)
        //     // console.log(action.payload)

        //     return {
        //         ...state, mainData: {
        //             ...state.mainData,
        //             employeeData: state.mainData.employeeData.filter((p) => (p.id || p.Eid) !== id)
        //         }
        //     }


        // },



        //ADD Task From teamleder to emp
        // empTaskadd(state, action) {
        //     state.emptask = [...state.emptask, action.payload]
        //     console.log(state.emptask)
        //     console.log("this is the emptask added successfully...!")
        // },


        // addLocaltask(state, action) {
        //     state.emptask = action.payload
        //     console.log(state.emptask);
        //     console.log("this is the store")
        // },


        // team data operstions

        //local data

        // saveLocalteam(state, action) {
        //     state.mainData.teamData = action.payload;

        //     console.log(state.mainData.teamData)
        //     console.log("this is the team local data save")
        // },


        // addteamData(state, action) {
        //     state.mainData.teamData = [...state.mainData.teamData || [], action.payload]

        //     console.log(state.mainData.teamData)
        // },

        // savaTdata(state, action) {
        //     state.selectedteam = action.payload
        //     console.log(state.selectedteam)
        // },

        // uteamData(state, action) {
        //     let Tid = action.payload.Tid;
        //     let id = action.payload.id;

        //     let teamIndex = state.mainData.teamData.findIndex((p) => (p.id || p.Tid) === (id || Tid))

        //     if (teamIndex !== -1) {
        //         state.mainData.teamData[teamIndex] = action.payload;
        //     }
        // },

        // removeteamData(state, action) {

        //     let id = action.payload.rid;
        //     console.log(id)

        //     return {
        //         ...state, mainData: {
        //             ...state.mainData, teamData: state.mainData.teamData.filter((p) => (p.id || p.Tid) !== id)
        //         }
        //     }

        // },



        // admin logout funcation
        logOut(state, action) {

            state.islogin = false
            console.log(state.islogin)
            console.log("logout successfully...!")
        }

    }
});

const store = configureStore({ reducer: comData.reducer });
export default store;
export const actions = comData.actions;


// export const empgetData = () => {
//     return (dispatcher) => {

//         const empoutput = () => {
//             axios.get("https://69691fb369178471522caa48.mockapi.io/demo_one").then((success) => {
//                 console.log(success)
//                 dispatcher(actions.empapiData(success.data))
//             }).catch((error) => {
//                 console.log(error)
//             });
//         }
//         empoutput();

//     }


// }


// export const teamgetData = () => {
//     return (dispatcher) => {

//         const teamoutput = () => {
//             axios.get("https://serve.faux-api.com/5671dcdc6dcd56e6955de245/teams").then((success) => {
//                 console.log(success);
//                 dispatcher(actions.temaapiData(success.data.result))
//             }).catch((error) => {
//                 console.log(error);
//             });
//         }
//         teamoutput();
//     }
// }


// export const addminData = () => {

//     return (dispatcher) => {

//         const addminoutput = () => {
//             axios.get("https://serve.faux-api.com/5671dcdc6dcd56e6955de245/addmindata").then((success) => {
//                 // console.log(success.data.result)
//                 dispatcher(actions.addminapiData(success.data.result))
//             }).catch((error) => {
//                 console.log(error)
//             });
//         }
//         addminoutput()

//     }
// }

// export const sendempData = () => {

//     return (dispatcher, getstate) => {

//         const state = getstate();
//         const edata = state.mainData.employeeData;

//         const sendData = () => {
//             axios.post("https://69691fb369178471522caa48.mockapi.io/demo_one", edata).then((success) => {
//                 console.log(success);
//             }).catch((error) => {
//                 console.log(error);
//             })
//         }
//         sendData();

//     }

// }