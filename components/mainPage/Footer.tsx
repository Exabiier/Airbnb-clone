import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className='font-bold'>ABOUT US</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className='font-bold'>HOST</h5>
            <p>How Can You Be A Host</p>
            <p>Host Stories</p>
            <p>Airbnb Host Support</p>
            <p>How to Get Started</p>
            <p>Already a Host</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessibility</p>
            <p>Be A Leader At Airbnb</p>
            <p>Join a Group</p>
            <p>Join Thousands of Others</p>
            <p>What the Community Offers</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Center</p>
            <p>Have Trouble with Client</p>
            <p>No Payment Went through</p>
            <p></p>
            <p>What the Community Offers</p>
        </div>
    </div>
  )
}

export default Footer