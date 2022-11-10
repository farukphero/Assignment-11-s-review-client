import React, { useState } from "react";

const Reviews = ({ review }) => {
  const { _id, title, img, image, description, name } = review;

  const [userReviews, setUserReviews] = useState([]);
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.name.value;
    const img = form.photoURL.value;
    const email = form.email.value;
    const situated = form.place.value;
    const description = form.serviceMessage.value;
    console.log( title,img,email,situated,description)
    const reviews = { title, img, email, situated, description };
    fetch(`https://fly-plane-web-server.vercel.app/reviews/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          //   const fil = userReviews.filter(rev=> rev._id !== _id)
          const newUpdateReview = [...userReviews, reviews];
          setUserReviews(newUpdateReview);
          // navigate('/servicedetails')
          // toast("Updated")
          event.target.reset();
        }
      });
  };
  console.log(review);
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
      <div className="grid grid-cols-1 md:grid-cols-2 my-10">
        <div className="card-body">
          <div className="card-actions justify-end">
            {/* The button to open modal */}
            <label htmlFor="my-modal-4" className="btn">
              edit
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
              <label className="modal-box relative" htmlFor="">
                <div className="card w-full md:w-3/4 mx-auto bg-amber-300 shadow-xl mt-16">
                  <form onSubmit={handleUpdate} className="card-body">
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
              </label>
            </label>
          </div>
          <div className="flex">
            <img className="h-12 w-12 rounded-full mr-5" src={img} alt="" />
            <h2 className="card-title">{title}</h2>
          </div>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button onClick={handleDelete} className="btn btn-primary">Delete</button>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">{name}</h1>
          <img className="h-52 w-full" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
