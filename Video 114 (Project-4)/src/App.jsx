import { useState, useRef, useEffect } from 'react'

// import './App.css'
import Navbar from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(1)
  const [todo, settodo] = useState([])
  const [todo1, settodo1] = useState([])
  const [form, setform] = useState()
  const[bol,setbol]=useState(false)
  const[bol1,setbol1]=useState(false)
useEffect(() => {
  
}, [bol])

  

  const arr = useRef([])
  // const arr1=useref([])
  const ref = useRef()
  const newarr=useRef([])

  const handleadd = () => {

    arr.current.push({ name:form, id: count ,isCompleted:false})
    settodo(arr.current)
    setCount(count + 1)
    console.log(arr.current)
    setform("")




  }
  const handlechange = (e) => {
    setform(e.target.value)
  }

  const handledelete = (e) => {
  //  console.log(e.target.parentNode.parentNode.id)
   
   
   
   
    let c=e.target.parentNode.parentNode.id
    const arrnew=arr.current.filter(m=>m.id != c)
    settodo(arrnew)
    arr.current=arrnew
  }

  const handleedit=(e)=>{
   
    let c= e.target.parentNode.parentNode.id
   let m = arr.current
    const item=m.find(item=>item.id==c)
    // function getID(){

    //   for (let i = 0; i < arr.length; i++) {
    //     if (arr[i]==item){
    //       return i
    //     }
        
    //   }
    
    setform(item.name)
    const arrnew=arr.current.filter(m=>m.id != c)
    settodo(arrnew)
    arr.current=arrnew
  }

  const handlecheckbox=(e)=>{
      
    let c= e.target.parentNode.parentNode.id
   let m = arr.current

    const item=m.find(item=>item.id==c)
    item.isCompleted=item.isCompleted?false:true
    setbol(!bol)
    
     
  }

  // for (let i = 0; i < arr.current.length; i++) {
  //    if (arr.current[i].isCompleted==true){
  //     newarr.current.push(arr.current[i])
      

  //    }
  //   settodo1(newarr)
  // }
  const handlecheck=()=>{
    setbol1(!bol1)

  }

  return (
    <>

      <div className="box   ">

        <Navbar />
        <div className="container min-h-96 w-max m-auto mt-5  bg-emerald-50" >
          <div className='pl-10 pr-10 pt-2 font-bold text-xl'>
            iTask-Manage your Todos at one place
          </div>
          <div className='pl-2 font-bold'>
            Add a todo
          </div>
          <div className='flex '>
            <input type="text" ref={ref} className='m-2 w-5/6 rounded-2xl p-1 ' value={form} onChange={handlechange} />
            <button onClick={handleadd}  className='mt-1 text-white bg-purple-950 h-7 w-14 rounded-2xl text-sm pb-0.5 text-center'>
              save
            </button>
          </div>
          <label htmlFor="previous" className='text-xs '>

            <input type="checkbox" onChange={handlecheck} name="" id="previous" />
            Show previous todo
          </label>
          <div className="divider border border-gray-500 mt-3 ml-10 mr-10">

          </div>
          <div className='font-bold'>Your Todo</div>

          {todo.map((item) => {
            return (bol1||!item.isCompleted) &&(<>
              <div id={item.id} key={item.id} className='flex justify-between'>
                <label htmlFor={item.id} className='flex'>
                  <input type="checkbox" onChange={handlecheckbox} value={item.isCompleted} id={item.id}/>
                <div className={item.isCompleted?"line-through w-96 p-1":"w-96 p-1"}>{item.name}</div>
                  </label>
                <div className='flex gap-1'>
                  <button onClick={handledelete} className=' mt-2 bg-purple-950 h-7 w-14 rounded-3xl text-white font-semibold text-sm text-center'>Delete</button>
                  <button onClick={handleedit}className=' mt-2 bg-purple-950 h-7 w-14 rounded-3xl text-white font-semibold text-sm text-center'>Edit</button>
                </div>

              </div>


            </>)
          })}

        </div>
      </div>



    </>
  )
}

export default App
