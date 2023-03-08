import Image from 'next/image'
import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'



function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 grid grid-cols-3 shadow-md py-5 px-5 md:px-10">

        <div className='relative flex items-center h-10 cursor-pointer my-auto' >
            <Image fill={true} src="https://links.papareact.com/qd3" alt="" className='object-contain object-left' />
        </div>

        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
            <input className='flex-grow pl-5 bg-transparent outline-none text-gray-600 text-sm placeholder-gray-400'  type="text" placeholder="Start your search"/>
            <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full text-white p-2 cursor-pointer md:mx-2" />
        </div>

        <div></div>



    </header>
  )
}

export default Header