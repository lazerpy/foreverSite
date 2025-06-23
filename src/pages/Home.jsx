import React from 'react'
import Hero from '../components/Hero'
import LatestColl from '../components/LatestColl'
import BestSeller from '../components/BestSeller'
import Policy from '../components/Policy'
import NewsBox from '../components/NewsBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestColl/>
      <BestSeller/>
      <Policy/>
      <NewsBox/>
      
    </div>
  )
}

export default Home
