import Image from 'next/image'
import  { useState } from 'react';
import { MagnifyingGlassIcon, UserCircleIcon, Bars3Icon, UserIcon  } from '@heroicons/react/24/solid'
import { GlobeAltIcon  } from '@heroicons/react/24/outline'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
// @ts-ignore: there is no type for date range
import { DateRangePicker } from 'react-date-range';





function Header() {
    const [searchInput, setSearchInput ] = useState<string>("");
    const [startDate, setStartDate ] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const [ noOfGuest, setNoOfGuest ] = useState<number>(1)

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }
    const handleSelect = (ranges: any) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate)
    }

    const resetInput = () => {
        setSearchInput("");
    }
  return (
    <header className="bg-white sticky top-0 z-50 grid grid-cols-3 shadow-md py-5 px-5 md:px-10">

        <div data-testid="logo" className='relative flex items-center h-10 cursor-pointer my-auto' >
            <Image fill={true} src="https://links.papareact.com/qd3" alt="" className='object-contain object-left' />
        </div>

        <div data-testid="search" className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
            <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className='flex-grow pl-5 bg-transparent outline-none text-gray-600 text-sm placeholder-gray-400 ml-1 sm:ml-0'  type="text" placeholder="Start your search"/>
            <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full text-white p-2 cursor-pointer md:mx-2" />
        </div>

        <div data-testid="actions" className="flex items-center flex-row space-x-4 justify-end text-gray-500">
            <p className='cursor-pointer hidden md:inline-flex'>Become a Host</p>
            <GlobeAltIcon className='h-6 cursor-pointer hidden sm:inline-flex' />
            <div className='flex flex-row p-2 space-x-2 border-2 rounded-full cursor-pointer'>
                <Bars3Icon className='h-6' />
                <UserCircleIcon className='h-6' />
            </div>
        </div>
        {searchInput &&
        <div className="flex flex-col col-span-3 mx-auto">
            <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect} />
            <div className='flex items-center border-b mb-4'>
                <h2 className='text-2xl pl-2 flex-grow font-semi-bold'>Number of Guests</h2>
                <UserIcon className="h-5"/>
                <input 
                type="number" 
                className="w-12 pl-2 text-lg outline-none text-red-400" 
                value={noOfGuest} 
                onChange={(e) => setNoOfGuest(parseFloat(e.target.value))} 
                min={1} />
            </div>
            <div className='flex'>
                <button onClick={() => resetInput()} className="flex-grow text-gray-500">Cancel</button>
                <button className="flex-grow  text-gray-400">Search</button>
            </div>
        </div> }
        



    </header>
  )
}

export default Header