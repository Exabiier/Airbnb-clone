type ExploreSectionData = {
    img: string,
    location: string,
    distance: string,
}

type MediumCardSectionData = {
    img: string;
    title: string;
}

type QuerySearchParam = {
    location: string,
    startDate: string,
    endDate: string,
    numberOfGuests: number | string,
}

type InfoCard ={
    img: string,
    location: string,
    title: string,
    description: string,
    star: number,
    price: string,
    total: string,
    long: number,
    lat: number,
}

type CenterCordinates = {
    longitude: number,
    latitude: number
  }