import React from 'react'
import styles from '@/styles/Home.module.css'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import Link from 'next/link';


const Footer = () => {


  const socialMedia = [
    {
      Id: 1,
      icon: <FaInstagram />,
      link: "#"
    },
    {
      Id: 2,
      icon: <FaFacebook />,
      link: "#"
    },
    {
      Id: 3,
      icon: <FaTwitter />,
      link: "#"
    },
    {
      Id: 4,
      icon: <FaPinterest />,
      link: "#"
    }
  ]

  return (
    <>
    <div className={`d-flex flex-column ${styles.footerWrap} px-2 px-lg-5 py-5`}>
      <div className="d-flex flex-column flex-lg-row px-0 px-lg-5 py-0 py-lg-5">
        <div className="col-12 col-lg-3 d-flex flex-column justify-content-center align-items-center">1</div>
        <div className="col-12 col-lg-3 d-flex flex-column justify-content-center align-items-center">2</div>
        <div className="col-12 col-lg-3 d-flex flex-column justify-content-center align-items-center">3</div>
        <div className="col-12 col-lg-3 d-flex flex-column justify-content-center align-items-center">4</div>
      </div>
      <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
        <div className="col-12 col-lg-8">
          <p>Copyright © <span>Attorney Law</span> | Designed by <span>VictorFlow</span> Templates - Powered by Webflow</p>
        </div>
        <div className="col-12 col-lg-4">
          <p><span>Follow : </span></p>
          {
            socialMedia.map((socialLink)=>{
              return (
                <>
                <Link href={socialLink.link}>{socialLink.icon}</Link>
                </>
              )
            })
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer