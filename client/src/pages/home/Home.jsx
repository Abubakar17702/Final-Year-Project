import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import SpecialDishes from './SpecialDishes'
import Testimonials from './Testimonials'
import OurServices from './OurServices'

const Home = () => {
  return (
    <>
    <div><Banner /></div>
    <div><Categories /></div>
    <div><SpecialDishes /></div>
    <div><Testimonials /></div>
    <div><OurServices /></div>
    </>
  )
}

export default Home
