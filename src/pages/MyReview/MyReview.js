import React, { useContext,useEffect, useState } from 'react';

import { AuthContext } from '../../contexts/AuthProvider';
import './MyReview.css'
import TotalReview from '../TotalReview/TotalReview';
const MyReview = () => {
  
    const [allReviews, setAllReviews] = useState([]);
    useEffect ((id) => {
      fetch(`http://localhost:5000/reviews`)
        .then((res) => res.json())
        .then((data) =>setAllReviews(data));
    }, []);
    return (
        <div>
              <div >
            <div className='relative'>
                <div className='blank-div'>

                </div>
                <img className='w-full h-96' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVyeoA9FFvyxtBYdyMxfuNcEbVHTEFvNSP6bWleuWg_pJhGTxTvpE6ucd5_BXzAa6IHpA&usqp=CAU" alt="" />
              <p className='absolute top-52 left-0 md:left-28 text-indigo-500 text-3xl md:text-6xl font-semibold'>See All Review</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-0 md:mx-10 my-10'>
             
            </div>
            {
              allReviews.map(review=><TotalReview key={review._id} review={review}></TotalReview> )
            }
        </div>
 
        </div>
    );
};

export default MyReview;