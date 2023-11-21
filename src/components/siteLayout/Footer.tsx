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
      <div className="d-flex flex-column flex-lg-row px-0 px-lg-5 py-0 py-lg-5 gap-4">
        <div className="col-12 col-lg-3 d-flex flex-column justify-content-center align-items-center justify-content-lg-start align-items-lg-start">
          <div>
          <h5 className='col-12'><hr />Quick Link <hr /></h5>
          <div className='d-flex flex-colomn gap-4'>
            <div className=''>  
              <p>Home</p>
              <p>About</p>
              <p>Contact</p>
              <p>Blog</p>
              <p>Blog Post</p>
              <p>Lawyers</p>
            </div>
            <div className=' '>  
              <p>Lawyer Single</p>
              <p>Case Results</p>
              <p>Practice Areas</p>
              <p>Packages</p>
              <p>Package Single</p>
              
            </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3 d-flex flex-column justify-content-center align-items-center justify-content-lg-start align-items-lg-start">
              <h5><hr />Utility Page<hr /></h5>
              <p>Start Here</p>
              <p>Style Guide</p>
              <p>404 Not Found</p>
              <p>Password Protected</p>
              <p>Licenses</p>
              <p>Changelog</p>

        </div>
        <div className="col-12 col-lg-3 d-flex flex-column justify-content-center align-items-center justify-content-lg-start align-items-lg-start">
              <h5><hr />Practice Area<hr /></h5>
              <p>Family Law</p>
              <p>Criminal Law</p>
              <p>Personal Injury</p>
              <p>Real Estate Law</p>
              <p>Business Law</p>
              
        </div>
        <div className="col-12 col-lg-3 d-flex flex-column justify-content-center align-items-center justify-content-lg-start align-items-lg-start ">
              <h5 className='col-lg-10'><hr/>Conatct Us<hr /></h5>
              <p className='text-center text-lg-start'>Head Office Address 121 King Street,<br/> Melbourne West,Australia</p>
              <p>Phone: (011) 9876 54321</p>
              <p>Email: info@example.com</p>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center gap-1">
      
        <div className="col-12 col-lg-8 text-center">
          <p className='mb-0'>Copyright © <span className='gold-text'>Attorney Law</span> | Designed by <span className='gold-text'>VictorFlow</span> Templates - Powered by Webflow</p>
        </div>
        <div className="col-12 col-lg-4 d-flex justify-content-center ">
          
          
          <p  className='mb-0'><span className='gold-text'>Follow : </span></p>
          {
            socialMedia.map((socialLink)=>{
              return (
                <>
                <Link className='text-white ps-3' href={socialLink.link}>{socialLink.icon}</Link>
                </>
              )
            })
          }
          <hr />
        </div>
        
      </div>
      <hr />
    </div>
    </>
  )
}

export default Footer