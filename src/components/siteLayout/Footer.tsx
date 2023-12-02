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
    { id: 4, title: "Blog", link: "#" },
    { id: 5, title: "Blog Post", link: "#" },
    { id: 6, title: "Lawyers", link: "#" },
    { id: 7, title: "Lawyer Single", link: "#" },
    { id: 8, title: "Case Results", link: "#" },
    { id: 9, title: "Practice Areas", link: "#" },
    { id: 10, title: "Packages", link: "#" },
    { id: 11, title: "Package Single", link: "#" }
  ]

  const utilityPage = [
    { id: 1, title: "Start Here", link: "#" },
    { id: 2, title: "Style Guide", link: "#" },
    { id: 3, title: "404 Not Found", link: "#" },
    { id: 4, title: "Password Protected", link: "#" },
    { id: 5, title: "Licenses", link: "#" },
    { id: 6, title: "Changelog", link: "#" },
  ]

  const practiceArea = [
    { id: 1, title: "Family Law", link: "#" },
    { id: 2, title: "Criminal Law", link: "#" },
    { id: 3, title: "Personal Injury", link: "#" },
    { id: 4, title: "Real Estate Law", link: "#" },
    { id: 5, title: "Business Law", link: "#" },
  ]



  const halfLength = Math.ceil(quickLinks.length / 2);
  const firstColumn = quickLinks.slice(0, halfLength);
  const secondColumn = quickLinks.slice(halfLength);


  return (
    <>
      <div className={`d-flex flex-column ${styles.footerWrap} px-2 px-lg-5 py-5 justify-content-center align-items-center w-100`}>
        <div className="d-flex flex-column max-width-extra-large w-100">
        <div className="d-flex flex-column flex-lg-row px-0 px-lg-5 py-0 py-lg-5">
          <div className="col-12 col-lg-3 d-flex flex-column justify-content-center align-items-center justify-content-lg-start align-items-lg-start">
            <div className='w-100 px-3'>
              <FooterTitle title='Quick Link' />
              <div className='d-flex flex-colomn'>
                <div className=''>
                  {firstColumn.map(link => (
                    <Link href={link.link} key={link.id}>
                      <p >{link.title}</p>
                    </Link>
                  ))}
                </div>
                <div className=' '>
                  {secondColumn.map(link => (
                    <Link href={link.link} key={link.id}>
                      <p >{link.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 px-3 d-flex flex-column justify-content-start align-items-start">
            <FooterTitle title='Utility Page' />
            {utilityPage.map(link => (
              <Link href={link.link} key={link.id}>
                <p >{link.title}</p>
              </Link>
            ))}
          </div>
          <div className="col-12 col-lg-3 px-3 d-flex flex-column justify-content-start align-items-start">
            <FooterTitle title='Practice Area' />
            {practiceArea.map(link => (
              <Link href={link.link} key={link.id}>
                <p >{link.title}</p>
              </Link>
            ))}
          </div>
          <div className="col-12 col-lg-3 px-3 d-flex flex-column justify-content-start align-items-start">
            <FooterTitle title='Contact Us' />
            <p className='text-center text-lg-start'>Head Office Address 121 King Street,<br />Melbourne West,Australia</p>
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