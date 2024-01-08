"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
const P2 = () => {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === overlayRef.current && e.target !== contentRef.current) {
      setOpen(false);
    }
  };
  // 当出现覆盖层全局滚轮消失,可加可不加
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);
  return (
    <>
      <div className="relative w-[150px] h-[150px]">
        <Image
          src="/p2.png"
          alt="pic"
          fill
          priority
          className="object-cover cursor-pointer"
          onClick={handleOpen}
        />
      </div>
      {open && (
        // 遮罩层
        <div
          className="absolute inset-0 bg-neutral-800/70 backdrop-blur-md"
          ref={overlayRef}
          onClick={handleClose}
        >
          {/* 固定图片位置 */}
          <div
            className="absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2"
            ref={contentRef}
          >
            <div className="relative xl:w-[50vw] sm:w-[80vw] w-[100vw] xl:h-[80vh] md:h-[70vh] h-[50vh]">
              <Image src="/p2.png" alt="pic" fill className="object-cover" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default P2;
