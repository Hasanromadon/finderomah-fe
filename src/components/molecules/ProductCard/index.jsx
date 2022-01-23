import Button from 'components/atoms/button';
import React from 'react';

const ProductCard =({product})=> {
    return(
        <div className='p-2 w-[372px]'>
            <img className='rounded-md w-full object-cover mb-3' src={product.image} alt=''/>
            <p className='font-semibold mb-3 text-lg'>{product.name}</p>
            <p className='text-gray-500 mb-3' >{product.address} </p>
            <div className='flex justify-between items-center'>
                <p className='text-gray-500'> <span className=' text-black font-bold text-xl'>{product.price} </span>/Month</p>
                <Button outlined rounded title='View More'/>
            </div>
        </div>
    )
}


export default ProductCard;
