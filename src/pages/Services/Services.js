import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    // const [size , setSize] =useState(3)
     useEffect(()=>{
        fetch('http://localhost:5000/allServices')
        .then(res=>res.json())
        .then(data=> setServices(data))
     },[])
 
    return (
        <div >
            <div className='relative'>
                <img className='w-full h-96' src="https://preview.colorlib.com/theme/flyplane/img/places/hp-1.jpg" alt="" />
              <p className='absolute top-52 left-0 md:left-28 text-white text-3xl md:text-6xl font-semibold'> Select Your Desired Place</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 my-10'>
            {
                services.map(service=><Service key={service._id} service={service}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;
