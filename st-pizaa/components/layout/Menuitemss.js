"use"

import React from 'react';
import { fetchitems } from '../../Actions/userActions';
import { useState,useEffect } from 'react';

const Menuitemss = ({id}) => {

    const [name, setname] = useState("")
  const [data, setdata] = useState([])
  const [image, setimage] = useState("")
  const [cost,setcost] = useState(0)
  const [category, setcategory] = useState("")
  const [bool, setbool] = useState(false)
  const [bol, setbol] = useState(false)
  const [bol1, setbol1] = useState(false)
  const [size, setsize] = useState([]);
  const [extra, setextra] = useState([]);

    const getData=async()=>{
        let hell=await fetchitems(id);

        setname(hell.name);
        setimage(hell.image);
        setcost(hell.cost);
        setcategory(hell.category);
        setsize(hell.size);
        setextra(hell.extra);

    }
  useEffect(() => {
    getData();
    console.log(id);
  
    
  }, [])
  
    const AddSize=()=>{

        setsize(oldsize=>{
          return [...oldsize,{name:"",price:0}]
       
        })
      }
      const AddExtra=()=>{
    
        setextra(oldsize=>{
          return [...oldsize,{extraa:"",price:0}]
       
        })
      }
    
      const handlechange=(e,index)=>{
       const sizes=[...size];
    
       sizes[index]={...size[index],[e.target.name]:e.target.value}
    
       setsize(sizes);
        
      }
    
      const handlechangeextra=(e,index)=>{
        const sizes=[...extra];
    
        sizes[index]={...extra[index],[e.target.name]:e.target.value}
     
        setextra(sizes);
      }
      const handleitem = async (e) => {
        e.preventDefault();
        // const id = uuidv4();
        const res = await fetch("../../api/items", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: name,
            image: image,
            id: id,
            category,
            size,
            extra,
            cost,
            
    
          })
        });
    
        if (res.status == 200) {
          console.log(hello)
        }
    
      }
  
  
  
    return (
        <div>
        <form onSubmit={handleitem} className="w-1/2 flex flex-col gap-4">
  
          <div>
  
            <div className='text-gray-600 text-sm'>Item name</div>
            <input type="text" name="name" value={name} onChange={e => { setname(e.target.value) }} />
          </div>
          <div>
            <div className='text-gray-600 text-sm'>Image</div>
            <input type="text" name="img" value={image} onChange={e => { setimage(e.target.value) }} />
          </div>
          <div>
            <div className='text-gray-600 text-sm'>Category</div>
            <input type="text" name="category" value={category} onChange={e => { setcategory(e.target.value) }} />
          </div>
  
          <div className="bg-gray-200 rounded-lg" >
            <div className='text-gray-600 p-3' onClick={() => { setbol(!bol) }}>Sizes</div>
            <div className={bol ? "block" : "hidden"}>
  
              {size.map((item,index)=>{
                 return(
                     <>
                     <div className="w-1/2 gap-2 flex">
  
                     <input type="text" name="name" value={item.name} onChange={(e)=>{handlechange(e,index)}} />
                     <input type="text" name="price" value={item.price} onChange={(e)=>{handlechange(e,index)}} />
                     
                     </div>
                     </>
                 )
              })}
            </div>
            <div onClick={AddSize}  className="bg-white text-center m-2">
              Add item size
            </div>
  
          </div>
          <div className="bg-gray-200 rounded-lg" >
            <div className='text-gray-600 p-3' onClick={() => { setbol1(!bol1) }}>Extra ingredients</div>
            <div className={bol1 ? "block" : "hidden"}>
  
              {extra.map((item,index)=>{
                 return(
                     <>
                     <div className="w-1/2 gap-2 flex">
  
                     <input type="text" name="extraa" value={item.extraa} onChange={(e)=>{handlechangeextra(e,index)}} />
                     <input type="text" name="price" value={item.price} onChange={(e)=>{handlechangeextra(e,index)}} />
                     
                     </div>
                     </>
                 )
              })}
            </div>
            <div onClick={AddExtra}  className="bg-white text-center m-2">
              Add Extra ingredients
            </div>
  
          </div>
            <div>
            <div className='text-gray-600 text-sm'>Cost</div>
            <input type="text" name="cost" value={cost} onChange={e => { setcost(e.target.value) }} />
          </div>
  
          <button type="submit">save</button>
        </form>
      </div>
  );
}

export default Menuitemss;
