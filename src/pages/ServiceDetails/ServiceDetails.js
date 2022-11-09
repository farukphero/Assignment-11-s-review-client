import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { FaUserCircle} from "@react-icons/all-files/fa/FaUserCircle";
import { AuthContext } from "../../contexts/AuthProvider";

const ServiceDetails = () => {
  const {user} = useContext(AuthContext)
  const singleCourse = useLoaderData();

  console.log(singleCourse);
  const { img, description, price, situated, title } = singleCourse;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-3/4 mx-auto mt-10">
      <div>
        <h1>Review section:-</h1>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{user?.photoURL ? <img title={user?.displayName} className="h-12 w-12 rounded-full mr-5 mt-0" src={user?.photoURL} alt="" />:
          <FaUserCircle className="h-12 w-12 text-white"/>
          }{
            user &&
             <>
             <h1>{user?.displayName}</h1>
             </>
             
          }</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            
          </div>
        </div>
      </div>

      <div>
        <div className="card w-full align-middle bg-base-100 shadow-xl image-full">
          <img src={img} className="w-full rounded-lg" alt="" />
          <div className="card-body text-center mt-5 md:mt-24">
            <div>
              <h1 className="text-5xl md:text-8xl font-bold">{title}</h1>
              <p className="mt-5 font-semibold">
                <span className="text-amber-400">Price:$</span> {price}
              </p>
              <p>
                <span className="text-amber-400 mt-5">Situated: </span>
                {situated}
              </p>
            </div>
          </div>
        </div>
        <p className="py-6">
          <span className="text-2xl font-bold text-amber-400">
         
            About {title}
          </span>
          <br /> {description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
