import React from 'react';

const Input = ({placeholder, block , borderNone , className}) => {
  return(
          <input className={` ${className && className} ${borderNone ? 'border-none' : 'border'}  outline-none rounded-l text-base p-2 ${block ? 'block' : ''}`} type="text" placeholder={placeholder}/>
  );
};

export default Input;
