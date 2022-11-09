import React from "react";
 

const AddServices = () => {
 
    const handleAddService=(event)=>{
       event.preventDefault()
       const form= event.target;
       const name = form.name.value
       const photoURL = form.photoURL.value
       const price = form.price.value
       const email = form.email.value
       const serviceMessage = form.serviceMessage.value 

       const newServices = {name,photoURL,price, email, serviceMessage}
       console.log(name, photoURL, price ,email, serviceMessage)
       fetch('http://localhost:5000/newServices',{
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(newServices)

       })
       .then(res=>res.json())
       .then(data=> console.log(data))
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
   
<input type="text"  name='name'placeholder="Full Name" className="input w-full" />
<input type="text"  name='photoURL'placeholder="PhotoURL" className="input w-full" />
<input type="text"  name='price'placeholder="Price" className="input w-full" />
<input type="email" name='email' placeholder="Email" className="input w-full" />
<textarea className="textarea min-h-16" name='serviceMessage' placeholder="Describe about service" required></textarea>
   <button className="btn btn-primary">Submit</button>
</form>
</div>
</div>
 
</div>
  );
};

export default AddServices;
