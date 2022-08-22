import { useEffect, useState } from "react"
import Link from "next/link"
import {ExternalLinkIcon} from '@heroicons/react/solid'
export default function OpenSource() {
const [repo, setRepo] = useState(null)
 useEffect(() => {
    fetch('https://gh-pinned-repos.egoist.dev/?username=misly16')
     .then((res) => res.json())
     .then((data) => {
        setRepo(data)
      })
  }, [])
    return (
        <div className='flex flex-row flex-wrap w-full space-y-4'>
            <h1 className='text-2xl sm:text-3xl font-medium'>Open Source</h1>
            {repo && repo.map((repo, index) => {
              return (
                <div key={index} className="flex text-2xl bg-neutral-900 p-4 rounded-lg w-full max-w-[750px]">
                <div className='divide-y w-full'>
                  <div className='flex'>
                    <div className='flex flex-col justify-center mb-4'>
                    <Link href={repo.link} target='_blank'>
                    <div className='flex flex-row items-center space-x-1'>
                    <p className='text-2xl font-medium'>{repo.repo}</p>
                    <ExternalLinkIcon className='h-6 w-6' />
                    </div>
                    </Link>
                    <div className='flex flex-row space-x-3'>
                      <p className='text-lg font-light'>⭐ {repo.stars}</p>
                      <p className='text-lg font-light'><span style={{color: `${repo.languageColor}`}}>⬤</span> {repo.language}</p>
                    </div>
                </div>
              </div>
              <div className='flex flex-col'>
                <p className='text-lg font-medium pt-4'>Description</p>
                <p className='text-lg font-light text-gray-200'>{repo.description}</p>
              </div>
            </div>
          </div>  
              )
            })}
      </div>
  )
}