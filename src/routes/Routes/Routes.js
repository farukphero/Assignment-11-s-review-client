import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
        //   element: <Home></Home>,
        },
        // {
        //   path: "/courses",
        //   element: <Courses></Courses> ,
        // },
        // {
        //   path: "/blog",
        // element:<PrivateRoute> <Blog></Blog></PrivateRoute>,
        // },
        // {
        //   path: "/faq",
        //   element: <FAQ></FAQ>,
        // },
        // {
        //   path: "/login",
        //   element: <Login></Login>,
        // },
        // {
        //   path: "/register",
        //   element: <Register></Register>,
        // },
        
      ],
    }])