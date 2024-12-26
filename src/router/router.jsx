import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import AddTutorials from "../Pages/AddTutorials/AddTutorials";
import FindTutors from "../Pages/FindTutors/FindTutors";
import TutorDetails from "../Pages/TutorDetails/TutorDetails";
import PrivateRoute from "./PrivateRoute";
import MyBookedTutor from "../Pages/MyBookedTutor/MyBookedTutor";
import MyTutorial from "../Pages/MYTutorial/MyTutorial";
import UpdateTutor from "../component/UpdateTutor/UpdateTutor";
import TutorCategory from "../Pages/LanguageCategory/TutorCategory";
import Resorce from "../Pages/Resorce/Resorce";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
         path:"/addTutorials",
         element:<PrivateRoute><AddTutorials></AddTutorials></PrivateRoute>
        },
        {
         path:"/findTutors",
         element:<FindTutors></FindTutors>
        },
        {
          path:"/language/:id",
          element:<PrivateRoute><TutorDetails></TutorDetails></PrivateRoute>,
         loader: ({params}) => fetch(`https://assignment11-language-exchange-server.vercel.app/language/${params.id}`)
          
        },
        {
        path:"/bookedTutor",
        element:<PrivateRoute><MyBookedTutor></MyBookedTutor></PrivateRoute>
        },
        {
         path:"/myTutorial",
         element:<PrivateRoute><MyTutorial></MyTutorial></PrivateRoute>
        },
        {
          path:"/update/:id",
          element:<UpdateTutor></UpdateTutor>,
          loader:({params})=>fetch(`https://assignment11-language-exchange-server.vercel.app/language/${params.id}`)
        },
        {
          path:"/tutorCategory",
          element:<TutorCategory></TutorCategory>,
          
        },

        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
          path:"/resources",
          element:<Resorce></Resorce>
        }
      ]
    },
    
  ]);

  export default router;