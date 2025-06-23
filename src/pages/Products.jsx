import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Products = () => {
  const { productId } = useParams();
  const { products, currency, addCart } = useContext(ShopContext);
  const [data, setData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setData(item);
        setImage(item.image[0]);

        return null;
      }
    });
  };
  useEffect(() => {
    fetchData();
  }, [productId]);

  return data ? (
    <div className="border-t-2 pt-10 transition-opacity duration-300 ease-in opacity-100">
      <div className="flex flex-col gap-12 sm:gap-12 sm:flex-row ">
        <div className=" flex-1 flex flex-col-reverse sm:flex-row gap-3">
          <div className="flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between flex-shrink-0 sm:justify-normal sm:w-[18.7%] w-full">
            {data.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                alt=""
                key={index}
                className="w-[24%] sm:w-full sm:mb-3  cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%] ">
            <img src={image} alt="" className="w-full h-auto " />
          </div>
        </div>
        <div className="flex-1 ">
          <h1 className="font-medium text-2xl mt-1">{data.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className="w-3 5" />
            <img src={assets.star_icon} className="w-3 5" />
            <img src={assets.star_icon} className="w-3 5" />
            <img src={assets.star_icon} className="w-3 5" />
            <img src={assets.star_dull_icon} className="w-3 5" />
            <p className="pl-2">112</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {data.price}
          </p>
          <p className="pt-5 text-gray-600 w-4/5">{data.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {data.sizes.map((item, index) => (
                <button onClick={()=>setSize(item)}
                 className={`border border-gray-200 py-2 px-4 bg-gray-300  ${item === size ? 'border-orange-500' : ''} `} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addCart(data._id, size)}
            className="bg-black text-sm text-white active:bg-gray-700  p-3 cursor-pointer"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-700 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash On Delivery Is Available On This Product</p>
            <p>Easy Return And Exchange Policy with 7 Days</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Products;
