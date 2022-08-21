import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiTwitter,
  SiGithub,
} from 'react-icons/si';
import { FaLocationArrow } from 'react-icons/fa';
import MobileNav from '@/components/mobileNav';
import Nav from '@/components/nav';
import Technologies from '@/components/technologies';

export default function Home() {
  const [hoveredTimezone, setHoveredTimezone] = useState(false);

  function getUKTime() {
    const date = new Date();
    return (date.toLocaleString('en-GB', {
      timeZone: 'Europe/London',
      dateStyle: 'short',
      timeStyle: 'short',
    }));
  }
  return (
    <div className="mx-auto max-w-4xl py-10 px-5">
      <div className="sm:h-10 flex align-middle">
        <Nav />
      </div>
      <MobileNav />
      <div className="mx-auto max-w-4xl py-20 px-4 space-y-12">
        <div>
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl">Hi, I&apos;m Misly</h1>
          <div className="flex pt-3">
            <div className="flex space-x-4 text-2xl bg-neutral-900 w-fit py-2 px-4 rounded-lg items-center divide-x">
              <div className="flex space-x-4 items-center">
                <Link href="https://github.com/misly16" target="_blank">
                  <SiGithub />
                </Link>
                <Link href="https://twitter.com/mislydev" target="_blank">
                  <SiTwitter />
                </Link>
              </div>
              <div
                className="flex space-x-4 items-center"
                onMouseEnter={() => setHoveredTimezone(true)}
                onMouseLeave={() => setHoveredTimezone(false)}
              >
                {hoveredTimezone && (
                <motion.p
                  className="text-lg pl-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                >
                  {getUKTime()}
                </motion.p>
                )}
                <p className={`text-lg pl-4 ${hoveredTimezone ? 'hidden' : 'visible'}`}>England, UK</p>
                <FaLocationArrow className="text-lg" />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl font-medium">What do I do?</h1>
          <p className="text-lg leading-6 tracking-wide text-gray-200 font-light">
            I am passionate about technology, from hardware and embedded systems to developing efficient and scalable software. I&apos;m currently working with
            {' '}
            <Link className="underline" href="https://playcap.app/" target="_blank">Playcap</Link>
            {' '}
            where we&apos;re building software targeted at the gaming industry.
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl font-medium">Technologies</h1>
          <p className="text-lg leading-6 tracking-wide text-gray-200 font-light">Over the years I&apos;ve used a variety of languages and tools for many different purposes, I enjoy writing software thats both efficient and easy to scale. Most of the code I have written is in Node.JS, GO and React.</p>
          <Technologies />
        </div>
      </div>
    </div>
  );
}
