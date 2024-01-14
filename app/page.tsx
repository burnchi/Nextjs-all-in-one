import { pageItems } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" border flex flex-wrap gap-2 shadow-md rounded-md h-full">
      {pageItems.map((item) => (
        <Link
          href={item.href}
          key={item.label}
          className="flex w-fit justify-center items-center px-5 py-4 text-xl font-medium hover:text-green-300 hover:bg-black"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
