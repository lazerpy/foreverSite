import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=''>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
            <img src={assets.logo} alt="" className="mb-5 w-32" />
            <p className="w-full  md:w-2/3 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto laborum molestias temporibus quod mollitia totam repellat possimus nihil amet perferendis!
            </p>
        </div>
        <div className="">
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600 ">
                <li>Home</li>
                <li>About us</li>
                <li>Delivary</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div className="">
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600 ">
                <li>+252 770-722-363</li>
                <li>Cotactus@mobarre001@gmail.com</li>

            </ul>
        </div>
        <div className="">
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ Mo_Barre All Rights Reserved</p>

        </div>
      </div>
    </div>
  )
}

export default Footer
