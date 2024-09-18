"use client"
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation'

const page = () => {

    const router =useRouter();
 const [bool, setbool] = useState(false)
 const [form,setform]=useState({
    mine:"",
    address:"",
    city:"",
    state: "",
    code:"",
   
 })
 const [errors, setErrors] = useState({});


 const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "", 
    });
  };

 const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    let validationErrors = {};

    // Validate each field
    if (!form.mine) {
      validationErrors.mine = "*this is required";
    }
    if (!form.address) {
      validationErrors.address = "*value is required";
    }
    if (!form.city) {
      validationErrors.city = "*value is required";
    }
    if (!form.state) {
      validationErrors.state = "*value is required";
    }
    if (!form.code) {
      validationErrors.code = "*value is required";
    }
   

  

    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
    router.push("/userinput/miningact")
  };
    return (
    <div className=' h-[100vh] flex flex-col  items-center gap-10'>
      <div className=' mt-10 font-mono text-[30px]' >
       Mine Information
      </div>
      <div className='flex gap-3'>
      <div className='relative'>
  
  <div className='bg-white text-sm absolute left-2 bottom-[35px]'>
   Mine Name
  </div>
 <input className=' border-black border-[2px] w-[300px] h-[45px] rounded-lg' name="mine" value={form.mine} onChange={handleChange} type="text" />

 {errors.mine && <p className="absolute" style={{ color: "red" }}>{errors.mine}</p>}
 </div>

        
        <div className='relative'>
  
         <div className='bg-white text-sm absolute left-2 bottom-[35px]'>
          Address
         </div>
        <input className=' border-black border-[2px] w-[300px] h-[45px] rounded-lg' name="address" value={form.address} onChange={handleChange}  type="text" />
   
        {errors.address && <p className="absolute" style={{ color: "red" }}>{errors.address}</p>}
        </div>
       

      </div>
    
      <div className='flex gap-3'>
        
        <div className='relative'>
  
         <div className='bg-white text-sm absolute left-2 bottom-[35px]'>
        City
         </div>
        <input className=' border-black border-[2px] w-[300px] h-[45px] rounded-lg' name="city" value={form.city} onChange={handleChange} type="text" />
        {errors.city && <p className="absolute" style={{ color: "red" }}>{errors.city}</p>}

        </div>
        <div className='relative flex  border-black border-[2px] w-[300px] h-[45px] rounded-lg'>
  
         <div className='flex bg-white  text-sm absolute left-2 bottom-[35px]'>
          Country 
 

         </div>
         <svg onClick={()=>{setbool(!bool)}} className="absolute left-[270px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
{bool&&(
 <div className='bg-white absolute z-10 top-[30px] w-[80px] h-[100px] shadow-lg'>
 <div>India</div>
 <div>USA</div>
 <div>UK</div>
</div>
)}
  

        </div>
       

      </div>
    
      <div className='flex gap-3'>
        
        <div className='relative'>
  
         <div className='bg-white text-sm absolute left-2 bottom-[35px]'>
          State
         </div>
        <input className=' border-black border-[2px] w-[300px] h-[45px] rounded-lg' name="state" value={form.state}  onChange={handleChange} type="text" />
        {errors.state && <p className="absolute" style={{ color: "red" }}>{errors.state}</p>}

        </div>
        <div className='relative'>
  
         <div className='bg-white text-sm absolute left-2 bottom-[35px]'>
        Zip code
         </div>
        <input className=' border-black border-[2px] w-[300px] h-[45px] rounded-lg' name="code" value={form.code} onChange={handleChange} type="text" />
        {errors.code && <p className="absolute" style={{ color: "red" }}>{errors.code}</p>}

        </div>
       

      </div>
      <button onClick={handleSubmit} type="button" className="flex my-10 gap-2 justify-center items-center bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg text-[20px] ">   
          <div>
        Save & Continue
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg></button>
    
    </div>
  );
}

export default page;
