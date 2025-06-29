import React from 'react'
import { assets } from '../assets/assets'

const Policy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base  text-gray-700'>
      <div className="">
        <img src={assets.exchange_icon} alt=""  className='w-12 m-auto mb-5'/>
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400 ">We Offer Hassle Free Exchange Policy</p>
      </div>
      <div className="">
        <img src={assets.quality_icon} alt=""  className='w-12 m-auto mb-5'/>
        <p className="font-semibold">& Days Return Policy</p>
        <p className="text-gray-400 ">Free Return Policy Policy</p>
      </div>
      <div className="">
        <img src={assets.support_img} alt=""  className='w-12 m-auto mb-5'/>
        <p className="font-semibold">Best customer Support</p>
        <p className="text-gray-400 ">We Offer 24/7 Customer Support</p>
      </div>
    </div>
  )
}

export default Policy
