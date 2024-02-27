"use client"
import { navItems, navItems3_3, navItems3_4, navItems3_5 } from "@/lib/data";
import Link from "next/link";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const P3 = () => {
  const [subMenus, setSubMenus] = useState(navItems3_4)
  const [subMenus5, setSubMenus5] = useState(navItems3_5)

  const handleToggleSubmenu = (id: number) => {
    setSubMenus(prevSubmenus => {
      return prevSubmenus.map((submenu) => {
        // 点哪个一级菜单，展开对应的子菜单
        if (submenu.id === id) {
          return { ...submenu, visible: !submenu.visible }
        }
        // 其他没点到的一级菜单都设置为折叠
        return { ...submenu, visible: false }
      })
    })

  }

  const handleToggleSubmenu5 = (id) => {
    setSubMenus5(prevSubmenus => {
      return prevSubmenus.map(submenu => {
        if (submenu.id === id) {
          return { ...submenu, visible: !submenu.visible };
        }
        if (submenu.child) {
          return { ...submenu, child: toggleChildSubmenu(submenu.child, id) };
        }
        return submenu;
      });
    });
  };

  const toggleChildSubmenu = (items, id) => {
    return items.map(item => {
      if (item.id === id) {
        return { ...item, visible: !item.visible };
      }
      if (item.child) {
        return { ...item, child: toggleChildSubmenu(item.child, id) };
      }
      return item;
    });
  };

  const renderSubmenuItems = (items) => {
    return (
      <ul className="flex flex-col relative bg-white">
        {items.map(submenu => (
          <li key={submenu.id} className={twMerge("px-3 text-left",
            submenu.id === 1 && ""
          )}>
            <button onClick={() => handleToggleSubmenu5(submenu.id)}
              className="hover:bg-orange-400 hover:text-white  px-5 py-3"
            >
              {submenu.title}
            </button>
            {submenu?.child && submenu.visible && submenu.child.length > 0 && renderSubmenuItems(submenu.child)}
          </li>
        ))}
      </ul>
    );
  };
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
            <div className="relative group" key={item.title}>
              <Link href={item.link}
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

      {/* 第四个 */}
      <div className="ml-20 mb-[30vh] shadow-sm w-fit">
        {
          subMenus.map((submenu) =>
            <div className="flex flex-col relative w-[200px] bg-white shadow-md" key={submenu.id}>
              <button className="p-4 text-left border"
                onClick={() => handleToggleSubmenu(submenu.id)}
              >
                {submenu.title}
              </button>
              {
                submenu?.child &&
                <div className={twMerge("flex flex-col transition-all ease-in duration-200 bg-transparent overflow-hidden",
                  submenu.visible ? "max-h-[500px] opacity-100" : "max-h-0 opacity-30")}>
                  {
                    submenu.child.map((childitem) => <SubmenuItem key={childitem.title} {...childitem} />)
                  }
                </div>
              }
            </div>
          )
        }
      </div>

      {/* 第五个 */}
      <div className="ml-20 shadow-md rounded-sm mb-[30vh] w-[200px] ">
        {renderSubmenuItems(subMenus5)}
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
      className="p-2 hover:bg-orange-400 hover:text-white truncate flex items-center gap-1 justify-center "
    >
      <Icon />
      {title}
    </Link>
  )
}
