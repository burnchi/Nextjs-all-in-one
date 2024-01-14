import React from 'react'
import styles from './css/p8.module.css'

const P8 = () => {
  return (
    <div className={styles.main}>
      <div className={styles.textbox}>
        <h2>i&apos;m &nbsp;
          <span style={{ "--i": 0 } as any} data-text="Designer">Designer</span>
          <span style={{ "--i": 1 } as any} data-text="Coder">Coder</span>
          <span style={{ "--i": 2 } as any} data-text="Youtuber" >Youtuber</span>
        </h2>
      </div>
    </div>
  )
}

export default P8
