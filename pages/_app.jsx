import '../styles/globals.css'
import {useEffect} from 'react'

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    if (typeof window === 'undefined') {
        return;
    }

    void new Audio('/cursor.mp3').play().catch(() => null);
}, [router.pathname]);
  return <Component {...pageProps}/>
}

export default MyApp
