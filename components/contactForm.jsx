import { useState } from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {useLanyard} from 'use-lanyard';
import {SiDiscord} from 'react-icons/si';
export default function ContactForm() {
    const [formData, setFormData] = useState({
        email: '',
        message: '',
    });
    const [formError, setFormError] = useState(null);
    const [formLoading, setFormLoading] = useState(false);
    const [formSent, setFormSent] = useState(false);

    const {data} = useLanyard(process.env.NEXT_PUBLIC_DISCORD_ID, process.env.NEXT_PUBLIC_LANYARD_INSTANCE);
    const statusMap = {
        online: 'text-green-500',
        idle: 'text-yellow-500',
        dnd: 'text-red-500',
        offline: 'text-gray-500',
    };

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setFormLoading(true);
        const request = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        setFormLoading(false);
        const response = await request.json();
        if (request.status !== 200) return setFormError(response.detailedError);
        setFormSent(true);
    }
  return (
   <div className='w-full'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-20'>
        <div className={`bg-neutral-900 rounded-lg p-4 md:col-span-2 ${formSent ? '' : 'row-span-3'}`}>
            {formSent ? ( 
                <p className='font-bold text-sm text-slate-500'>Thanks for reaching out. I&apos;ll get back to you soon!</p>
            ) : (
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <span className='font-bold text-sm text-slate-500 mb-2'>EMAIL</span>
                <input name='email' value={formData.email} onChange={handleChange} className='w-full p-2 mb-4 rounded-lg bg-slate-200/5 text-sm placeholder:text-gray-500 focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-2' type='email' placeholder='example@gmail.com' required/>
                <span className='font-bold text-sm text-slate-500 mb-2'>MESSAGE</span>
                <textarea name='message' value={formData.message} onChange={handleChange} className='w-full p-2 mb-4 rounded-lg bg-slate-200/5 text-sm placeholder:text-gray-500 focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-2' type='text' placeholder='Yo!' required/>
                <div className='flex flex-row justify-between'>
                    <p className='font-bold text-sm self-start mt-auto'>{formError}</p>
                    <button className='self-end bg-slate-200/5 px-3 py-2 rounded-lg text-sm font-bold text-slate-500 focus:ring-2 focus:ring-gray-500' type='submit'>
                    {!formLoading && 'Submit'}
                    {formLoading && 
                    <svg className='animate-spin h-5 w-5 text-slate-500 m-auto' xmlns='http://www.w3.org/2000/svg'
                      fill='none' viewBox='0 0 24 24'>
                      <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor'
                        strokeWidth='4'></circle>
                      <path className='opacity-75' fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                    </svg>}
                    </button>
                </div>
            </form>
            )}
        </div>
        <div>
            <ul className='space-y-2'>
                <li className='flex space-x-2 items-center'>    
                        <span>
                            <HiOutlineMail className='h-5 w-5' />
                        </span>
                        <span className='text-sm'>hi@misly.dev</span>
                </li>
                <li className='flex space-x-2 items-center'>    
                        <span>
                            <SiDiscord className='h-5 w-5' />
                        </span>
                        <span className='text-sm'>Misly<span className={`${statusMap[data?.discord_status]} select-none text-xs`}> ⬤</span></span>
                </li>
            </ul>
        </div>
    </div>
   </div>
  )
}
