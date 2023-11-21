import React from 'react'
import styles from '@/styles/Home.module.css'

const TopBar = () => {
  return (
    <div className={`d-flex  text-center w-100 justify-content-center ${styles.topbarWrapper}`}>
      <p className='mb-0 py-2'>Buy & Sell, and 100+ cryptos in minutes. Register now & get ₹100 cashback on your first trade of ₹500 or more!</p>
    </div>
  )
}

export default TopBar