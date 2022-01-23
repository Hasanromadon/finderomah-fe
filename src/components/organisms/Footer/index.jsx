import Input from 'components/atoms/input';
import Logo from 'components/atoms/logo';
import React from 'react';
import './style.css';

const Footer =()=> {
    return(
        <footer className='py-16'>
            <div className='container grid grid-cols-[3fr_1fr_1fr_1fr] gap-2'>
                <div>
                    <Logo/>
                    <p className='mt-2'>You can download our application in the play store or apple 
                        store by looking for "Finder Omah" to get the dream home that suits your wishes.</p>
                    <div className='p-1 mt-4 shadow-primary rounded-md flex w-max'>
                        <Input className="w-80" borderNone placeholder='Email Address'/>
                        <button className=''><img className='w-9' src='./images/buttonsend-bg.svg' alt=''/></button>
                    </div>
                </div>
                <div>
                <p className='font-semibold text-xl mb-2' >How to get App</p>
                <ul className='footer-link' >
                    <li>Download App</li>
                    <li>Rent a Home</li>
                    <li>Buy a Home</li>
                    <li>Call Canter </li>
                </ul>
                </div>
                <div>
                <p className='font-semibold text-xl  mb-2'>Blog</p>
                <ul className='footer-link' >
                    <li>Download App</li>
                    <li>Rent a Home</li>
                    <li>Buy a Home</li>
                    <li>Call Canter </li>
                </ul>
                </div>
                <div>
                <p className='font-semibold text-xl mb-2'>Help</p>
                <ul className='footer-link' >
                    <li>Download App</li>
                    <li>Rent a Home</li>
                    <li>Buy a Home</li>
                    <li>Call Canter </li>
                </ul>
                </div>
            </div>
            <hr className='my-8'/>
            <div className='flex justify-between container'>
                <p>@2021 FINDEROMAH All rights reseverd</p>
                <div className='flex social-contact'>
                <img src='./images/cardicon/linkedin.svg' alt=''/>
                <img src='./images/cardicon/fb.svg' alt=''/>
                <img src='./images/cardicon/ig.svg' alt=''/>
                <img src='./images/cardicon/discord.svg' alt=''/>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
