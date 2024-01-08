import Link from "next/link";
import React from "react";
import Image from "next/image";

const P6 = () => {
  return (
    <div className="h-fit w-[36%] rounded-[15px] shadow-p6-container overflow-hidden">
      <div className="flex items-center justify-center bg-[#bbdefb] w-full h-[160px] relative">
        <div className="relative w-[130px] h-[130px] rounded-full overflow-hidden shadow-p6-pic">
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
      <form className="h-fit  py-10 px-[80px] flex flex-wrap justify-center gap-y-8 border">
        <div className="w-full border flex flex-col">
          <label htmlFor="">邮箱</label>
          <input
            type="text"
            placeholder="邮箱"
            name="email"
            id="email"
            className="border h-[5vh] px-3 outline-none"
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="password">密码</label>
          <input
            type="password"
            placeholder="密码"
            name="password"
            id="password"
            className="border h-[5vh] px-3 outline-none"
          />
        </div>
        {/* 提交按钮 */}
        <button
          // 如果没登录禁止提交
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full disabled:bg-gray-400"
        >
          登录
        </button>
      </form>
    </div>
  );
};
export default P6;
