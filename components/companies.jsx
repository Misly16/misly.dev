import Image from "next/future/image";
import Link from "next/link";
import {ExternalLinkIcon} from '@heroicons/react/solid'
import pingstreakLogo from '@/public/images/pingstreak.png';
import playcapLogo from '@/public/images/playcap.png';
import topcordLogo from '@/public/images/topcord.png';
export default function Companies() {
  return (
    <div className='flex flex-row flex-wrap w-full space-y-4'>
    <h1 className='text-2xl sm:text-3xl font-medium'>Companies</h1>
    <div className="flex text-2xl bg-neutral-900 p-4 rounded-lg w-full max-w-[750px]">
      <div className='divide-y w-full'>
        <div className='flex'>
          <div className='w-16 h-16 rounded-md m-2 mb-4'>
          <Image alt='playcap' src={pingstreakLogo} layout='raw' quality={100} />
          </div>
          <div className='flex flex-col justify-center pl-2'>
            <Link href='https://pingstreak.com' target='_blank'>
            <div className='flex flex-row items-center space-x-1'>
            <p className='text-2xl font-medium'>PingStreak</p>
            <ExternalLinkIcon className='h-6 w-6' />
            </div>
            </Link>
            <p className='text-lg font-light'>2022 - current</p>
          </div>
        </div>
        <div className='flex flex-col'>
        <p className='text-lg font-medium pt-4'>Role</p>
        <p className='text-lg font-light text-gray-200'>Co-Founder & Developer</p>
        <p className='text-lg font-medium pt-4'>Description</p>
        <p className='text-lg font-light text-gray-200'>Game server status monitoring and analytics tool.</p>
        </div>
      </div>
      </div>
      <div className="flex text-2xl bg-neutral-900 p-4 rounded-lg w-full max-w-[750px]">
      <div className='divide-y w-full'>
        <div className='flex'>
          <div className='w-16 h-16 rounded-md m-2 mb-4'>
          <Image alt='playcap' src={playcapLogo} layout='raw' quality={100} />
          </div>
          <div className='flex flex-col justify-center pl-2'>
          <Link href='https://playcap.app' target='_blank'>
            <div className='flex flex-row items-center space-x-1'>
            <p className='text-2xl font-medium'>Playcap</p>
            <ExternalLinkIcon className='h-6 w-6' />
            </div>
            </Link>
            <p className='text-lg font-light'>2021 - current</p>
          </div>
        </div>
        <div className='flex flex-col'>
        <p className='text-lg font-medium pt-4'>Role</p>
        <p className='text-lg font-light text-gray-200'>Founder & Developer</p>
        <p className='text-lg font-medium pt-4'>Description</p>
        <p className='text-lg font-light text-gray-200'>Developing software and overseeing large-scale infrastructure for the gaming industry.</p>
        </div>
      </div>
      </div>
      <div className="flex text-2xl bg-neutral-900 p-4 rounded-lg w-full max-w-[750px]">
      <div className='divide-y w-full'>
        <div className='flex'>
          <div className='w-16 h-16 rounded-md m-2 mb-4'>
          <Image alt='playcap' src={topcordLogo} layout='raw' quality={100} />
          </div>
          <div className='flex flex-col justify-center pl-2'>
          <Link href='https://topcord.xyz' target='_blank'>
            <div className='flex flex-row items-center space-x-1'>
            <p className='text-2xl font-medium'>Topcord</p>
            <ExternalLinkIcon className='h-6 w-6' />
            </div>
            </Link>
            <p className='text-lg font-light'>2020 - current</p>
          </div>
        </div>
        <div className='flex flex-col'>
        <p className='text-lg font-medium pt-4'>Role</p>
        <p className='text-lg font-light text-gray-200'>SysAdmin & Developer</p>
        <p className='text-lg font-medium pt-4'>Description</p>
        <p className='text-lg font-light text-gray-200'>A new listing platform. Focusing on the user&apos;s experience.</p>
        </div>
      </div>
      </div>
  </div>
  )
}
