import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Cart = () => {
  const {cartItems, products, currency, updateQua} = useContext(ShopContext)
  const [ cartData, setCart] = useState([])

  useEffect(()=>{

    const tempData = [];

    for(const items in  cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item] > 0){
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
      setCart(tempData)
    
  },[cartItems])

  return (
    <div className=' border-t pt-14'>
      <div className="text-2xl mb-3">
        <Title text1={'YOUR CART '} tex2={'CART'} />
      </div>
      <div className="">
        {
          cartData.map((item, index)=>{
            const proData = products.find((product)=> product._id 
            === item._id );
            return (
              <div className="py-4 border-y text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 " key={index}>
                <div className="flex items-start gap-6">
                <img src={proData.image[0]} alt="" className="w-16 sm:w-20" />
                <div className="">
                  <p className='text-sm sm:text-lg'>{proData.name}</p>
                  <div className="flex items-center gap-5 mt-4">
                    <p>{currency}{proData.price}</p>
                    <p className=' p-1 gap-2 sm:px-3 sm:py-1 border-gray-300 bg-slate-50'>{item.size}</p>

                  </div>
                </div>
                </div>
                <input className='border-gray-500 sm:max-w-20  max-w-10 px-1 sm:px-2' type="number" min={1} defaultValue={item.quantity} />
                <img onClick={()=>updateQua(item._id , item.size, 0)} className='w-4 mr4 cursor-pointer sm:mr-5' src={assets.bin_icon} alt="" />
              </div>
            )
          })

        }
      </div>

      
    </div>
  )
}

export default Cart
