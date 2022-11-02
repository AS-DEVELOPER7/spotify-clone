import Router from 'next/router'
import React, { useEffect } from 'react'
import {useSearchQuery}from '../../app/services'
import Albums from '../../components/search/Albums'
import All from '../../components/search/All'
import Artitsts from '../../components/search/Artitsts'
import Playlists from '../../components/search/Playlists'
import Songs from '../../components/search/Songs'
import { useStateContext } from '../../context/StateContext'
const Search = () => {
  const{search,type,filters,setType}=useStateContext()
  const searchData =useSearchQuery({search,type})
  // console.log(type)
  useEffect(()=>{
    search.length===0?Router.push('/'):''
   },[search])
  return (
    <div className='relative'>
      <div className="flex items-center gap-7 fixed w-full top-16 pt-5 pl-10 bg-black z-20 pb-3 overflow-x-auto">
        {filters.map((data,id)=>(
          <button className={`py-1 outline-none ${type===data.type?'border-b-2 border-green-500':''}`}  onClick={()=>setType(data.type)} key={id}>{data.title}</button>
        ))}
      </div>
      <div className="mt-10 ">
        {
        type==='multi'?
        <All data={searchData}/>
        :type==='albums'?
        <Albums data={searchData}/>
        :type==='playlists'?
        <Playlists data={searchData}/>
        :type==='artists'?
        <Artitsts data={searchData}/>
        :<Songs data={searchData}/>
        }
      </div>
    </div>
  )
}

export default Search 