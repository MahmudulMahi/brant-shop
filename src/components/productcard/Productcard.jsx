import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Productcard = ({ product }) => {

  const {_id, name, brand, type, price, rating, description, photo } = product

  const handelDelete =_id =>{
    console.log(_id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
       
       fetch(`http://localhost:5000/products/${_id}`,{
        method:'DELETE'
       })
       .then(res =>res.json())
       .then(data=>{
        console.log(data);
        if(data.deletedCount >0){
           Swal.fire(
          'Deleted!',
          'Your product has been deleted.',
          'success'
        )
        }
       })
      }
    })
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={photo} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{price}</p>

        <div className="btn-group btn-group-vertical lg:btn-group-horizontal space-x-4">
          <button className="btn btn-active">Details</button>
          <Link to={`/updateproduct/${_id}`}>
          <button className="btn">Update</button>
          </Link>
        
          <button
          onClick={()=>handelDelete(_id)}
          className="btn bg-red-600">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Productcard;