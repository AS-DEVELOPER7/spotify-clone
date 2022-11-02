import React from 'react'
import Loading from './Loading'
import Result from './Result'

const Rows = ({results,data}) => {
  return (
    <div className=" overflow-x-auto ">
    <div className="w-max flex items-center gap-12  px-5 pb-5">
      {!data?.isLoading?
      results?.items.map((data, id) => (
        <div className="" key={id}>
          <Result data={data} />
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
        <Loading/>
        <Loading/>
      </>
      }
    </div>
  </div>
  )
}

export default Rows