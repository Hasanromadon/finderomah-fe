import Form from 'components/molecules/form/Form';
import React from 'react';


const Contact =()=> {
    return(
        <section className='contact bg-fi bg-cover md:bg-center bg-[url("/public/images/Contactus-bg.png")] py-12 md:py-[12rem]'>
            <div className='container grid md:grid-cols-2 gap-y-4 md:gap-6 items-center'>
              <h3 className='font-semibold text-[40px] text-white '>If you want to talk about our products? You just contact us in a way.</h3>
                <div>
                    <Form/>
                </div>  
            </div>
           
        </section>
    )
}

export default Contact;