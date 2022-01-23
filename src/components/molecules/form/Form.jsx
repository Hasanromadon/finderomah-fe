import Button from 'components/atoms/button';
import Input from 'components/atoms/input';
import React from 'react';
import './style.css';

const Form = () => {
    return(
        <form>
            <div className='bg-white md:ml-8 py-10 px-6 flex flex-col rounded-md md:max-w-[24rem] contact-form'>
            <Input block placeholder='Your Name'/>
            <Input block placeholder='Email'/>
            <Button primary title='Send Now'/>
            </div>
        </form>
    )
};

export default Form;