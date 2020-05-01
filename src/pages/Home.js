import React from 'react'
import Slider from '../components/layout/slider/Slider'
import CategorySections from '../components/Home/CategorySection/CategorySections'
import OurBrandsSection from '../components/Home/OurBrandsSection/OurBrandsSection'

function Home() {
  return (
    <div>
      <Slider/>
      <CategorySections/>
      <OurBrandsSection/>
    </div>
  )
}

export default Home
