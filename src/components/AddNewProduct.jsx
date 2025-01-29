import React from "react";
import { useAddNewProductMutation } from "../app/service/dummyData";
import { use } from "react";

const AddNewProduct = () => {
  const [addNewProduct, { data, error, isLoading }] =
    useAddNewProductMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Ohhh Nooo we got an error</div>;
  //   if (data) return <div>Product added successfully!</div>;

  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: 1,
        title: "Amazing T-Shirt",
        description:
          "This is one of the best and amazing t-shirts in the market.",
      };

      await addNewProduct(newProductData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Add New Product</h1>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
      <button onClick={handleAddProduct} disabled={isLoading}>
        Add New Product
      </button>
    </div>
  );
};

export default AddNewProduct;
