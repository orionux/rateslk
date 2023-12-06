import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@/styles/Home.module.css'

import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const Header = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };


  return (
    <>
      <div className="d-flex w-100 px-2 px-lg-5 py-2 justify-content-center align-items-center">
        <nav className="max-width-extra-large navbar navbar-expand-lg w-100">
          <div className="container-fluid">
            <Link className="navbar-brand" href="#">
              <Image src={"/layoutimg/Logo.png"} width={120} height={80} alt={''} className='img-fluid' />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleSidebar}>
              <span className="navbar-toggler-icon"></span>
            </button>
            
    

      
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
        <div className={`${styles.logoCloseContainer} d-flex justify-content-between align-items-center p-4`}>
          <div className={`${styles.logo}`}>
            <Image src='/icons/sidebarlogo.png' width={107} height={28} alt='Rates.lk' />
          </div>
          
          {isSidebarOpen && (
            <div className={`${styles.closeButton} d-lg-none`} onClick={closeSidebar}>
              <IoMdClose className='display-6' />
            </div>
          )}
        </div>

        <div className={`${styles.menu} ps-4 text-start`}>
          <a href='#HeroSection'className='text-decoration-none text-dark'>Daily Rates</a>
          <hr />
          <a href='#TodayRatingsSec'className='text-decoration-none text-dark'>E Wallet</a>
          <hr />
          <a href='#AgentServicesSec'className='text-decoration-none text-dark'>Agent Services</a>
          <hr />
          <a href='#contactSection' className='text-decoration-none text-dark'>Contact Us</a>
          <hr />
          <a href='#ExperienceSec' className='text-decoration-none text-dark'>Get Help</a>
          <hr />
          <a href='#ServicesSec' className='text-decoration-none text-dark'>What`s New</a>
          <hr />
        </div>
      </div>
    
          </div>
          <div className="d-flex">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item px-4">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item px-4">
                  <a className="nav-link" href="#TodayRatingsSec">Buy</a>
                </li>
                <li className="nav-item px-4">
                  <a className="nav-link" href="#TodayRatingsSec">Sell</a>
                </li>
                <li className={`nav-item px-4 ${styles.navButton}`}>
                  <a className="nav-link" href="#">Register</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header