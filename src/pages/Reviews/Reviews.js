import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../contexts/AuthProvider";

const Reviews = ({ review, handleDelete,userReviews,setUserReviews }) => {
  const [updateReview, setUpdateReview]= useState([])
  const navigate = useNavigate()
  const { user } = useContext(AuthContext);
  const { _id, title, img, description } = review;

const handleUpdate=(event)=>{
  event.preventDefault()
  const form = event.target;
  const title = form.name.value;
  const img = form.photoURL.value;
  const email = form.email.value;
  const situated = form.place.value;
  const description = form.serviceMessage.value;
  // console.log( title,img,email,situated,description)
  const reviews = { title, img, email, situated, description };
   fetch(`http://localhost:5000/reviews/${_id}`,{
        method:"PUT",
        headers:{
          "content-type": "application/json",
        },
        body: JSON.stringify(reviews),
   })
   .then(res=>res.json())
   .then(data=> {console.log(data)
  
      if(data.modifiedCount > 0){
        const fil = userReviews.filter(rev=> rev._id !== _id)
    const newUpdateReview = [...fil, reviews]
    setUserReviews(newUpdateReview)
        // navigate('/servicedetails')
        // toast("Updated")
       event.target.reset()
      }
  
  })

}



  return (
    <div>
      <div className=" mt-5">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-actions justify-end mr-8 mt-5">
            {/* The button to open modal */}

            <label htmlFor="my-modal" className="btn">
              Edit
            </label>

            {/* Put this part before </body> tag */}
          
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h1 className="text-center text-xl text-semibold"> Change your {title} review</h1>
                <div className="card w-full mx-auto bg-base-300 shadow-xl mt-16">
                  <form onSubmit={handleUpdate} className="card-body">
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
                    <button  className="btn btn-primary">
                   <Link to=''> Submit</Link>
            </button>
                  </form>
                </div>
                <div className="modal-action">
                  <label htmlFor="my-modal" className="btn">
                    Yay!
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="flex">
              <img className="h-12 w-12 rounded-full mr-5" src={img} alt="" />
              <h2 className="card-title">{title}</h2>
            </div>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-primary"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Reviews;
