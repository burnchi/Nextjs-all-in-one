'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import Link from 'next/link'
import { navItems } from '@/lib/data'
import { usePathname } from 'next/navigation'


export default function Template({ children }: { children: ReactNode }) {
  const anim = (variants: any) => {
    return {
      initial: "initial",
      exit: "exit",
      animate: "enter",
      variants
    }
  }
  const opacity = {
    initial: {
      opacity: 0
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0.7,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  }
  const slide = {
    initial: {
      top: "100vh"
    },
    enter: {
      top: "100vh",
    },
    exit: {
      top: "0",
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  }
  const perspective = {
    initial: {
      y: 0,
      scale: 1,
      opacity: 1,

    },
    enter: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    exit: {
      y: -100,
      scale: 0.9,
      opacity: 0.5,
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  }
  const pathname = usePathname()
  return (
    <div className='bg-black'>
      <motion.div  {...anim(slide)} className='bg-white z-10 top-0left-0 w-[100vw] h-[100vh] fixed' />
      <motion.div  {...anim(perspective)} className=' bg-white '>
        <motion.div  {...anim(opacity)}>
          <div className="flex mx-auto justify-center w-[80vw]">
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
          {children}
        </motion.div >
      </motion.div>
    </div>
  )
}
