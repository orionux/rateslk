import Layout from '@/components/siteLayout';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
    <Layout>
         <Component {...pageProps} />;
    </Layout>
    </>
  )
  
}
