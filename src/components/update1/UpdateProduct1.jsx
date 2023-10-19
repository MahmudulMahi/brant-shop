import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct1 = () => {
  const product=useLoaderData()

  const {_id, name, brand, type, price, rating, description, photo } = product
  console.log(product)

  const handleAddproduct =event=>{
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const description = form.description.value;

    const newProduct = { name, brand, type, price, rating, description, photo }

    console.log(newProduct);

    fetch('http://localhost:5000/products',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(newProduct)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      Swal.fire({
        title: 'Success',
        text: 'product added successfully',
        icon: 'Success',
        confirmButtonText: 'Cool'
      })
    })
  }
  return (
    <div className=' gap-5 mt-10'>

    <form onSubmit={handleAddproduct} >
      <div className="md:flex">
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <label className="input-group">
            {/* <span>Name</span> */}
            <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full" />
          </label>
        </div>
        <div className="form-control md:w-1/2 ml-4">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <label className="input-group">
            {/* <span>Name</span> */}
            <input type="text" name="brand" defaultValue={brand} placeholder="Brand Name" className="input input-bordered w-full" />
          </label>
        </div>
      </div>

      <div className="md:flex">
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <label className="input-group">
            {/* <span>Name</span> */}
            <input type="text" name="type" defaultValue={type} placeholder="Type Name" className="input input-bordered w-full" />
          </label>
        </div>
        <div className="form-control md:w-1/2 ml-4">
          <label className="label">
            <span className="label-text">Price </span>
          </label>
          <label className="input-group">
            {/* <span>Name</span> */}
            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
          </label>
        </div>
      </div>


      <div className="md:flex">
        <div className="form-control md:w-1/2 ">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <label className="input-group">
            {/* <span>Name</span> */}
            <input type="text" name="rating" defaultValue={rating} placeholder="Rating Name" className="input input-bordered w-full" />
          </label>
        </div>
        <div className="form-control md:w-1/2 ml-4">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <label className="input-group">
            {/* <span>Name</span> */}
            
            <input type="text" name="photo" defaultValue={photo} placeholder="Photo" className="input input-bordered w-full" />
          </label>
        </div>
      </div>

      <div className="form-control w-full mb-8 ">
        <label className="label">
          <span className="label-text">Short description </span>
        </label>
        <label className="input-group">
         {/* <span>Name</span> */}
           <input type="text" name="description" defaultValue={description} placeholder="Short description " className="input input-bordered w-full" />
        
        </label>
      </div>

      <input type="submit" value="Add Product" className="btn btn-block" />
    </form>



  </div>
  );
};

export default UpdateProduct1;