import Router from 'next/router'
import React, { useEffect } from 'react'
import { useAlbumDetailsQuery } from '../../app/services'
import Songs from '../../components/search/Songs'
import { useStateContext } from '../../context/StateContext'

const Album = () => {
  const {albumId}=useStateContext()
  const album=useAlbumDetailsQuery(albumId)
  // console.log(album)
  useEffect(()=>{
    albumId.length===0?Router.push('/'):''
   },[albumId])
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 w-[90%] mx-auto overflow-hidden">
        <img src={album?.data?.albums[0]?.images[0]?.url} className='w-[60%] sm:w-[20%] rounded-lg mx-auto sm:mx-0'/>
        <div className="flex flex-col items-start gap-3">
          <p className="text-lg font-bold">Album</p>
          <p className='font-bold text-3xl sm:text-4xl'>{album?.data?.albums[0]?.name}</p>
          <p className='text-lg font-sembold text-dark'> {album?.data?.albums[0]?.label}</p>
          <p className="text-lg sm:text-xl font-bold"> Total Tracks: {album?.data?.albums[0]?.total_tracks}</p>
        </div>
      </div>
      <div className="mt-5 sm:mt-20">
        <Songs data={album}/>
      </div>
    </div>
  )
}

export default Album