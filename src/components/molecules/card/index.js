import React from 'react';

const Card = ({image, title, description}) => {
    return(
        <div className='hover:shadow-primary px-6 py-8 bg-transparent-linear-blue cursor-pointer'>
            <img className='mb-6' src={image} alt=''/>
            <h3 className='font-semibold text-2xl mb-3'>{title}</h3>
            <p className='font-normal'>{description}</p>
        </div>
    )
}

export default Card;