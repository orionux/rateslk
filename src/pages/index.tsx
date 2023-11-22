import Image from 'next/image'
import styles from '@/styles/Home.module.css'


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
  return (
    <>
      {/* hero */}
      <div className={`${styles.hero} d-flex flex-column text-center w-100 justify-content-center align-items-center`}>
        <span className={`px-3 py-1 mb-0 ${styles.UpdatedTxt}`}>Updated on March 31, 2022</span>
        <h2 className='mb-3'>Your Gateway To <span>Daily Rate</span> <br /> Fluctuations</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua ut dolor sit</p>
        <button className='px-3 py-3'>View vertual wallet rates</button>
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
      {/* services */}
      <div className={`${styles.services} d-flex flex-column flex-lg-row w-100 justify-content-center align-items-center`}>
        <div className={`col-4 text-start ${styles.leftCol}`}>
          <h3>Why <br /> you should <span>choose us</span></h3>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have su alteration in some form, by injected humour, oir randomised workds which don&apos;t look even slightly believable.</p>
          <div className="d-flex flex-row justify-content-between">
            <span className={`${styles.spanRed} px-5 py-3`}>24/7 Support</span>
            <span className={`${styles.spanGreen} px-5 py-3`}>99% Secured</span>
          </div>
          <button className='px-5 py-3 mt-3'>Get Started</button>
        </div>
        <div className="col-8 ">
          <div className='row  '>
            <div className='col d-flex' >
              <div className='shadow-lg p-3 mb-5 bg-body rounded' >
                <svg width="59" height="52" viewBox="0 0 59 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M42.2705 21.5328V32.959M17.0246 21.5328L17.0246 32.959M3 27.5H55M8 50H51C54.3137 50 57 47.3137 57 44V15C57 11.6863 54.3137 9 51 9H8C4.68629 9 2 11.6863 2 15V44C2 47.3137 4.68629 50 8 50ZM40 9V5C40 3.34315 38.6569 2 37 2H21C19.3431 2 18 3.34315 18 5V9H40Z" stroke="#F5A414" stroke-width="4"/>
                </svg>
                <h5>Instant Service</h5>
                <p>There are many variations of passages <br/> of Lorem Ipsum available, but majority <br/> going to use a passage.</p>
                <a href='#' className='gold-text text-decoration-none fw-bold'>Learn More</a>
              </div>
            </div>
            <div className='col d-flex'>
              <div className='shadow-lg p-3 mb-5 bg-body rounded'>
              <svg width="53" height="56" viewBox="0 0 53 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11.7778" cy="43.5778" r="10.2778" stroke="#F5A414" stroke-width="3"/>
                <circle cx="41.2221" cy="20.0222" r="10.2778" stroke="#F5A414" stroke-width="3"/>
                <rect x="8.48076" y="11.5687" width="11.1643" height="6.22766" rx="3.11383" transform="rotate(-44.3122 8.48076 11.5687)" stroke="#F5A414" stroke-width="2"/>
                <rect x="22.9346" y="1.09712" width="11.1643" height="6.22766" rx="3.11383" transform="rotate(5.87562 22.9346 1.09712)" stroke="#F5A414" stroke-width="2"/>
                <rect x="3.55053" y="28.5761" width="11.1643" height="6.22766" rx="3.11383" transform="rotate(-77.3245 3.55053 28.5761)" stroke="#F5A414" stroke-width="2"/>
                <line x1="12.3031" y1="13.0909" x2="9.55756" y2="19.4971" stroke="#F5A414" stroke-width="2" stroke-linecap="round"/>
                <line x1="8.21744" y1="27.9109" x2="9.06642" y2="33.0047" stroke="#F5A414" stroke-width="2" stroke-linecap="round"/>
                <line x1="24.0466" y1="4.76957" x2="17.7252" y2="6.57568" stroke="#F5A414" stroke-width="2" stroke-linecap="round"/>
                <line x1="35.1057" y1="10.4438" x2="31.6439" y2="6.11665" stroke="#F5A414" stroke-width="2" stroke-linecap="round"/>
              </svg>

              <h5>Trust Service</h5>
              
                <p>There are many variations of passages <br/> of Lorem Ipsum available, but majority <br/> going to use a passage.</p>
                <a href='#' className='gold-text text-decoration-none fw-bold'>Learn More</a>
              </div>
            </div>
          </div>
          <div className='row '>
            <div className='col d-flex'>
              <div className='shadow-lg p-3 mb-5 bg-body rounded'>
              <svg width="56" height="48" viewBox="0 0 56 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5C2 3.34315 3.34315 2 5 2H23.6567C25.3136 2 26.6567 3.34314 26.6567 5V46H4.99999C3.34314 46 2 44.6569 2 43V5Z" stroke="#F5A414" stroke-width="4"/>
                <path d="M28.5073 25.0598C28.5073 23.4029 29.8505 22.0598 31.5073 22.0598H50.164C51.8209 22.0598 53.164 23.4029 53.164 25.0598V43.0001C53.164 44.6569 51.8209 46.0001 50.164 46.0001H28.5073V25.0598Z" stroke="#F5A414" stroke-width="4"/>
                <path d="M5.73071 9.46971C5.73071 8.98772 6.12145 8.59698 6.60344 8.59698H11.3057C11.7877 8.59698 12.1785 8.98772 12.1785 9.46971V11.3063C12.1785 11.7883 11.7877 12.1791 11.3057 12.1791H6.60344C6.12145 12.1791 5.73071 11.7883 5.73071 11.3063V9.46971Z" fill="#F5A414"/>
                <path d="M32.2382 28.0966C32.2382 27.6146 32.6289 27.2239 33.1109 27.2239H37.8132C38.2952 27.2239 38.6859 27.6146 38.6859 28.0966V29.9332C38.6859 30.4152 38.2952 30.8059 37.8132 30.8059H33.1109C32.6289 30.8059 32.2382 30.4152 32.2382 29.9332V28.0966Z" fill="#F5A414"/>
                <path d="M5.73071 18.7831C5.73071 18.3012 6.12145 17.9104 6.60344 17.9104H11.3057C11.7877 17.9104 12.1785 18.3012 12.1785 18.7831V20.6198C12.1785 21.1018 11.7877 21.4925 11.3057 21.4925H6.60344C6.12145 21.4925 5.73071 21.1018 5.73071 20.6198V18.7831Z" fill="#F5A414"/>
                <path d="M32.2382 36.6936C32.2382 36.2116 32.6289 35.8209 33.1109 35.8209H37.8132C38.2952 35.8209 38.6859 36.2116 38.6859 36.6936V38.5302C38.6859 39.0122 38.2952 39.403 37.8132 39.403H33.1109C32.6289 39.403 32.2382 39.0122 32.2382 38.5302V36.6936Z" fill="#F5A414"/>
                <path d="M5.73071 28.0966C5.73071 27.6146 6.12145 27.2239 6.60344 27.2239H11.3057C11.7877 27.2239 12.1785 27.6146 12.1785 28.0966V29.9332C12.1785 30.4152 11.7877 30.8059 11.3057 30.8059H6.60344C6.12145 30.8059 5.73071 30.4152 5.73071 29.9332V28.0966Z" fill="#F5A414"/>
                <path d="M5.73071 37.41C5.73071 36.928 6.12145 36.5373 6.60344 36.5373H11.3057C11.7877 36.5373 12.1785 36.928 12.1785 37.41V39.2466C12.1785 39.7286 11.7877 40.1194 11.3057 40.1194H6.60344C6.12145 40.1194 5.73071 39.7286 5.73071 39.2466V37.41Z" fill="#F5A414"/>
                <path d="M16.477 9.46971C16.477 8.98772 16.8677 8.59698 17.3497 8.59698H22.052C22.534 8.59698 22.9247 8.98772 22.9247 9.46971V11.3063C22.9247 11.7883 22.534 12.1791 22.052 12.1791H17.3497C16.8677 12.1791 16.477 11.7883 16.477 11.3063V9.46971Z" fill="#F5A414"/>
                <path d="M42.9844 28.0966C42.9844 27.6146 43.3752 27.2239 43.8572 27.2239H48.5595C49.0415 27.2239 49.4322 27.6146 49.4322 28.0966V29.9332C49.4322 30.4152 49.0415 30.8059 48.5595 30.8059H43.8572C43.3752 30.8059 42.9844 30.4152 42.9844 29.9332V28.0966Z" fill="#F5A414"/>
                <path d="M16.477 18.7831C16.477 18.3012 16.8677 17.9104 17.3497 17.9104H22.052C22.534 17.9104 22.9247 18.3012 22.9247 18.7831V20.6198C22.9247 21.1018 22.534 21.4925 22.052 21.4925H17.3497C16.8677 21.4925 16.477 21.1018 16.477 20.6198V18.7831Z" fill="#F5A414"/>
                <path d="M42.9844 36.6936C42.9844 36.2116 43.3752 35.8209 43.8572 35.8209H48.5595C49.0415 35.8209 49.4322 36.2116 49.4322 36.6936V38.5302C49.4322 39.0122 49.0415 39.403 48.5595 39.403H43.8572C43.3752 39.403 42.9844 39.0122 42.9844 38.5302V36.6936Z" fill="#F5A414"/>
                <path d="M16.477 28.0966C16.477 27.6146 16.8677 27.2239 17.3497 27.2239H22.052C22.534 27.2239 22.9247 27.6146 22.9247 28.0966V29.9332C22.9247 30.4152 22.534 30.8059 22.052 30.8059H17.3497C16.8677 30.8059 16.477 30.4152 16.477 29.9332V28.0966Z" fill="#F5A414"/>
                <path d="M16.477 37.41C16.477 36.928 16.8677 36.5373 17.3497 36.5373H22.052C22.534 36.5373 22.9247 36.928 22.9247 37.41V39.2466C22.9247 39.7286 22.534 40.1194 22.052 40.1194H17.3497C16.8677 40.1194 16.477 39.7286 16.477 39.2466V37.41Z" fill="#F5A414"/>
              </svg>
              <h5>Verified Sellers</h5>
              
                <p>There are many variations of passages <br/> of Lorem Ipsum available, but majority <br/> going to use a passage.</p>
                <a href='#' className='gold-text text-decoration-none fw-bold'>Learn More</a>
              </div>
            </div>
            <div className='col d-flex'> 
              <div className='shadow-lg p-3 mb-5 bg-body rounded' >
                <svg width="59" height="52" viewBox="0 0 59 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M42.2705 21.5328V32.959M17.0246 21.5328L17.0246 32.959M3 27.5H55M8 50H51C54.3137 50 57 47.3137 57 44V15C57 11.6863 54.3137 9 51 9H8C4.68629 9 2 11.6863 2 15V44C2 47.3137 4.68629 50 8 50ZM40 9V5C40 3.34315 38.6569 2 37 2H21C19.3431 2 18 3.34315 18 5V9H40Z" stroke="#F5A414" stroke-width="4"/>
                </svg>
              <h5>Instant Service</h5>
                
                <p>There are many variations of passages <br/> of Lorem Ipsum available, but majority <br/> going to use a passage.</p>
                <a href='#' className='gold-text text-decoration-none fw-bold'>Learn More</a>
              </div>
            </div>   
        </div>
        </div>
      </div>
      {/* experience */}
      <div className={`${styles.experience} d-flex flex-column flex-lg-row w-100 justify-content-center align-items-center`}>
        <div className={`${styles.leftImgWrapper} col-6 d-flex justify-content-center align-items-center px-2 px-lg-5`}>
          <Image src="/layoutimg/experience.png" alt='' width={300} height={200} className='img-fluid'></Image>
        </div>
        <div className="col-6 d-flex flex-column justify-content-center align-items-start text-start px-2 px-lg-5">
          <h3>We are the <span>First Trusted</span> and <span>Experienced Team</span> in Sri Lanka</h3>
          <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut <br />
            dolor sit</p>
          <div className="d-flex flex-column flex-lg-row w-100">
            <div className="col-6 d-flex flex-row justify-content-center align-items-center p-3">
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
            <div className="col-6 d-flex flex-row justify-content-center align-items-center p-3" style={{ backgroundColor: "#F5A414"}}>
              <div className="d-flex p-2 rounded-2" style={{ backgroundColor: "#333"}}>
                <h3 className={`${styles.yearNumbers} mb-0`}>15+</h3>
              </div>
              <p className={`${styles.yearTxt} mb-0 ps-3`}>Years<br />
                Experience</p>
            </div>
          </div>
        </div>
      </div>
      {/* testimonials */}
      <div className={`${styles.testimonials} d-flex flex-column w-100 justify-content-center align-items-center text-center`}>
      <h3>What Our Clients Say <span> About </span>Us</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore <br />
       magna aliqua ut dolor sit</p>

       <div className='d-flex p-3 gap-5 text-start'>

       <div className='p-2'>
        <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.95 3.075L8.475 13.275L5.025 14.25C5.425 13.5 5.875 12.9 6.375 12.45C6.875 11.95 7.45 11.7 8.1 11.7C9.55 11.7 10.85 12.3 12 13.5C13.2 14.65 13.8 16.15 13.8 18C13.8 19.95 13.125 21.625 11.775 23.025C10.475 24.425 8.85 25.125 6.9 25.125C5.05 25.125 3.425 24.45 2.025 23.1C0.675 21.7 0 20 0 18C0 17.2 0.15 16.275 0.45 15.225C0.8 14.175 1.425 12.8 2.325 11.1L8.325 0L13.95 3.075ZM30.825 3.075L25.35 13.275L21.975 14.25C22.325 13.5 22.75 12.9 23.25 12.45C23.8 11.95 24.375 11.7 24.975 11.7C26.425 11.7 27.75 12.3 28.95 13.5C30.15 14.65 30.75 16.15 30.75 18C30.75 19.95 30.075 21.625 28.725 23.025C27.425 24.425 25.8 25.125 23.85 25.125C22 25.125 20.375 24.45 18.975 23.1C17.625 21.7 16.95 20 16.95 18C16.95 17.2 17.1 16.275 17.4 15.225C17.7 14.175 18.3 12.8 19.2 11.1L25.275 0L30.825 3.075Z" fill="#F5A414"/>
        </svg>
        <p> There are  of Lorem Ipsum<br/> 
        available, but the majority<br/> 
         have su alteration in some<br/> 
          form, by injected oir<br/> 
            which don't look even<br/> 
             slightly believable.</p>
       <div className="d-flex pt-3">
				<div><img src="/testimonial/Photo.png" width="50" className="rounded-circle" /></div>
				<div className="ml-2">
					<span className="text-dark fw-bold">Nattasha</span>
				    <p className="para">Junior Lawyer</p>
				</div>
        </div>
        </div>   

        <div className='p-2'>
        <div className="d-flex pt-3">
        <div><img src="/testimonial/Photo (1).png" width="50" className="rounded-circle" /></div>
				<div className="ml-2">
					<span className="text-dark fw-bold">Minci pall</span>
				    <p className="para">Consultant</p>
            
          </div>
          </div>
            <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.95 3.075L8.475 13.275L5.025 14.25C5.425 13.5 5.875 12.9 6.375 12.45C6.875 11.95 7.45 11.7 8.1 11.7C9.55 11.7 10.85 12.3 12 13.5C13.2 14.65 13.8 16.15 13.8 18C13.8 19.95 13.125 21.625 11.775 23.025C10.475 24.425 8.85 25.125 6.9 25.125C5.05 25.125 3.425 24.45 2.025 23.1C0.675 21.7 0 20 0 18C0 17.2 0.15 16.275 0.45 15.225C0.8 14.175 1.425 12.8 2.325 11.1L8.325 0L13.95 3.075ZM30.825 3.075L25.35 13.275L21.975 14.25C22.325 13.5 22.75 12.9 23.25 12.45C23.8 11.95 24.375 11.7 24.975 11.7C26.425 11.7 27.75 12.3 28.95 13.5C30.15 14.65 30.75 16.15 30.75 18C30.75 19.95 30.075 21.625 28.725 23.025C27.425 24.425 25.8 25.125 23.85 25.125C22 25.125 20.375 24.45 18.975 23.1C17.625 21.7 16.95 20 16.95 18C16.95 17.2 17.1 16.275 17.4 15.225C17.7 14.175 18.3 12.8 19.2 11.1L25.275 0L30.825 3.075Z" fill="#F5A414"/>
        </svg>
        <p> There are  of Lorem Ipsum<br/> 
        available, but the majority<br/> 
         have su alteration in some<br/> 
          form, by injected oir<br/> 
            which don't look even<br/> 
             slightly believable.</p>    
				
        
        </div>

        <div className='p-2'>
        <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.95 3.075L8.475 13.275L5.025 14.25C5.425 13.5 5.875 12.9 6.375 12.45C6.875 11.95 7.45 11.7 8.1 11.7C9.55 11.7 10.85 12.3 12 13.5C13.2 14.65 13.8 16.15 13.8 18C13.8 19.95 13.125 21.625 11.775 23.025C10.475 24.425 8.85 25.125 6.9 25.125C5.05 25.125 3.425 24.45 2.025 23.1C0.675 21.7 0 20 0 18C0 17.2 0.15 16.275 0.45 15.225C0.8 14.175 1.425 12.8 2.325 11.1L8.325 0L13.95 3.075ZM30.825 3.075L25.35 13.275L21.975 14.25C22.325 13.5 22.75 12.9 23.25 12.45C23.8 11.95 24.375 11.7 24.975 11.7C26.425 11.7 27.75 12.3 28.95 13.5C30.15 14.65 30.75 16.15 30.75 18C30.75 19.95 30.075 21.625 28.725 23.025C27.425 24.425 25.8 25.125 23.85 25.125C22 25.125 20.375 24.45 18.975 23.1C17.625 21.7 16.95 20 16.95 18C16.95 17.2 17.1 16.275 17.4 15.225C17.7 14.175 18.3 12.8 19.2 11.1L25.275 0L30.825 3.075Z" fill="#F5A414"/>
        </svg>
        <p> There are  of Lorem Ipsum<br/> 
        available, but the majority<br/> 
         have su alteration in some<br/> 
          form, by injected oir<br/> 
            which don't look even<br/> 
             slightly believable.</p>
        <div className="d-flex pt-3">
        <div><img src="/testimonial/Photo (2).png" width="50" className="rounded-circle" /></div>
				<div className="ml-2">
					<span className="text-dark fw-bold">Julia Rose</span>
				    <p className="para">Consultantr</p>
				</div>
        </div>
        </div>

        <div  className='p-2'>
        <div className="d-flex pt-3">
        <div><img src="/testimonial/Photo (3).png" width="50" className="rounded-circle" /></div>
				<div className="ml-2">
					<span className="text-dark fw-bold">John David</span>
				    <p className="para">Designer</p>
				</div>
        
        </div>
        <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.95 3.075L8.475 13.275L5.025 14.25C5.425 13.5 5.875 12.9 6.375 12.45C6.875 11.95 7.45 11.7 8.1 11.7C9.55 11.7 10.85 12.3 12 13.5C13.2 14.65 13.8 16.15 13.8 18C13.8 19.95 13.125 21.625 11.775 23.025C10.475 24.425 8.85 25.125 6.9 25.125C5.05 25.125 3.425 24.45 2.025 23.1C0.675 21.7 0 20 0 18C0 17.2 0.15 16.275 0.45 15.225C0.8 14.175 1.425 12.8 2.325 11.1L8.325 0L13.95 3.075ZM30.825 3.075L25.35 13.275L21.975 14.25C22.325 13.5 22.75 12.9 23.25 12.45C23.8 11.95 24.375 11.7 24.975 11.7C26.425 11.7 27.75 12.3 28.95 13.5C30.15 14.65 30.75 16.15 30.75 18C30.75 19.95 30.075 21.625 28.725 23.025C27.425 24.425 25.8 25.125 23.85 25.125C22 25.125 20.375 24.45 18.975 23.1C17.625 21.7 16.95 20 16.95 18C16.95 17.2 17.1 16.275 17.4 15.225C17.7 14.175 18.3 12.8 19.2 11.1L25.275 0L30.825 3.075Z" fill="#F5A414"/>
        </svg>
        <p> There are  of Lorem Ipsum<br/> 
        available, but the majority<br/> 
         have su alteration in some<br/> 
          form, by injected oir<br/> 
            which don't look even<br/> 
             slightly believable.</p>

			</div>
       </div>
      </div>
      {/* contact */}
      <div className={`${styles.contactForm} d-flex flex-column w-100 justify-content-center align-items-center text-center`}>
      <h3 className='mb-5'>Get In Touch</h3>
      <form action="" className={` ${styles.FormContactUs}`}>
        <div className="d-flex flex-column flex-lg-row">
          <div className="col-6 d-flex flex-column align-items-start px-2">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" placeholder='your full name here' name='fullName' id='fullName'/>
          </div>
          <div className="col-6 d-flex flex-column align-items-start  px-2">
            <label htmlFor="email">Email Address</label>
            <input type="email" placeholder='support@crptop.com' name='email' id='email'/>
          </div>
        </div>
        <div className="d-flex flex-column flex-lg-row">
          <div className="col-6 d-flex flex-column align-items-start  px-2">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" placeholder='your phone number' name='phoneNumber' id='phoneNumber'/>
          </div>
          <div className="col-6 d-flex flex-column align-items-start  px-2">
            <label htmlFor="subject">Subject</label>
            <input type="text" placeholder='how can we help' name='subject' id='subject'/>
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