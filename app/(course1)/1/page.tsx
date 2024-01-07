"use client";
import Link from "next/link";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const page = () => {
  const items = ["apple", "orange", "banana", "strawberry", "pear"];
  const [aindex, setAindex] = useState(0);
  const onEnter = (item: number) => {
    setAindex(item);
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold mb-8">离开盒子高亮还在</h1>
      <div className="flex flex-col border-black border-[5px]">
        {items.map((item, inx) => (
          <div
            key={item}
            className={twMerge(
              "flex justify-center items-center w-[300px] h-[40px]",
              aindex === inx && "bg-green-400 text-white",
            )}
            onMouseEnter={() => onEnter(inx)}
          >
            {item}
          </div>
        ))}
      </div>
      {/* <Link>查看源码</Link> */}
    </div>
  );
};

export default page;
