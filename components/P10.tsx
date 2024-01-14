"use client"
import React, { useEffect } from 'react'
import styles from "./css/p10.module.css"
import VanillaTilt from 'vanilla-tilt';
import { twMerge } from 'tailwind-merge';
const P10 = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".js-tilt") as any;
    VanillaTilt.init(elements, {
      speed: 100,
      // startX: 10,

    }
    );
  }, [])
  return (
    <div className='p-10'>
      <div className={twMerge("js-tilt hover:bg-[#0487F9] hover:text-white transition-all ease-linear duration-500", styles.container)}>
        <h2 className={styles.name}>Christmas Card</h2>
        <button className={styles.buy}>Buy now</button>
      </div>
    </div>
  )
}

export default P10
