'use client'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'

const anim = (variants: any, custom?: any) => {
  return {
    initial: "initial",
    exit: "exit",
    animate: "enter",
    variants,
    custom
  }
}
const router: any = {
  "13": "Home",
  "blog": "Blog",
  "guide": "Guide",
  "about": "About"
}

export default function Template({ children }: { children: ReactNode }) {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0
  })
  const pathname = usePathname()
  const array = pathname.split('/')
  const route = array[array.length - 1]
  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    resize();
    // when window dimensions change will invoke resize function
    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  }, [])

  const text = {
    initial: {
      opacity: 1,
      top: "40%"
    },
    enter: {
      opacity: 0,
      top: "-100%",
      transition: {
        duration: .75,
        delay: 0.3,
        ease: [0.83, 0, 0.17, 1]
      },
      transitionEnd: {
        top: "50%"
      }
    },
    exit: {
      opacity: 1,
      top: "40%",
      transiton: {
        duration: .5,
        delay: 0.4,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  }

  return (
    <div className=''>
      <motion.p {...anim(text)} transition={{ delay: 0.3 }} className='text-[46px] z-10  text-white absolute  left-[50%] -translate-x-1/2'>{router[route]}</motion.p>
      {/* fixed flash */}
      <div style={{ opacity: dimensions.width > 0 ? 0 : 1 }} className='left-0 w-[100vw] h-[calc(100vh+600px)] -top-[300px] fixed pointer-events-none bg-black'></div>
      {dimensions.width > 0 && <SVG {...dimensions} />}
      {children}
    </div>
  )
}

const SVG = ({ width, height }: {
  width: number,
  height: number
}) => {
  const initialPath = `
  M0 300
  Q${width / 2} 0 ${width} 300
  L${width} ${height + 300}
  Q${width / 2} ${height + 600} 0 ${height + 300}
  L0 300
`
  const targetPath = `
  M0 300
  Q${width / 2} 0 ${width} 300
  L${width} ${height}
  Q${width / 2} ${height} 0 ${height}
  L0 300
`
  const curve = {
    initial: {
      d: initialPath
    },
    enter: {
      d: targetPath,
      transition: {
        duration: .75,
        delay: 0.3,
        ease: [0.83, 0, 0.17, 1]
      }
    },
    exit: {
      d: initialPath,
      transition: {
        duration: .75,
        ease: [0.83, 0, 0.17, 1]
      },

    }
  }
  const slide = {
    initial: {
      top: "-300px"
    },
    enter: {
      top: "-100vh",
      transition: {
        duration: .75,
        delay: 0.3,
        ease: [0.83, 0, 0.17, 1]
      },
      transitionEnd: {
        top: "100vh"
      }
    },
    exit: {
      top: "-300px",
      transition: {
        duration: .75,
        ease: [0.83, 0, 0.17, 1]
      },
    }

  }
  return (
    <motion.svg {...anim(slide)} className='left-0 w-[100vw] h-[calc(100vh+600px)] -top-[300px] fixed pointer-events-none'>
      <motion.path {...anim(curve)}></motion.path>
    </motion.svg>
  )
}
