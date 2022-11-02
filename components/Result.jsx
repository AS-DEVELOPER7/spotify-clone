import Router from 'next/router'
import React from 'react'
import { useStateContext } from '../context/StateContext'

const Result = ({data}) => {
    const {setPlaylistId,setAlbumId,setArtistId}=useStateContext()
    const handlePlaylist=(id,name)=>{
        setPlaylistId(id.slice(17))
        Router.push(`/playlist/${name}`)
    }
    const handleArtists=(id,name)=>{
        setArtistId(id.slice(15))
        Router.push(`/artist/${name}`)
    }
    const handleAlbums=(id,name)=>{
        setAlbumId(id.slice(14))
        Router.push(`/album/${name}`)
        // console.log(id.slice(14))
    }
  return (
    <div>
        {
            data?.data?.images?
            <div className="relative filter group h-[12em] w-[9em] sm:h-[14em] sm:w-[11em] transition-all duration-500 ease-in">
                <img src={data?.data?.images?.items[0]?.sources[0]?.url} className=' image'onClick={()=>handlePlaylist(data?.data?.uri,data.data.name)} />
                <div className="absolute hidden left-3 bottom-3 group-hover:flex flex-col items-start w-full">
                    <p className='font-bold w-[90%] truncate'>{data?.data?.name}</p>
                    <p className='text-xs w-[80%] truncate'>{data?.data?.description}</p>
                </div>
            </div>
            
            :data?.data?.visuals?
            <div className="relative filter group h-[12em] w-[9em] sm:h-[14em] sm:w-[11em] transition-all duration-500 ease-in" onClick={()=>handleArtists(data?.data?.uri,data.data.profile.name)}>
                <img src={data?.data?.visuals?.avatarImage?.sources[0]?.url} className='image' />
                <div className="absolute hidden left-3 bottom-3 group-hover:flex font-bold w-[90%] truncate text-lg">{data.data.profile.name}</div>
            </div>
            :data?.data?.coverArt?
            <div className="relative filter group h-[12em] w-[9em] sm:h-[14em] sm:w-[11em] transition-all duration-500 ease-in">
                <img src={data?.data?.coverArt?.sources[0]?.url} className=' image'onClick={()=>handleAlbums(data?.data?.uri,data.data.name)} />
                <div className="absolute hidden left-3 bottom-3 group-hover:flex flex-col items-start w-full">
                    <p className='font-bold w-[90%] truncate'>{data?.data?.name}</p>
                    <p className='text-xs w-[80%]'>{data?.data?.artists?.items[0]?.profile?.name}</p>
                </div>
            </div>
            :
            <div className="relative filter group h-[12em] w-[9em] sm:h-[14em] sm:w-[11em] transition-all duration-500 ease-in">
                <img src={data?.releases?.items[0]?.coverArt?.sources[0]?.url} className=' image'onClick={()=>handleAlbums(data?.releases?.items[0]?.uri,data?.releases?.items[0]?.name)} />
                <div className="absolute hidden left-3 bottom-3 group-hover:flex flex-col items-start w-full">
                    <p className='font-bold w-[90%] truncate'>{data?.releases?.items[0]?.name}</p>
                    <p className='text-xs w-[80%]'>{data?.releases?.items[0]?.label}</p>
                </div>
            </div>
        }
    </div>
  )
}

export default Result