'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'


export default function Template({ children }: { children: ReactNode }) {
  const anim = (variants: any, custom?: any) => {
    return {
      initial: "initial",
      exit: "exit",
      animate: "enter",
      variants,
      custom
    }
  }

  const expand = {
    initial: {
      top: 0,
    },
    enter: (i: number) => ({
      top: "100%",
      transition: {
        duration: 0.3,
        delay: 0.05 * i
      },
      // 进入的最后动画
      transitionEnd: {
        height: 0,
        top: 0
      }
    }),
    exit: (i: number) => ({
      height: "100%",
      transition: {
        duration: 0.3,
        delay: 0.05 * i
      }

    })
  }

  const overlay = {
    initial: {
      opacity: 0.5
    },
    enter: {
      opacity: 0,
    },
    exit: {
      opacity: 0.5
    }
  }
  const nbOfColumns = 5;
  return (
    <div className=''>
      {/* 加入透明蒙板 */}
      <motion.div {...anim(overlay)} className="fixed  top-0 left-0 h-[100vh] w-[100vw] pointer-events-none bg-black" />
      {/* 将颜色分段 */}
      <div className='fixed  top-0 left-0 h-[100vh] w-[100vw] pointer-events-none flex'>
        {
          [...Array(nbOfColumns)].map((_, i) => {
            return <motion.div {...anim(expand, nbOfColumns - i)} key={i} className='h-full w-full bg-black relative' />
          })
        }
      </div>
      {children}
    </div>
  )
}
