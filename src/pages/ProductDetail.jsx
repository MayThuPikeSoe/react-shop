import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../api";
import { AiFillStar } from "react-icons/ai";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);

  const getProductDetail = async () => {
    setProduct(await getData(`/products/${id}`));
  };
  const getProductByCat = async () => {
    setProducts(await getData(`/products/category/${product.category}`));
  };
  useEffect(() => {
    getProductDetail();
    getProductByCat();
  }, [product]);
  return (
    <div>
      <div className="flex items-start gap-5 my-20">
        <img
          src={product.image}
          className="h-96 border-2 shadow-lg p-10"
          alt=""
        />
        <div className="flex flex-col gap-5 mt-5">
          <p className="bg-info px-2 py-1 rounded-full w-40 text-xs text-center text-white">
            Category- {product?.category}
          </p>
          <h1 className="text-2xl font-semibold text-header">
            {product?.title}
          </h1>
          <div>
            <p className="text-header font-semibold">Description</p>
            <p className="text-secondary tracking-wider leading-6 font-bold">
              {product?.description}
            </p>
          </div>
          <p className="flex items-center gap-2">
            <AiFillStar className="text-danger text-xl" />{" "}
            <small className="text-secondary font-bold">
              {product?.rating?.rate}
            </small>
          </p>
          <p className="text-header text-xl font-semibold ">
            ${product?.price}
          </p>
          <div>
            <button className="bg-info text-primary py-2 rounded shadow-lg w-40 transform transition hover:scale-90">
              Add to Cart
            </button>
            <button className="bg-header ml-3 text-primary py-2 rounded shadow-lg w-40 transform transition hover:scale-90">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="my-20">
        <h1 className="text-2xl font-semibold text-header">
          You may also like
        </h1>
        <div className="flex flex-wrap gap-7 my-10">
          {products?.map((item) => (
            <div key={item.id}>
              <img
                src={item?.image}
                className="h-52 border-2 shadow-lg p-5 rounded"
                alt=""
              />
              <p className="text-secondary font-semibold mt-1">
                ${item?.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
