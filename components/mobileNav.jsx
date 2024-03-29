import { useState, useEffect } from 'react';
import Link from 'next/link';
import Hamburger from 'hamburger-react';
import { motion } from 'framer-motion';

export default function MobileNav() {
  const [expandedNav, setExpandedNav] = useState(false);

  const navigation = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    if (expandedNav) {
        document.body.style.overflow = 'hidden';
        return;
    }
    document.body.style.overflow = 'unset';
  }, [expandedNav]);

  return (
    <>
      <div>
        { expandedNav && (
        <div className='sm:hidden z-10 overflow-hidden inset-0 fixed backdrop-blur bg-black/80 py-24 px-10 space-y-7 text-6xl'>
          {navigation.map((item, index) => (
            <motion.p
              key={index}
              className='scoreboard'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: index + 0.25 }}
            >
              <Link key={index} href={item.href}>
                {item.label}
              </Link>
            </motion.p>
          ))}
        </div>
        )}
      </div>
      <div className='flex sm:hidden px-3 sticky z-20'>
        <Hamburger toggled={expandedNav} toggle={setExpandedNav} />
      </div>
    </>
  );
}
