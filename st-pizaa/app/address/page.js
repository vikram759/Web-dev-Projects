"use client"
import React from 'react'
import { useEffect,useState,useRef } from 'react'
import {fetchAdresses} from "../../Actions/userActions.js"
import toast,{Toaster} from 'react-hot-toast';
import { useRouter } from 'next/navigation.js';




const page = () => {

  const router=useRouter()
    
    useEffect(() => {
     
    getData();
     
    }, [])
 
 
    const [adresses, setadresses] = useState([])
    const arr=useRef([]);
    const[bool,setbool]=useState(false)



  const getData=async()=>{
    const data=await fetchAdresses();

    setadresses(data);
    arr.current=data
    

  }

  const handleselect=async(email,address)=>{
    

        const res=await fetch("api/update",{
            method:"PUT",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({
            email,
            address
              
            })
           });

           if(res.status==200){
          
           console.log("okay")
         
           }
           let m=adresses;

           m.forEach(item=>{
          item.isSelected=false;                    
           })

           const itemz=m.find(item=>item.address==address)
           itemz.isSelected=true;
        //    setadresses(m)
           console.log(m)
           arr.current=m
           setbool(!bool)

           router.push("/")




 
       
    //    adresses;
    
    
      
   

  }


  return (
    <div className='flex flex-col items-center mt-10 gap-5 relative'>

        {
            arr.current.map((item)=>{
                return (<>
                
                
                
      <div className=' text-black bg-gray-100 border-4   w-[400px] h-[100px] relative '>
        {item.isSelected?(

        <div className="border-4 absolute top-2 right-2 border-red-500 w-[20px] h-[20px] rounded-full   ">

        </div>
        ): <div onClick={()=>handleselect(item.email,item.address)} className="border absolute top-2 right-2 border-black w-[20px] h-[20px] rounded-full  ">

        </div>}
       <h1 className=' text-lg  p-2 '><span>{item.address}</span> <span>{item.postal}</span> <span>{item.city}</span></h1>
       {/* <h2 className='p-3 text-sm'>{item.phoneNumber}</h2> */}

      </div>
                </>)
            })
        }
    
    </div>
  )
}

export default page
