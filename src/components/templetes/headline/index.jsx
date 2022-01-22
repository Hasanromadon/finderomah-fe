import React from 'react';

const Headline =()=> {

    return(
        <section className='container border-y px-10 mt-20 mx-auto py-10 gap-10 grid grid-cols-[2fr_1fr_1fr]'>
            <h2 className='font-normal text-[40px]'>We have experienced in the field of home provision services for 10 years</h2>
            <div className='py-5'>
                <div className='flex items-center mb-4'>
                 <span className='text-3xl mr-2 font-semibold' >200K</span>
                 <p className='text-gray-700 w-[120px]'> People believe in our service</p>
                </div>
                <div className='w-75 flex items-center'>
                 <span className='text-3xl mr-2 font-semibold' >20+</span>
                 <p className='text-gray-700 w-[130px]'> Getting the prize as the best company</p>
                </div>
            </div>
            <div className='py-5'>
                <div className='w-75 flex items-center mb-4'>
                 <span className='text-3xl mr-2 font-semibold' >4000+</span>
                 <p className='text-gray-700'> Property and house ready for occoupancy</p>
                </div>
            </div>

        </section>
    )

}


export default Headline;