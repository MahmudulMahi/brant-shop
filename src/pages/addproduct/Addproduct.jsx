
import Navbar from '../../components/Navbar';

const Addproduct = () => {
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
  }
  return (
    <>
      <Navbar></Navbar>
      <div className=' gap-5 mt-10'>

        <form onSubmit={handleAddproduct} >
          <div className="md:flex">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label className="input-group">
                {/* <span>Name</span> */}
                <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                {/* <span>Name</span> */}
                <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
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
                <input type="text" name="type" placeholder="Type Name" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Price </span>
              </label>
              <label className="input-group">
                {/* <span>Name</span> */}
                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
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
                <input type="text" name="rating" placeholder="Rating Name" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <label className="input-group">
                {/* <span>Name</span> */}
                
                <input type="text" name="photo" placeholder="Photo" className="input input-bordered w-full" />
              </label>
            </div>
          </div>

          <div className="form-control w-full mb-8 ">
            <label className="label">
              <span className="label-text">Short description </span>
            </label>
            <label className="input-group">
             {/* <span>Name</span> */}
               <input type="text" name="description" placeholder="Short description " className="input input-bordered w-full" />
            
            </label>
          </div>

          <input type="submit" value="Add Product" className="btn btn-block" />
        </form>

 

      </div>
    </>
  );
};

export default Addproduct;