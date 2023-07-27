import React, { useEffect } from "react";
import { useStateContext } from "../context/StateContext";
import { useState } from "react";
import Card from "../components/Card";
const Products = () => {
  const {
    state: { products },
    cart,
  } = useStateContext();

  return (
    <div className="flex flex-wrap gap-4 justify-center my-10 ">
      {products?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
