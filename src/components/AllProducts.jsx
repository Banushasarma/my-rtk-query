import React from "react";
import { useGetAllProductsQuery } from "../app/service/dummyData";

const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Ohhh Nooo we got an error</h1>;

  if (data)
    return (
      <div>
        {data?.products.map((product) => (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    );

  return <div>AllProducts</div>;
};

export default AllProducts;
