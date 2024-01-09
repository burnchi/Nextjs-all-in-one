import Link from "next/link";
import React from "react";
import Image from "next/image";

const P6 = () => {
  return (
    <div className="h-fit xl:w-[36%] lg:w-[50%] md:w-[60%] sm:w-[90%] rounded-[15px] shadow-p6-container overflow-hidden">
      <div className="flex items-center justify-center bg-[#bbdefb] w-full h-[160px] relative">
        <div className="relative sm:w-[130px] w-[100px] sm:h-[130px] h-[100px] rounded-full overflow-hidden shadow-p6-pic">
          <Image src="/p6.png" alt="pic" fill />
        </div>
        <Link
          href="/login"
          className="absolute left-0 bottom-0 h-[28px] w-[116px] py-[5px] px-[40px] bg-[#54aff9] text-white rounded-tr-[10px] shadow-p6-a"
        >
          首页
        </Link>
        <Link
          href="/login"
          className="absolute right-0 bottom-0 h-[28px] w-[116px] py-[5px] px-[40px] bg-[#54aff9] text-white rounded-tl-[10px] shadow-p6-a"
        >
          注册
        </Link>
      </div>
      <form className="h-fit  py-10 px-[15%] flex flex-wrap justify-center md:gap-y-12 gap-y-6 border">
        <div className="w-full  flex flex-col relative">
          <input
            type="text"
            name="email"
            id="email"
            className="rounded-[20px] h-[5vh] ring-1 ring-neutral-500/30 peer focus:ring-[#399af2] px-[14px] pt-[7px] pb-[8px] text-sm outline-none bg-[#e8f0fe] focus:rounded-[5px] transition-all ease duration-300"
          />
          <label
            htmlFor="email"
            className="transition-all ease duration-300 absolute left-1 top-1/2 -translate-y-1/2 peer-focus:text-[#399af2] peer-focus:-top-[12px] peer-focus:left-0.4 ml-3 text-base peer-focus:text-sm text-[#828282]"
          >
            邮箱
          </label>
        </div>
        <div className="w-full flex flex-col relative">
          <input
            type="text"
            name="password"
            id="password"
            className="rounded-[20px] h-[5vh] ring-1 ring-neutral-500/30 peer focus:ring-[#399af2] px-[14px] pt-[7px] pb-[8px] text-sm outline-none bg-[#e8f0fe] focus:rounded-[5px] transition-all ease duration-300"
          />
          <label
            htmlFor="password"
            className="transition-all ease duration-300 absolute left-1 top-1/2 -translate-y-1/2 peer-focus:text-[#399af2] peer-focus:-top-[12px] peer-focus:left-0.4 ml-3 text-base peer-focus:text-sm text-[#828282]"
          >
            密码
          </label>
        </div>
        {/* 提交按钮 */}
        <button
          // 如果没登录禁止提交
          type="submit"
          className="bg-blue-500  text-white font-bold py-2 px-4 rounded-[20px] hover:rounded-[5px]  w-full disabled:bg-gray-400 transition-all ease duration-300"
        >
          登录
        </button>
      </form>
    </div>
  );
};
export default P6;
