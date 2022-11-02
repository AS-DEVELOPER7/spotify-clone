import React from 'react'
import Loading from '../Loading'
import Result from '../Result'

const Albums = ({data}) => {
  // console.log(data)
  return (
    <div className='gridLayout'>
      {!data?.isLoading?
      data?.data?.albums?.items.map((data,id)=>(
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

export default Albums