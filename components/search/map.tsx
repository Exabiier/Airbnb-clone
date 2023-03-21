import { getCenter } from 'geolib';
import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl';

// TODO try to solve the view port problem
type Props = {
  searchResult: InfoCard[]
}


function Map({searchResult}: Props) {
  const cordinates: CenterCordinates[] = searchResult.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }))
  const center  = getCenter(cordinates) as CenterCordinates
  const mapboxAccesToken: string|undefined = process.env.NEXT_PUBLIC_API_KEY
  const [viewport, setViewport ] = useState<any>({
    width: '100%',
    height: '100%',
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  // Transform the search Results:



  return (
    <ReactMapGL
    mapStyle="mapbox://styles/exabiier/clfhr2k7h000c01mq0cel7iq6"
    mapboxAccessToken={mapboxAccesToken}
    {...viewport}
    
    // onViewportChange={(nextViewport: any) => setViewport(nextViewport)}
    >

    </ReactMapGL>
  )
}

export default Map