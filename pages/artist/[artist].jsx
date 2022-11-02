import React, { useEffect } from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import { useArtistDetailsQuery } from '../../app/services'
import Songs from '../../components/search/Songs'
import { useStateContext } from '../../context/StateContext'
import Rows from '../../components/Rows'
import Router from 'next/router'
const Artist = () => {
  const{artistId}=useStateContext()
  const artistDetails=useArtistDetailsQuery(artistId)
  // console.log(artistDetails)
  useEffect(()=>{
    artistId.length===0?Router.push('/'):''
   },[artistId])
  return (
    <div className=' w-[100%] flex flex-col  overflow-x-hidden gap-10'>
      <div className="relative w-[95%] mx-auto rounded-xl h-[30vh]">
        <img src={artistDetails?.data?.data?.artist?.visuals?.headerImage?.sources[0]?.url} className='h-full w-full' />
        <div className="absolute bottom-10 left-5">
          {artistDetails?.data?.data?.artist?.profile?.verified?
          <div className="flex items-center gap-3 text-xl font-semibold"><BsPatchCheckFill className='text-green-500' /> Verified Artist</div>:''
          }
          <div className="text-5xl font-bold">{artistDetails?.data?.data?.artist?.profile?.name}</div>
          <div className="font-semibold mt-3 flex items-center gap-7">
            <p>Followers: {artistDetails?.data?.data?.artist?.stats?.followers}</p>
            <p>WorldRank: {artistDetails?.data?.data?.artist?.stats?.worldRank}</p>
          </div>
        </div>
      </div>
      <div className="">
        <Songs data={artistDetails} />
      </div>
      <div className="flex flex-col gap-5">
        <p className='title'>Popular Releases</p>
        <Rows results={artistDetails?.data?.data?.artist?.discography?.popularReleases} data={artistDetails}/>
      </div>
    </div>
  )
}

export default Artist