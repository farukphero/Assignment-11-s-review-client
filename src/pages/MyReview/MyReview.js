import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Reviews from "../Reviews/Reviews";
import "./MyReview.css";

const MyReview = () => {
  const [userReviews, setUserReviews] = useState([]);
  useTitle("myreview");
  const reviews = useLoaderData();
  console.log(reviews);

  const handleDelete = (id) => {
    const proceed = window.confirm(" Are you sure?");
    if (proceed) {
      fetch(`https://fly-plane-web-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            // toast("Successfully Delete");
            const remaining = userReviews.filter((rev) => rev._id !== id);
            setUserReviews(remaining);
          }
        });
    }
  };

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
          <p className="absolute top-52 left-0 md:left-28 text-indigo-500 text-3xl md:text-6xl font-semibold">
            See All Review
          </p>
        </div>

        <div>
          {reviews.map((review) => (
            <Reviews key={review._id} review={review}
            
            userReviews={userReviews}
            setUserReviews={setUserReviews}
            handleDelete={handleDelete}
            ></Reviews>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyReview;
