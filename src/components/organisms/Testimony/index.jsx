import React from 'react';
import SectionTitle from 'components/atoms/Title';
import TestimonyCard from 'components/molecules/TestimonyCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

const Testimony =()=> {

    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000
      };

    return(
        <section className='testimony mt-20 py-20'>
            <div className='container'>
            <SectionTitle center>
                How do customers feel after
                <span className='block'>using our app</span>
            </SectionTitle>
            <div className='py-4 mt-5 before:border-t-2 before:rounded-xl after:rounded-xl after:border-t-2  before:border-blue-primary after:border-blue-primary before:left-0 after:left-0 before:right-0 after:right-0 before:top-0 after:bottom-0 relative before:w-24 after:w-24 before:absolute after:absolute before:mx-auto  after:mx-auto max-w-[30rem] text-center mx-auto'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue
                 neque quisque vulputate malesuada adipiscing diam in.</p>
            </div>
            <div className='testimony-card-wrapper relative'>
            <Slider {...settings} className='container'>
            <div>
                <div className='flex gap-9 p-10 justify-center'>
                    <TestimonyCard hidden/>
                    <TestimonyCard/>
                </div>
            </div>
            <div>
                <div className='flex gap-9 p-10 justify-center'>
                    <TestimonyCard hidden/>
                    <TestimonyCard/>
                </div>
            </div>
            <div>
                <div className='flex gap-9 p-10 justify-center'>
                    <TestimonyCard hidden/>
                    <TestimonyCard/>
                </div>
            </div>
            </Slider>
            </div>

            </div>
        </section>
    )
}

export default Testimony;