import React from "react";
import { twMerge } from "tailwind-merge";

const P7 = () => {
  return (
    <div>
      <div className="space-x-4">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </div>
      {/* 默认颜色 */}
    </div>
  );
};

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={twMerge(
        `px-5 py-2 rounded-3xl bg-blue-600 text-white ring-1 ring-blue-600 hover:text-blue-600 hover:bg-white transition-all ease-linear duration-300`,
        className,
      )}
    >
      {children}
    </button>
  );
};

export default P7;
