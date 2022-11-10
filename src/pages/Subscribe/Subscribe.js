import React from 'react';

const Subscribe = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 my-20'>
            <div className='bg-amber-300'>
                 <h1 className='text-center text-5xl font-semibold mt-20'>Subscribe To Get Updated For Newsletter</h1>
                 <input type="text" placeholder="Enter email address" className="input input-bordered w-3/4 mx-6 mt-6 mb-3" /> <br />
                 <button className='btn btn-outline  btn-primary mx-6 mb-12'>Subscribe</button>
            </div>
            <div>
                <img src="https://preview.colorlib.com/theme/beyond/img/nwl-img.png" alt="" />
            </div>
        </div>
    );
};

export default Subscribe;