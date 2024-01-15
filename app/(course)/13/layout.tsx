import React, { ReactNode } from 'react'
import PageAnimatePresence from './components/PageAnimatePresence';

import Link from 'next/link'
import { navItems13 } from '@/lib/data'

const AnimateLayout = ({
  children
}: {
  children: ReactNode
}) => {
  return (
    <PageAnimatePresence>

      <div className="flex mx-auto justify-center w-[80vw]">
        {navItems13.map((item) => (
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

      {children}</PageAnimatePresence>
  )
}

export default AnimateLayout
