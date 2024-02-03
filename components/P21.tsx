"use client"
import React, { useEffect, useState } from 'react'

const P21 = () => {
  const [mount, setMount] = useState(false)
  useEffect(() => {
    if (!mount) {
      setMount(true)
    }
    // represent body tag - bgcolor
    document.body.style.background = "#ccc"
    console.log();

  }, [mount])

  if (!mount) {
    return null
  }
  return (
    <div className='p-10 space-y-4'>
      <div className='inner'>
        <p className='text-lg'>window width/height</p>
        {window.innerWidth}&nbsp; {window.innerHeight}
      </div>

      {/* BOM */}
      <div>
        <p>userAgent/system</p>
        {navigator.userAgent} | {navigator.platform}
      </div>

      <div>
        <p>url</p>
        {location.href}
      </div>
    </div>
  )
}

export default P21

