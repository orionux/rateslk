import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import GetHelpButton from '@/components/buttons/getHelpButton';
import ExchangeRates from '@/components/buttons/ExchangeRates';
import Link from 'next/link';


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

export default function Home() {

  const tableData = [
    {
      id: 1,
      img: "/priceLogos/deriv.png",
      buying: "258.3525",
      selling: "258.3525",
      buttonTxt: "Buy/Sell"
    },
    {
      id: 2,
      img: "/priceLogos/skrill.png",
      buying: "258.3525",
      selling: "258.3525",
      buttonTxt: "Buy/Sell"
    }
    ,
    {
      id: 3,
      img: "/priceLogos/payoneer.png",
      buying: "258.3525",
      selling: "258.3525",
      buttonTxt: "Buy/Sell"
    }
    ,
    {
      id: 4,
      img: "/priceLogos/Amazon.png",
      buying: "258.3525",
      selling: "258.3525",
      buttonTxt: "Buy/Sell"
    }
  ]

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

  return (
    <>
      {/* get help button*/}
      <GetHelpButton />

      {/* hero */}
      <div className={`${styles.hero} d-flex flex-column text-center w-100 justify-content-center align-items-center py-5`}>
        <span className={`px-3 py-1 mb-0 ${styles.UpdatedTxt}`}>Updated on March 31, 2022</span>
        <h2 className='mb-3'>Your Gateway To <span>Daily Rate</span> <br /> Fluctuations</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua ut dolor sit</p>
        <button className={`px-3 py-3`}>View vertual wallet rates</button>

       <div className='col-11 p-5 mt-5 mb-0 bg-opacity-25 bg-light border border-3 rounded position-relative'>

      <div className='col-12 d-flex flex-wrap'>         
          
              <div className='d-flex col-12 col-md-6 col-lg-4 pb-3 justify-content-center'>
              <div className='d-flex bg-opacity-75 bg-light gap-3 border rounded border-3 pe-3'>
                      <Image src="/flags/image 8.png" alt="" width="130" height="75" className=' p-1 align-self-center' />
                      <div className=' align-self-center '>
                        <p className='text-dark mb-0'>Buying</p>
                        <p className='text-dark fw-bold mb-0'>258.3525</p>
                      </div>
                      <div className='align-self-center  '>
                        <p className='text-dark mb-0'>Selling</p>
                        <p className='text-dark fw-bold mb-0'>258.3525</p>
                      </div>
                </div>
              </div>
          
              <div className='d-flex col-12 col-md-6 col-lg-4 pb-3 justify-content-center'>
              <div className='d-flex bg-opacity-75 bg-light gap-3 border rounded border-3 pe-3'>
                      <Image src="/flags/image 12.png" alt="" width="130" height="75" className='p-1 align-self-center' />
                      <div className=' align-self-center'>
                        <p className='text-dark mb-0'>Buying</p>
                        <p className='text-dark fw-bold mb-0'>258.3525</p>
                      </div>
                      <div className=' align-self-center'>
                        <p className='text-dark mb-0'>Selling</p>
                        <p className='text-dark fw-bold mb-0'>258.3525</p>
                      </div>
                </div>
              </div>

              <div className='d-flex col-12 col-md-6 col-lg-4 pb-3 justify-content-center'>
              <div className='d-flex bg-opacity-75 bg-light gap-3 border rounded border-3 pe-3'>
                        <Image src="/flags/image 11.png" alt="" width="130" height="75" className='p-1 align-self-center' />
                        <div className=' align-self-center'>
                          <p className='text-dark mb-0'>Buying</p>
                          <p className='text-dark fw-bold mb-0'>258.3525</p>
                        </div>
                        <div className=' align-self-center'>
                          <p className='text-dark mb-0'>Selling</p>
                          <p className='text-dark fw-bold mb-0'>258.3525</p>
                        </div>
                </div>
              </div>
          

          
              <div className={showMore ? 'd-flex col-12 col-md-6 col-lg-4 pb-3 justify-content-center' : 'd-none'}>
              <div className='d-flex bg-opacity-75 bg-light gap-3  border rounded border-3 pe-3'>
                          <Image src="/flags/image 9.png" alt="" width="130" height="75" className='p-1 align-self-center' />
                          <div className='align-self-center '>
                            <p className='text-dark mb-0'>Buying</p>
                            <p className='text-dark fw-bold mb-0'>258.3525</p>
                          </div>
                          <div className=' align-self-center'>
                            <p className='text-dark mb-0'>Selling</p>
                            <p className='text-dark fw-bold mb-0'>258.3525</p>
                          </div>
                    </div>
                  </div>

                  <div className={showMore ? 'd-flex col-12 col-md-6 col-lg-4 pb-3 justify-content-center' : 'd-none'}>
                  <div className='d-flex bg-opacity-75 bg-light gap-3 border rounded border-3 pe-3'>
                            <Image src="/flags/image 10.png" alt="" width="130" height="75" className='p-1 align-self-center' />
                            <div className='align-self-center '>
                              <p className='text-dark mb-0'>Buying</p>
                              <p className='text-dark fw-bold mb-0'>258.3525</p>
                            </div>
                            <div className=' align-self-center'>
                              <p className='text-dark mb-0'>Selling</p>
                              <p className='text-dark fw-bold mb-0'>258.3525</p>
                            </div>
                    </div>
                  </div>

                  <div className={showMore ? 'd-flex col-12 col-md-6 col-lg-4 pb-3 justify-content-center' : 'd-none'}>
                  <div className='d-flex bg-opacity-75 bg-light gap-3 border rounded border-3 pe-3'>
                      <Image src="/flags/image 13.png" alt="" width="130" height="85" className='p-1 align-self-center' />
                      <div className=' align-self-center'>
                        <p className='text-dark mb-0'>Buying</p>
                        <p className='text-dark fw-bold mb-0'>258.3525</p>
                      </div>
                      <div className='align-self-center '>
                        <p className='text-dark mb-0'>Selling</p>
                        <p className='text-dark fw-bold mb-0'>258.3525</p>
                      </div>
                </div>
              </div>
          
          
          

              <div className={showMore ? 'd-flex col-12 col-md-6 col-lg-4 pb-3 justify-content-center' : 'd-none'}>
              <div className='d-flex bg-opacity-75 bg-light gap-3 border rounded border-3  pe-3'>
                        <Image src="/flags/image 11.png" alt="" width="130" height="75" className='p-1 align-self-center' />
                        <div className=' align-self-center'>
                          <p className='text-dark mb-0'>Buying</p>
                          <p className='text-dark fw-bold mb-0'>258.3525</p>
                        </div>
                        <div className=' align-self-center'>
                          <p className='text-dark mb-0'>Selling</p>
                          <p className='text-dark fw-bold mb-0'>258.3525</p>
                        </div>
                  </div>
                </div>

                <div className={showMore ? 'd-flex col-12 col-md-6 col-lg-4 pb-3 justify-content-center' : 'd-none'}>
                <div className='d-flex bg-opacity-75 bg-light gap-3 border rounded border-3 pe-3'>
                    <Image src="/flags/image 13 (1).png" alt="" width="130" height="75" className='p-1 align-self-center' />
                    <div className='align-self-center '>
                      <p className='text-dark mb-0'>Buying</p>
                      <p className='text-dark fw-bold mb-0'>258.3525</p>
                    </div>
                    <div className=' align-self-center'>
                      <p className='text-dark mb-0'>Selling</p>
                      <p className='text-dark fw-bold mb-0'>258.3525</p>
                    </div>
                  </div>
                </div>

                <div className={showMore ? 'd-flex col-12 col-md-6 col-lg-4 pb-3 justify-content-center' : 'd-none'}>
                <div className='d-flex  bg-opacity-75 bg-light gap-3 border rounded border-3 pe-3'>
                    <Image src="/flags/image 8 (1).png" alt="" width="130" height="75" className='align-self-center' />
                    <div className=' align-self-center'>
                      <p className='text-dark mb-0'>Buying</p>
                      <p className='text-dark fw-bold mb-0'>258.3525</p>
                    </div>
                    <div className=' align-self-center'>
                      <p className='text-dark mb-0'>Selling</p>
                      <p className='text-dark fw-bold mb-0'>258.3525</p>
                    </div>
                  </div>
                </div>
                     
      </div>

        <button onClick={toggleRows} className='bg-transparent text-light'>
          {showMore ? 'See Less' : 'See All'}
          {showMore ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>

      </div>

      </div>

      {/* table */}
      <div className={`${styles.priceTable} d-flex flex-column text-center w-100 justify-content-center align-items-center`}>
        <h3>TODAY RATINGS</h3>
        <p>Check out our freshly updated exchange rates today and get the best deal for your money!</p>
        <table className={`table my-5 ${styles.tableStyles}`}>
          <thead className={``}>
            <tr className={`${styles.tableHeader} table-dark`}>
              <th scope="col"></th>
              <th scope="col" className={`${styles.tableHeaderCellPurple}`}>Buying</th>
              <th scope="col" className={`${styles.tableHeaderCellGreen}`}>Selling</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr key={data.id}>
                <th scope="row" className={`${styles.tableDataLight} px-3 pt-3 pb-2`}>
                  <Image src={data.img} width={100} height={60} alt="" className={`img-fluid ${styles.tableImage}`} />
                </th>
                <td className={`${styles.tableHeaderCellPurple} ${styles.purpleData} px-3 pt-3 pb-2`}>{data.buying}</td>
                <td className={`${styles.tableHeaderCellGreen} ${styles.greenData} px-3 pt-3 pb-2`}>{data.selling}</td>
                <td className={`${styles.tableDataLight} px-3 pt-3 pb-2`}><button className={`${styles.buysellbtn} px-3 py-2`}>{data.buttonTxt}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <ExchangeRates   /> */}
      {/* services */}
      <div className={`${styles.services} d-flex flex-column flex-lg-row w-100 justify-content-center align-items-center`}>
        <div className={`col-12 col-lg-4 pe-0 pe-lg-2 text-start ${styles.leftCol} py-5`}>
          <h3>Why <br /> you should <span>choose us</span></h3>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have su alteration in some form, by injected humour, oir randomised workds which don&apos;t look even slightly believable.</p>
          <div className="d-flex flex-column flex-lg-row justify-content-between">
            <span className={`${styles.spanRed} px-5 py-3 mb-3 mb-lg-0`}>24/7 Support</span>
            <span className={`${styles.spanGreen} px-5 py-3`}>99% Secured</span>
          </div>
          <button className='px-5 py-3 mt-3'>Get Started</button>
        </div>
        <div className={`col-12 col-lg-8 ps-0 ps-lg-2 ${styles.rightCol}`}>
          <div className={`d-flex flex-column flex-lg-row ${styles.cardRow}`}>
            <div className='col-12 col-lg-6 d-flex p-2 position-relative' >
              <div className={`shadow-lg p-4 d-flex flex-column justify-content-center bg-white ${styles.card1}`} style={{borderRadius: "30px"}}  >
                <Image src={'/icons/bag.png'} alt="" width={40} height={40} className="img-fluid mb-4" />
                <h5>Instant Service</h5>
                <p className='mb-0'>There are many variations of passages of Lorem Ipsum available, but majority going to use a passage.</p>
                <Link href='#' className='text-decoration-none mt-4'>Learn More</Link>
              </div>
            </div>
            <div className='col-12 col-lg-6 d-flex p-2 position-relative'>
              <div className={`shadow-lg p-4 d-flex flex-column justify-content-center bg-white ${styles.card2}`} style={{borderRadius: "30px"}} >
                <Image src={'/icons/trust.png'} alt="" width={40} height={40} className="img-fluid mb-4" />
                <h5>Trust Service</h5>
                <p className='mb-0'>There are many variations of passages of Lorem Ipsum available, but majority going to use a passage.</p>
                <Link href='#' className='text-decoration-none mt-4'>Learn More</Link>
              </div>
            </div>
          </div>
          <div className={`d-flex flex-column flex-lg-row ${styles.cardRow}`}>
            <div className='col-12 col-lg-6 d-flex p-2 position-relative'>
              <div className={`shadow-lg p-4 d-flex flex-column justify-content-center bg-white ${styles.card3}`} style={{borderRadius: "30px"}} >
                <Image src={'/icons/building.png'} alt="" width={40} height={40} className="img-fluid mb-4" />
                <h5>Verified Sellers</h5>
                <p className='mb-0'>There are many variations of passages of Lorem Ipsum available, but majority going to use a passage.</p>
                <Link href='#' className='text-decoration-none mt-4'>Learn More</Link>
              </div>
            </div>
            <div className='col-12 col-lg-6 d-flex p-2 position-relative'>
              <div className={`shadow-lg p-4 d-flex flex-column justify-content-center bg-white ${styles.card4}`} style={{borderRadius: "30px"}} >
                <Image src={'/icons/bag.png'} alt="" width={40} height={40} className="img-fluid mb-4" />
                <h5>Instant Service</h5>
                <p className='mb-0'>There are many variations of passages of Lorem Ipsum available, but majority going to use a passage.</p>
                <Link href='#' className='text-decoration-none mt-4'>Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* experience */}
      <div className={`${styles.experience} d-flex flex-column flex-lg-row w-100 justify-content-center align-items-center py-5`}>
        <div className={`${styles.leftImgWrapper} col-12 col-lg-6 d-flex justify-content-center align-items-center px-2 px-lg-5`}>
          <Image src="/layoutimg/experience.png" alt='' width={300} height={200} className='img-fluid'></Image>
        </div>
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start text-start px-2 px-lg-5 py-5">
          <h3>We are the <span>First Trusted</span> and <span>Experienced Team</span> in Sri Lanka</h3>
          <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut <br />
            dolor sit</p>
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
              <p className={`${styles.yearTxtWhite} mb-0 ps-3`}>99.9% <br />
                Case Success</p>
            </div>
            <div className="col-12 col-lg-6 d-flex flex-row justify-content-center align-items-center p-3" style={{ backgroundColor: "#F5A414" }}>
              <div className="d-flex p-2 rounded-2" style={{ backgroundColor: "#333" }}>
                <h3 className={`${styles.yearNumbers} mb-0`}>15+</h3>
              </div>
              <p className={`${styles.yearTxt} mb-0 ps-3`}>Years<br />
                Experience</p>
            </div>
          </div>
        </div>
      </div>
      {/* testimonials */}
      <div className={`${styles.testimonials} d-flex flex-column w-100 justify-content-center align-items-center text-center py-5`}>
        <h3>What Our Clients Say <span> About </span>Us</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore <br />
          magna aliqua ut dolor sit</p>

        <div className='d-flex flex-column flex-lg-row p-0 p-lg-3 gap-lg-5 text-start'>
          {renderTestimonials()}
        </div>
      </div>
      {/* contact */}
      <div className={`${styles.contactForm} d-flex flex-column w-100 justify-content-center align-items-center text-center`}>
        <h3 className='mb-5'>Get In Touch</h3>
        <form action="" className={` ${styles.FormContactUs}`}>
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
              <button>Get An Appoinment</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
