import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
 
 

const AddServices = () => {
     const [error, setError] = useState("")
     const [addServices, setAddServices] = useState([])
     const navigate = useNavigate()
     useTitle('addservices')
    const handleAddService=(event)=>{
       event.preventDefault()
       const form= event.target;
       const title = form.name.value
       const img = form.photoURL.value
       const price = form.price.value
       const situated = form.place.value
       const description = form.serviceMessage.value 
       if(description.length < 100){
        setError("Please add description more than 100 character")
       }
        
       const services = {title,img,price, situated, description}
       if(services){
        alert('Wow! successfully added service')
        navigate('/services')
       }
      //  console.log(name, photoURL, price ,email, serviceMessage)
       fetch('https://fly-plane-web-server.vercel.app/services',{
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(services)

       })
       .then(res=>res.json())
       .then(data=> {
        const newAddService=[...addServices, data]
        setAddServices(newAddService)
        console.log(data)})
       .catch(error=> console.log(error))
 
 
    }
  return (
    <div>
    <div >
  <div className='relative'>
      <div className='blank-div'>

      </div>
      <img className='w-full h-96' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVyeoA9FFvyxtBYdyMxfuNcEbVHTEFvNSP6bWleuWg_pJhGTxTvpE6ucd5_BXzAa6IHpA&usqp=CAU" alt="" />
    <p className='absolute top-52 left-0 md:left-28 text-indigo-500 text-3xl md:text-6xl font-semibold'> Please, Add Your Service</p>
  </div>
   
</div>
  <div>
<div className="card w-full md:w-3/4 mx-auto bg-amber-300 shadow-xl mt-16">
<form onSubmit={handleAddService} className="card-body">
   
<input type="text" name='name'placeholder="Title" className="input w-full" required/>
<input type="text" name='photoURL'placeholder="PhotoURL" className="input w-full" required/>
<input type="text" name='price'placeholder="Price" className="input w-full" required/>
<input type="text" name='place' placeholder="Location" className="input w-full" required/>
<textarea className="textarea min-h-16" name='serviceMessage' placeholder="Describe about service" required></textarea>
 <p>{error}</p>
   <button className="btn btn-primary">Submit</button>
</form>
</div>
</div>
 
</div>
  );
};

export default AddServices;
