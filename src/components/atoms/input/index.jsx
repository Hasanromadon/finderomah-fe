import React from 'react';

const Input = ({placeholder}) => {
  return(
          <input style={{ border: '1px solid #D4E5F6' }} className=" outline-none rounded-l text-base py-4 px-2 w-52 " type="text" placeholder={placeholder}/>
  );
};

export default Input;
