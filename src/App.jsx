import React from "react";
import AllProducts from "./components/AllProducts";
import SpecificProduct from "./components/SpecificProduct";
import AddNewProduct from "./components/AddNewProduct";
import UpdateProduct from "./components/UpdateProduct";
import DeleteProduct from "./components/DeleteProduct";

const App = () => {
  return (
    <div>
      {/* <AllProducts /> */}
      {/* <SpecificProduct /> */}
      {/* <AddNewProduct /> */}
      {/* <UpdateProduct productId={2} /> */}
      <DeleteProduct productId={1} />
    </div>
  );
};

export default App;
