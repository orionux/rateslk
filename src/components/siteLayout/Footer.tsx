import React from 'react'
import styles from '@/styles/Home.module.css'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import Link from 'next/link';
import FooterTitle from '../buttons/FooterTitle';


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

  const quickLinks = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "#" },
    { id: 3, title: "Contact", link: "#contactSection" },
    { id: 4, title: "Forging Currency rates", link: "#HeroSection" },
    { id: 5, title: "E wallet Rates", link: "#TodayRatingsSec" },
    { id: 6, title: "Agent Services", link: "#AgentServicesSec" },
  ]

  const utilityPage = [
    { id: 1, title: "Skrill", link: "#" },
    { id: 2, title: "Deriv", link: "#" },
    { id: 3, title: "Payoneer", link: "#" },
    { id: 4, title: "Tether", link: "#" },
    { id: 5, title: "Wise", link: "#" },
    { id: 6, title: "Neteller", link: "#" },
    { id: 7, title: "Perfect Money", link: "#" },
  ]

  const practiceArea = [
    { id: 1, title: "Deriv", link: "#" },
    { id: 2, title: "1X bet", link: "#" },
    { id: 3, title: "Melbet", link: "#" },
    { id: 4, title: "Traders trust", link: "#" },
  ]



  // const halfLength = Math.ceil(quickLinks.length / 2);
  // const firstColumn = quickLinks.slice(0, halfLength);
  // const secondColumn = quickLinks.slice(halfLength);


  return (
    <>
      <div className={`d-flex flex-column ${styles.footerWrap} px-2 px-lg-5 py-5 justify-content-center align-items-center w-100`}>
        <div className="d-flex flex-column max-width-extra-large w-100">
        <div className="d-flex flex-column flex-lg-row px-0 px-lg-5 py-0 py-lg-5">
          <div className="col-12 col-lg-3 d-flex flex-column justify-content-center align-items-center justify-content-lg-start align-items-lg-start">
            <div className='w-100 px-3'>
              <FooterTitle title='Quick Link' />
              <div className='d-flex flex-column'>
                {/* <div className='col-12 col-lg-5'> */}
                  {quickLinks.map(link => (
                    <Link href={link.link} key={link.id}>
                      <p >{link.title}</p>
                    </Link>
                  ))}
                {/* </div> */}
                {/* <div className='col-6 col-lg-5'>
                  {secondColumn.map(link => (
                    <Link href={link.link} key={link.id}>
                      <p >{link.title}</p>
                    </Link>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 px-3 d-flex flex-column justify-content-start align-items-start">
            <FooterTitle title='E Wallet RATINGS' />
            {utilityPage.map(link => (
              <Link href={link.link} key={link.id}>
                <p >{link.title}</p>
              </Link>
            ))}
          </div>
          <div className="col-12 col-lg-3 px-3 d-flex flex-column justify-content-start align-items-start">
            <FooterTitle title='Agent Services' />
            {practiceArea.map(link => (
              <Link href={link.link} key={link.id}>
                <p >{link.title}</p>
              </Link>
            ))}
          </div>
          <div className="col-12 col-lg-3 px-3 d-flex flex-column justify-content-start align-items-start">
            <FooterTitle title='Contact Us' />
            {/* <p className=' text-lg-start'>Head Office Address 121 King Street,<br />Melbourne West,Australia</p> */}
            {/* <p>Phone: <Link href={"tel: 011 9876 54321"}>(011) 9876 54321</Link></p> */}
            <div className='row'><p className='col-3'>Mobile:</p>
            <p className='col'> 
              <Link href={"tel: 070 454 5132"}>(+94) 70 45 45 132</Link><br/>
              <Link href={"tel: 076 265 8293"}>(+94) 76 26 58 293</Link><br/>
            <Link href={"tel: 077 165 9857"}>(+94) 77 16 59 857</Link></p>
            </div>
            {/* mailto:info@Rates.lk.com */}
            <p>Email: <Link href={"#"}>info@Rates.lk.com</Link></p>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center gap-1">
          <div className="col-12 col-lg-8 text-center text-lg-start px-0 px-lg-5">
            <p className='mb-0 px-0 px-lg-3'>Copyright © 
            <Link href={"https://rateslk.vercel.app/"} style={{textDecoration: "none !important"}}><span className='gold-text'>Rates.lk </span></Link>
             | Designed by  <Link href={"https://orionux.net/"} style={{textDecoration: "none !important"}}><span className='gold-text'>orionux(pvt)Ltd</span></Link></p>
          </div>
          <div className="col-12 col-lg-4 d-flex justify-content-center ">
            <p className='mb-0'><span>Follow : </span></p>
            {
              socialMedia.map((socialLink) => {
                return (
                  <>
                    <Link className={`text-white ps-3 ${styles.socialIconStyle}`} href={socialLink.link}>{socialLink.icon}</Link>
                  </>
                )
              })
            }
            <hr />
          </div>

        </div>
        <hr />
        </div>
      </div>
    </>
  )
}

export default Footer