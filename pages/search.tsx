import Footer from '<pages>/components/mainPage/Footer'
import Header from '<pages>/components/mainPage/Header'
import InfoCard from '<pages>/components/search/InfoCard';
import Map from '<pages>/components/search/map';
import { capitalize } from '<pages>/lib/UserEdit';
import format from 'date-fns/format';
import { useRouter } from 'next/router';
import { NextRouter } from 'next/router';
import React, { useEffect } from 'react'

function Search() {
    const router: NextRouter = useRouter();
    const routerInfo: any = router.query;
    const { location, startDate, endDate, numberOfGuests } = routerInfo as QuerySearchParam;


    const editedLocation: string = capitalize(location ? location : "");
    // protective programing just in case the date is lost form loading. prevents errors
    const formattedStartDate: string = startDate ? format(new Date(startDate), "dd MMMM yy") : format(new Date(), "dd MMMM yy");
    const formattedEndDate: string = endDate ? format(new Date(endDate), "dd MMMM yy") :
    format(new Date(), "dd MMMM yy")

   const range = `${formattedStartDate} - ${formattedEndDate}`

   const array: InfoCard[] = [
    {
        img: "https://links.papareact.com/xqj",
        location: "Private room in center of London",
        title: "Stay at this spacious Edwardian House",
        description: "1 guest À- 1 bedroom A• 1 bed À• 1.5 shared bthrooms • WifI A• Kitchen A• Free parking A Washing Machine",
        star: 4.73,
        price: "A£30/ night",
        total: "A£117 total",
        long: -0.0022275,
        lat: 51.5421655,
    },
    {
        img: "https://links.papareact.com/hz2",
        location: "Private room in center of London",
        title: "Independant luxury studio apartment",
        description: "2 guest A. 3 bedroom A• 1 bed A: 1.5 shared bthrooms Ar Wifi À- Kitchen",
        star: 4.3,
        price: "A£40/ night",
        total: "A£157 total",
        long: -0.095091,
        lat: 51.48695,  
    },
    {
        img: "https://links.papareact.com/uz7",
        location: "Private room in center of London",
        title: "London Studio Apartments",
        description: "4 guest A 4 bedroom A 4 bed A. 2 bathrooms A Free parking A› Washing Machine",
        star: 3.8,
        price: "A£35/ night",
        total: "A£207 total",
        long: -0.135638,
        lat: 51.521916,
    },
    {
        img: "https://links.papareact.com/6as",
        location: "Private room in center of London",
        title: "38 mins to Oxford Street, Excel London",
        description: "1 guest À. 1 bedroom A. 1 bed A. 1.5 shared bthrooms À. Wifi A• Kitchen A Free parking &• Washing Machine",
        star: 4.1,
        price: "A£55/ night",
        total: "A£320 total",
        long: -0.069961,
        lat: 51.472618,
    },
   ]

  return (
    <div className="bg-white">
        <Header placeHolder={`${location} | ${range} | ${numberOfGuests} Guests`} />

        <main className="flex">
            <section className='flex-grow pt-14 px-6'>
                <p className="text-sm">300+ stays - {range} - for {numberOfGuests} number of guests</p>

                <h1 className="text-3xl font-semibold mt-2 mb-6"> Stay in {editedLocation}</h1>

                <div className="hidden lg:inline-flex flex-row space-x-3 mb-5 text-gray-800 whitespace-nowrap ">
                    <p className='coolButton'>Cancellation Flexability</p>
                    <p className='coolButton'>Type of Place</p>
                    <p className='coolButton'>Price</p>
                    <p className='coolButton'>Rooms and Beds</p>
                    <p className='coolButton'>More filters</p>
                </div>
                <div className='flex flex-col'>
                {array.map(item => (
                    <InfoCard cardData={item} />
                ))}
                </div>
            </section>
            <section className='hidden xl:inline-flex xl:min-w-[600px]'>
                <Map searchResult={array} />
            </section>
        </main>

        <Footer />
    </div>
  )
}

export default Search;

// export async function getServerSideProp() {
//     const response = await fetch("https://links.papareact.com/isz");
//     const searchData = await response.json();

//     return {
//         props: {
//             searchData: searchData
//         }
//     } 
// } 