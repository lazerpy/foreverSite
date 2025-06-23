import React from 'react'
import Title from '../components/Title'

const PlaceOrder = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t-gray-300'>
      <div className="flex flex-col gap-4 max-w-[400px]">
        {/* left side */}
        <div className="text-xl sm:text-2xl my-3 ">
          <Title  text1={'DELIVERY'} tex2={'INFORMATION'}/>
        </div>
        <div className="flex gap-3"></div>
        
        </div> 
    </div>
  )
}

export default PlaceOrder
