import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Reviews from "../Reviews/Reviews";

import "./MyReview.css";

const MyReview = () => {
  useTitle("MyReview");
  const [reviews, setReviews] = useState([]);
  const { user, logOut } = useContext(AuthContext);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      fetch(`https://fly-plane-web-server.vercel.app/allReviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast("Successfully Delete");
            const remaining = reviews.filter((rev) => rev._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  useEffect(() => {
    fetch(`https://fly-plane-web-server.vercel.app/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {

        if(res.status === 401 || res.status === 403){
         return logOut()
        }
       return res.json()
      })
      .then((data) => setReviews(data));
  }, [user?.email, logOut]);

  return (
    <div>
      <div>
        <div className="relative">
          <div className="blank-div"></div>
          <img
            className="w-full h-96"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVyeoA9FFvyxtBYdyMxfuNcEbVHTEFvNSP6bWleuWg_pJhGTxTvpE6ucd5_BXzAa6IHpA&usqp=CAU"
            alt=""
          />
          <p className="absolute top-52 left-0 md:left-28 text-indigo-500 text-2xl md:text-6xl font-semibold">
            See Your All Review
          </p>
        </div>

        <div>
        <ToastContainer />
          <h2 className="text-center text-2xl my-5">Total review : {reviews.length}</h2>
          { 
            reviews.length &&reviews.map((review) => (
              <Reviews
                key={review._id}
                review={review}
                handleDelete={handleDelete}
                reviews={reviews}
                setReviews={setReviews}
              ></Reviews>
            )) ||  <h1 className="text-center text-2xl">No reviews were added</h1>
        }
        </div>
      </div>
    </div>
  );
};

export default MyReview;
