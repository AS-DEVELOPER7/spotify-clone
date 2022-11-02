import React from 'react'
import Loading from '../Loading'
import Result from '../Result'
import Rows from '../Rows'

const All = ({data}) => {
    // console.log(data)
  return (
    <div className="flex flex-col gap-7 overflow-x-hidden">
        <div className="flex flex-col gap-3">
          <p className='title'>Playlists</p>
          <Rows results={data?.data?.playlists} data={data}/>
        </div>
        <div className="flex flex-col gap-3">
          <p className='title'>Albums</p>
          <Rows results={data?.data?.albums} data={data}/>
        </div>
        <div className="flex flex-col gap-3">
          <p className='title'>Artists</p>
          <Rows results={data?.data?.artists} data={data}/>
        </div>
      </div>
  )
}

export default All