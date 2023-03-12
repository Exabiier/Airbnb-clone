import Image from 'next/image';
import React from 'react'

// TODO Need to do unit testing 

type Props ={
    place: ExploreSectionData,
}

function SmallCard({place}: Props) {
    const { img, distance, location } = place;
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out ml-10 sm:ml-0">
        <div className='relative h-16 w-16'>
            <Image src={img} fill={true} alt="Explore Nearby images" className='rounded-lg' />
        </div>

        <div >
            <h2>{location}</h2>
            <h3 className='text-gray-500'>{distance}</h3>

        </div>
    </div>
  )
}

export default SmallCard