import React from 'react';
import './style.css';
const Button = ({title, type, primary, icon}) => {

  return(
    <button type={type} className={`button ${primary ? 'button__primary' : ''}`}>
      {icon ? <img src={title} alt=''/> : title}
    </button>
  )
};

export default Button;