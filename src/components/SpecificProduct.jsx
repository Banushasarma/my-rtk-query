import React from "react";
import { useGetProductByIdQuery } from "../app/service/dummyData";

const SpecificProduct = () => {
  const { data, isError, isLoading } = useGetProductByIdQuery(5);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Ohhh Nooo we got an error</div>;

  console.log(data);
  return (
    <div>
      <h1>{data?.title}</h1>
      <h1>{data?.category}</h1>
      <p>{data?.description}</p>
    </div>
  );
};

export default SpecificProduct;
