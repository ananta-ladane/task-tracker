
import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
// import EmpAdd from './componetns/EmpAdd';
import EmployeeData from './componetns/employeedata/EmployeeData';
import EditEmpdata from './componetns/employeedata/EditEmpdata';
import DashBord from './componetns/admin/addminbody/DashBord';
import SignupPage from './componetns/admin/auth/SignupPage';

import MainTpage from './componetns/manager/MainTpage';
import { useDispatch } from 'react-redux';
import { Children, useEffect } from 'react';
// import { addminData, empgetData, teamgetData } from './componetns/Store';
import EditteamData from './componetns/manager/EditteamData';
import LoginApage from './componetns/admin/auth/LoginApage';
import { actions } from './componetns/Store';
import TeamSignup from './componetns/manager/auth/TeamSignup';
import TeamLogin from './componetns/manager/auth/TeamLogin';
import TeamData from './componetns/manager/TeamData';
import EmpMain from './componetns/employeedata/EmpMain';

import MainPagett from './componetns/secondteamleader/tteambody/MainPagett';
import ComHomepage from './componetns/ComHomepage';
import SingleTeamdata from './componetns/secondteamleader/singleteam/SingleTeamdata';
import MainBody from './componetns/admin/addminbody/MainBody';
import TeamBody from './componetns/manager/TeamData';
import StBody from './componetns/secondteamleader/tteambody/StBody';
import EmpLogin from './componetns/employeedata/EmpLogin';
import EmpBody from './componetns/employeedata/EmpBody';
import EmpData from './componetns/employeedata/EmpData';
import LoginTt from './componetns/secondteamleader/auth/LoginTt';
import EmpTask from './componetns/employeedata/EmpTask';
import EditTask from './componetns/secondteamleader/tteambody/EditTask';




// import LoginPage from './componetns/LoginPage';
// import NavBar from './componetns/NavBar';


const router = createBrowserRouter([


  {
    path: "/",
    element: <ComHomepage />
  },
  {
    path: "/addminsigup",
    element: <SignupPage />
  },

  {
    path: "/login",
    element: < LoginApage />
  },

  {
    path: "/dashbord",
    element: <DashBord />,
    children: [

      {
        index: true,
        element: <MainBody />
      },

      {
        path: "mainbody",
        element: <MainBody />
      },
      {
        path: "employeedata",
        element: <EmployeeData />
      },

      {
        path: "editempdata/:id",
        element: <EditEmpdata />
      },


    ]

  },




  {
    path: "/msignup",
    element: <TeamSignup />
  },

  {
    path: "/mlogin",
    element: <TeamLogin />
  },

  {
    path: "/maintpage",
    element: <MainTpage />,
    children: [
      {
        index: true,
        element: <TeamBody />
      },

      {
        path: "mtbody",
        element: <TeamBody />
      },

      {
        path: "teamdata",
        element: <TeamData />
      },

      {
        path: "edittemdata/:id",
        element: <EditteamData />
      },
    ]
  },



  //team leader login

  {
    path: "/teamllogin",
    element: <LoginTt />
  },

  {
    path: "/tteam/:id",
    element: <MainPagett />,
    children: [
      {
        index: true,
        element: <StBody />
      },
      {
        path: "stbody",
        element: <StBody />
      },
      {
        path: "singleteam/:id",
        element: <SingleTeamdata />
      },
      {
        path:"edittask/:id",
        element:<EditTask/>
      }

    ]
  },


  {
    path: "/emplogin",
    element: <EmpLogin />

  },

  {

    path: "/empmain/:id",
    element: <EmpMain />,
    children: [
      {
        index: true,
        element: <EmpBody />
      },
      {
        path: "empbody",
        element: <EmpBody />
      },
      {
        path: "empdata/:id",
        element: <EmpData />
      },
      {
        path:"emptask/:id",
        element:<EmpTask/>
      }
    ]
  }


],{
  basename:"/task-tracker"
});

function App() {

  const dispatcher = useDispatch();



  useEffect(() => {
    //   dispatcher(empgetData());

    //   dispatcher(teamgetData());

    //   dispatcher(addminData());



    const saveamidata = JSON.parse(localStorage.getItem("adminsigupdata"));
    console.log(saveamidata)
    console.log("this is the local storeg addmin data")



    dispatcher(actions.addAdminlocalData(saveamidata));


  }, []);


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
