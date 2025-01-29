import React from "react";
import { useAddNewProductMutation } from "../app/service/dummyData";
import { use } from "react";

const AddNewProduct = () => {
  const [addNewProduct, { data, error, isLoading }] =
    useAddNewProductMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Ohhh Nooo we got an error</div>;
  if (data) return <div>Product added successfully!</div>;

  return <div>AddNewProduct</div>;
};

export default AddNewProduct;
