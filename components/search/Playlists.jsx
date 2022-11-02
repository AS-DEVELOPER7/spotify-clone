import React from 'react'
import Loading from '../Loading'
import Result from '../Result'

const Playlists = ({data}) => {
  // console.log(data)
  return (
    <div className='gridLayout'>
      {!data?.isLoading?
      data?.data?.playlists?.items.map((data,id)=>(
        <div key={id}>
          <Result data={data}/>
        </div>
      ))
      :
      <>
      <Loading/>
      <Loading/>
      <Loading/>
      <Loading/>
      <Loading/>
      <Loading/>
      <Loading/>
      <Loading/>
      <Loading/>
      <Loading/>
      <Loading/>
      <Loading/>
      <Loading/>
      <Loading/>
      <Loading/>
      </>
    }
    </div>
  )
}

export default Playlists