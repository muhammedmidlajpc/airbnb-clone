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
      <div>
        <h1>{product.title}</h1>
        <div>
          <button>
            <img src={uplaod} alt="" srcset="" />
            share
          </button>
          <button>
            <img src={heart} alt="" srcset="" />
            save
          </button>
        </div>
      </div>
      <div className="flex justify-center m-10">
      <div className="grid grid-cols-2  w-[1300px] h-[500px] gap-3">
       <div className="">
        <img className="h-full w-full" src={product.image[1]} alt="" />
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
          <img src="" alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Product_deatails;
