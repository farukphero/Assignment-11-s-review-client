import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const NewAddedService = ({newService}) => {
    const {_id,name, photoURL, price , serviceMessage}= newService
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
<PhotoProvider>
  <PhotoView src={photoURL}>
    <img className='h-64 rounded' src={photoURL} alt="" />
    </PhotoView>
    </PhotoProvider>
   
  <div className="card-body items-center justify-start">
  <h1 className="mb-5 text-5xl font-bold">{name}</h1>
    <p className="mb-5 w-full">
              {serviceMessage.slice(0, 50)+"..." }<Link className='underline text-amber-400' to={`/servicedetails/${_id}`}>read more</Link>
           </p>
    <div className="card-actions justify-between">
    <p>Price: $ {price}</p>
    </div>
    <button className="btn btn-primary"><Link to={`/servicedetails/${_id}`}>view details</Link></button>
  </div>
</div>
        </div>
    );
};

export default NewAddedService;