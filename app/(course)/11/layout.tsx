import React from 'react'
import PageAnimatePresence from './components/PageAnimatePresence';


interface layoutProps {
  children: React.ReactNode;
  className?: string;
}
const layout: React.FC<layoutProps> = ({
  children
}) => {
  return (
    <PageAnimatePresence>{children}</PageAnimatePresence>
  )
}

export default layout
