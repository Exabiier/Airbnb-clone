import { getCenter } from 'geolib';
import Image from 'next/image';
import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
// TODO try to solve the view port problem
type Props = {
  searchResult: InfoCard[]
}

function Map({searchResult}: Props) {
  const initailSate = {
    img: "",
    location: "",
    title: "",
    description: "",
    star: 0,
    price: "",
    total: "",
    long: 0,
    lat: 0,
  }

  const [ selectedLocation, setSelectedLocation ] = useState<InfoCard>(initailSate);
  const cordinates = searchResult.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  })) as CenterCordinates[];
  const center  = getCenter(cordinates) as CenterCordinates;
  
  const mapboxAccesToken: string|undefined = process.env.NEXT_PUBLIC_API_KEY
  const [viewport, setViewport ] = useState<any>({
    width: '100%',
    height: '100%',
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
    mapStyle="mapbox://styles/exabiier/clfhr2k7h000c01mq0cel7iq6"
    mapboxAccessToken={mapboxAccesToken}
    {...viewport}
    onDrag={(nextViewport: any) => setViewport(nextViewport)}
    data-testid="map"
    >
      {searchResult.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            data-testid={`${result.location}`}
          >
            <div onClick={() => setSelectedLocation(result)}
             className='relative h-10 w-6'>
            <Image  className='cursor-pointer' 
            src="/images/google-maps.png" 
            alt="Map marker" fill={true}/>
            </div>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation(initailSate)}
              closeOnClick={false}
              latitude={result.lat as number}
              longitude={result.long as number}
              data-testid="popup"
            >
              {result.title}
            </Popup>
          ):(
            false
          )}
        </div>
      ))}

    </ReactMapGL>
  )
}

export default Map