import React from 'react'
import { Helmet } from "react-helmet-async";

import Header from '../components/Header/Header'
import Hero from '../components/Hero'
import HomeIoT from '../components/HomeIoT'
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
  <title>NeuralArc | IoT Development Company in Coimbatore — IoT, AI & Software</title>
  <meta
    name="description"
    content="NeuralArc is an IoT development company in Coimbatore — custom IoT solutions that integrate connected hardware, firmware, cloud dashboards and software, plus AI/ML and full-stack development."
  />
  <link rel="canonical" href="https://www.neuralarc.com/" />
</Helmet>

<Header />
<Hero />
<HomeIoT />
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