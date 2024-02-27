import React from 'react'
import styles from './demo.module.scss'

const SassPage = () => {
  return (
    <div className={styles.container} >
      <span>nest span</span>
      <p>A variable declaration looks a lot like a property declaration: it’s written . Unlike a property, which can only be declared in a style rule or at-rule, variables can be declared anywhere you want. To use a variable, just include it in a value.</p>
      {/* use export variables */}
      <ul style={{ backgroundColor: styles.primaryColor }}>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
      </ul>
      <p className={styles.textlg}>Hello World</p>
    </div>
  )
}

export default SassPage
