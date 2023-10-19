import { useLoaderData } from "react-router-dom";
import Productcard from "../productcard/Productcard";


const Totalproducts = () => {

  const allproducts=useLoaderData()
  return (
    <div>
      <h2 className="text-4xl text-center"> All Products</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
    {
        allproducts.map(product=><Productcard
        
        key={product._id} product={product}></Productcard>)
      }
    </div>
    </div>
  );
};

export default Totalproducts;