import React from 'react';

const TestimonyCard =({product})=> {
    return(
        <div className='p-8 w-96 rounded-[24px] shadow-primary-lg bg-white flex flex-col items-center'>
                <img  className=' mb-4' src='./images/cardIcon/quote.svg' alt=''/>
                <p className='mb-4'>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Viverra sagittis facilisis risus, quisque. Diam amet, nec facilisi neque nulla.”
                </p>
                <div className='flex items-center gap-4 justify-center'>
                  <img src='./images/user1.png' alt="" />
                  <div>
                    <p className='text-sm font-semibold'>Kierra Passa</p>
                    <div className='flex'>
                    <img src='./images/cardIcon/star.svg' alt=''/>
                    <img src='./images/cardIcon/star.svg' alt=''/>
                    <img src='./images/cardIcon/star.svg' alt=''/>
                    <img src='./images/cardIcon/star.svg' alt=''/>
                    <img src='./images/cardIcon/star.svg' alt=''/>
                    <span className='font-semibold ml-1 text-xs'>4.8</span>
                    </div>
                  </div>
                  
                </div>
        </div>
    )
}


export default TestimonyCard;
