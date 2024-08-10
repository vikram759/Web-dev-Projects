import React from 'react';
import Image from "next/image";
import Right from '../icons/right';

const Hero = () => {
  return (
   <section className='hero'>
    <div className="py-12">
    <h1 className='text-4xl font-semibold'>Everything  <br/> is better
    <br/> with a&nbsp; 
        <span className='text-red-600 text-4xl'>
        Pizza  
        </span>
        </h1>
   <p className='my-4 text-gray-500 text-sm'>Pizza is that missing piece that makes every day complete, a simple yet delecious joy in life</p>
       <div className="flex gap-4">
        <button className=' justify-center bg-red-600 uppercase text-sm items-center flex gap-2 px-4 py-2 rounded-full text-white'>Order Now <Right/></button>
        <button className='flex border-0 items-center gap-2 py-2 text-gray-600'>Learn More <Right/> </button>
        </div> 
    </div>
  <div className=' relative'>

  <Image src={'/pizza1.jpg'} layout={'fill'} objectFit={'contain'} alt={'pizza'}/>
  </div>
  
  
   </section>
  );
}

export default Hero;
