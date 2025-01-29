import React from "react";
import { useUpdateProductMutation } from "../app/service/dummyData";

const UpdateProduct = ({ productId }) => {
  const [updateProduct, { data, error, isLoading }] =
    useUpdateProductMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Ohhh Nooo we got an error</div>;

  const handleUpdateProduct = async (id, product) => {
    try {
      const updatedProductData = {
        title: "Amazing T-Shirt title updated.",
      };
      await updateProduct({
        id: productId,
        updatedProduct: updatedProductData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Update Product</h1>
      <h1>{data?.title}</h1>
      <button onClick={handleUpdateProduct} disabled={isLoading}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
