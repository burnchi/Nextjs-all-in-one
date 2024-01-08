"use client";
import Link from "next/link";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const P1 = () => {
  const items = ["apple", "orange", "banana", "strawberry", "pear"];
  const [aindex, setAindex] = useState(0);
  const onEnter = (item: number) => {
    setAindex(item);
  };

  return (
    <div className="flex flex-col border-black border-[5px]">
      {items.map((item, inx) => (
        <div
          key={item}
          className={twMerge(
            "flex justify-center items-center w-[300px] h-[40px] cursor-default",
            aindex === inx && "bg-green-400 text-white",
          )}
          onMouseEnter={() => onEnter(inx)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default P1;
