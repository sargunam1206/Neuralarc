import React from 'react'
import { Helmet } from "react-helmet-async";

import Header from '../components/Header/Header'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import HomeSolutions from '../components/HomeSolutions'
import HomeProducts from '../components/HomeProducts'
import Process from './Process'
import HomeCaseStudies from '../components/HomeCaseStudies'
import Training from './Trainings'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

const Home = () => {
  return (
<>

<Helmet>
  <title>NeuralArc | IoT, AI & Software Development Company in Coimbatore</title>
  <meta
    name="description"
    content="NeuralArc builds IoT hardware, AI/ML systems, and custom software from Coimbatore — connected devices, cloud dashboards, and full-stack development for growing businesses."
  />
  <link rel="canonical" href="https://www.neuralarc.com/" />
</Helmet>

<Header />
<Hero />
<Highlights />
<HomeSolutions />
<HomeProducts />
<Process />
<HomeCaseStudies />
<Training />
<Testimonials />
<CallToAction />
<Footer/>

</>
)
}

export default Home