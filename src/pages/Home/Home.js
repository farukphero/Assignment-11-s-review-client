import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import ServiceHome from '../ServiceHome/ServiceHome';

const Home = () => {
    const [services, setServices] = useState([])
     useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=> setServices(data))
     },[])

 
    return (
        <div> 
            <Banner></Banner>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-5 mt-10'>
           {
            services.map(service=><ServiceHome key={service._id} service={service}></ServiceHome> )
           }
           </div>
           <div className="text-center">
       <button className="btn btn-active btn-ghost px-6 py-4 rounded text-black mt-10"><Link to='/services'>See All</Link></button>
       </div>
        </div>
    );
};

export default Home;