import React from 'react';



import Header from "../Component/Header/Header";
import Hero from "../Component/Hero/Hero";
import Winner from "../Component/Winner/Winner";
import Gallery from "../Component/Gallery/Gallery";
import Prizes from "../Component/Prizes/Prizes";
import Footer from "../Component/Footer/Footer";


export default function HomePage() {
  return (
    <div className='background'>
      <Header />
      <Hero />
      <Winner />
      <Gallery />
      <Prizes />
      <Footer/>
    </div>
    
  )
}
