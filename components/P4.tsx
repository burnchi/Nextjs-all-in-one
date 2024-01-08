import React from "react";
import { BiSearch } from "react-icons/bi";

const P4 = () => {
  return (
    <div className="space-y-8 ">
      {/* 第一个 */}
      <div className="relative text-white">
        <input
          type="text"
          name="text"
          className="pl-[40px] h-[40px] text-[15px] border-none text-white outline-none w-[40px] transition-all ease duration-300 bg-[#191A1E] shadow-p4-1 rounded-[50px] cursor-pointer focus:w-[200px] focus:cursor-text focus:shadow-p4-2"
          placeholder="Type to search..."
        />
        <div className="absolute w-[40px] h-[40px] top-0 left-0 p-[8px] pointer-events-none">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
      {/* 第二个 */}

      <div className="relative text-white">
        <input
          type="text"
          name="text"
          className="focus:pl-[15px] pr-[40px] h-[40px] text-[15px]  border-none outline-none w-[40px] transition-all ease duration-300 bg-[#191A1E] shadow-md rounded-[50px] cursor-pointer focus:w-[200px] focus:cursor-text"
          placeholder="Type to search..."
        />
        <div className="absolute w-[40px] h-[40px] top-0 right-0 p-[8px]  pointer-events-none">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default P4;
