import '../styles/globals.css'
import {useEffect} from 'react'
import Head from 'next/head';

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    if (typeof window === 'undefined') {
        return;
    }

    void new Audio('/cursor.mp3').play().catch(() => null);
}, [router.pathname]);
  return (
    <>
      <Head>
        <title>Misly</title>
      </Head>
      <Component {...pageProps}/> 
    </>
    )
}

export default MyApp
