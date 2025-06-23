import React from 'react'

const NewsBox = () => {

    const submit = ()=>{
        event.preventDefault()
    }

  return (
    <div className='text-center'>
      <p className='font-medium text-gray-800'>Subscribe Now & Get 20% OFF </p>
      <p className="text-gray-400 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, doloribus!</p>
        <form onSubmit={submit} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-100 pl-3'>
            <input type="email" placeholder='Enter Your Email' className='w-full sm:flex-1 outline-none'required />
            <button  type='submit' className='bg-black text-white text-xs px-10 py-4 cursor-pointer hover:bg-amber-300'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsBox
