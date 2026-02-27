import React from 'react'
import { Helmet } from "react-helmet-async";

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

<Helmet>
  <title>NeuralArc | IoT, Software & AI Solutions</title>
  <meta
    name="description"
    content="NeuralArc provides IoT solutions, software development, AI & ML services, and professional training in India."
  />
  <meta name="keywords" content="IoT solutions, software development, AI ML services, NeuralArc" />
</Helmet>

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