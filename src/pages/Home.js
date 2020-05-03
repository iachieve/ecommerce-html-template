import React from 'react'
import Slider from '../components/layout/slider/Slider'
import CategorySections from '../components/Home/CategorySection/CategorySections'
import OurBrandsSection from '../components/Home/OurBrandsSection/OurBrandsSection'
import GenderSection from "../components/Home/GenderSection/GenderSection";

function Home() {
  return (
    <div>
      <Slider/>
      <CategorySections/>
      <OurBrandsSection/>
      <GenderSection/>
    </div>
  )
}

export default Home
