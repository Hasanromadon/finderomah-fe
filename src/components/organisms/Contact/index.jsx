import Form from 'components/molecules/form/Form';
import React from 'react';


const Contact =()=> {
    return(
        <section className='contact bg-fi bg-cover bg-center bg-[url("/public/images/Contactus-bg.png")] py-[12rem]'>
            <div className='container grid grid-cols-2 gap-6 items-center'>
              <h3 className='font-semibold text-[40px] text-white '>If you want to talk about our products? You just contact us in a way.</h3>
                <div>
                    <Form/>
                </div>  
            </div>
           
        </section>
    )
}

export default Contact;