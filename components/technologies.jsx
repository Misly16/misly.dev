import {
    SiNodedotjs,
    SiGo,
    SiPython,
    SiReact,
    SiGatsby,
    SiTailwindcss,
    SiWebpack,
    SiNextdotjs,
    SiPrisma,
    SiMariadb,
    SiPostgresql,
    SiMysql,
    SiGit,
    SiMongodb,
    SiRedis,
    SiVisualstudiocode,
    SiWebstorm,
    SiFigma,
  } from 'react-icons/si';
  import Tippy from '@tippyjs/react';
  import 'tippy.js/dist/tippy.css';
export default function Technologies() {
  return (
    <div className='flex space-x-4 text-2xl bg-neutral-900 w-full py-2 px-4 rounded-lg items-center divide-x'>
            <ul className='flex items-center justify-evenly flex-wrap w-full'>
            <Tippy content='Node.JS'>
              <li className='p-2'>
                <SiNodedotjs />
              </li>
              </Tippy>
            <Tippy content='Go'>
              <li className='p-2'>
                <SiGo />
              </li>
            </Tippy>
            <Tippy content='Python'>
              <li className='p-2'>
                <SiPython />
              </li>
            </Tippy>
            <Tippy content='React'>
              <li className='p-2'>
                <SiReact />
              </li>
            </Tippy>
            <Tippy content='Gatsby'>
              <li className='p-2'>
                <SiGatsby />
              </li>
            </Tippy>
            <Tippy content='Tailwind CSS'>
              <li className='p-2'>
                <SiTailwindcss />
              </li>
            </Tippy>
            <Tippy content='Webpack'>
              <li className='p-2'>
                <SiWebpack />
              </li>
            </Tippy>
            <Tippy content='Next.js'>
              <li className='p-2'>
                <SiNextdotjs />
              </li>
            </Tippy>
            <Tippy content='Prisma'>
              <li className='p-2'>
                <SiPrisma />
              </li>
            </Tippy>
            <Tippy content='MariaDB'>
              <li className='p-2'>
                <SiMariadb />
              </li>
            </Tippy>
            <Tippy content='PostgreSQL'>
              <li className='p-2'>
                <SiPostgresql />
              </li>
            </Tippy>
            <Tippy content='MySQL'>
              <li className='p-2'>
                <SiMysql />
              </li>
            </Tippy>
            <Tippy content='Git'>
              <li className='p-2'>
                <SiGit />
              </li>
            </Tippy>
            <Tippy content='MongoDB'>
              <li className='p-2'>
                <SiMongodb />
              </li>
            </Tippy>
            <Tippy content='Redis'>
              <li className='p-2'>
                <SiRedis />
              </li>
            </Tippy>
            <Tippy content='Visual Studio Code'>
              <li className='p-2'>
                <SiVisualstudiocode />
              </li>
            </Tippy>
            <Tippy content='Webstorm'>
              <li className='p-2'>
                <SiWebstorm />
              </li>
            </Tippy>
            <Tippy content='Figma'>
              <li className='p-2'>
                <SiFigma />
              </li>
            </Tippy>
            </ul>
          </div>
  )
}
