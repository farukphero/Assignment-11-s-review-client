import React from "react";

const Reviews = ({ review, handleDelete,handleUpdate }) => {
  const { _id, title, img, description } = review;

  return (
    <div>
      <div className=" mt-5">
        <div className="card bg-base-100 shadow-xl">
        <div className="card-actions justify-end mr-8 mt-5">
              <button
                onClick={() => handleUpdate(_id)}
                className="btn btn-primary"
              >
                Edit
              </button>
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
    </div>
  );
};

export default Reviews;
