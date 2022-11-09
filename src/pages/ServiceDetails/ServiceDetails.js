import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaUserCircle } from "@react-icons/all-files/fa/FaUserCircle";
import { AuthContext } from "../../contexts/AuthProvider";
import Reviews from "../Reviews/Reviews";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServiceDetails = () => {
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

    const reviews = { title, img, email, situated, description, identifier };
    fetch('http://localhost:5000/reviews', {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const newReview=[...userReviews, data]
        console.log(newReview)
        setUserReviews(newReview)
      });
      toast("Thanks for your review.")
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => {setUserReviews(data)
      // console.log(data)
    })
      .catch(error=> console.log(error))
  }, []);


  const handleUpdate =()=>{
    // event.preventDefault();
   fetch(`http://localhost:5000/reviews/${_id}`,{
    method:"PUT",
    headers:{
           "content-type": "application/json",
    },
    body: JSON.stringify(userReviews),
   })


   .then(res=>res.json())
   .then(data=> console.log(data))

  }



  const handleDelete = (id) => {
    const proceed = window.confirm(" Are you sure?");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast("Successfully Delete");
            const remaining = userReviews.filter((rev) => rev._id !== id);
            setUserReviews(remaining);
          }
        });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-10">
      <div className="md:col-start-1 md:col-end-5">
        <h1 className="p-5">Review section:-</h1>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              {user?.photoURL ? (
                <img
                  title={user?.displayName}
                  className="h-12 w-12 rounded-full mr-5 mt-0"
                  src={user?.photoURL}
                  alt=""
                />
              ) : (
                <FaUserCircle className="h-12 w-12 text-white" />
              )}
              {user && (
                <>
                  <h1>{user?.displayName}</h1>
                </>
              )}
            </h2>
    
      </div>
      </div>

        {userReviews.map((review) => (
          <Reviews
            key={review._id}
            review={review}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          ></Reviews>
        ))}
        <ToastContainer />

        <div>
          <div className="card w-full md:w-3/4 mx-auto bg-amber-300 shadow-xl mt-16">
            <form onSubmit={handleReview} className="card-body">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input w-full"
                required
              />
              <input
                type="text"
                name="photoURL"
                placeholder="PhotoURL"
                className="input w-full"
                required
              />
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="email"
                className="input w-full"
                readOnly
              />
              <input
                type="text"
                name="place"
                placeholder="place"
                className="input w-full"
                required
              />
              <textarea
                className="textarea min-h-16"
                name="serviceMessage"
                placeholder="Describe about service"
                required
              ></textarea>
              {/* <p>{error}</p> */}
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
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
          <li>{stay.first}</li>
          <li>{stay.second}</li>
          <li>{stay.third}</li>
        </h1>
      </div>
    </div>
  );
};

export default ServiceDetails;
