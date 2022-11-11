import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaUserCircle } from "@react-icons/all-files/fa/FaUserCircle";
import { AuthContext } from "../../contexts/AuthProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Review from "../Review/Review";
import useTitle from "../../hooks/useTitle";

const ServiceDetails = () => {
  useTitle('ServiceDetails')
  const { user } = useContext(AuthContext);
  const [userReviews, setUserReviews] = useState([]);
  const singleCourse = useLoaderData();
  const {_id, img, description, price, title,visitTime, stay } = singleCourse;

  const handleReview = (event ) => {
    event.preventDefault();
    const form = event.target;
    const title = form.name.value;
    const img = form.photoURL.value;
    const email = form.email.value;
    const situated = form.place.value;
    const description = form.serviceMessage.value;
    const identifier = _id;
    const image = singleCourse.img
    const name =singleCourse.title

    const reviews = { title, img, email, situated, description, identifier,image,name };
    fetch('https://fly-plane-web-server.vercel.app/reviews', {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const newReview=[reviews,...userReviews]
        console.log(newReview)
        setUserReviews(newReview)
      });
      toast("Thanks for your review.")
      .catch((error) =>  error.message(error));
  };

  useEffect((id) => {
    fetch(`https://fly-plane-web-server.vercel.app/allReviews/${_id}`,{
    })
      .then((res) => res.json())
      .then((data) => {setUserReviews(data)
    })
      .catch(error=> console.log(error))
  }, [_id]);


  

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-10">
      <div className="md:col-start-1 md:col-end-5">
        <h1 className="p-5 mr-10 text-2xl">See your all review <Link to='/myreview' className="text-blue-400 hover:underline">Click here</Link></h1>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
            </h2>
      </div>
      </div>

        {userReviews.map((rev) => (
          <Review
            key={rev._id}
            rev={rev}
          ></Review>
        ))}
        <ToastContainer />

       {
        user && <div className="card w-full md:w-3/4 mx-auto bg-base-300 shadow-xl mt-16">
        <form onSubmit={handleReview} className="card-body">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input w-full hidden"
             defaultValue={user?.displayName}
             readOnly
          />
          <input
            type="text"
            name="photoURL"
            placeholder="PhotoURL"
            className="input w-full hidden"
            defaultValue={user?.photoURL}
             readOnly
          />
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            placeholder="email"
            className="input w-full hidden"
            readOnly
          />
          <input
            type="text"
            name="place"
            placeholder="place"
            className="input w-full hidden"
             
          />
          <textarea
            className="textarea min-h-16"
            name="serviceMessage"
            placeholder="Describe about service"
            required
          ></textarea>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>||<h1 className="text-center  text-4xl font-bold mb-24 mt-10"> Please <Link to='/signin' className="hover:underline text-blue-400">Signin</Link> to add a review</h1>
        
       
       }
      </div>

      <div className="md:col-end-7 md:col-span-2">
        <div className="card w-full align-middle bg-base-100 shadow-xl image-full">
          <img src={img} className="w-full rounded-lg" alt="" />
          <div className="card-body text-center mt-5 md:mt-24">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
              <p className="mt-5 font-semibold">
                <span className="text-amber-400">Cost: </span>$ {price}
              </p>
            </div>
          </div>
        </div>
        <p className="py-6 px-5">
          <span className="text-2xl font-bold text-amber-400">
            About {title}
          </span>
          <br /> {description}
        </p>
        <br />
        <h1 className="px-5">
            <span className="text-2xl font-semibold">
              Best Time To Visit {title} :
            </span>
            <br /> {visitTime}
          </h1>
        <h1 className=" px-5">
          <span className="text-2xl font-semibold mt-5">Where To Stay in {title}</span>  : <br />
          There are many hotels & resort near the {title} where you can stay. I am mentioning some of the best hotels & resort near {title} below.
          <br />
          <ul>
          <li>{stay?.first}</li>
          <li>{stay?.second}</li>
          <li>{stay?.third}</li>
          </ul>
        </h1>
      </div>
    </div>
  );
};

export default ServiceDetails;
