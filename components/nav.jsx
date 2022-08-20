import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

export default function Nav() {
  let [hoveredIndex, setHoveredIndex] = useState(null)

  return [
    ['Home', '/'],
    ['Work', '/work'],
    ['Contact', '/contact'],
  ].map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      className="hidden sm:flex scoreboard relative rounded-lg px-5 py-2 text-base text-white transition-colors delay-150 hover:text-white hover:delay-[0ms]"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-neutral-900 text-white"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{label}</span>
    </Link>
  ))
}
