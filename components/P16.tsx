import styles from './css/p16.module.css'

const P16 = () => {
  const progress = "80%"
  return (
    <div className='p-8'>
      <div className={styles.progress} >
        <span style={{ "width": progress } as any} />
      </div>
    </div>
  )
}

export default P16
