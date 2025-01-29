import React from "react";
import { useDeleteProductMutation } from "../app/service/dummyData";

const DeleteProduct = ({ productId }) => {
  const [deleteProduct, { data, error, isLoading }] =
    useDeleteProductMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Ohhh Nooo we got an error</div>;

  const handleDeleteProduct = async () => {
    await deleteProduct(productId);
  };

  return (
    <div>
      <h1>Delete Product</h1>
      <h1>{data?.title}</h1>
      <button onClick={handleDeleteProduct} disabled={isLoading}>
        Delete Product
      </button>
    </div>
  );
};

export default DeleteProduct;
