import React, { useEffect } from 'react'
import { useStateContext } from '../context/StateContext'
import{FaSpotify}from 'react-icons/fa' 
import{CgShapeCircle}from 'react-icons/cg' 
import Router from 'next/router'
const Nav = () => {
  const{search,setSearch}=useStateContext()
  const handlesearch=()=>{
    setSearch(search)
    Router.push(`/search/${search}`)
  }
  const home=()=>{
    Router.push(`/`)
    setSearch('')
  }
  useEffect(() => {
    const keyDownHandler = event => {
      console.log('User pressed: ', event.key);

      if (event.key === 'Enter') {
        event.preventDefault();

        // 👇️ call submit function here
        handlesearch();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  });
  
  return (
    <div className='flex items-center p-4'>
      <button className=" pl-2"  onClick={()=>home()}>
        <FaSpotify className='w-8 h-8 text-green-500'/>
      </button>
      <div className="flex items-center mx-auto w-[70%] md:w-[50%] text-base md:text-lg text-light px-2  rounded-2xl border-2">
          <CgShapeCircle className='w-8 h-8 text-green-500'/>
        <input type='text' placeholder='Search Playlists, Artists, Albums' value={search} onChange={(e)=>setSearch(e.target.value)} className='w-full bg-transparent text-light placeholder:text-dark pl-2  outline-none py-2' />
        <button  onClick={()=>handlesearch()}>
        </button>
      </div>
    </div>
  )
}

export default Nav