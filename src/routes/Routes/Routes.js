import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
import Services from "../../pages/Services/Services";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/services",
          element: <Services></Services>,
        },
        
        // {
        //   path: "/blog",
        // element:<PrivateRoute> <Blog></Blog></PrivateRoute>,
        // },
        //
        // {
        //   path: "/login",
        //   element: <Login></Login>,
        // },
        // {
        //   path: "/register",
        //   element: <Register></Register>,
        // },
        
      ],
    },
    {
          path: "/signin",
          element: <SignIn></SignIn> ,
        },
    {
          path: "/signup",
          element: <SignUp></SignUp> ,
        },
    {
      path: "servicedetails/:id",
      element: <ServiceDetails></ServiceDetails>,
      loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
    },
  ])