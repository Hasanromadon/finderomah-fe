import React from 'react';

const AppDownload =()=> {
    return(
        <section className='bg-primary-light mt-20'>
            <div className='container py-10 sm:py-0 sm:grid sm:grid-cols-2 sm:gap-2 items-center'>
                <div>
                    <h3 className='font-semibold text-3xl mb-4'>How do you get a dream home without having to bother to find?</h3>
                    <p className='mb-4'>You can download our application in the play store or apple store by looking
                         for "Finder Omah" to get the dream home that suits your wishes.
                    </p>
                    <div className='flex sm:items-start md:justify-start'>
                        <img className='mr-2 max-w-[8rem] sm:max-w-max ' src='./images/googleplay.png' alt=''/>
                        <img className='max-w-[8rem] sm:max-w-max' src='./images/appstore.png' alt=''/>
                    </div>
                </div>
                <div>
                    <img className='hidden md:block' src='./images/phone.png' alt=''/>
                </div>
            </div>
        </section>
    );
}

export default AppDownload;