import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '<pages>/styles/Home.module.css'
import Header from '../components/mainPage/Header'
import Banner from '../components/mainPage/Banner'
import SmallCard from '../components/mainPage/SmallCard'
import MediumCard from '../components/mainPage/MediumCard'
import LargeCard from '../components/mainPage/LargeCard'
import Footer from '../components/mainPage/Footer'



const inter = Inter({ subsets: ['latin'] })

export const getStaticProps = async () => {
  try {
    // 'https://links.papareact.com/pyp
    const response = await fetch('https://www.jsonkeeper.com/b/4G1G');
    const exploreData = await response.json();

    const response2 = await fetch('https://www.jsonkeeper.com/b/VHHT');
    const cardData = await response2.json();

    return {
      props: {
        exploreData,
        cardData,
      }
    };
  } catch (error) {
    console.log(`An error occurred: ${error}`)
    return { props: {} };
  }
}

type Props ={ 
  exploreData?: ExploreSectionData[],
  cardData?: MediumCardSectionData[]
}

const nearbySection: ExploreSectionData[] = [
  {
    img: "https://links.papareact.com/5j2",
    location: "London",
    distance: "45-minute drive"
  },
  {
    img: "https://links.papareact.com/1to",
    location: "Manchester",
    distance: "4.5-hour drive"
  },
  {
    img: "https://links.papareact.com/40m",
    location: "Liverpool",
    distance: "4.5-hour drive",
  },
  {
    img: "https://links.papareact.com/msp",
    location: "York",
    distance: "4-hour drive",
  },
  {
    img: "https://links.papareact.com/2k3",
    location: "Cardiff",
    distance: "45-minute drive",
  },
  {
    img: "https://links.papareact.com/ynx",
    location: "Birkenhead",
    distance: "4.5-hour drive",
  },
  {
    img: "https://links.papareact.com/kji",
    location: "Newquay",
    distance: "6-hour drive",
  },
  {
    img: "https://links.papareact.com/41m",
    location: "Hove",
    distance: "2-hour drive",
  },
]

const liveAnywhereSection: MediumCardSectionData[] = [
  {
    img: "https://links.papareact.com/2io",
    title: "Outdoor getaways",
  },
  {
    img: "https://links.papareact.com/q7j",
    title: "Unique stays"
  },
  {
    img: "https://links.papareact.com/s03",
    title: "Entire homes"
  },
  {
    img: "https://links.papareact.com/8ix",
    title: "Pet allowed"
  }
]

export default function Home({ exploreData, cardData }: Props) {
  
  return (
    <div className="bg-white">
      <Head>
        <title>Airbnb Demo</title>
        <meta name="description" content="This is an Airbnb Demo Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      {/* Header Section */}
      <Header />
      {/* Banner Section */}
      <Banner />
      {/* Explore Nearby Section */}
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5 ml-10 sm:ml-0'>Explore Nearby</h2>
          {/* static rendeing  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {nearbySection?.map((place, index) => (
            <SmallCard key={`${place.location}-${index}`} place={place}  />
          ))}
          </div>
        </section>
        <section>
            <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
            <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {liveAnywhereSection?.map((item, index) =>(
              <MediumCard key={`${item.img}-${index}`}  cardData={item} />
            ))}
            </div>
        </section> 

        <LargeCard
        img="https://links.papareact.com/4cj"
        title="The Greatest Outdoors"
        description="Wishlists curated by Airbnb."
        buttonText="Get Inspired" />    
      </main>
      <footer>
        <Footer  />
      </footer>
      
      
     </div>  
  )
}



 