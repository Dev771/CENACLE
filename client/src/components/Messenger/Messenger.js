import React, { useEffect, useState ,useRef } from 'react'
import Mleft from './partials/Mleft'
import Right from '../HomeBody/Right'
import Mmain from './partials/Mmain'
import './partials/Mstyle.css'
import { useNavigate } from 'react-router-dom';
import {io} from 'socket.io-client'
import Mobile_Navbar from '../HomeBody/Mobiledisplay/Mobile_Navbar';
import { message } from '../../api'

const Messenger = () => {
  // const [socket , setsocket] = useState(null);
  const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate();
  const socket = useRef()
  const [Text , setText] = useState(null)
  // const [socket, setsocket] =useState(null)
  const [selectUser , setselectUser] = useState(null)
  const [arrivalMessage, setArrivalMessage] = useState(null);
  // const users = useSelector((state) => state.Users);

  useEffect(() =>{
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      console.log("Messages Arrivesd")  
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now() 
      })
    })
  },[]);

  useEffect(() =>{
    socket.current.emit("addUser", user?.data?._id)
    socket.current.on("getUsers", users => {
      console.log(users)
    })
  },[user])
  console.log(socket)

  useEffect(() =>{
    if(!user) {
      navigate('/')
    }
  },[])

  useEffect(() => {
    if(Text !== null) {
      socket.current.emit("sendMessage", {
        senderId: user?.data?._id,
        recevierID: selectUser?._id,
        text: Text
      })
    }
  }, [Text]) 

  //   useEffect(() => {
  //   socket?.on("welcome",message=> console.log(message))
  // },[socket])
  const newuser = (data) => {
    setselectUser(data)
  }

  const newtext = (data) => {
    setText(data)
  }
  

  return (
    <div>
      <main >
        <div className='container message'>
          <Mleft
           nuser={newuser}
          />
          <Mmain 
            selectUser={selectUser}
            ntext={newtext}
            newMessage={arrivalMessage}
          />
          <Mobile_Navbar />

        </div>
      </main>
    </div>
  )
}

export default Messenger