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
    { id: 3, title: "Contact", link: "#" },
    { id: 4, title: "Forging Currency rates", link: "#" },
    { id: 5, title: "E wallet Rates", link: "#" },
    { id: 6, title: "Agent Services", link: "#" },
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
              <div className='d-flex flex-colomn'>
                <div className='col-12 col-lg-5'>
                  {quickLinks.map(link => (
                    <Link href={link.link} key={link.id}>
                      <p >{link.title}</p>
                    </Link>
                  ))}
                </div>
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
            <p className=' text-lg-start'>Head Office Address 121 King Street,<br />Melbourne West,Australia</p>
            <p>Phone: <Link href={"tel: 011 9876 54321"}>(011) 9876 54321</Link></p>
            <p>Email: <Link href={"mailto:info@example.com"}>info@example.com</Link></p>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center gap-1">
          <div className="col-12 col-lg-8 text-center">
            <p className='mb-0'>Copyright © <span className='gold-text'>Attorney Law</span> | Designed by <span className='gold-text'>VictorFlow</span> Templates - Powered by Webflow</p>
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