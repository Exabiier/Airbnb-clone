import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div data-testid="container" className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image data-testid="bannerImage" src="https://links.papareact.com/0fm" alt="Man and Child in a forest" fill={true} className='object-fill object-cover'/>

        <div className="absolute top-1/2 w-full text-center">
            <p data-testid="bannerWording" className='text-sm sm:text-lg'>Not Sure Where to go? Perfect.</p>
            <button data-testid="bannerButton" className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">{"I'm a button"}</button>
        </div>
    </div>
  )
}

export default Banner