import React from 'react';
import './style.css';
import Navbar from 'components/organisms/Navbar';
import Hero from 'components/organisms/Hero';
import Headline from 'components/templetes/headline';
import Service from 'components/organisms/Services';

const Home = () => {
  return (
      <main className='h-[2000px]'> 
      <Navbar/>
      <Hero/>
      <Headline/>
      <Service/>
      </main>
  );
};

export default Home;
