import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Hero from '../components/hero';
import AboutUs from '../components/aboutUs';
import Features from '../components/features';
import Prices from '../components/prices';
import Contacts from "../components/contacts"

// Create a new Workout plan
// Add workouts to list 
// remove workouts from list 
// use local storage to store workout list 

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

      {/* Contact Us */}
      <Contacts />
    </>
  );

}

export default Home;