import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductsItem from '../components/ProductsItem'
import { assets } from '../assets/assets'


const Collection = () => {
    const [category,setCategory] = useState([])
    const [sub,setSub] = useState([])
  const { products } = useContext(ShopContext)
  const [collProducts, setCollProducts] = useState([])
   const [show,setShow] = useState(false)
   const [sortTy, setSortTy]  = useState("relavent")
  

   const toggle = (e)=>{
      if(category.includes(e.target.value)){
        setCategory(prev=> prev.filter(item=> item !== e.target.value))
      }else{
        setCategory(prev=> [...prev,e.target.value])
      }
    }
    
   

    const toggleSub = (e) =>{
        if(sub.includes(e.target.value)){
        setSub(prev=> prev.filter(item=> item !== e.target.value))
      }else{
        setSub(prev=> [...prev,e.target.value])
      }
    
    }

    const applyCa = () => {
      let copy = products.slice();

      if(category.length > 0){
      copy   =  copy.filter(item=> category.includes(item.category))
      }
      
        setCollProducts(copy)
    }
    


    useEffect(()=>{
      applyCa()
    },[category,sub])

  useEffect(()=>{
    setCollProducts(products)
  },[])

  const sortF = ()=>{
    let sortCopy = products.slice();


    switch(sortTy){
       case 'low-high':
        setShow(sortCopy.sort((a,b)=>(a.price - b.price)))
        break;
        case 'high-low':
        setShow(sortCopy.sort((a,b)=>(b.price - a.price)))
        break;

        default:
          applyCa();
          break;
    }
  
   

  }
  useEffect(()=>{
    sortF()
  },[sortTy])

 

  return (
    <div className=' flex flex-col sm:flex-row sm:gap-10 pt-10 border-t'>

      {/* filter method */}
      <div className="min-w-60">
      <p onClick={()=>setShow(!show)} className="my-2 text-xl flex items-center contain-paint gap-2">FILERS
        <img src={assets.dropdown_icon} alt="" className={`h-3 sm:hidden ${show ? 'rotate-90' : ""}` }/>
      </p>

      {/* category */}
      <div className={`border border-gray-300 pl-5 py-3 mt-6 rounded-xl ${show ? '' : 'hidden'} sm:block`}>
      <p className='mb-2.5 text-sm font-medium'>CATEGORIES</p>
      <div className="flex flex-col gap-2 text-sm font-light text-gray-800">
        <p className='flex gap-2'>
          <input onChange={toggle} type="checkbox" className='w-3' value={'Men'} />
          Men
        </p>
        <p className='flex gap-2'>
          <input onChange={toggle} type="checkbox" className='w-3' value={'Women'} />
          Women
        </p>
         <p className='flex gap-2'>
          <input onChange={toggle} type="checkbox" className='w-3' value={'Kids'} />
          Children
        </p>
        

      </div>

      </div>
      {/* sub category */}
       <div className={`border border-gray-300 pl-5 py-3 my-5 rounded-xl ${show ? '' : 'hidden'} sm:block`}>
      <p className='mb-2.5 text-sm font-medium'>STYPE</p>
      <div className="flex flex-col gap-2 text-sm font-light text-gray-800">
        <p className='flex gap-2'>
          <input onClick={toggleSub} type="checkbox" className='w-3' value={'Topwear'} />
          Topwear
        </p>
        <p className='flex gap-2'>
          <input onClick={toggleSub} type="checkbox" className='w-3' value={'Bottomwear'} />
          Bottomwear
        </p>
         <p className='flex gap-2'>
          <input onClick={toggleSub} type="checkbox" className='w-3' value={'Winterwear'} />
          Winterwear
        </p>
        

      </div>

      </div>

      </div>

      {/* rightt side */}
      <div className="flex-1">
        <div className="flex  justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} tex2={'COLLECTIONS'} />
          {/* sort */}
          <select onChange={(e)=>setSortTy(e.target.value)} className='border border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by relavent</option>
            <option value="low-high">Sort by low-high</option>
            <option value="high-low">Sort by hight-low</option>
          </select>

        </div>
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
            collProducts.map((item,index)=>(
                <ProductsItem  key={index} id={item._id}  name={item.name} image={item.image} price={item.price}/>
            ))
        }
    </div>
      </div>
      
    </div>
  )
}

export default Collection
