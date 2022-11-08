import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
import Services from "../../pages/Services/Services";
import SignIn from "../../pages/SignIn/SignIn";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader:()=> fetch('http://localhost:5000/services')
        },
        {
          path: "/services",
          element: <Services></Services>,
        },
        {
          path: "/signin",
          element: <SignIn></SignIn> ,
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
      path: "servicedetails/:id",
      element: <ServiceDetails></ServiceDetails>,
      loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
    },
  ])