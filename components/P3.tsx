"use client"
import { navItems, navItems3_3 } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

const P3 = () => {
  return (
    <div className="flex flex-col gap-[200px]">
      {/* 第一个 */}
      <nav className="flex ">
        {navItems.map((item) => (
          <div key={item.label} className="relative group">
            {/* 每个导航项 */}
            <Link
              href={item.href}
              className="p-2 hover:bg-[#ff2a51]/30 hover:rounded-sm hover:text-[#d30038]"
            >
              {item.label}
            </Link>
            {/* 下拉菜单 */}
            {item?.child && (
              <div className="group-hover:flex hidden flex-col border shadow-md rounded-md absolute top-[calc(100%+6px)] w-[200px]">
                {/* 每一个子项 */}
                {item.child.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="relative px-5 py-4 hover:bg-neutral-200/30 group"
                  >
                    <span
                      className={twMerge(
                        "absolute w-1 top-1/2 -translate-y-1/2 left-1 h-[60%]",
                        item.color,
                      )}
                    />
                    <p className="text-sm group-hover:text-black text-black/60">
                      {item.label}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      {/* 第二个 */}
      <div className="flex ">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="group relative font-[400] h-full p-4  flex justify-center items-center hover:text-blue-600"
          >
            {item.label}
            <span className="absolute bottom-2 h-1 group-hover:w-[70%] left-[15%] w-0 transition-all ease duration-300 bg-blue-600" />
          </Link>
        ))}
      </div>

      {/* 第三个 */}
      <div className="flex ml-20">
        {
          navItems3_3.map((item) => (
            <div className="relative group">
              <Link key={item.title} href={item.link}
                className="p-2 group-hover:bg-orange-400 group-hover:text-white"
              >
                {item.title}
              </Link>
              {
                item?.child &&
                <div className="group-hover:flex hidden bg-transparent shadow-sm rounded-md overflow-hidden flex-col text-center absolute border   left-1/2 -translate-x-1/2 top-[calc(100%+5px)]">
                  {
                    item.child.map((childitem) => <SubmenuItem key={childitem.title} {...childitem} />)
                  }
                </div>
              }
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default P3;

const SubmenuItem = ({ title, link, icon: Icon }: {
  title: string,
  link: string,
  icon: any
}) => {
  return (
    <Link key={title} href={link}
      className="p-2 hover:bg-orange-400 hover:text-white truncate flex items-center gap-2 justify-center"
    >
      <Icon />
      {title}
    </Link>
  )
}
