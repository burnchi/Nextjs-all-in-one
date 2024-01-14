"use client"
import React, { useEffect } from 'react'

import styles from './css/p9.module.css'
const P9 = () => {

  useEffect(() => {
    const stars = () => {
      let e = document.createElement('div')
      e.setAttribute('class', 'star')
      document.body.appendChild(e)
      e.style.left = Math.random() * innerWidth + 'px'

      let size = Math.random() * 12
      let duration = Math.random() * 3;
      e.style.fontSize = 12 + size + 'px';
      e.style.animationDuration = 2 + duration + 's';

      setTimeout(() => document.body.removeChild(e), 5000)
    }
    const interval = setInterval(() => stars(), 100)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <div className={styles.main}>


    </div>
  )
}

export default P9
