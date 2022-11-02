import Router from 'next/router'
import React from 'react'
import { useStateContext } from '../../context/StateContext'
const Songs = ({data}) => {
  const {setAlbumId,setArtistId,setTrackId}=useStateContext()
  // console.log(data)
  const handleAlbum=(id,name)=>{
    setAlbumId(id)
    Router.push(`/album/${name}`)
  }
  const handleArtist=({id,name})=>{
    // const ids=id?.length
    // console.log(id)
    setArtistId(id)
    Router.push(`/artist/${name}`)
}
const handleTrack=(id)=>{
  setTrackId(id)
}
  return (
    <div className='w-[90%] sm:w-[80%] mx-auto flex flex-col overflow-hidden'>
      <div className="hidden sm:flex items-center justify-between ">
        {data?.data?.albums?<p className='w-[25%] font-semibold text-start'>No.</p>:''}
        <p className='w-[30%] font-semibold text-center'>Title</p>
        {data?.data?.albums || data?.data?.data?.artist?<></>:
        <p className='w-[25%] font-semibold text-center'>Album</p>
        }
        <p className='w-[25%] font-semibold text-end'>Duration</p>
      </div>
      <hr className='hidden sm:flex mt-2 bg-dark h-[0.5px] border-none'/>
      <div className="flex flex-col gap-8 mt-5">
        {!data.isLoading?
        // search
        data?.data?.tracks?
        data?.data?.tracks?.items?.map((data,id)=>(
          <div className="flex items-center justify-between w-full"key={id}>
            <div className="flex items-start gap-5 sm:w-[30%]">
              <img src={data?.data?.albumOfTrack?.coverArt?.sources[0]?.url} className="h-12 w-12 rounded-md cursor-pointer" onClick={()=>handleTrack(data?.data?.id)} />
              <div className="flex flex-col items-start gap-1">
                <p className='font-bold tracking-wider cursor-pointer' onClick={()=>handleTrack(data?.data?.id)}>{data?.data?.name}</p>
                <div className='text-sm text-dark font-semibold flex items-center gap-2'>{data.data.artists.items.map((d,id)=>(
                  <div className="cursor-pointer" onClick={()=>handleArtist({id:d?.uri.slice(15),name:d?.profile?.name})} key={id}>
                    {d.profile.name}{data.data.artists.items.length -1===id?'':',' }
                  </div>
                ))}</div>
              </div>
            </div>
            <div className="sm:inline-block hidden w-[25%] text-center cursor-pointer font-semibold" onClick={()=>handleAlbum(data.data.albumOfTrack.id,data.data.albumOfTrack.name)} >{data.data.albumOfTrack.name}</div>
            <div className="sm:inline-block hidden w-[25%] text-end">{Number(Number(data.data.duration.totalMilliseconds/1000)/60).toFixed(2)}</div>
          </div>
        ))
        :data?.data?.items? 
        // playlist
        data?.data?.items?.map((data,id)=>(
          <div className="flex items-center justify-between w-full"key={id}>
            <div className="flex items-start gap-5 sm:w-[30%]">
              <img src={data?.track?.album?.images[0]?.url} className="h-12 w-12 rounded-md cursor-pointer" onClick={()=>handleTrack(data?.track?.id)} />
              <div className="flex flex-col items-start gap-1">
                <p className='font-bold tracking-wider cursor-pointer' onClick={()=>handleTrack(data?.track?.id)}>{data?.track?.name}</p>
                <div className='text-sm text-dark font-semibold flex items-center gap-2'>{data.track.artists.map((d,id)=>(
                  <div className="cursor-pointer" onClick={()=>handleArtist({id:d.id,name:d.name})} key={id}>
                    {d.name}{data.track.artists.length -1===id?'':',' }
                  </div>
                ))}</div>
              </div>
            </div>
            <div className="sm:inline-block hidden w-[25%] text-center cursor-pointer font-semibold" onClick={()=>handleAlbum(data.track.album.id,data.track.album.name)} >{data.track.album.name}</div>
            <div className="sm:inline-block hidden w-[25%] text-end">{Number(Number(data.track.duration_ms/1000)/60).toFixed(2)}</div>
          </div>
        ))
        : data?.data?.albums?
        // albums
        data?.data?.albums[0]?.tracks?.items?.map((data,id)=>(
          <div className="flex items-center justify-between w-full"key={id}>
            <div className="sm:inline-block hidden w-[15%] text-start">{data.track_number}</div>
            <div className="flex flex-col items-start gap-1 sm:w-[40%]">
                <p className='font-bold tracking-wider cursor-pointer' onClick={()=>handleTrack(data?.id)}>{data?.name}</p>
                <div className='text-sm text-dark font-semibold flex items-center gap-2'>{data.artists.map((d,id)=>(
                  <div className="cursor-pointer" onClick={()=>handleArtist({id:d.id,name:d.name})} key={id}>
                    {d.name}{data.artists.length -1===id?'':',' }
                  </div>
                ))}</div>
            </div>
            <div className="sm:inline-block hidden w-[25%] text-end">{Number(Number(data.duration_ms/1000)/60).toFixed(2)}</div>
          </div>
        ))
        :
        // artist
        data?.data?.data?.artist?.discography?.topTracks?.items?.map((data,id)=>(
          <div className="flex items-center justify-between w-full"key={id}>
            <div className="flex items-start gap-5 sm:w-[75%]">
              <img src={data?.track?.album?.coverArt?.sources[0]?.url} className="h-12 w-12 rounded-md cursor-pointer" onClick={()=>handleTrack(data?.track?.id)} />
              <div className="flex flex-col items-start gap-1">
                <p className='font-bold tracking-wider cursor-pointer' onClick={()=>handleTrack(data?.track?.id)}>{data?.track?.name}</p>
                <div className='text-sm text-dark font-semibold flex items-center gap-2'>{data.track.artists?.items?.map((d,id)=>(
                  <div className="cursor-pointer" onClick={()=>handleArtist({id:d.uri.slice(15),name:d.profile.name})} key={id}>
                    {d.profile.name}{data.track.artists.items.length -1===id?'':',' }
                  </div>
                ))}</div>
              </div>
            </div>
            <div className="sm:inline-block hidden w-[25%] text-end">{Number(Number(data.track.duration.totalMilliseconds/1000)/60).toFixed(2)}</div>
          </div>
        ))
      :<div className='flex flex-col gap-9'>
      <div className="bg-dark h-10 w-full rounded-xl"></div>
      <div className="bg-dark h-10 w-full rounded-xl"></div>
      <div className="bg-dark h-10 w-full rounded-xl"></div>
      <div className="bg-dark h-10 w-full rounded-xl"></div>
      <div className="bg-dark h-10 w-full rounded-xl"></div>
      <div className="bg-dark h-10 w-full rounded-xl"></div>
      <div className="bg-dark h-10 w-full rounded-xl"></div>
      <div className="bg-dark h-10 w-full rounded-xl"></div>
      <div className="bg-dark h-10 w-full rounded-xl"></div>
      <div className="bg-dark h-10 w-full rounded-xl"></div>
      <div className="bg-dark h-10 w-full rounded-xl"></div>
      <div className="bg-dark h-10 w-full rounded-xl"></div>
      <div className="bg-dark h-10 w-full rounded-xl"></div>
      <div className="bg-dark h-10 w-full rounded-xl"></div>
      </div>
      }
      </div>
    </div>
  )
}

export default Songs