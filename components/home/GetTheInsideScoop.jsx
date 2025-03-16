import React from "react";

const GetTheInsideScoop = () => {
  return (
    <div className="container my-0 md:my-10">
      <div className="max-w-[650px] bg-[#F7F7F9] mx-auto rounded-lg py-8 px-6 md:px-14">
        <div className=" w-full ">
          <input
            className="bg-white w-full border border-gray-600 text-gray-900 text-base rounded-md focus:ring-black focus:border-black block p-2.5 py-2.5 placeholder:text-base"
            placeholder="Enter Your Email"
            required
            type="text"
            name="employees"
          />
        </div>
        <div className="flex items-center justify-between mt-6">
          <h2 className="text-lg md:text-xl ">Get The Inside Scoop</h2>
          <button
            type="submit"
            className="text-white bg-black font-medium  text-base w-36 rounded-lg  cursor-pointer px-5 py-2.5  text-center"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetTheInsideScoop;
