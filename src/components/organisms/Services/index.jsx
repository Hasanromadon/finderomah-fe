import Card from 'components/molecules/card';
import React from 'react';


const Service =()=> {

    const dataService = [
        {
            image: './images/CardIcon/glass vr.png',
            title: '3D Viewer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, commodo vestibulum massa, facilisis viverra integer volutpat. Et interdum malesuada.'
        },
        {
            image: './images/CardIcon/price.png',
            title: 'Exact Price',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, commodo vestibulum massa, facilisis viverra integer volutpat. Et interdum malesuada.'
        },
        {
            image: './images/CardIcon/contact.png',
            title: 'Easy to contact',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, commodo vestibulum massa, facilisis viverra integer volutpat. Et interdum malesuada.'
        },
        {
            image: './images/CardIcon/payment.png',
            title: 'Easier payment',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, commodo vestibulum massa, facilisis viverra integer volutpat. Et interdum malesuada.'
        },

    ]


    return(
        <section className='mt-20'>
            <h2 className='text-[40px] text-center font-semibold mx-auto'>
                Have a great experience with <span className='block'>our service</span>
            </h2>
            <div className='container border-b'>
                <div className='grid lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-1 my-8 lg:gap-20 md:gap-6 gap-0'>
                    {dataService.map((service, i)=> (
                        <Card key={i} image={service.image} title={service.title} description={service.description}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Service;