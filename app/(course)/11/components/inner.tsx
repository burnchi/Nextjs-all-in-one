"use client"
import React from 'react'
import { AnimatePresence, motion } from "framer-motion"
import { navItems } from '@/lib/data'
import Link from 'next/link'
import styles from "./inner.module.css"
import FrozenRouter from './FrozenRouter'

const Inner = ({ children, key }: { children: React.ReactNode, key: string }) => {
  return (
    <AnimatePresence mode="wait">
      <FrozenRouter>
        <div className=''>
          <motion.div key={key} {...anim(slide)} className={styles.slide} />
          <motion.div key={key} {...anim(opacity)}>
            {children}
          </motion.div>
        </div>
      </FrozenRouter>
    </AnimatePresence>
  )
}

export default Inner
