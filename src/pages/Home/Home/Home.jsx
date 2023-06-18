import React from 'react'
import TopCarousel from '../topCarousel/TopCarousel'
import TopClasses from '../TopClasses/TopClasses'
import TopInstructors from '../TopInstructors/TopInstructors'
import Testimonial from '../Testimonial/Testimonial'

const Home = () => {
  return (
    <div>
      <TopCarousel></TopCarousel>
      <TopClasses></TopClasses>
      <TopInstructors></TopInstructors>
      <Testimonial></Testimonial>
    </div>
  )
}

export default Home
