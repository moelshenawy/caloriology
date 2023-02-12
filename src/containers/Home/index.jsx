import React from 'react';

import RecProds from '../../components/RecProds/index'
import TopProds from '../../components/TopProds'
import Testimonials from '../../components/Testimonials'
import Hero from '../../components/HeroSection';
import Calc from '../../components/Calc';
const Home = () => {

  return (
    <>
      <Hero />
      <Calc />
      <RecProds />
      <TopProds />
      <Testimonials />

    </>
  )
}
export default Home