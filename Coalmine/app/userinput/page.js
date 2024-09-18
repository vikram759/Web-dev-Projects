"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const User = () => {
  const router =useRouter();
  return (
  <div className=' font-mono h-[100vh] flex flex-col justify-center items-center'>
    <div className='text-[70px] font-bold'>
    WELCOME TO DE<span className='text-green-600'>E</span>MISSIONIFY

    </div>
    <div className='text-[30px] '>
      Your personal Carbon tracker
    </div>
    
    <button onClick={()=>{router.push("/userinput/address")}} type="button" className="flex my-10 gap-2 justify-center items-center bg-green-600 text-white p-3  text-[30px] bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">     <div>
        NEXT
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg></button>

  </div>
  )
}
    
export default User
