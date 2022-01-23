import Tabs from 'components/molecules/tab';
import React from 'react';

const Hero = () => {
  return(
      <>
      <div className='bg-no-repeat h-4/5 sm:h-[35rem] bg-top py-6 sm:py-0 sm:bg-center bg-[url("/public/images/hero.png")]'>
        {/* <img className='bg-no-repeat bg-center mx-auto' src='./images/hero.png' alt=''/> */}
          <div className='container text-white  '>
            <div className='p-6 md:p-10'>
            <h2 className='text-4xl max-w-lg mb-5'>Find your best house or apartment here.</h2>
            <p className='text-lg max-w-lg' >Your dream home you can get at a cheap price and feel the ease with our application</p>
            </div>
          </div>
      </div>
       <div className='mx-auto px-2 hidden md:block lg:max-w-5xl -mt-24 relative'>
        <div>
        <Tabs/>
        </div>
      </div>
        
      </>
  )
};

export default Hero;
