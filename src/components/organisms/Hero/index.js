import Tabs from 'components/molecules/tab';
import React from 'react';

const Hero = () => {
  return(
      <>
      <div className='container relative'>
        <img className='bg-no-repeat bg-center w-full' src='./images/hero.png' alt=''/>
          <div className='absolute top-14 left-14 max-w-lg text-white  '>
            <h2 className='text-4xl  mb-5'>Find your best house or apartment here.</h2>
            <p className='text-lg' >Your dream home you can get at a cheap price and feel the ease with our application</p>
          </div>
      </div>
       <div style={{width: '980px' }} className='mx-auto -mt-20 relative'>
        <div>
        <Tabs/>
        </div>
      </div>
        
      </>
  )
};

export default Hero;
