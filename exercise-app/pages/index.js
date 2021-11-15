import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Hero from '../components/hero';
import AboutUs from '../components/aboutUs';
import Features from '../components/features';
import Prices from '../components/prices';
import Downloads from '../components/downloads';
import Contacts from "../components/contacts"
const Home = () => {
  return (
    <>
      <Hero />
      {/* About Us */}
      <AboutUs />
      {/* Features */}
      <Features />
      {/* Prices */}
      <Prices />

      {/* Downloads */}
      <Downloads />
      {/* Contact Us */}
      <Contacts />
    </>
  );

}

export default Home;