import Image from 'next/image'
import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const GetHelpButton = () => {
    const getHelp = () => {
        console.log("Please Wait...!")
    }
    return (
        <>
            <Link style={{textDecoration: "none"}} href="https://api.whatsapp.com/send?phone=94717697736">
            <button className={`${styles.getHelpButton} p-3 d-block d-md-block`}>
                <Image src={"/icons/chatIcon.png"} alt='' width={75} height={75} className='img-fluid'></Image>
                <p className='mb-0'>Get Help</p>
            </button>
            </Link>
        </>
    )
}

export default GetHelpButton