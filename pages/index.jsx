import Nav from '@/components/nav';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import { SiTwitter, SiGithub } from 'react-icons/si';
import { FaLocationArrow } from 'react-icons/fa';
export default function Home() {
  let [hoveredTimezone, setHoveredTimezone] = useState(false)

  function getUKTime() {
    const date = new Date();
    return(date.toLocaleString('en-GB', {
      timeZone: 'Europe/London',
      dateStyle: 'short',
      timeStyle: 'short',
    }));
  }
  return (
    <div className='mx-auto max-w-4xl py-10 px-5'>
      <div className=' h-10 flex align-middle'>
        <Nav />
      </div>
      <div className='mx-auto max-w-4xl py-20 px-4'>
        <h1 className='font-bold text-6xl'>Hi, I'm Misly</h1>
        <div className='flex pt-3'>
          <div className='flex space-x-4 text-2xl bg-neutral-900 w-fit py-2 px-4 rounded-lg items-center divide-x'>
            <div className='flex space-x-4 items-center'>
              <Link href='https://github.com/misly16' target='_blank'>
              <SiGithub />
              </Link>
              <Link href='https://twitter.com/mislydev' target='_blank'>
              <SiTwitter />
              </Link>
            </div>
            <div className='flex space-x-4 items-center'
            onMouseEnter={() => setHoveredTimezone(true)}
            onMouseLeave={() => setHoveredTimezone(false)}>
              {hoveredTimezone && (
                  <motion.p
                  className='text-lg pl-4'
                  initial={{ opacity: 0 }}
						      animate={{opacity: 1}}
                  exit={{opacity: 0, transition: { duration: 0.15, delay: 0.2 }}}
                  >
                    {getUKTime()} 
                  </motion.p>
              )}
              <p className={`text-lg pl-4 ${hoveredTimezone ? 'hidden' : 'visible'}`}>England, UK</p>
              <FaLocationArrow className='text-lg' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
