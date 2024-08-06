import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { LuIndianRupee } from "react-icons/lu";

function Card(props) {
  return (
    <div className=" bg-white border-white border-2 rounded-3xl shadow-md">
      <img className="rounded-t-md md:rounded-t-3xl" src={props.image} alt="" />
      <div className="p-1 md:p-5">
        <h5 className="mb-2 pl-0 md:pl-1 text-md md:text-2xl  tracking-tight ">
          {props.title}
        </h5>
        <div className=" hidden lg:block">
          <p className="mt-4 font-normal flex text-xl items-center gap-2">
            <IoLocationSharp className="text-2xl" />
            {props.location}
          </p>
          <p className="mt-3 font-normal flex text-xl items-center gap-2">
            <LuIndianRupee className="text-2xl" />
            On Request
          </p>
        </div>
        <button className="mt-2 md:mt-5 inline-flex items-center px-2 md:px-3 py-1 md:py-2 text-sm md:text-lg md:font-medium text-center text-white bg-black rounded-lg hover:bg-white hover:text-black border hover:border-black">
          View More
        </button>
      </div>
    </div>
  );
}

export default Card;
