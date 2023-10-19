import { useLoaderData } from "react-router-dom";


const Totalproducts = () => {

  const allproducts=useLoaderData()
  return (
    <div>
      <h2> fghjk{allproducts.length}</h2>
    </div>
  );
};

export default Totalproducts;