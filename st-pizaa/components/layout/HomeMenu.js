"use client"

import React from 'react'
import MenuItem from '../menu/MenuItem'
import SectionHeaders from './SectionHeaders'
import { fetchMenuItems } from '../../Actions/userActions'
import { useEffect,useState } from 'react'
const HomeMenu = () => {
  const [best, setbest] = useState([])
  const [bool, setbool] = useState(false)


  const getData=async()=>{

    let bestseller=await fetchMenuItems();
    let bestsellers=bestseller.slice(0,3)
    setbest(bestsellers);
    setbool(!bool);
  }
  useEffect(() => {
    getData()
  
  
  }, [])
  
  
  return (
    <section>

      <div className='text-center mb-4'>
        
        <SectionHeaders subheader={"Check Out"} mainheader={"Our Best Sellers"}/>
      </div>
      <div className='grid grid-cols-3 gap-4'>
    {/* <MenuItem/> 
    <MenuItem/> 
    <MenuItem/> 
    <MenuItem/> 
    <MenuItem/> 
    <MenuItem/>  */}

    {best.map(item=>{

      return(<>
      <MenuItem {...item}/>
      
      </>)
    })}

      </div>
    </section>
    )
}


export default HomeMenu
