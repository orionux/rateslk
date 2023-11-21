import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@/styles/Home.module.css'


const Header = () => {
  return (
    <>
      <div className="d-flex w-100 px-2 px-lg-5 py-2">
        <nav className="navbar navbar-expand-lg w-100">
          <div className="container-fluid">
            <Link className="navbar-brand" href="#">
              <Image src={"/layoutimg/Logo.png"} width={120} height={80} alt={''} className='img-fluid' />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="d-flex">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item px-2">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="#">Buy</a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="#">Sell</a>
                </li>
                <li className={`nav-item px-2 ${styles.navButton}`}>
                  <a className="nav-link" href="#">Register</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header