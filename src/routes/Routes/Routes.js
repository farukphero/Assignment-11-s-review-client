import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddServices from "../../pages/AddServices/AddServices";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home";
import MyReview from "../../pages/MyReview/MyReview";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
import Services from "../../pages/Services/Services";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


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
        
        {
          path: "/blog",
        element:<Blog></Blog>,
        },
        {
          path: "/myreview",
          element:<PrivateRoute><MyReview></MyReview></PrivateRoute>,
        
        },
        {
          path: "/addservices",
          element: <PrivateRoute><AddServices></AddServices></PrivateRoute>,
        },
        
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
      element:  <ServiceDetails></ServiceDetails> ,
      loader:({params})=> fetch(`https://fly-plane-web-server.vercel.app/services/${params.id}`)
    },
    {
      path: "*",
      element: <h1 className="text-center text-4xl text-blue-500">404 page not found</h1>,
    },
  ])