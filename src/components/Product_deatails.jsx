import React from "react";
import { data } from "../data";
import { useParams } from "react-router-dom";
import uplaod from "../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/upload1.svg";
import heart from "../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/heart.svg";
import "./Product_details.css";
const Product_deatails = () => {
  const { id } = useParams();

  const product = data.find((p) => {
    return p.id == id;
  });

  console.log(product);

  return (
    <div>
      <div className="flex">
        <h1 className="ml-28 font-bold text-3xl">{product.title}</h1>
        <div className="absolute right-28">
          <button className="m-3">
            <img className="w-4 h-5" src={uplaod} alt="" srcset="" />
            share
          </button>
          <button className="">
            <img className="w-4 h-5" src={heart} alt="" srcset="" />
            save
          </button>
        </div>
      </div>
      <div className="flex justify-center m-10">
      <div className="grid grid-cols-2  w-[1300px] h-[500px] gap-3">
       <div className="">
        <img className="h-[510px] w-full" src={product.image[1]} alt="" />
       </div>
       <div className=" grid grid-cols-2 gap-3">
        <div className="bg-yellow-200">
          <img className="h-[250px] w-full" src={product.image[2]} alt="" />
        </div>
        <div className="bg-orange-300">
          <img className="h-[250px] w-full" src={product.image[3]} alt="" />
        </div>
        <div className="bg-red-500">
          <img className="h-[250px] w-full" src={product.image[3]} alt="" />
        </div>
        <div className="bg-blue-400">
          <img className="h-[250px] w-full" src={product.image[4]} alt="" />
        </div>
       </div></div>
      </div>
      <div>
        <div>
          <h1>{product.title}</h1>
          <h6>{product.description}</h6>
        </div>
        <div>
          <div><h1>{product.status}</h1></div>
          <div><button>Reserve</button></div>
          <div><h6>you won't be charged yet</h6></div>
          <div><h1>Total before tax</h1><h1>{product.status}</h1></div>
        </div>
      </div>
    </div>
  );
};

export default Product_deatails;
