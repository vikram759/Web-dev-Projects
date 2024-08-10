"use client"

import React from 'react'
import Link from 'next/link'
import { useEffect,useState,useContext } from 'react'
import { useSession,signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { CartContext } from '../provider/SessionWrapper'

const Header = () => {
  // const

  const {cartProducts}=useContext(CartContext)
  
  const session=useSession();

// const [UserData, setUserData] = useState("")
  console.log(session)
  const status=session?.status;
  const router=useRouter()
  // useEffect(() => {
  //   if(status==="authenticated")
  //    setUserData(session.data.user.name)
  // }, [session])

  let UserData=session.data?.user?.name

  if(UserData&&UserData.includes(' ')){
    UserData=UserData.split(' ')[0]
  }


  

 

  // useEffect(() => {
  //   if(status!=="authenticated"){
  //     router.replace("/register")
  //   }
  
  
  // }, [session,router])
  
  
  return (
    <header className="flex items-center justify-between w-full">
    <nav className="flex gap-8 items-center text-gray-500">
    
    <Link className="text-3xl text-red-600 font-semibold" href={'/'}>ST PIZZA</Link>
      <Link href={'/'}>Home</Link>
      <Link href={'/menupage'}>Menu</Link>
      <Link href={''}>About</Link>
      <Link href={''}>Contact</Link>
      
    </nav>

    {status==="authenticated" &&(
       <nav className='flex items-center gap-4 text-gray-500 font-semibold'>
        <Link href={'/profile'} className="whitespace-nowrap">Hello,{UserData}</Link>
       <Link href={'/register'} className='bg-red-600 rounded-full text-white px-4 py-2' onClick={()=>{signOut()}} >LogOut</Link>
     
     </nav> 
    )}

    {status!=="authenticated"&&(
       <nav className='flex items-center gap-4 text-gray-500 font-semibold'>
       <Link href={"/login"}>Login</Link>
     <Link href={'/register'} className="bg-red-600 rounded-full text-white px-4 py-2">Register</Link>
     </nav>
    )}

    

      <Link
       href={'/cart'}
      >
         Cart {cartProducts.length}
      </Link>
   
   

  </header>
  )
}

export default Header
