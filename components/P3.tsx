import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

const P3 = () => {
  const navItems = [
    {
      label: "home",
      href: "/",
    },
    {
      label: "Blog",
      href: "/",
    },
    {
      label: "Guides",
      href: "/",
      child: [
        {
          label: "HTML",
          href: "/",
          color: "bg-red-300",
        },
        {
          label: "CSS",
          href: "/",
          color: "bg-green-300",
        },
        {
          label: "JS",
          href: "/",
          color: "bg-blue-300",
        },
      ],
    },
    {
      label: "About",
      href: "/",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
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
    </div>
  );
};

export default P3;
