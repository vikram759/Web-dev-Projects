import React from 'react';

const SectionHeaders = ({subheader,mainheader}) => {
  return (
    <>
    
    <h1 className='uppercase text-gray-500 font-semibold leading-4'>{subheader}</h1>
    <h2 className='text-red-600 font-bold text-4xl italic'>{mainheader}</h2>
    
    </>
  );
}

export default SectionHeaders;
