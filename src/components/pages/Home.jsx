import React from 'react';
import './style.css';
import Navbar from 'components/organisms/Navbar';
import Hero from 'components/organisms/Hero';
import Headline from 'components/templetes/headline';
import Service from 'components/organisms/Services';
import Product from 'components/organisms/Product';
import AppDownload from 'components/organisms/Appdownload/Index';
import AboutCompany from 'components/organisms/AboutCompany';
import Testimony from 'components/organisms/Testimony';
import Contact from 'components/organisms/Contact';
import Footer from 'components/organisms/Footer';

const Home = () => {
  return (
    <>
        <Navbar/>
        <main> 
          <Hero/>
          <Headline/>
          <Service/>
          <Product/>
          <AppDownload/>
          <AboutCompany/>
          <Testimony/>
          <Contact/>
        </main>
        <Footer/>
      </>
  );
};

export default Home;
