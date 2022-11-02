import React, { useRef } from 'react'
import { useTrackDetailsQuery } from '../app/services'
import { useStateContext } from '../context/StateContext'

const Player = () => {
    const {trackId}=useStateContext()
    const track=useTrackDetailsQuery(trackId)
    // console.log(track)
    // const audioRef=useRef(null)
    // console.log(audioRef)
  return (
    <div className='flex flex-col sm:flex-row items-start sm:items-center h-full gap-5 mx-5 my-5 sm:my-0'>
        <div className="flex items-start gap-5">
            <img src={track?.data?.tracks[0]?.album?.images[0]?.url} alt="" className='h-16 w-h-16 rounded-full' />
            <div className="flex flex-col items-start">
                <p className="text-lg font-bold tracking-widest">{track?.data?.tracks[0]?.name}</p>
                <div className='text-sm text-dark font-semibold flex items-center gap-2'>{track?.data?.tracks[0]?.album?.artists?.map((d,id)=>(
                  <div className="cursor-pointer" key={id}>
                    {d.name}{track?.data?.tracks[0]?.album.artists.length -1===id?'':',' }
                  </div>
                ))}</div>
            </div>
        </div>
        <audio src={track?.data?.tracks[0]?.preview_url}  autoplay controls className='w-full sm:w-[70%] mx-auto outline-none'> </audio>
    </div>
  )
}

export default Player