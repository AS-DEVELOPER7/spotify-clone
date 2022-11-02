import Router from 'next/router'
import React, { useEffect } from 'react'
import { usePlaylistDetailsQuery, usePlaylistTracksQuery } from '../../app/services'
import Songs from '../../components/search/Songs'
import { useStateContext } from '../../context/StateContext'
const Playlist = () => {
  const {playlistId}=useStateContext()
  const playlistDetails=usePlaylistDetailsQuery(playlistId)
  const playlistTracks =usePlaylistTracksQuery(playlistId)
  // console.log(playlistId)
  // console.log(playlistTracks)
  useEffect(()=>{
    playlistId.length===0?Router.push('/'):''
   },[playlistId])
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 w-[90%] mx-auto overflow-hidden">
        <img src={playlistDetails?.data?.images[0]?.url} className='w-[60%] sm:w-[20%] rounded-lg mx-auto sm:mx-0'/>
        <div className="flex flex-col items-start gap-3">
          <p className="text-lg font-bold">Playlist</p>
          <p className='font-bold text-3xl sm:text-4xl'>{playlistDetails?.data?.name}</p>
          <p className='text-lg font-sembold text-dark'> {playlistDetails?.data?.description}</p>
          <p className="text-lg sm:text-xl font-bold"> Followers: {playlistDetails?.data?.followers?.total}</p>
        </div>
      </div>
      <div className="mt-5 sm:mt-20">
        <Songs data={playlistTracks}/>
      </div>
    </div>
  )
}

export default Playlist