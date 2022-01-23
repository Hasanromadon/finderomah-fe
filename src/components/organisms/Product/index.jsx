import React, { useRef } from 'react';
import SectionTitle from 'components/atoms/Title';
import {ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid'
import ProductCard from 'components/molecules/ProductCard';
import './style.css';

const Product =()=> {
    
    const productWrapperEl = useRef(null);
    const handleScrollClick = (direction) => {
       const currentScroll = productWrapperEl.current.scrollLeft;
        if(direction === 'right') {
            productWrapperEl.current.scrollLeft += 600;
            console.log(direction);
        } else if(direction === 'left' && currentScroll > 0) {
            productWrapperEl.current.scrollLeft -= 600;
        }
    }

    const productData = [
        { name: 'Elite Garden City',
          address: 'Jl. Seroja No.10, Karangkidul, Semarang City ',
          price: 'Rp 1.600K',
          image: './images/home/1.png'
        },
        { name: 'Sumarecon City',
          address: 'Jl. Boulevard Gading Serpong, Tangerang City',
          price: 'Rp 1.300K',
          image: './images/home/2.png'
        },
        { name: 'Elite Sentul Modern',
          address: 'Jl. Raya Jakarta-Bogor, Sentul, Bogor Regency',
          price: 'Rp 2.400K',
          image: './images/home/3.png'
        },
        { name: 'Elite Sentul Modern',
          address: 'Jl. Raya Jakarta-Bogor, Sentul, Bogor Regency',
          price: 'Rp 2.400K',
          image: './images/home/2.png'
        },
        { name: 'Sumarecon City',
          address: 'Jl. Boulevard Gading Serpong, Tangerang City',
          price: 'Rp 1.300K',
          image: './images/home/3.png'
        },

    ]

    return(
        <section className='mt-20'>
            <div className='grid sm:grid-cols-[2fr_1.5fr_1fr] items-center container mb-4 sm:mb-20'>
                <SectionTitle className='text-left'>
                    Choose the location of the house you want
                </SectionTitle>
                <p className='text-base'> 
                    We make your life easier, to find a cheap and affordable place to live,
                    with an app finder omah application that will facilitate all your affairs. 
                    Finder omah also facilitates home search in Indonesia with the latest and latest technology.
                </p>
                <div className='text-center hidden sm:block'>
                    <button onClick={()=> handleScrollClick('left') } className='rounded-full mx-2 bg-gray-300 p-2 hover:bg-blue-primary '><ArrowLeftIcon className='w-5 h-5 text-white'/></button>
                    <button onClick={()=> handleScrollClick('right') }  className='rounded-full mx-2 bg-blue-primary p-2 hover:shadow hover:shadow-blue-primary'><ArrowRightIcon  className='w-5 h-5 text-white hover:shadow-blue-primary'/></button>
                </div>
            </div>
            <div ref={productWrapperEl} className='product-wrapper scroll-smooth container grid grid-flow-col overflow-x-scroll' >
                {
                    productData.map(product => (<ProductCard product={product}/>))
                }
                
            </div>
        </section>
    )
}

export default Product;