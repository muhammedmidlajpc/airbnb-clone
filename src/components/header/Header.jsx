import React, { useMemo } from "react";
import "./Header.css";
import threeline from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/3line.svg";
import user from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/user.svg";
import logo from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/airbnb.png";
import browser from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/browser.svg";
import downarrow from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/downarrow.svg";
import fb from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/fb.svg";
import flag from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/flag.svg";
import insta from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/insta.svg";
import search from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/search.svg";
import twitter from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/twitter.svg";
import upload from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/upload.svg";
import hh from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/hh.jpg";
import leftarrow from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/leftarrow.svg";
import rightarrow from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/right arrow.svg";
import newk from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/new.jpg";
import daisyui from "daisyui";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { data } from "../../data";
const Header = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const filtered = useMemo(() => {
    return data.filter((element) => {
      return element.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [searchQuery, data]);
  const navigate = useNavigate();
  const handleSearch = (id) => {
    navigate(`/product_deatails/${id}`);
    setsearchQuery("");
  };
  return (
    <div>
      <header className="header bg-white ">
        <div className="border-b-2 h-40 ">
          <div className="n-u-part ">
            <div className="logo-img">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="middle-nav">
              <button>Stays</button>
              <button>Experience</button>
            </div>

            <div className="end-nav">
              <div className="r-e-btn-text">
                <button>Airbnb your home</button>
              </div>
              <div>
                <button className="browser-img">
                  <img src={browser} alt="" />
                </button>
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                  id="user-div"
                >
                  <div className="t-ls">
                    <img src={threeline} alt="3line" />
                  </div>
                  <div className="w-10 rounded-5" id="user-img">
                    <img alt="user" src={user} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="s-div rounded-full  h-16 ">
            <div className="s-div-1 relative ml-5 ">
              <h6 className="absolute top-1">Where</h6>
              <input
                type="search"
                id="default-search"
                className="block w-full  ps-5 text-gray-900 pt-11 pb-4 bg-white"
                placeholder="Search destinations"
                onChange={(e) => {
                  setsearchQuery(e.target.value);
                }}
              />
              {searchQuery && (
                <div className="absolute w-full h-40  bg-red-50  overflow-auto scroll-m-0">
                  {filtered.map((element) => {
                    return (
                      <div className="w-full h-[50px] text-black m-2 hover:bg-slate-300">
                        <h3 onClick={() => handleSearch(element.id)}>
                          {element.title}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="s-div-2">
              <button className="s-btn-1">
                <h5 className="pl-3 pt-3">Check in</h5>
                <p className="text-gray-900 pl-5 text-sm">Add dates</p>
              </button>
            </div>
            <div className="s-div-3 flex items-center">
              <button className=" h-10 s-div-3-btn w-full">
                <h5 className="pl-3 pt-0">Check out</h5>
                <p className="text-gray-900 pl-3 text-sm">Add dates</p>
              </button>
            </div>
            <div className="div-f">
              <div className="s-div-4 flex align-middle">
                <button className="flex items-center  relative w-full">
                  <div className="s-div-4-1">
                    <h5 className="text-black "> Who</h5>
                    <p className="text-gray-500 pl-10 text-sm">Add guests</p>
                  </div>
                  <div className="rounded-full w-10 h-10 mt-0 absolute right-5 flex items-center justify-center srch-btn">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
