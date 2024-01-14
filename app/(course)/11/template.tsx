'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import Link from 'next/link'
import { navItems } from '@/lib/data'
import { usePathname } from 'next/navigation'

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}

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
      opacity: 1
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 2
      }

    }
  }
  const slide = {
    initial: {
      top: "100vh"
    },
    enter: {
      top: "100vh",
      transition: {
        duration: 1
      }

    },
    exit: {
      top: "50vh",
      transition: {
        duration: 2
      }
    }
  }
  const pathname = usePathname()
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      exit="hidden"
      animate="enter"
      transition={{ type: 'linear', duration: 2 }}
      key="LandingPage"
    >
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
    </motion.main>
  )
}
