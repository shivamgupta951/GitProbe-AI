import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const WorkspaceHeader = () => {
  return (
    <div className='text-taupe-400 flex justify-between mx-5 py-2 items-center'>
      <div className='text-2xl flex text-purple-300 justify-center items-center'>
        <Image src="/GitProbeLogo.png" className='rounded-md' alt='logo' width={70} height={70} />
        <div className='mx-1 text-xl'>GitProbe AI</div>
      </div>
      <ul className='text-2xl space-x-16 flex tracking-wider'>
        <li className='cursor-pointer'>WorkSpace</li>
        <li className='cursor-pointer'>Pricing</li>
        <li className='cursor-pointer'>Support</li>
      </ul>
      <UserButton/>
    </div>
  )
}

export default WorkspaceHeader
