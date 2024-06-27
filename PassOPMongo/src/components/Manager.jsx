import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
    const ref = useRef()
    const [count, setcount] = useState(1)
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])
    // use effect with blank array is used to run operartion
    //when website is loaded

    const getPasswords = async () => {
        let req = await fetch("http://localhost:3000/")
        let passwords = await req.json()
        setpasswordArray(passwords)

    }

    useEffect(() => {
        getPasswords()



    }, [])


    const showpassword = (e) => {
        if (e.target.src.includes("icons/eye.png")) {
            e.target.src = "icons/hidden.png"
            ref.current.type = "password"

        }
        else {
            e.target.src = "icons/eye.png"
            ref.current.type = "text"
        }

    }

    const savepswd = async () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {

            //   setcount(count + 1)
            //   form.id = count
            console.log(form)
            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            let res = await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, id: uuidv4() }) })
            let b = await res.text()
            console.log(b)

            //localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))

            //console.log([...passwordArray, form])
            setform({ site: "", username: "", password: "" })
        }

    }

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })


    }
    const handledelete = async (id) => {
        // console.log(e.target.id)
        // let idsm = e.target.id;
        console.log(JSON.stringify(id))
        passwordArray.filter((item) => item.id != id)
        setpasswordArray(passwordArray.filter((item) => item.id != id))

        let res = await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })
        // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter((item) => item.id != idss)))
        console.log()
    }
    const copytext = (text) => {
        toast('Copied to clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            // transition:"Bounce",
        });
        navigator.clipboard.writeText(text)

    }
    const handleedit = async (id) => {
        // let idds = e.target.id

        let c = passwordArray.find(item => item.id == id)
        console.log(c)
        setform(c)

        // let idss = e.target.id;
        passwordArray.filter((item) => item.id != id)
        setpasswordArray(passwordArray.filter((item) => item.id != id))

        let res = await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })
        // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter((item) => item.id != idss)))
        console.log()

    }
    return (

        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />
            <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-green-50 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

            <div className=" lg:mycontainer px-30">
                <h1 className='text-center font-semibold text-3xl'>
                    <span className='text-green-500'> &lt;</span>
                    Pass
                    <span className='text-green-500'>OP/&gt;</span>
                </h1>
                <p className='text-center'>Your own password Manager</p>

                {/*when flex-col items takes place of justify work*/}
                <div className=" flex flex-col  p-4 gap-8">
                    <input onChange={handlechange} placeholder='Enter Website Name' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" value={form.site} name="site" id="" />
                    <div className=' flex flex-col sm:flex-row w-full gap-8'>
                        <input onChange={handlechange} value={form.username} placeholder='Enter username' className='rounded-full border border-green-500 w-full p-4 py-1' type="text"
                            name="username" id="" />
                        <div className="relative">
                            <input ref={ref} name="password" onChange={handlechange} value={form.password} placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-1'
                                type="password" id="" />
                            <button className='absolute right-2 top-1.5 cursor-pointer text-sm' onClick={showpassword}>
                                <img width={20} src="icons/hidden.png" alt="" />
                            </button>

                        </div>
                    </div>
                    <button onClick={savepswd} className='flex justify-center items-center mx-auto  w-48 hover:bg-green-500 bg-green-600 rounded-full px-2 py-2
                    border-2 border-green-900 '>

                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"

                        >
                        </lord-icon>
                        Add password
                    </button>
                </div>
                <div className="passwords">
                    {passwordArray.length === 0 ? <><div className=''>No passwords</div></> :
                        <><nav className=' w-full sm:text-[16px] text-[12px] flex h-[30px] text-white items-center  bg-green-900'>
                            <div className='w-3/6  text-center'>Site</div>
                            <div className='w-1/6 text-center'>username</div>
                            <div className='w-1/6 text-center'>password</div>
                            <div className='w-1/6 text-center'>actions</div>
                        </nav>
                            {passwordArray.map((item) => {
                                return (<>
                                    <nav id={item.id} className='  w-full flex h-[40px] text-black items-center  bg-green-200'>
                                        <div className='  text-[12px] sm:text-base flex  sm:gap-2 justify-center w-3/6 text-center'>
                                            <div>{item.site}</div>
                                            <div onClick={() => { copytext(item.site) }}>

                                                <lord-icon

                                                    style={{ width: "15px", height: "15px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover"
                                                >



                                                </lord-icon>
                                            </div>
                                        </div>
                                        <div className=' text-[12px] sm:text-base flex sm:gap-2 justify-center w-1/6 text-center'>
                                            <div>{item.username}</div>
                                            <div onClick={() => { copytext(item.username) }} >
                                                <lord-icon

                                                    style={{ width: "15px", height: "15px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover"
                                                ></lord-icon>

                                            </div>
                                        </div>
                                        <div className='overflow-scroll  ml-[20px] mr-[10px]  text-[12px] sm:text-base flex  sm:gap-2 justify-center w-1/6 text-center'>
                                            <div>{'●'.repeat(item.password.length)}</div>
                                            <div onClick={() => { copytext(item.password) }}>

                                                <lord-icon

                                                    style={{ width: "15px", height: "15px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover"
                                                ></lord-icon>
                                            </div>
                                        </div>
                                        <div className=' flex justify-center gap-2 w-1/6 text-center'>
                                            <div id={item.id}>

                                                <lord-icon
                                                    id={item.id}

                                                    onClick={() => { handledelete(item.id) }}
                                                    style={{ width: "15px", height: "15px" }}
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover"
                                                ></lord-icon>
                                            </div>
                                            <div onClick={() => { handleedit(item.id) }}
                                                id={item.id}>

                                                <lord-icon

                                                    onClick={() => { handleedit(item.id) }}
                                                    id={item.id}
                                                    style={{ width: "15px", height: "15px" }}
                                                    src="https://cdn.lordicon.com/depeqmsz.json"
                                                    trigger="hover"
                                                >
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </nav>

                                </>
                                )
                            })
                            }</>
                    }
                </div>
            </div>


        </>

    );
}

export default Manager;
