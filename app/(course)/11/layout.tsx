import React, { ReactNode } from 'react'
import PageAnimatePresence from './components/PageAnimatePresence';


const AnimateLayout = ({
  children
}: {
  children: ReactNode
}) => {
  return (
    <PageAnimatePresence>{children}</PageAnimatePresence>
  )
}

export default AnimateLayout
