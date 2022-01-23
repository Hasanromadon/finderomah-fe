import React from 'react';

const SectionTitle =({children, center})=> {
    return(
        <h3 className={`text-[40px] font-semibold mx-auto ${center ? 'text-center': ''}`}>{children}</h3>
    )
}

export default SectionTitle;