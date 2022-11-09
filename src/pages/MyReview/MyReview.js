import React, { useContext } from 'react';
import { FaUserCircle} from "@react-icons/all-files/fa/FaUserCircle";
import { AuthContext } from '../../contexts/AuthProvider';
import './MyReview.css'
const MyReview = () => {
    const {user} = useContext(AuthContext)
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
        </div>




        









            <div>
        <h1>Review section:-</h1>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{user?.photoURL ? <img title={user?.displayName} className="h-12 w-12 rounded-full mr-5 mt-0" src={user?.photoURL} alt="" />:
          <FaUserCircle className="h-12 w-12 text-white"/>
          }{
            user &&
             <>
             <h1>{user?.displayName}</h1>
             </>
             
          }</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            
          </div>
        </div>
      </div>
        </div>
    );
};

export default MyReview;