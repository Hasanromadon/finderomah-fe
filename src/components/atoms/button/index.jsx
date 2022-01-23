import React from 'react';
import './style.css';
const Button = ({title, type, primary, outlined, icon, rounded, className, block}) => {
  console.log(className);
  return(
    <button type={type} className={ `button ${className ? className : null} ${block ? 'block' : ''} ${rounded ? 'rounded-md' : ''} ${primary ?'button__primary' : null } ${outlined ? 'border border-blue-secondary text-blue-primary' : ''} `}>
      {icon ? <img src={title} alt=''/> : title}
    </button>
  )
};

export default Button;