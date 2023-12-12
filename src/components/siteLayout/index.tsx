import Head from 'next/head'
import React, { ReactNode } from 'react'
import styles from '@/styles/Home.module.css'
import TopBar from './TopBar'
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>Rates.lk | Currency Exchange Rates Sri Lanka | Banking, Forex, and Financial Services</title>
                <meta name="description" content="Rates lk | Currency Exchange Rates Sri Lanka | Banking, Forex, and Financial Services" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Rates lk | Currency Exchange Rates Sri Lanka | Banking, Forex, and Financial Services" />
                <meta property="og:description" content="Explore the latest exchange rates in Sri Lanka offered by Sampath Bank, HNB Bank, BOC Bank, NTB Bank, and more. Stay informed with real-time rates for USD, Euro, Pound, JPY, AUD, and CNY. Discover today's exchange rates, from dollar rates in Sri Lanka to Euro and Pound. Access reliable information on Skrill, Neteller, USDT, Wise, Payoneer, and Deriv. Learn about binary trading, Deriv courses, and secure financial transactions. Your comprehensive guide to currency exchange, banking services, and financial solutions in Sri Lanka." />
                <meta property="og:image" content="" />
                <meta name="keywords" content="bank exchange rate in srilanka, sampath bank exchange rate, hnb bank exchange rate, boc bank exchange rate,ntb bank exchange rate, srilanka exchange rate, sl fast exchange, galle exchange, today exchange rate, doller rate srilanka, doller to lkr, lkr to doller, sri lankan rupee to doller, doller to sri lankan rupee, doller price, usd rate srilanka, usd to lkr, lkr to usd, sri lankan rupee to usd, usd to sri lankan rupee, euro rate srilanka, euro to lkr, lkr to euro, sri lankan rupee to euro, euro to sri lankan rupee, eur rate srilanka, eur to lkr, lkr to eur, sri lankan rupee to eur , eur to sri lankan rupee, sterling pound rate srilanka, sterling pound to lkr, lkr to sterling pound, sri lankan rupee to sterling pound, sterling pound to sri lankan rupee, pound rate srilanka, pound to lkr, lkr to pound, sri lankan rupee to pound, pound to sri lankan rupee, gbp rate srilanka, gbp to lkr, lkr to gbp, sri lankan rupee to gbp, gbp to sri lankan rupee, jpy rate srilanka, japanese yen rate srilanka,jpy to lkr, lkr to jpy, sri lankan rupee to jpy, jpy to sri lankan rupee, japanese yen to lkr, lkr to japanese yen, sri lankan rupee to japanese yen, japanese yen to sri lankan rupee, yen rate srilanka, yen to lkr, lkr to yen, sri lankan rupee to yen , yen to sri lankan rupee, aud rate srilanka, aud to lkr, lkr to aud, sri lankan rupee to aud, aud to sri lankan rupee,  australian dollar rate srilanka, australian dollar to lkr, lkr to australian dollar, sri lankan rupee to australian dollar, australian dollar to sri lankan rupee, cny rate srilanka, cny to lkr, lkr to cny, sri lankan rupee to cny, cny to sri lankan rupee, chinese yuan rate srilanka, chinese yuan to lkr, lkr to chinese yuan, sri lankan rupee to chinese yuan, chinese yuan to sri lankan rupee, how to deposit skrill in srilanka, skrill doller price in srilanka, how to topup skrill in srilanka, Skrill bank withdrawal, how to deposit Neteller in srilanka, Neteller doller price in srilanka, how to topup Neteller in srilanka, Neteller bank withdrawal, how to deposit usdt in srilanka, usdt doller price in srilanka, how to topup usdt in srilanka, Usdt bank withdrawal, how to deposit deriv, deriv doller price, deriv price in srilanka, how to topup deriv in srilanka, usdt to LKR, Lkr to usdt, Neteller price, Neteller to LKR, skrill to LKR, Lkr to skrill, binary trading, deriv trading, deriv deposit agent srilanka, deriv payment agent srilanka,deriv course srilanka, how to deposit payoneer in srilanka, how to withdraw payoneer in srilanka, payoneer doller price in srilanka, how to topup payoneer in srilanka, payoneer doller rate in srilanka, payoneer to LKR, Lkr to payoneer,how to deposit wise in srilanka, how to withdraw wise in srilanka, wise doller price in srilanka, how to topup wise in srilanka, wise doller rate in srilanka, wise to LKR, Lkr to wise, 1xbet, deposit 1xbet, withdraw 1xbet, 1xbet bonus, 1xbet deposit bonus, 1xbet srilanka, 1xbet cashagent in srilanka, casino srilanka, deposit melbet, withdraw melbet, melbet bonus, melbet deposit bonus, melbet cashagent in srilanka, srilanka melbet cash agent" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <TopBar />
                <Header />
                {children}
                <Footer />
            </main>
        </>
    )
}

export default Layout