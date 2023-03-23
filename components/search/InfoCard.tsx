import Image from 'next/image'
import React from 'react'
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";


type Props = {
    cardData: InfoCard
}

function InfoCard( {cardData}: Props) {
    const { img, location, title, description, star, price, total } = cardData
  return (
    <div className='flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>
        <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
            <Image src={img} fill={true} className='object-cover rounded-2xl' alt='The listing pictures' />
        </div>
        <div className='flex flex-col pl-5'>
            <div className='flex justify-between'>
                <p>{location}</p>
                <HeartIcon className='h-7 cursor-pointer' data-testid='heart-icon' />
            </div>
            <h4 className='text-xl'>{title}</h4>
            <div className='border-b w-10 pt-2' />
            <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

            <div className='flex justify-between items-end pt-5'>
                <p className='flex items-center'>
                    <StarIcon className='h-5 text-red-400' data-testid='star-icon' />
                    {star}
                </p>
                <div className=''>
                    <p className='text-lg lg:text-2xl font-semibold pb-2'>{price}</p>
                    <p className='text-right font-extralight'>{total}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoCard