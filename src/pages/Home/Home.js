import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {
    const services= useLoaderData()
    console.log(services)
 
    return (
        <div> 
            <Banner></Banner>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
           {
            services.map(service=><Service key={service._id} service={service}></Service> )
           }
           </div>
        </div>
    );
};

export default Home;