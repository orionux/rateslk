import Image from 'next/image'
import React from 'react'
import styles from '@/styles/Home.module.css'

const GetHelpButton = () => {
    const getHelp = () => {
        console.log("Please Wait...!")
    }
    return (
        <>
            <button className={`${styles.getHelpButton} p-3 d-none d-md-block`} onClick={getHelp}>
                <Image src={"/icons/chatIcon.png"} alt='' width={75} height={75} className='img-fluid'></Image>
                <p className='mb-0'>Get Help</p>
            </button>
        </>
    )
}

export default GetHelpButton