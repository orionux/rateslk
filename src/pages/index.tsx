import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaPhoneAlt } from "react-icons/fa";
import GetHelpButton from '@/components/buttons/getHelpButton';
import ExchangeRates from '@/components/buttons/ExchangeRates';
import Link from 'next/link';
import { Rates } from 'typings';
import { fetchRates } from '../utils/fetchRates'
import { GetStaticProps } from 'next';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { IoIosCloseCircle } from "react-icons/io";


interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
}

const testimonials: Testimonial[] = [
  { name: 'Nattasha', role: 'Junior Lawyer', image: '/testimonial/Photo.png', content: 'There are of Lorem Ipsum available, but the majority have su alteration in some form, by injected oir which don`t look even slightly believable.' },
  { name: 'Minci pall', role: 'Consultant', image: '/testimonial/Photo (1).png', content: 'There are of Lorem Ipsum available, but the majority have su alteration in some form, by injected oir which don`t look even slightly believable.' },
  { name: 'Julia Rose', role: 'Consultant', image: '/testimonial/Photo (2).png', content: 'There are of Lorem Ipsum available, but the majority have su alteration in some form, by injected oir which don`t look even slightly believable.' },
  { name: 'John David', role: 'Designer', image: '/testimonial/Photo (3).png', content: 'There are of Lorem Ipsum available, but the majority have su alteration in some form, by injected oir which don`t look even slightly believable.' },
];


type Props = {
  rates: Rates[];
}
const Home = ({ rates }: Props) => {
  const [exchangeRates, setExchangeRates] = useState<any>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRate, setSelectedRate] = useState<any>(null);
  console.log("rates: ", rates)

  const [showModal, setshowModal] = useState(false);
  const [showModalTwo, setshowModalTwo] = useState(false);
  const [showSuccess, setshowSuccess] = useState(false);

  // ---------------------
  const handleModalOpen = () => {
    setshowModal(true);
  };

  const handleModalClose = () => {
    setshowModal(false);
  };


// ---------------------
  const handleModalTwoOpen = () => {
    setshowModalTwo(true);
  }
  const handleModalTwoClose = () => {
    setshowModalTwo(false);
  }



  // ---------------------
  const handleSuccessOpen = () => {
    setshowSuccess(true);
  }
  const handleSuccessClose = () => {
    setshowSuccess(false);
  }

  const [showMore, setShowMore] = useState(false);

  const toggleRows = () => {
    setShowMore(!showMore);
  };


  const renderTestimonials = () => {
    return testimonials.map((testimonial, index) => (
      <div className={`d-flex p-2 ${styles.testimonialsCard}`} key={index}>
        {index % 2 === 0 ? (
          <>
            <div className="d-flex flex-column">
              <div className={`${styles.testimonial1} py-5 px-4`}>
                <Image src={'/icons/quote.png'} width={30} height={30} alt="" className='img-fluid' />
                <p className={`${styles.testiminialDesc}`}>{testimonial.content}</p>
              </div>
              <div className="d-flex align-items-center pt-3">
                <div>
                  <Image src={testimonial.image} alt="" width={100} height={100} className="rounded-circle" />
                </div>
                <div className="ms-3">
                  <span className={`${styles.testiminialName}`}>{testimonial.name}</span>
                  <p className={`${styles.testiminialRole}`}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={`d-flex flex-column-reverse flex-lg-column ${styles.testimonialsCard}`}>
              <div className="d-flex align-items-center pt-3">
                <div>
                  <Image src={testimonial.image} alt="" width={100} height={100} className="rounded-circle" />
                </div>
                <div className="ms-3">
                  <span className={`${styles.testiminialName}`}>{testimonial.name}</span>
                  <p className={`${styles.testiminialRole}`}>{testimonial.role}</p>
                </div>
              </div>
              <div className={`${styles.testimonial2} py-5 px-4`}>
                <Image src={'/icons/quote.png'} width={30} height={30} alt="" className='img-fluid' />
                <p className={`${styles.testiminialDesc}`}>{testimonial.content}</p>
              </div>
            </div>
          </>
        )}
      </div>
    ));
  };



  useEffect(() => {

  }, [selectedRate])



  const handleBuySellClick = (index: string) => {
    console.log(index)
    //   const selectedRateData = rates[index];
    setSelectedRate(index);
    console.log(selectedRate);
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };


  const agentDetails = [
    {
      id: 0,
      title: "Skrill",
      agents: [
        {
          id: 2,
          icon: "/icons/Frame 1000003285.svg",
          cardTitle: "Galle Exchange",
          name: "Pasindu Loshitha",
          tel: "076 26 58 293",
          telLink: "tel: 0762658293",
          email: "pasindulositha26@gmail.com",
          telegram: "@loshitha97",
          telegramLink: "#",
          whatsapp: "076 26 58 293",
          whatsappLink: "https://api.whatsapp.com/send?phone=94762658293"
        },
        {
          id: 1,
          icon: "/icons/Frame 1000003285.svg",
          cardTitle: "Galle Exchange",
          name: "Sanjaya Gunarathna",
          tel: "070 45 45 132",
          telLink: "tel: 0704545132",
          email: "gunarathna.sm@gmail.com",
          telegram: "@sanjaya100",
          telegramLink: "#",
          whatsapp: "070 45 45 132",
          whatsappLink: "https://api.whatsapp.com/send?phone=94704545132"
        },
      ]
    },
    {
      id: 1,
      title: "Deriv",
      agents: [
        {
          id: 1,
          icon: "/icons/Frame 1000003285.svg",
          cardTitle: "Galle Exchange",
          name: "Sanjaya Gunarathna",
          tel: "070 45 45 132",
          telLink: "tel: 0704545132",
          email: "gunarathna.sm@gmail.com",
          telegram: "@sanjaya100",
          telegramLink: "#",
          whatsapp: "070 45 45 132",
          whatsappLink: "https://api.whatsapp.com/send?phone=94704545132"
        },
        {
          id: 2,
          icon: "/icons/Frame 1000003285.svg",
          cardTitle: "Galle Exchange",
          name: "Pasindu Loshitha",
          tel: "076 26 58 293",
          telLink: "tel: 0762658293",
          email: "pasindulositha26@gmail.com",
          telegram: "@loshitha97",
          telegramLink: "#",
          whatsapp: "076 26 58 293",
          whatsappLink: "https://api.whatsapp.com/send?phone=94762658293"
        }
      ]
    },
    {
      id: 2,
      title: "Payoneer",
      agents: [
        {
          id: 1,
          icon: "/icons/Frame 1000003286.svg",
          cardTitle: "SLFast Exchange",
          name: "Kavinda Premathilaka",
          tel: "070 16 16 250",
          telLink: "tel: 0701616250",
          email: "slfast100@gmail.com",
          telegram: "@Sfastexchnage100",
          telegramLink: "#",
          whatsapp: "070 16 16 250",
          whatsappLink: "https://api.whatsapp.com/send?phone=94701616250"
        },
        {
          id: 2,
          icon: "/icons/Frame 1000003286.svg",
          cardTitle: "SLFast Exchange",
          name: "Kasun Premathilaka",
          tel: "076 58 50 685",
          telLink: "tel: 0765850685",
          email: "kbtwins07@gmail.com",
          telegram: "@Rakil_98",
          telegramLink: "#",
          whatsapp: "076 26 58 293",
          whatsappLink: "https://api.whatsapp.com/send?phone=94762658293"
        },
      ]
    },
    {
      id: 3,
      title: "Tether",
      agents: [
        {
          id: 1,
          icon: "/icons/Frame 1000003286.svg",
          cardTitle: "SLFast Exchange",
          name: "Kavinda Premathilaka",
          tel: "070 16 16 250",
          telLink: "tel: 0701616250",
          email: "slfast100@gmail.com",
          telegram: "@Sfastexchnage100",
          telegramLink: "#",
          whatsapp: "070 16 16 250",
          whatsappLink: "https://api.whatsapp.com/send?phone=94701616250"
        },
        {
          id: 2,
          icon: "/icons/Frame 1000003285.svg",
          cardTitle: "Galle Exchange",
          name: "Sanjaya Gunarathna",
          tel: "070 45 45 132",
          telLink: "tel: 0704545132",
          email: "gunarathna.sm@gmail.com",
          telegram: "@sanjaya100",
          telegramLink: "#",
          whatsapp: "070 45 45 132",
          whatsappLink: "https://api.whatsapp.com/send?phone=94704545132"
        },
      ]
    },
    {
      id: 4,
      title: "Wise",
      agents: [
        {
          id: 1,
          icon: "/icons/Frame 1000003285.svg",
          cardTitle: "Galle Exchange",
          name: "Sanjaya Gunarathna",
          tel: "070 45 45 132",
          telLink: "tel: 0704545132",
          email: "gunarathna.sm@gmail.com",
          telegram: "@sanjaya100",
          telegramLink: "#",
          whatsapp: "070 45 45 132",
          whatsappLink: "https://api.whatsapp.com/send?phone=94704545132"
        },
        {
          id: 2,
          icon: "/icons/Frame 1000003286.svg",
          cardTitle: "SLFast Exchange",
          name: "Kavinda Premathilaka",
          tel: "070 16 16 250",
          telLink: "tel: 0701616250",
          email: "slfast100@gmail.com",
          telegram: "@Sfastexchnage100",
          telegramLink: "#",
          whatsapp: "070 16 16 250",
          whatsappLink: "https://api.whatsapp.com/send?phone=94701616250"
        },
      ]
    },
    {
      id: 5,
      title: "Neteller",
      agents: [
        {
          id: 2,
          icon: "/icons/Frame 1000003285.svg",
          cardTitle: "Galle Exchange",
          name: "Pasindu Loshitha",
          tel: "076 26 58 293",
          telLink: "tel: 0762658293",
          email: "pasindulositha26@gmail.com",
          telegram: "@loshitha97",
          telegramLink: "#",
          whatsapp: "076 26 58 293",
          whatsappLink: "https://api.whatsapp.com/send?phone=94762658293"
        },
        {
          id: 1,
          icon: "/icons/Frame 1000003285.svg",
          cardTitle: "Galle Exchange",
          name: "Sanjaya Gunarathna",
          tel: "070 45 45 132",
          telLink: "tel: 0704545132",
          email: "gunarathna.sm@gmail.com",
          telegram: "@sanjaya100",
          telegramLink: "#",
          whatsapp: "070 45 45 132",
          whatsappLink: "https://api.whatsapp.com/send?phone=94704545132"
        },
      ]
    },
    {
      id: 6,
      title: "Perfect Money",
      agents: [
        {
          id: 2,
          icon: "/icons/Frame 1000003285.svg",
          cardTitle: "Galle Exchange",
          name: "Pasindu Loshitha",
          tel: "076 26 58 293",
          telLink: "tel: 0762658293",
          email: "pasindulositha26@gmail.com",
          telegram: "@loshitha97",
          telegramLink: "#",
          whatsapp: "076 26 58 293",
          whatsappLink: "https://api.whatsapp.com/send?phone=94762658293"
        },
        {
          id: 1,
          icon: "/icons/Frame 1000003285.svg",
          cardTitle: "Galle Exchange",
          name: "Sanjaya Gunarathna",
          tel: "070 45 45 132",
          telLink: "tel: 0704545132",
          email: "gunarathna.sm@gmail.com",
          telegram: "@sanjaya100",
          telegramLink: "#",
          whatsapp: "070 45 45 132",
          whatsappLink: "https://api.whatsapp.com/send?phone=94704545132"
        },
      ]
    } 
    /* {
      id: 1,
      title: "deriv",
      agents: [
      {
          id: 1,
          icon: "/icons/Pasindu Logo.png",
          cardTitle: "Galle Exchange",
          name: "Sanjaya Gunarathna",
          tel: "070 45 45 132",
          telLink: "tel: 0704545132",
          email: "gunarathna.sm@gmail.com",
          telegram: "@sanjaya100",
          telegramLink: "#",
          whatsapp: "070 45 45 132",
          whatsappLink: "https://api.whatsapp.com/send?phone=94704545132"
        },
        {
          id: 2,
          icon: "/icons/Pasindu Logo.png",
          cardTitle: "Galle Exchange",
          name: "Pasindu Loshitha",
          tel: "076 26 58 293",
          telLink: "tel: 0762658293",
          email: "pasindulositha26@gmail.com",
          telegram: "@loshitha97",
          telegramLink: "#",
          whatsapp: "076 26 58 293",
          whatsappLink: "https://api.whatsapp.com/send?phone=94762658293"
        }
      ]
    },
    {
      id: 0,
      title: "skrill",
      agents: [
        {
          id: 2,
          icon: "/icons/Pasindu Logo.png",
          cardTitle: "Galle Exchange",
          name: "Pasindu Loshitha",
          tel: "076 26 58 293",
          telLink: "tel: 0762658293",
          email: "pasindulositha26@gmail.com",
          telegram: "@loshitha97",
          telegramLink: "#",
          whatsapp: "076 26 58 293",
          whatsappLink: "https://api.whatsapp.com/send?phone=94762658293"
        },
        {
          id: 1,
          icon: "/icons/Pasindu Logo.png",
          cardTitle: "Galle Exchange",
          name: "Sanjaya Gunarathna",
          tel: "070 45 45 132",
          telLink: "tel: 0704545132",
          email: "gunarathna.sm@gmail.com",
          telegram: "@sanjaya100",
          telegramLink: "#",
          whatsapp: "070 45 45 132",
          whatsappLink: "https://api.whatsapp.com/send?phone=94704545132"
        },
      ]
    },
    {
      id: 6,
      title: "Perfect Money",
      agents: [
        {
          id: 2,
          icon: "/icons/Pasindu Logo.png",
          cardTitle: "Galle Exchange",
          name: "Pasindu Loshitha",
          tel: "076 26 58 293",
          telLink: "tel: 0762658293",
          email: "pasindulositha26@gmail.com",
          telegram: "@loshitha97",
          telegramLink: "#",
          whatsapp: "076 26 58 293",
          whatsappLink: "https://api.whatsapp.com/send?phone=94762658293"
        },
        {
          id: 1,
          icon: "/icons/Pasindu Logo.png",
          cardTitle: "Galle Exchange",
          name: "Sanjaya Gunarathna",
          tel: "070 45 45 132",
          telLink: "tel: 0704545132",
          email: "gunarathna.sm@gmail.com",
          telegram: "@sanjaya100",
          telegramLink: "#",
          whatsapp: "070 45 45 132",
          whatsappLink: "https://api.whatsapp.com/send?phone=94704545132"
        },
      ]
    },
    {
      id: 5,
      title: "Neteller",
      agents: [
        {
          id: 2,
          icon: "/icons/Pasindu Logo.png",
          cardTitle: "Galle Exchange",
          name: "Pasindu Loshitha",
          tel: "076 26 58 293",
          telLink: "tel: 0762658293",
          email: "pasindulositha26@gmail.com",
          telegram: "@loshitha97",
          telegramLink: "#",
          whatsapp: "076 26 58 293",
          whatsappLink: "https://api.whatsapp.com/send?phone=94762658293"
        },
        {
          id: 1,
          icon: "/icons/Pasindu Logo.png",
          cardTitle: "Galle Exchange",
          name: "Sanjaya Gunarathna",
          tel: "070 45 45 132",
          telLink: "tel: 0704545132",
          email: "gunarathna.sm@gmail.com",
          telegram: "@sanjaya100",
          telegramLink: "#",
          whatsapp: "070 45 45 132",
          whatsappLink: "https://api.whatsapp.com/send?phone=94704545132"
        },
      ]
    },
    {
      id: 4,
      title: "wise",
      agents: [
        {
          id: 1,
          icon: "/icons/Pasindu Logo.png",
          cardTitle: "Galle Exchange",
          name: "Sanjaya Gunarathna",
          tel: "070 45 45 132",
          telLink: "tel: 0704545132",
          email: "gunarathna.sm@gmail.com",
          telegram: "@sanjaya100",
          telegramLink: "#",
          whatsapp: "070 45 45 132",
          whatsappLink: "https://api.whatsapp.com/send?phone=94704545132"
        },
        {
          id: 2,
          icon: "/icons/image 36.png",
          cardTitle: "SLFast Exchange",
          name: "Kavinda Premathilaka",
          tel: "070 16 16 250",
          telLink: "tel: 0701616250",
          email: "slfast100@gmail.com",
          telegram: "@Sfastexchnage100",
          telegramLink: "#",
          whatsapp: "070 16 16 250",
          whatsappLink: "https://api.whatsapp.com/send?phone=94701616250"
        },
      ]
    },
    {
      id: 2,
      title: "payoneer",
      agents: [
        {
          id: 1,
          icon: "/icons/image 36.png",
          cardTitle: "SLFast Exchange",
          name: "Kavinda Premathilaka",
          tel: "070 16 16 250",
          telLink: "tel: 0701616250",
          email: "slfast100@gmail.com",
          telegram: "@Sfastexchnage100",
          telegramLink: "#",
          whatsapp: "070 16 16 250",
          whatsappLink: "https://api.whatsapp.com/send?phone=94701616250"
        },
        {
          id: 2,
          icon: "/icons/image 36.png",
          cardTitle: "SLFast Exchange",
          name: "Kasun Premathilaka",
          tel: "076 58 50 685",
          telLink: "tel: 0765850685",
          email: "kbtwins07@gmail.com",
          telegram: "@Rakil_98",
          telegramLink: "#",
          whatsapp: "076 26 58 293",
          whatsappLink: "https://api.whatsapp.com/send?phone=94762658293"
        },
      ]
    },
    {
      id: 3,
      title: "tether",
      agents: [
        {
          id: 1,
          icon: "/icons/image 36.png",
          cardTitle: "SLFast Exchange",
          name: "Kavinda Premathilaka",
          tel: "070 16 16 250",
          telLink: "tel: 0701616250",
          email: "slfast100@gmail.com",
          telegram: "@Sfastexchnage100",
          telegramLink: "#",
          whatsapp: "070 16 16 250",
          whatsappLink: "https://api.whatsapp.com/send?phone=94701616250"
        },
        {
          id: 2,
          icon: "/icons/Pasindu Logo.png",
          cardTitle: "Galle Exchange",
          name: "Sanjaya Gunarathna",
          tel: "070 45 45 132",
          telLink: "tel: 0704545132",
          email: "gunarathna.sm@gmail.com",
          telegram: "@sanjaya100",
          telegramLink: "#",
          whatsapp: "070 45 45 132",
          whatsappLink: "https://api.whatsapp.com/send?phone=94704545132"
        },
      ]
    } */
  ]


  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch('/api/getExchangeRates');
        const data = await response.json();
        console.log("Data : ", data)
        setExchangeRates(data);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, []);

  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {

    const intervalId = setInterval(() => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = `Updated On ${now.toLocaleDateString(undefined, options)}`;
      setCurrentDate(formattedDate);

      console.log(currentDate); 
    }, 1000 * 1); 

    return () => clearInterval(intervalId);
  }, []); 

  
  
  return (
    <>
      {/* get help button*/}
      <GetHelpButton />
      {/* hero */}
      <div className={`${styles.hero} d-flex flex-column text-center w-100 justify-content-center align-items-center py-5 px-2`} id='HeroSection'>
        <span className={`px-3 py-1 mb-0 ${styles.UpdatedTxt}`}>{currentDate}</span>
        <h2 className='mb-3'>Put Your <span>Trust</span>  In Us, <span>Exchange</span> <br /> With Confidence.</h2>
        {/* <p className='d-none d-lg-flex'>Elevate Your Currency Exchange Experience With Us. Trust, Expertise, Excellence – Your <br></br> Premier Destination For Seamless Transactions And Unmatched Service..</p>
        <p className='d-flex d-lg-none'>Elevate Your Currency Exchange Experience With Us. Trust, Expertise, Excellence – Your Premier Destination For Seamless Transactions And Unmatched Service..</p> */}
        <Link href="#TodayRatingsSec" style={{textDecoration: 'none !important'}}> <button className={`px-3 py-3`}>View vertual E-wallet rates</button></Link>

        <div className={`max-width-extra-large col-11 p-2 p-lg-5 mt-5 mb-0 position-relative ${styles.flagBackColor} `}>
          <p className='fw-bold px-5 pt-3'>100% of the data is published according to the exchange rates of the <span className='text-warning'>Central Bank of Sri Lanka</span></p>
          {exchangeRates && (
            <div className='col-12 d-flex flex-wrap'>
              {exchangeRates.usd && (
                <div className='d-flex col-12 col-md-6 col-lg-4 pb-3 px-2 justify-content-center'>
                  <div className='d-flex bg-opacity-75 bg-light w-100 border rounded-3 border-3 justify-content-between'>
                    <div className={`d-flex flex-column ${styles.flagBox} col-4`}>
                      <Image src="/flags/flag-usd.png" alt="" width="130" height="75" className={`p-1 align-self-center ${styles.flegImage}`} />
                      <h3>USD</h3>
                    </div>
                    <div className={`align-self-center ${styles.currencyColBorder} col-4`}>
                      <p className='text-dark mb-0'>Buying</p>
                      <p className='text-dark fw-bold mb-0'>{exchangeRates.usd.buyValue}</p>
                    </div>
                    <div className='align-self-center pe-2 col-4'>
                      <p className='text-dark mb-0'>Selling</p>
                      <p className='text-dark fw-bold mb-0'>{exchangeRates.usd.sellValue}</p>
                    </div>
                  </div>
                </div>
              )}
              {exchangeRates.eur && (
                <div className='d-flex col-12 col-md-6 col-lg-4 pb-3 px-2 justify-content-center'>
                  <div className='d-flex bg-opacity-75 bg-light w-100 border rounded-3 border-3 justify-content-between'>
                    <div className={`d-flex flex-column ${styles.flagBox} col-4`}>
                      <Image src="/flags/flag-eur.png" alt="" width="130" height="75" className={`p-1 align-self-center ${styles.flegImage}`} />
                      <h3>EUR</h3>
                    </div>
                    <div className={`align-self-center ${styles.currencyColBorder} col-4`}>
                      <p className='text-dark mb-0'>Buying</p>
                      <p className='text-dark fw-bold mb-0'>{exchangeRates.eur.buyValue}</p>
                    </div>
                    <div className=' align-self-center pe-2 col-4'>
                      <p className='text-dark mb-0'>Selling</p>
                      <p className='text-dark fw-bold mb-0'>{exchangeRates.eur.sellValue}</p>
                    </div>
                  </div>
                </div>
              )}
              {exchangeRates.gbp && (
                <div className='d-flex col-12 col-md-6 col-lg-4 pb-3 px-2 justify-content-center'>
                  <div className='d-flex bg-opacity-75 bg-light w-100 border rounded-3 border-3 justify-content-between'>
                    <div className={`d-flex flex-column ${styles.flagBox} col-4`}>
                      <Image src="/flags/flag-gbp.png" alt="" width="130" height="75" className={`p-1 align-self-center ${styles.flegImage}`} />
                      <h3>GBP</h3>
                    </div>
                    <div className={`align-self-center ${styles.currencyColBorder} col-4`}>
                      <p className='text-dark mb-0'>Buying</p>
                      <p className='text-dark fw-bold mb-0'>{exchangeRates.gbp.buyValue}</p>
                    </div>
                    <div className=' align-self-center pe-2 col-4'>
                      <p className='text-dark mb-0'>Selling</p>
                      <p className='text-dark fw-bold mb-0'>{exchangeRates.gbp.sellValue}</p>
                    </div>
                  </div>
                </div>
              )}

              {exchangeRates.jpy && (
                <div className={showMore ? 'd-flex col-12 col-md-6 col-lg-4 pb-3 px-2 justify-content-center' : 'd-none'}>
                  <div className='d-flex bg-opacity-75 bg-light w-100  border rounded-3 border-3 justify-content-between'>
                    <div className={`d-flex flex-column ${styles.flagBox} col-4`}>
                      <Image src="/flags/flag-jpy.png" alt="" width="130" height="75" className={`p-1 align-self-center ${styles.flegImage}`} />
                      <h3>JPY</h3>
                    </div>
                    <div className={`align-self-center ${styles.currencyColBorder} col-4`}>
                      <p className='text-dark mb-0'>Buying</p>
                      <p className='text-dark fw-bold mb-0'>{exchangeRates.jpy.buyValue}</p>
                    </div>
                    <div className=' align-self-center pe-2 col-4'>
                      <p className='text-dark mb-0'>Selling</p>
                      <p className='text-dark fw-bold mb-0'>{exchangeRates.jpy.sellValue}</p>
                    </div>
                  </div>
                </div>
              )}
              {exchangeRates.aud && (
                <div className={showMore ? 'd-flex col-12 col-md-6 col-lg-4 pb-3 px-2 justify-content-center' : 'd-none'}>
                  <div className='d-flex bg-opacity-75 bg-light w-100 border rounded-3 border-3 justify-content-between'>
                    <div className={`d-flex flex-column ${styles.flagBox} col-4`}>
                      <Image src="/flags/flag-aud.png" alt="" width="130" height="75" className={`p-1 align-self-center ${styles.flegImage}`} />
                      <h3>AUD</h3>
                    </div>
                    <div className={`align-self-center ${styles.currencyColBorder} col-4`}>
                      <p className='text-dark mb-0'>Buying</p>
                      <p className='text-dark fw-bold mb-0'>{exchangeRates.aud.buyValue}</p>
                    </div>
                    <div className=' align-self-center pe-2 col-4'>
                      <p className='text-dark mb-0'>Selling</p>
                      <p className='text-dark fw-bold mb-0'>{exchangeRates.aud.sellValue}</p>
                    </div>
                  </div>
                </div>
              )}

              {exchangeRates.cnh && (
                <div className={showMore ? 'd-flex col-12 col-md-6 col-lg-4 pb-3 px-2 justify-content-center' : 'd-none'}>
                  <div className='d-flex bg-opacity-75 bg-light w-100  border rounded-3 border-3 justify-content-between'>
                    <div className={`d-flex flex-column ${styles.flagBox} col-4`}>
                      <Image src="/flags/flag-cny.png" alt="" width="130" height="75" className={`p-1 align-self-center ${styles.flegImage}`} />
                      <h3>CNY</h3>
                    </div>
                    <div className={`align-self-center ${styles.currencyColBorder} col-4`}>
                      <p className='text-dark mb-0'>Buying</p>
                      <p className='text-dark fw-bold mb-0'>{exchangeRates.cnh.buyValue}</p>
                    </div>
                    <div className=' align-self-center pe-2 col-4'>
                      <p className='text-dark mb-0'>Selling</p>
                      <p className='text-dark fw-bold mb-0'>{exchangeRates.cnh.sellValue}</p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}


          <button onClick={toggleRows} className='bg-transparent text-light' style={{ border: "none !important;" }}>
            {showMore ? 'See Less' : 'See All'}
            {showMore ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>

        </div>
      </div>
      {/* table */}
      <div className={`${styles.priceTable} d-flex flex-column text-center w-100 justify-content-center align-items-center px-1 px-md-2 px-lg-5`} id='TodayRatingsSec'>
        <h3 className='pt-5'>E Wallet RATINGS</h3>
        <p className='pb-2 pb-lg-3 mb-2 mb-lg-5'>Check out our freshly updated exchange rates today and get the best deal for your money!</p>
        <div className="d-flex row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 w-100 p-0 px-xl-5 m-0 max-width-extra-large justify-content-center">
          {
            rates.sort((a, b) => a.id - b.id).map((rate) => {
              return (
                <>
                  <div className={`d-flex justify-content-center align-item-center col-6 col-sm-6 col-md-4 col-lg-3 p-0 p-lg-2 `} key={rate.id}>
                    <div className={`d-flex flex-column ${styles.cryptoCard} justify-content-center align-items-center w-100 m-1 m-md-2 p-1 p-lg-3`}>
                      {rate.imageUrl ? (
                        <Image src={`${rate.imageUrl}`} width={130} height={90} alt="" className={`img-fluid py-2 py-lg-4 px-4 my-1 my-lg-3 ${styles.logoImages}`} />
                      ) : (
                        <div>Image not available</div>
                      )}
                      <div className={`d-flex flex-column justify-content-center align-items-center px-1 px-lg-2 py-2 py-lg-3 mb-1 ${styles.buyCol}`}>
                        <p className='text-dark mb-0'>Buying</p>
                        <h3 className='text-dark mb-0'>{rate.buyRate}</h3>
                      </div>
                      <div className={`d-flex flex-column justify-content-center align-items-center px-1 px-lg-2 py-2 py-lg-3 ${styles.sellCol}`}>
                        <p className='text-dark mb-0'>Selling</p>
                        <h3 className='text-dark mb-0'>{rate.sellRate}</h3>
                      </div>
                      <div className={`d-flex flex-column justify-content-center align-items-center w-100 px-3 py-3 py-lg-4 ${styles.lastCol}`}>
                        <button className={`${styles.buysellbtn} px-3 py-3 w-100`} onClick={() => handleBuySellClick(rate.title)}>Buy/Sell</button>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
      <Modal show={showPopup} onHide={handleClose} id="popupAgentDetails" className='d-flex align-items-center justify-content-center'>
        <Modal.Body>
          {selectedRate && (
            <div>
              {agentDetails.map((agentGroup) => {
                if (selectedRate === agentGroup.title) {
                  return agentGroup.agents.map((agent) => (
                    <div key={agent.id} className='d-flex flex-column mb-3 px-3 pt-3'>
                      <div className={`d-flex flex-row align-items-center py-2 ${styles.cardTitleWrapper} shadow px-2 mb-3`}>
                        <Image src={agent.icon} width={40} height={40} className={`${styles.popupImage}`} alt=""></Image>
                        <p className='px-3 mb-0'>{agent.cardTitle}</p>
                      </div>
                      <div className="d-flex flex-row mb-1">
                      <Image alt='' src="/icons/user-octagon.svg" width={20} height={20} className='img-fluid me-2' ></Image>
                      <p className={`${styles.textPopup} mb-0`}> {agent.name}</p>
                      </div>
                      <Link className={`${styles.textPopup} mb-1`} href={agent.telLink}>
                        <Image alt='' src="/icons/call-calling.svg" width={20} height={20} className='img-fluid me-2' ></Image> 
                        {agent.tel}
                        </Link>
                      <Link className={`${styles.textPopup}  mb-1`} href={`mailto:${agent.email}`}>
                      <Image alt='' src="/icons/direct-notification.svg" width={20} height={20} className='img-fluid me-2' ></Image>
                       {agent.email}
                       </Link>
                      <Link className={`${styles.textPopup}  mb-1`} href={agent.telegramLink}>
                        <Image alt='' src="/icons/Frame 1000003261.svg" width={20} height={20} className='img-fluid me-2' ></Image>
                       {agent.telegram}
                       </Link>
                      <Link className={`${styles.textPopup}  mb-1`} href={agent.whatsappLink}>
                      <Image alt='' src="/icons/Frame 1000003262.svg" width={20} height={20} className='img-fluid me-2' ></Image>
                      {agent.whatsapp}
                      </Link>
                    </div>
                  ));
                }
                return null;
              })}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
          <IoIosCloseCircle onClick={handleClose} className={`${styles.popupCloseButton}`} />
        </Modal.Footer>
      </Modal>;

      {/*Agent Services*/}
      <div className={`${styles.agentServices} text-center w-100 d-flex flex-column justify-content-center align-items-center p-2 px-lg-5 p-md-4 mt-5`} id='AgentServicesSec'>
        <h3 className='pt-0 fw-bold fs-1'>Agent Services</h3>
        <p className='pb-4 mb-2 mb-lg-5 fw-medium fs-5'>Make Your Deposited and withdrawals Secured and Fast</p>
        <div className='d-flex row row-cols-2 row-cols-md-3 row-cols-lg-4 w-100 p-0 m-0 max-width-extra-large justify-content-center align-items-center'>
          <div className='col-6 col-md-4 col-lg-3 d-flex justify-content-end align-items-center px-2'>
            <div onClick={handleModalOpen} className={` ${styles.agentServicesBox} border p-2 py-lg-5 mb-3 mb-lg-5  bg-white d-flex justify-content-center align-items-center w-100`}>
              <Image src='/agentservices/deriv.png' alt='' width={150} height={40} className='img-fluid py-3' />
            </div>
          </div>
          <div className='col-6 col-md-4 col-lg-3 d-flex justify-content-start align-items-center px-2'>
            <div onClick={handleModalTwoOpen} className={` ${styles.agentServicesBox} border p-2 py-lg-5 mb-3 mb-lg-5  bg-white d-flex justify-content-center align-items-center w-100`}>
              <Image src='/agentservices/1xbet.png' alt='' width={150} height={50} className='img-fluid py-3' />
            </div>
          </div>
          <div className='col-6 col-md-4 col-lg-3 d-flex justify-content-end align-items-center px-2'>
            <div onClick={handleModalTwoOpen} className={` ${styles.agentServicesBox} border p-2 py-lg-5 mb-3 mb-lg-5  bg-white d-flex justify-content-center align-items-center w-100`}>
              <Image src='/agentservices/melbet-logo.png' alt='' width={180} height={50} className='img-fluid py-3' />
            </div>
          </div>
          <div className='col-6 col-md-4 col-lg-3 d-flex justify-content-start align-items-center px-2'>
            <div onClick={handleModalOpen} className={` ${styles.agentServicesBox} border p-2 py-lg-5 mb-3 mb-lg-5  bg-white d-flex justify-content-center align-items-center w-100`}>
              <Image src='/agentservices/ttrust.png' alt='' width={150} height={80} className='img-fluid py-3' />
            </div>
          </div>
        </div>
        <div className={`py-5 px-2 d-flex ${styles.buttonWrapper}`}>
          <Link style={{ textDecoration: "none" }} href="https://api.whatsapp.com/send?phone=94774856781">
            <button className={`px-5 py-3 ${styles.agentServicesBtn}`}>CONTACT US</button>
          </Link>
        </div>
      </div>
      <Modal show={showModal} onHide={handleModalClose} id="Agent" className='d-flex align-items-center justify-content-center'>
        <Modal.Body>
        <div className='d-flex flex-column mb-3 px-3 pt-3'> 
        <Link className={`${styles.textPopup} mb-1`} href="tel: 0704444544">
          <Image alt='' src="/icons/call-calling.png" width={20} height={20} className='img-fluid me-2' ></Image> 
          070 45 45 132
        </Link>
        <Link className={`${styles.textPopup} mb-1`} href="tel: 0704444544">
          <Image alt='' src="/icons/call-calling.png" width={20} height={20} className='img-fluid me-2' ></Image> 
          076 26 58 293 
        </Link>
        </div>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
          <IoIosCloseCircle onClick={handleModalClose} className={`${styles.popupCloseButton}`} />
        </Modal.Footer>
      </Modal>

      <Modal show={showModalTwo} onHide={handleModalTwoClose} id="Agent" className='d-flex align-items-center justify-content-center'>
        <Modal.Body>
        <div className='d-flex flex-column mb-3 px-3 pt-3'>
        <Link className={`${styles.textPopup} mb-1`} href="tel: 0704545132">
          <Image alt='' src="/icons/call-calling.png" width={20} height={20} className='img-fluid me-2' ></Image> 
          070 4444 544
        </Link>
        <Link className={`${styles.textPopup} mb-1`} href="tel: 0704545132">
          <Image alt='' src="/icons/call-calling.png" width={20} height={20} className='img-fluid me-2' ></Image> 
          070 4444 644
        </Link>
        <Link className={`${styles.textPopup} mb-1`} href="tel: 0704545132">
          <Image alt='' src="/icons/call-calling.png" width={20} height={20} className='img-fluid me-2' ></Image> 
          074 3462 980 
        </Link>
        </div>  
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
          <IoIosCloseCircle onClick={handleModalTwoClose} className={`${styles.popupCloseButton}`} />
        </Modal.Footer>
      </Modal>
      {/* services */}
      <div className={`${styles.services} d-flex flex-column flex-lg-row w-100 justify-content-center align-items-center`} id='ServicesSec'>
        <div className="max-width-extra-large d-flex flex-column flex-lg-row w-100 justify-content-center align-items-center">
          <div className={`col-12 col-lg-4 pe-0 pe-lg-2 text-start ${styles.leftCol} py-5`}>
            <h3>Why <br /> you should <span>choose us</span></h3>
            <p>Always strive to provide trust and updated virtual currency exchange rates to avoid uncernities in the market and be supportive. <br></br>
              For all your virtual currency exchange needs, our expertise sellers stand by your side.</p>
            <div className="d-flex col-12 col-lg-10 flex-column flex-lg-row justify-content-between">
              <span className={`${styles.spanRed} col-12 col-lg-6 me-lg-1 text-center px-5 py-3 mb-3 mb-lg-0`}>24/7 Support</span>
              <span className={`${styles.spanGreen} col-12 col-lg-6 ms-lg-1 text-center px-5 py-3`}>100% Secured</span>
            </div>
            <button className={`col-12 col-lg-10 px-5 py-3 mt-3 ${styles.yellowButton}`}>Get Started</button>
          </div>
          <div className={`col-12 col-lg-8 ps-0 ps-lg-2 px-xxl-5 ${styles.rightCol}`}>
            <div className={`d-flex flex-column flex-lg-row px-xxl-5 ${styles.cardRow}`}>
              <div className='col-12 col-lg-6 d-flex p-2 position-relative' >
                <div className={`shadow-lg p-4 d-flex flex-column justify-content-center bg-white ${styles.card1}`} style={{ borderRadius: "30px" }}  >
                  <Image src={'/icons/Group (4).png'} alt="" width={120} height={120} className={`img-fluid ${styles.cardicon} p-2`} />
                  <Image src={'/icons/Group.png'} alt="" width={40} height={40} className="img-fluid pb-3" />
                  <h5 className='position-relative'>Instant 24/7 Support</h5>
                  <p className='mb-0'>Get help round the clock from a professional, fast support team.
                    &quot;Your money, your confidence, our expertise.&quot;</p>
                  
                </div>
              </div>
              <div className='col-12 col-lg-6 d-flex p-2 position-relative'>
                <div className={`shadow-lg p-4 d-flex flex-column justify-content-center bg-white ${styles.card2}`} style={{ borderRadius: "30px" }} >
                  <Image src={'/icons/Group (3).png'} alt="" width={120} height={120} className={`img-fluid ${styles.cardicon}`} />
                  <Image src={'/icons/Group (2).png'} alt="" width={30} height={30} className="img-fluid pb-3" />
                  <h5 className='position-relative'>Verified Sellers</h5>
                  <p className='mb-0'>We partner with the best of the best buyers and sellers. Verified sellers expertise to provide smooth service in exchange e-currencies with trust.
                    &quot;Experience the best exchange rate; every day, all day.&quot;</p>
                  
                </div>
              </div>
            </div>
            <div className={`d-flex flex-column flex-lg-row px-xxl-5 ${styles.cardRow}`}>
              <div className='col-12 col-lg-6 d-flex p-2 position-relative'>
                <div className={`shadow-lg p-4 d-flex flex-column justify-content-center bg-white ${styles.card3}`} style={{ borderRadius: "30px" }} >
                  <Image src={'/icons/Group (5).png'} alt="" width={120} height={120} className={`img-fluid ${styles.cardicon}`} />
                  <Image src={'/icons/Group (1).png'} alt="" width={40} height={40} className="img-fluid pt-1 pb-3" />
                  <h5 className='position-relative'>No Contracts</h5>
                  <p className='mb-0'>That&apos;s right! NO CONTRACTS! We want you to do business with us because of our excellent customer service and professional solutions, not by obligation!
                    &quot;Exchange hassle-free, travel worry-free.&quot;</p>
                  
                </div>
              </div>
              <div className='col-12 col-lg-6 d-flex p-2 position-relative'>
                <div className={`shadow-lg p-4 d-flex flex-column justify-content-center bg-white ${styles.card4}`} style={{ borderRadius: "30px" }} >
                  <Image src={'/icons/Icon (1).png'} alt="" width={100} height={120} className={`img-fluid ${styles.cardicon}`} />
                  <Image src={'/icons/Icon.png'} alt="" width={40} height={40} className="img-fluid pb-4" />
                  <h5 className='position-relative'>We CARE about your business!</h5>
                  <p className='mb-0'>You&apos;re in good hands with Rates.lk. We care about your business&apos;s well-being. &quot;From euros to dollars, we&apos;ve got you covered.&quot;</p>
                  
                </div>
              </div>
            </div>
            <div className={`d-flex flex-column flex-lg-row px-xxl-5 ${styles.cardRow}`}>
              <div className='col-12 col-lg-6 d-flex p-2 position-relative'>
                <div className={`shadow-lg p-4 d-flex flex-column justify-content-center bg-white ${styles.card5}`} style={{ borderRadius: "30px" }} >
                  <Image src={'/icons/Frame (1).png'} alt="" width={120} height={120} className={`img-fluid ${styles.cardicon}`} />
                  <Image src={'/icons/Frame.png'} alt="" width={50} height={50} className="img-fluid pb-4" />
                  <h5 className='position-relative'>Satisfaction</h5>
                  <p className='mb-0'>100% Satisfaction is our goal, providing prompt service in a reliable and fair manner where our services and solutions need us again and again. &quot;Exchange like a pro, travel like a boss.&quot;</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* experience */}
      <div className={`${styles.experience} d-flex flex-column flex-lg-row w-100 justify-content-center align-items-center py-5`} id='ExperienceSec'>
        <div className="max-width-extra-large d-flex flex-column flex-lg-row w-100 justify-content-center align-items-center">
          <div className={`${styles.leftImgWrapper} col-12 col-lg-6 d-flex justify-content-center align-items-center px-2 px-lg-5`}>
            <Image src="/layoutimg/dollarcoin.png" alt='' width={700} height={700} className='img-fluid'></Image>
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start text-start px-2 px-lg-5 py-5">
            <h3>We are the <span>First Trusted</span> and <span>Experienced Team</span> in Sri Lanka</h3>
            <p className='mb-5'>Leading the way as Sri Lanka`s first and most trusted currency exchange team, our seasoned professionals bring unmatched expertise to ensure reliable and secure financial transactions. Choose confidence, choose experience – your premier destination for excellence in foreign currency services.</p>
            <div className="d-flex flex-column flex-lg-row w-100">
              <div className="col-12 col-lg-6 d-flex flex-row justify-content-center align-items-center p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="57" viewBox="0 0 58 57" fill="none">
                  <path d="M51.931 5.3674L48.0862 13.8527C47.9099 14.2417 47.8188 14.6638 47.8188 15.0908V52.9396C47.8188 54.0442 48.7142 54.9396 49.8188 54.9396H54.9541C56.0587 54.9396 56.9541 54.0442 56.9541 52.9396V15.0908C56.9541 14.6638 56.8629 14.2417 56.6867 13.8527L52.8419 5.3674C52.6645 4.97589 52.1084 4.97589 51.931 5.3674Z" stroke="#F5A414" strokeWidth="2" />
                  <path d="M47.8188 15.0908H52.9574H56.9541" stroke="#F5A414" strokeWidth="2" />
                  <rect x="6.83413" y="25.1445" width="28.0038" height="2.33365" rx="1.16683" fill="#F5A414" />
                  <rect x="8.16779" y="8.97559" width="10.1678" height="7.83413" rx="1.5" stroke="#F5A414" strokeWidth="2" />
                  <rect x="6.83413" y="36.8125" width="28.0038" height="2.33365" rx="1.16683" fill="#F5A414" />
                  <rect x="6.83413" y="42.6465" width="17.5024" height="2.33365" rx="1.16683" fill="#F5A414" />
                  <rect x="6.83413" y="30.9785" width="28.0038" height="2.33365" rx="1.16683" fill="#F5A414" />
                  <path d="M47.8188 49.8301H56.9541" stroke="#F5A414" strokeWidth="2" />
                  <path d="M1 8.80762V48.1925C1 52.0585 4.13401 55.1925 8 55.1925H34.2603C38.1263 55.1925 41.2603 52.0585 41.2603 48.1925V16.5358C41.2603 14.5484 40.4154 12.6546 38.9365 11.3269L30.3278 3.59866C29.0432 2.44548 27.3778 1.80762 25.6516 1.80762H8C4.13401 1.80762 1 4.94162 1 8.80762Z" stroke="#F5A414" strokeWidth="2" />
                  <path d="M25.9808 2.02441V11.6961C25.9808 13.9053 27.7716 15.6961 29.9808 15.6961H40.2902" stroke="#F5A414" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <p className={`${styles.yearTxtWhite} mb-0 ps-3`}>100% <br />
                  Case Success</p>
              </div>
              <div className="col-12 col-lg-6 d-flex flex-row justify-content-center align-items-center p-3" style={{ backgroundColor: "#F5A414" }}>
                <div className="d-flex p-2 rounded-2" style={{ backgroundColor: "#333" }}>
                  <h3 className={`${styles.yearNumbers} mb-0`}>5+</h3>
                </div>
                <p className={`${styles.yearTxt} mb-0 ps-3`}>Years<br />
                  Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* testimonials */}
      {/* <div className={`${styles.testimonials} d-flex flex-column w-100 justify-content-center align-items-center text-center py-5`}>
        <h3>What Our Clients Say <span> About </span>Us</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore <br />
          magna aliqua ut dolor sit</p>

        <div className='max-width-extra-large d-flex flex-column flex-lg-row p-0 p-lg-3 gap-lg-5 text-start'>
          {renderTestimonials()}
        </div>
      </div> */}
      {/* contact */}
      <div className={`${styles.contactForm} d-flex flex-column w-100 justify-content-center align-items-center text-center`} id='contactSection'>
        <h3 className='mb-5'>Get In Touch</h3>
        <form action="#contactSection" className={` ${styles.FormContactUs} max-width-extra-large`}>
          <div className="d-flex flex-column flex-lg-row">
            <div className="col-12 col-lg-6 d-flex flex-column align-items-start px-2">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" placeholder='your full name here' name='fullName' id='fullName' />
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column align-items-start  px-2">
              <label htmlFor="email">Email Address</label>
              <input type="email" placeholder='support@crptop.com' name='email' id='email' />
            </div>
          </div>
          <div className="d-flex flex-column flex-lg-row">
            <div className="col-12 col-lg-6 d-flex flex-column align-items-start  px-2">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="tel" placeholder='your phone number' name='phoneNumber' id='phoneNumber' />
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column align-items-start  px-2">
              <label htmlFor="subject">Subject</label>
              <input type="text" placeholder='how can we help' name='subject' id='subject' />
            </div>
          </div>
          <div className="d-flex flex-column align-items-start  px-2">
            <label htmlFor="message">Leave us a message</label>
            <textarea name="message" id="message" rows={10} placeholder='Please type your comments... '></textarea>
            <div className="d-flex w-100 justify-content-center py-2">
              <button onClick={handleSuccessOpen}>Get An Appoinment</button>
            </div>
          </div>
        </form>
      </div>
      <Modal show={showSuccess} onHide={handleSuccessClose} id="Agent" className='d-flex align-items-center justify-content-center'>
        <Modal.Body>
        <div className='d-flex flex-column mb-3 px-3 pt-3 justify-content-center align-items-center'>
        
          <Image alt='' src="/icons/success.png" width={100} height={100} className='img-fluid' ></Image>
          <p className='fs-6 fw-bold text-center'>Your Message Has Been <span className='text-warning'>Successfully Sent !</span></p>
        
        </div>  
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
        <IoIosCloseCircle onClick={handleSuccessClose} className={`${styles.popupCloseButton}`} />
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const rates: Rates[] = await fetchRates();

  return {
    props: {
      rates
    },
    revalidate: 10,
  }
}