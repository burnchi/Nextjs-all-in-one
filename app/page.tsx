import Image from "next/image";
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
  ];
  return (
    <div className="border flex flex-col gap-2">
      {navItems.map((item) => (
        <Link
          href={item.href}
          className="flex justify-center items-center px-5 py-4 text-xl font-medium hover:text-green-300 hover:bg-black"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
