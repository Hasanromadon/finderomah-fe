import React from 'react';
import './style.css';
import Hero from 'components/organisms/Hero';
import Headline from 'components/organisms/headline';
import Service from 'components/organisms/Services';
import Product from 'components/organisms/Product';
import AppDownload from 'components/organisms/Appdownload/Index';
import AboutCompany from 'components/organisms/AboutCompany';
import Testimony from 'components/organisms/Testimony';
import Contact from 'components/organisms/Contact';
import Footer from 'components/organisms/Footer';
import Example from 'components/organisms/Navbar/TailwindNav';

const Home = () => {
  return (
    <>
       <Example/>
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
