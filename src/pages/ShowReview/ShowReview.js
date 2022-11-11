import React from 'react';
import { Link } from 'react-router-dom';

const ShowReview = () => {
    return (
        <div>
            <h1 className='text-center text-3xl md:text-5xl font-bold mt-20'>Updated Successful</h1>
            <h1 className='text-center text-3xl font-semibold mt-20'> To see updated review <Link to='/myreview' className='text-blue-500 hover:underline'>Click</Link></h1>
        </div>
    );
};

export default ShowReview;