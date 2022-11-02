import Head from 'next/head'
import React from 'react'
import { useStateContext } from '../context/StateContext'
import Nav from './Nav'
import Player from './Player'

const Layout = ({children}) => {
  
  // const {}=useStateContext()
  return (
    <div className='bg-black text-light'>
      <Head>
        <title>
          spotify-clone
        </title>
      </Head>
<main className='min-h-screen flex flex-col w-full'>
  <div className="fixed top-0 w-full h-max z-20 bg-black ">
  <Nav/>
  </div>
  <div  className=' min-h-screen my-20 py-5 mb-28 w-[100%]'>
    {children}
  </div>
  <div className="bg-transparent filter backdrop-blur-lg  fixed bottom-5 w-full sm:w-[90%] sm:inset-x-20 rounded-xl h-[18vh] sm:h-[15vh]">
    <Player/>
  </div>
</main>
    </div>
  )
}

export default Layout