import React, { useMemo, useState } from "react";
import { data } from "../data";
import { useNavigate } from "react-router-dom";

const Icon = () => {
  const icondata = useMemo(() => {
    return data.filter(
      (element) => {
        return element.catogory === "icons";
      },
      [data]
    );
  });
  const pastExp = useMemo(() => {
    return data.filter(
      (element) => {
        return element.catogory === "past experience";
      },
      [data]
    );
  });
  const navigate=useNavigate()
  console.log(icondata);
  return (
    <div>
      <div className="flex gap-x-10 m-14 font-semibold">
        {icondata.map((element, id) => {
          return (
            <div
              className="card bg-base-100 w-80  relative bg-white"
              key={element.id}
            >
              <figure onClick={()=>navigate(`/product_deatails/${element.id}`)}>
                <div className="carousel w-full h-80 rounded-xl">
                  <div
                    id={`slide${id}.1`}
                    className="carousel-item relative w-full"
                  >
                    <img src={element.image[1]} className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href={`#slide${id}.4`} className=" btn btn-circle ">
                        ❮
                      </a>
                      <a href={`#slide${id}.2`} className=" btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div
                    id={`slide${id}.2`}
                    className="carousel-item relative w-full"
                  >
                    <img src={element.image[2]} className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href={`#slide${id}.1`} className="btn btn-circle">
                        ❮
                      </a>
                      <a href={`#slide${id}.3`} className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div
                    id={`slide${id}.3`}
                    className="carousel-item relative w-full"
                  >
                    <img src={element.image[3]} className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href={`#slide${id}.2`} className="btn btn-circle">
                        ❮
                      </a>
                      <a href={`#slide${id}.4`} className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div
                    id={`slide${id}.4`}
                    className="carousel-item relative w-full"
                  >
                    <img src={element.image[4]} className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href={`#slide${id}.3`} className="btn btn-circle">
                        ❮
                      </a>
                      <a href={`#slide${id}.1`} className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                </div>
              </figure>
              <div className="">
                <h2 className="text-black card-title ">{element.title}</h2>
                <p>{element.description}</p>
                <p>{element.status}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h1 className="text-3xl font-bold ml-14"> Past experiences</h1>
        <div className="grid grid-cols-4 grid-rows-6 grid-flow-row gap-2 ml-14 mt-7 mb-10">
          {pastExp.map((element, id) => {
            return (
              <div className="card bg-base-100 w-80 bg-white" key={element.id}>
                <figure>
                  <div className="carousel w-full h-80 rounded-xl">
                    <div
                      id={`slide${id}.12`}
                      className="carousel-item relative w-full"
                    >
                      <img src={element.image[1]} className="w-full" />
                      <div className="opacity-0 transition-opacity duration-300 hover:opacity-100 absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href={`#slide${id}.42`} className="btn btn-circle">
                          ❮
                        </a>
                        <a href={`#slide${id}.22`} className="btn btn-circle">
                          ❯
                        </a>
                      </div>
                    </div>
                    <div
                      id={`slide${id}.22`}
                      className="carousel-item relative w-full"
                    >
                      <img src={element.image[2]} className="w-full" />
                      <div className="absolute opacity-0 transition-opacity duration-300 hover:opacity-100 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href={`#slide${id}.12`} className="btn btn-circle">
                          ❮
                        </a>
                        <a href={`#slide${id}.32`} className="btn btn-circle">
                          ❯
                        </a>
                      </div>
                    </div>
                    <div
                      id={`slide${id}.32`}
                      className="carousel-item relative w-full"
                    >
                      <img src={element.image[3]} className="w-full" />
                      <div className="opacity-0 transition-opacity duration-300 hover:opacity-100 absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href={`#slide${id}.22`} className="btn btn-circle">
                          ❮
                        </a>
                        <a href={`#slide${id}.42`} className="btn btn-circle">
                          ❯
                        </a>
                      </div>
                    </div>
                    <div
                      id={`slide${id}.42`}
                      className="carousel-item relative w-full"
                    >
                      <img src={element.image[4]} className="w-full" />
                      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <a href={`#slide${id}.32`} className="btn btn-circle">
                          ❮
                        </a>
                        <a href={`#slide${id}.12`} className="btn btn-circle">
                          ❯
                        </a>
                      </div>
                    </div>
                  </div>
                </figure>
                <div className="">
                  <h2 className="text-black font-bold">{element.title}</h2>
                  <p>{element.description}</p>
                  <p className="font-bold">{element.status}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Icon;
