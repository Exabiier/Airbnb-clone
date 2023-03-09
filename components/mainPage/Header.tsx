import Image from 'next/image'
import React from 'react';
import { MagnifyingGlassIcon, UserCircleIcon, Bars3Icon  } from '@heroicons/react/24/solid'
import { GlobeAltIcon  } from '@heroicons/react/24/outline'




function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 grid grid-cols-3 shadow-md py-5 px-5 md:px-10">

        <div className='relative flex items-center h-10 cursor-pointer my-auto' >
            <Image fill={true} src="https://links.papareact.com/qd3" alt="" className='object-contain object-left' />
        </div>

        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
            <input className='flex-grow pl-5 bg-transparent outline-none text-gray-600 text-sm placeholder-gray-400 ml-1 sm:ml-0'  type="text" placeholder="Start your search"/>
            <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full text-white p-2 cursor-pointer md:mx-2" />
        </div>

        <div className="flex items-center flex-row space-x-4 justify-end text-gray-500">
            <p className='cursor-pointer hidden md:inline-flex'>Become a Host</p>
            <GlobeAltIcon className='h-6 cursor-pointer hidden sm:inline-flex' />
            <div className='flex flex-row p-2 space-x-2 border-2 rounded-full cursor-pointer'>
                <Bars3Icon className='h-6' />
                <UserCircleIcon className='h-6' />
            </div>
        </div>



    </header>
  )
}

export default Header