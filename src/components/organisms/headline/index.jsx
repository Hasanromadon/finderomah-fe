import React from 'react';

const Headline =()=> {

    return(
        <section className='container border-y px-10 mt-20 mx-auto py-10 md:gap-10 grid lg:grid-cols-2'>
            <h2 className='font-normal text-[40px] text-center lg:text-left '>We have experienced in the field of home provision services for 10 years</h2>
            <div className='py-5 text-center sm:text-left mx-auto sm:gap-x-8 gap-y-8 sm:gap-y-0 
                grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 '>
                <div className='sm:flex sm:items-center'>
                 <span className='text-3xl sm:mr-3 font-semibold' >200K</span>
                 <p className='text-gray-700 sm:max-w-[150px]'>People believe in our service</p>
                </div>  
                <div className='sm:flex sm:items-center'>
                 <span className='text-3xl sm:mr-3 font-semibold' >20+</span>
                 <p className='text-gray-700 sm:max-w-[150px]'>Getting the prize as the best company</p>
                </div>  
                <div className='sm:flex sm:items-center'>
                 <span className='text-3xl sm:mr-3 font-semibold' >4200+</span>
                 <p className='text-gray-700 sm:max-w-[150px]'>Property and house ready for occoupancy</p>
                </div>  
            </div>

        </section>
    )

}


export default Headline;