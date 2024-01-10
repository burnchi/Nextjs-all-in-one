import Link from "next/link";

export default function Home() {
  const navItems = [
    {
      label: "离开盒子高亮还在",
      href: "/1",
    },
    {
      label: "图片放大Modal",
      href: "/2",
    },
    {
      label: "导航栏",
      href: "/3",
    },
    {
      label: "搜索框",
      href: "/4",
    },
    {
      label: "选项框",
      href: "/5",
    },
    {
      label: "表单",
      href: "/6",
    },
    {
      label: "按钮",
      href: "/7",
    },
  ];
  return (
    <div className="border flex flex-col gap-2 shadow-md rounded-md h-fit">
      {navItems.map((item) => (
        <Link
          href={item.href}
          key={item.label}
          className="flex justify-center items-center px-5 py-4 text-xl font-medium hover:text-green-300 hover:bg-black"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
