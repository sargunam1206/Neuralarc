import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Services from './Services'
import Products from './Products'
import Process from './Process'
import Training from './Trainings'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

const Home = () => {
  return (
<>
<Header />
<Hero />
<Highlights />
<Services />
<Products />
<Process />
<Training />
<Testimonials />
<CallToAction />
<Footer/>

</>
)
}

export default Home