"use client"
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation'

const page = () => {
    const router =useRouter();
 const [bool, setbool] = useState(false)
 const [bool1, setbool1] = useState(false)
 const [bool2, setbool2] = useState(false)
 const [bool3, setbool3] = useState(false)
 const [bool4, setbool4] = useState(false)
 const [form,setform]=useState({
    excavated:"",
    fuelconsumption:"",
    distance:"",
    transportation: "",
    fuel:"",
    hours:"",
    treedensity:"",
    areaunder:"",
    areafor:"",
    budget:"",
    textfield:"",
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
    if (!form.excavated) {
      validationErrors.excavated = "*this is required";
    }
    if (!form.fuelconsumption) {
      validationErrors.fuelconsumption = "*fuel is required";
    }
    if (!form.distance) {
      validationErrors.distance = "*distance is required";
    }
    if (!form.transportation) {
      validationErrors.transportation = "*mode is required";
    }
    if (!form.fuel) {
      validationErrors.fuel = "*value is required";
    }
    if (!form.hours) {
      validationErrors.hours = "*value is required";
    }
    if (!form.treedensity) {
      validationErrors.treedensity = "*value is required";
    }
    if (!form.areaunder) {
      validationErrors.areaunder = "*value is required";
    }
    if (!form.areafor) {
      validationErrors.areafor = "*value is required";
    }
    if (!form.budget) {
      validationErrors.budget = "*value is required";
    }
    if (!form.textfield) {
      validationErrors.textfield = "*value is required";
    }

  

    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
    router.push("/dashboard")
  };
    return (
        <>
        <div className='flex flex-col gap-10'>

       
     
       
  
        <div className='flex w-[100vw] justify-around'>

        
    <div className='  flex flex-col  gap-10'>
      <div className=' font-mono mt-10  text-[30px]' >
       Excavation Activities
      </div>
      <div className='flex gap-3'>
      <div className='relative'>
  
  <div className='bg-white text-sm absolute left-2 bottom-[35px]'>
   Coal Excavated
  </div>
 <input className=' border-black border-[2px] w-[300px] h-[45px] rounded-lg' name='excavated' value={form.excavated} onChange={handleChange} type="text" />

 {errors.excavated && <p className='absolute' style={{ color: "red" }}>{errors.excavated}</p>}
 
 </div>

        
        <div className='relative'>
  
         <div className='bg-white text-sm absolute left-2 bottom-[35px]'>
          Fuel Consumption (litres)
         </div>
        <input className=' border-black border-[2px] w-[300px] h-[45px] rounded-lg' name='fuelconsumption' value={form.fuelconsumption} onChange={handleChange} type="text" />
   
        {errors.fuelconsumption && <p className="absolute"style={{ color: "red" }}>{errors.fuelconsumption}</p>}
        </div>
       

      </div>
    
      <div className='flex gap-3'>
        
        
        <div className='relative flex  border-black border-[2px] w-[300px] h-[45px] rounded-lg'>
  
         <div className='flex bg-white  text-sm absolute left-2 bottom-[35px]'>
         Machinery type
 

         </div>
         <svg onClick={()=>{setbool(!bool)}} className="absolute left-[270px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
{bool&&(
 <div className='bg-white absolute z-10 top-[30px] w-[80px] h-[100px] shadow-lg'>
 <div>Excavators</div>
 <div>Dozers</div>
 
</div>
)}
  

        </div>
       

      </div>
    
    

    
    </div>
    
  
    </div>
   
        <div className='flex w-[100vw] justify-around'>

        
    <div className='  flex flex-col  gap-10'>
      <div className=' font-mono mt-10  text-[30px]' >
       Transportation Data
      </div>
      <div className='flex gap-3'>
      <div className='relative'>
  
  <div className='bg-white text-sm absolute left-2 bottom-[35px]'>
 Distance travelled(in km)
  </div>
 <input className=' border-black border-[2px] w-[300px] h-[45px] rounded-lg' name="distance" value={form.distance} onChange={handleChange} type="text" />
 {errors.distance && <p className="absolute" style={{ color: "red" }}>{errors.distance}</p>}

 </div>

        
        <div className='relative'>
  
         <div className='bg-white text-sm absolute left-2 bottom-[35px]'>
          Transportation Mode
         </div>
        <input className=' border-black border-[2px] w-[300px] h-[45px] rounded-lg' name="transportation" value={form.transportation} onChange={handleChange}  type="text" />
        {errors.transportation && <p className="absolute" style={{ color: "red" }}>{errors.transportation}</p>}

        </div>
       

      </div>
    
      <div className='flex gap-3'>
        
        <div className='relative'>
  
         <div className='bg-white text-sm absolute left-2 bottom-[35px]'>
        Fuel consumption (litres)
         </div>
        <input className=' border-black border-[2px] w-[300px] h-[45px] rounded-lg' name="fuel" value={form.fuel} onChange={handleChange}  type="text" />
        {errors.fuel && <p className="absolute" style={{ color: "red" }}>{errors.fuel}</p>}

        </div>
        <div className='relative flex  border-black border-[2px] w-[300px] h-[45px] rounded-lg'>
  
         <div className='flex bg-white  text-sm absolute left-2 bottom-[35px]'>
          Fuel type
 

         </div>
         <svg onClick={()=>{setbool1(!bool1)}} className="absolute left-[270px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
{bool1&&(
 <div className='bg-white absolute z-10 top-[30px] w-[80px] h-[100px] shadow-lg'>
 <div>Diesel</div>
 <div>electric</div>

</div>
)}
  

        </div>
       

      </div>
    
    

    
    </div>
    
  
    </div>
   
        <div className='flex w-[100vw] justify-around'>

        
    <div className='  flex flex-col  gap-10'>
      <div className=' font-mono mt-10  text-[30px]' >
       Equipment usage
      </div>
      <div className='flex gap-3'>
      <div className='relative'>
  
  <div className='bg-white text-sm absolute left-2 bottom-[35px]'>
 Hours of operation
  </div>
 <input className=' border-black border-[2px] w-[300px] h-[45px] rounded-lg' name="hours" value={form.hours} onChange={handleChange}  type="text" />
 {errors.hours && <p className="absolute" style={{ color: "red" }}>{errors.hours}</p>}

 </div>
 <div className='relative flex  border-black border-[2px] w-[300px] h-[45px] rounded-lg'>
  
  <div className='flex bg-white  text-sm absolute left-2 bottom-[35px]'>
   Energy Type


  </div>
  <svg onClick={()=>{setbool2(!bool2)}} className="absolute left-[270px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
{bool2&&(
<div className='bg-white absolute z-10 top-[30px] w-[80px] h-[100px] shadow-lg'>
<div>Electric</div>
<div>Diesel</div>

</div>
)}


 </div>
        
       
       

      </div>
    
      <div className='flex gap-3'>
        
        
    
       
        <div className='relative flex  border-black border-[2px] w-[300px] h-[45px] rounded-lg'>
  
         <div className='flex bg-white  text-sm absolute left-2 bottom-[35px]'>
          Energy Source
 

         </div>
         <svg onClick={()=>{setbool3(!bool3)}} className="absolute left-[270px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
{bool3&&(
 <div className='bg-white absolute z-10 top-[30px] w-[80px] h-[100px] shadow-lg'>
 <div>Electric</div>
 <div>Diesel</div>

</div>
)}
  

        </div>
       

      </div>
    
    

    
    </div>
    
  
    </div>
    <div className='flex w-[100vw] justify-around'>

        
<div className='  flex flex-col  gap-10'>
  <div className='font-mono mt-10  text-[30px]' >
  Existing afforestation
  </div>
  <div className='flex gap-3'>
  <div className='relative'>

<div className='bg-white text-sm absolute left-2 bottom-[35px]'>
Average tree density(per hectare)
</div>
<input className=' border-black border-[2px] w-[300px] h-[45px] rounded-lg' name="treedensity" value={form.treedensity} onChange={handleChange} type="text" />

{errors.treedensity && <p className="absolute" style={{ color: "red" }}>{errors.treedensity}</p>}
</div>

    
    <div className='relative'>

     <div className='bg-white text-sm absolute left-2 bottom-[35px]'>
      
     </div>
    <input className=' border-black border-[2px] w-[300px] h-[45px] rounded-lg'  type="text" />


    </div>
   

  </div>

  <div className='flex gap-3'>
    
    <div className='relative'>

     <div className='bg-white text-sm absolute left-2 bottom-[35px]'>
    Area under afforestation(hectares)
     </div>
    <input className=' border-black border-[2px] w-[300px] h-[45px] rounded-lg' name="areaunder" value={form.areaunder} onChange={handleChange} type="text" />
    {errors.areaunder && <p className="absolute" style={{ color: "red" }}>{errors.areaunder}</p>}

    </div>
    <div className='relative flex  border-black border-[2px] w-[300px] h-[45px] rounded-lg'>

     <div className='flex bg-white  text-sm absolute left-2 bottom-[35px]'>
     Type of trees


     </div>
     <svg onClick={()=>{setbool4(!bool4)}} className="absolute left-[270px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
{bool4&&(
<div className='bg-white absolute z-10 top-[30px] w-[80px] h-[100px] shadow-lg'>
<div>Fast-growing</div>
<div>Native-species</div>

</div>
)}


    </div>
   

  </div>




</div>


</div>
    <div className='flex w-[100vw] justify-around'>

        
<div className='  flex flex-col  gap-10'>
  <div className='font-mono mt-10  text-[30px]' >
  Land available for afforestation
  </div>
  <div className='flex gap-3'>
  <div className='relative'>

<div className='bg-white text-sm absolute left-2 bottom-[35px]'>
Area for Afforestation(hectares)
</div>
<input className=' border-black border-[2px] w-[300px] h-[45px] rounded-lg' name="areafor" value={form.areafor} onChange={handleChange} type="text" />

{errors.areafor && <p className="absolute" style={{ color: "red" }}>{errors.areafor}</p>}
</div>

    
    <div className='relative'>

     <div className='bg-white text-sm absolute left-2 bottom-[35px]'>
      Afforestation budget
     </div>
    <input className=' border-black border-[2px] w-[300px] h-[45px] rounded-lg' name="budget" value={form.budget} onChange={handleChange}  type="text" />

    {errors.budget && <p className="absolute" style={{ color: "red" }}>{errors.budget}</p>}
    </div>
   

  </div>

  <div className='flex gap-3'>
    
    <div className='relative'>

     <div className='bg-white text-sm absolute left-2 bottom-[35px]'>
   Proposed plantation species(text field)
     </div>
    <input className=' border-black border-[2px] w-[300px] h-[45px] rounded-lg' name="textfield" value={form.textfield} onChange={handleChange}  type="text" />
    {errors.textfield && <p className="absolute" style={{ color: "red" }}>{errors.textfield}</p>}

    </div>
  
   

  </div>




</div>


</div>
<div className='w-[100vw] flex justify-center'>

<button onClick={handleSubmit} type="button" className="flex my-10 gap-2 justify-center items-center bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg text-[20px] ">   
          <div>
        Submit
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg></button>
</div>
</div>
   
    </>
  );
}

export default page;

