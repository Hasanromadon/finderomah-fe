import Button from 'components/atoms/button';
import React from 'react';
import './style.css';

const AboutCompany =()=> {
console.log(process.env.PUBLIC_URL);
    return(
        <section className='container mt-20'>
            <img className='mb-8' src='./images/company.png' alt=''/>
            <div className='grid sm:grid-cols-2 gap-8'>
                <p> <span className='text-blue-primary'>FinderOmah</span> is sit amet, consectetur adipiscing elit. Laoreet vitae maecenas tortor, 
                    sollicitudin tellus consectetur magnis tincidunt. At dapibus elementum sit vel mattis consectetur cursus. 
                    At parturient arcu feugiat fermentum rhoncus nulla suspendisse est. Accumsan ipsum pellentesque rhoncus 
                    quisque mattis cras faucibus nisi gravida. 
                    Risus mauris, egestas consequat posuere. Dignissim eu neque diam laoreet nisl.
                </p>
                <div>
                    <div className='sm:max-w-[30rem] rounded-xl shadow-primary-lg bg-blue-primary px-6 py-8 sm:-mt-32'>
                        <p className='text-white font-normal text-4xl mb-6'>
                        Our company is in Sumarecon Mall, Bekasi, West Java, Indonesia
                        </p>
                        <Button rounded className='bg-white text-blue-primary' title='Read More'/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutCompany;