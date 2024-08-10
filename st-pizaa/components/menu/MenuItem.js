import React, { useContext } from 'react';
import { CartContext } from '../provider/SessionWrapper';
import toast from "react-hot-toast"
import { useState,useEffect } from 'react';

const MenuItem = (menuItem) => {
   const  {name,image,cost,size,extra}=menuItem;
  const {addToCart}=useContext(CartContext);
  const [showPopup,setShowPopup]=useState(false)
  const [selected,setselected]=useState(size[0]);
  
  const [selectedExtras,setselectedExtras]=useState([])

  const [total,settotal]=useState(0);
  
  
  
  const sum=()=>{
    let itemsss=size.find(e=>{e?.name===selected});
    let itemsum=parseInt(itemsss.price)
    
    let summ=0;
  
    selectedExtras.forEach(element => {
      summ=summ+parseInt(element.price);
    });
    settotal(itemsum+summ);
    
  }
  // useEffect(() => {
  //   sum()
  
   
  // }, [selected,selectedExtras])

  const handleextra=(e,s)=>{
   const checked=e.target.checked;

   if(checked==true){
     setselectedExtras(prev=>{
      const news =[...prev,s];
      let sum=0;
      news.forEach(element=>{
        sum=sum+parseInt(element.price)
      })

      settotal(cost+parseInt(selected.price)+sum);
      return news;
     })
   }
   else{
    setselectedExtras(prev=>{
    const news=prev.filter(m=>{m.extraa!==s.extraa});
    let sum=0;
      news.forEach(element=>{
        sum=sum+parseInt(element.price)
      })

      settotal(cost+parseInt(selected.price)+sum);
      return news
    })
   }
  }

  function handleAddToCart(){
     if(size.length===0&&extra.length===0){
      toast.success('Added to Cart')
      
      addToCart(menuItem);
     }else{
      setShowPopup(true);
     }
  }

  const handleChange=(e)=>{
    setselected(e.target.value)
  let sum=0;
  selectedExtras.forEach(element=>{
    sum=sum+parseInt(element.price);
  })
  }
  
  return (

    <>
    {showPopup&&(
      <div className="fixed inset-0 bg-black/80 flex justify-center items-center">
       <div className='bg-white p-4 rounded-lg '>
       <div className='bg-gray-300 p-4 max-w-md rounded-lg text-center '>
        
        <div className='text-center '>

        <img src={image} alt="pizza" className='max-h-40 mx-auto' />
        </div>

        <h4 className='font-semibold my-2 text-2xl'>{name}</h4>
        <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit, amet 
          consectetur adipisicing elit. Quaerat eligendi placeat
           simil.</p>

           {size?.length>0&&(
            <div className='p-2'>
              <h3 className='text-center font-bold'>
                Pick your Size
              </h3>
                {size.map(s=>{
                  return(<>
                 <label className='flex items-center gap-2 p-4 border border-black rounded-md mb-1' >
                 <input type="radio" name="size"  onClick={()=>{setselected(s)
                  let sum=0;
                  selectedExtras.forEach(element=>{
                    sum=sum+parseInt(element.price)
                  });

                  settotal(cost+parseInt(s.price)+sum)
                 } }checked={selected?.name===s.name}  />{s.name} ₹{cost +parseInt(s.price)}
                
                 </label>
                  </>)
                })}
            </div>
           )}
           {extra?.length>0 &&(
           <div className='p-2'>
           <h3 className='text-center font-bold'>
             Add Extra
           </h3>
             {extra.map(s=>{
               return(<>
              <label className='flex items-center gap-2 p-4 border border-black rounded-md mb-1' >
              <input type="checkbox" name="extra"  onClick={(e)=>handleextra(e,s)} />{s.extraa} ₹{parseInt(s.price)}
             
              </label>
               </>)
             })}
         </div>

           )}

           <button
           onClick={handleAddToCart}
            className='bg-red-600 text-white rounded-full px-8 py-2 my-2'>Add to cart ₹{total}</button>

     </div>
       </div>
      </div>
    )}
    <div className='bg-gray-300 p-4 rounded-lg text-center hover:bg-white hover:shadow-2xl hover:shadow-black/50 transition-all'>
        
        <div className='text-center'>

        <img src={image} alt="pizza" className='max-h-40 mx-auto' />
        </div>

        <h4 className='font-semibold my-2 text-2xl'>{name}</h4>
        <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit, amet 
          consectetur adipisicing elit. Quaerat eligendi placeat
           simil.</p>

           <button
           onClick={handleAddToCart}
            className='bg-red-600 text-white rounded-full px-8 py-2 my-2'>Add to cart ₹{cost}</button>

     </div>
     </>
  );
}

export default MenuItem;
