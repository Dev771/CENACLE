import React, { useEffect, useState } from 'react'
import Mleft from './partials/Mleft'
import Right from '../HomeBody/Right'
import Mmain from './partials/Mmain'
import './partials/Mstyle.css'
import {io} from 'socket.io-client'

const Messenger = () => {
  const [socket , setsocket] = useState(null);

  useEffect(() =>{
      setsocket(io("ws://localhost:8900"))
  },[])

  useEffect(() => {
    socket?.on("welcome",message=> console.log(message))
  },[socket])

  return (
    <div>
      <main >
        <div className='container message'>
        <Mleft/>
        <Mmain />
        </div>
      </main>
    </div>
  )
}

export default Messenger