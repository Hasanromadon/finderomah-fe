import React from 'react';

const AppDownload =()=> {
    return(
        <section className='bg-primary-light mt-20'>
            <div className='container grid grid-cols-2 gap-2 items-center'>
                <div>
                    <h3 className='font-semibold text-3xl mb-4'>How do you get a dream home without having to bother to find?</h3>
                    <p className='mb-4'>You can download our application in the play store or apple store by looking
                         for "Finder Omah" to get the dream home that suits your wishes.
                    </p>
                    <div className='flex'>
                        <img className='mr-2' src='./images/googleplay.png' alt=''/>
                        <img src='./images/appstore.png' alt=''/>
                    </div>
                </div>
                <div>
                    <img src='./images/phone.png' alt=''/>
                </div>
            </div>
        </section>
    );
}

export default AppDownload;