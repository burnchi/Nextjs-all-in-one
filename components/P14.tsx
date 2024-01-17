"use client"
import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';

import Picture1 from "@/public/p14/1.jpg"
import Picture2 from "@/public/p14/2.jpg"
import Picture3 from "@/public/p14/3.jpg"


const P14 = () => {
  const word = "with framer-motion";
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  // 设置偏移
  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const images = [
    {
      src: Picture1,
      y: 0
    },
    {
      src: Picture2,
      y: lg
    },
    {
      src: Picture3,
      y: md
    }
  ];
  return (
    <div ref={container} className="min-h-[100vh] py-[100vh] bg-[#cccccc]">
      <div className="ml-[10vw]">
        <motion.h1 style={{ y: sm }} className='m-0 mt-[10px] text-xl uppercase'>Parallax</motion.h1>
        <h1 className='m-0 mt-[10px] text-xl uppercase'>Scroll</h1>
        <div className="">
          <p className='text-white mt-[30px] text-xl uppercase'>
            {
              word.split("").map((letter, i) => {
                const y = useTransform(scrollYProgress, [0, 1], [0, Math.floor(Math.random() * -25) - 25])
                return <motion.span style={{ top: y }} key={`l_${i}`} className='relative'>{letter}</motion.span>
              })
            }
          </p>
        </div>
      </div>
      <div className="relative flex justify-center w-[100%] mt-[5vh] [&>*:nth-child(1)]:h-[60vh] [&>*:nth-child(1)]:w-[50vw] [&>*:nth-child(2)]:h-[40vh] [&>*:nth-child(2)]:right-0 [&>*:nth-child(2)]:w-[30vw] [&>*:nth-child(3)]:h-[40vh] [&>*:nth-child(3)]:w-[30vw] [&>*:nth-child(3)]:left-[10vw] [&>*:nth-child(3)]:top-[50vh] ">
        {
          images.map(({ src, y }, i) => {
            return <motion.div style={{ y }} key={`i_${i}`} className="absolute ">
              <Image
                src={src}
                placeholder="blur"
                alt="image"
                fill
                className='object-cover'
              />
            </motion.div>
          })
        }
      </div>
    </div>
  )
}

export default P14
