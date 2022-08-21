import { useEffect, useState } from "react"
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
        </div>
  )
}