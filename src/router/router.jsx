import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import AddTutorials from "../Pages/AddTutorials/AddTutorials";
import FindTutors from "../Pages/FindTutors/FindTutors";
import TutorDetails from "../Pages/TutorDetails/TutorDetails";


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
         element:<AddTutorials></AddTutorials>
        },
        {
         path:"/findTutors",
         element:<FindTutors></FindTutors>
        },
        {
          path:"/language/:id",
          element:<TutorDetails></TutorDetails>,
         loader: ({params}) => fetch(`http://localhost:5000/language/${params.id}`)
          
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        }
      ]
    },
    
  ]);

  export default router;