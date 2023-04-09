import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Survey from "./views/Survey";
import SurveyView from "./views/SurveyView";
// import DefaultLayout from "./components/DefaultLayout";
// import GuestLayout from "./components/GuestLayout";
// import Dashboard from "./views/dashboard";
// import Login from "./views/login";
// import Signup from "./views/signup";
// import Surveys from "./views/surveys";
// import SurveyView from "./views/SurveyView";

const router=createBrowserRouter([
    
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
                path:'/dashboard',
                element:<Navigate to='/'/>
            },
            {
                path:'/',
                element:<Dashboard/>
            },
            
            {
                path:'/surveys',
                element:<Survey/>
            },

            {
                path:'/surveys/create',
                element:<SurveyView/>
            },

            // {
            //     path:'/surveys/:id',
            //     element:<SurveyView/>
            // },
        ]
    },

    
    {
        path:'surveys',
        element:<Survey/>
    },
   { path:'/',
    element:<GuestLayout/>,
    children:[
        {
            path:'/login',
            element:<Login/>
        },
            
        {
            path:'/signup',
            element:<Signup/>
        },
    ]
    }
   
        
//    {
//     path:'/',
//     element:<GuestLayout/>,
//     children:[
//         {
//             path:'/login',
//             element:<Login/>
//         },
            
//         {
//             path:'/signup',
//             element:<Signup/>
//         },
//     ]
//    }

])

export default router;