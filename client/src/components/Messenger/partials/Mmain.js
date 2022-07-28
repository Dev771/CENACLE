import React, { useEffect, useState ,useRef } from 'react'
import { getPosts } from '../../../actions/post';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar , TextField } from '@material-ui/core';
import {useNavigate} from 'react-router-dom';
import '../../HomeBody/styleS.css';
import { addMessage } from '../../../actions/Message';
import moment from "moment";


const Mmain = ({selectUser ,ntext, newMessage}) => {
    
    const user = JSON.parse(localStorage.getItem('profile'));
    // const [User2, setUser2] = useState(localStorage.getItem('selectedUser'))
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let messages = useSelector((state) => state.messages);
    // console.log(messages)
    // console.log(User2)
    const [User, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const[Textm, setTextm] = useState("")
    const scrollref = useRef()

    useEffect(() => {
        scrollref?.current?.scrollIntoView({behavior: "smooth"})
    },[messages])

    useEffect(() => {
        // console.log(messages)
        if(messages.length != 0) {
            console.log("BAncho")
            console.log(newMessage);
            messages.messages.push(newMessage);
            console.log(messages)
            // console.log(M)
        }
    }, [newMessage])
    // console.log(selectUser)
    // console.log(user)

    // if (User2.length != 0) {
    //     <></>   }
    
    // useEffect(() => {
    //     setUser2(localStorage.getItem('selectedUser'))
    // },[]);


    const handleClick= () =>{
        if(Textm != ""){
            dispatch(addMessage(messages.convoId._id, User?.data?._id, Textm));
        }
        ntext(Textm);
        setTextm("");
    };

    return (
        <div>
            <div className="middle middlee">
                <div className="left" style={{marginBottom: "10px"}}>
                {selectUser ? (
                            <span className="profile" onClick={() => navigate(`/Profile/${selectUser?._id || selectUser?.googleId}`)}>
                                <div className="profile-picture">
                                {selectUser?.imageURL ? 
                                         <Avatar style={{ width: '40px', height: '40px'}} alt={selectUser?.name} src={selectUser?.imageURL} >
                                        {selectUser?.name.charAt(0)}
                                        </Avatar>
                                        :
                                        <Avatar style={{ width: '40px', height: '40px'}} alt={selectUser?.name} src={selectUser?.imageUrl} >
                                        {selectUser?.name.charAt(0)}
                                        </Avatar>
                                        }
                                </div>
                                <div className="handle">
                                    <h4>{selectUser?.name}</h4>
                                    <label className="text-muted">
                                        @{selectUser?.name}
                                    </label>
                                </div>
                            </span> 
                            ) : (
                            <></>
                        )}
                </div>
                <div className="chatbox">
                    <div className="commentsection messagesection" >
                        <h3 className="waao">Messages</h3>
                        <div class="commentbox" style={{maxHeight : "85%"}}>
                            {
                                messages.length != 0 && messages.messages.length != 0 ?
                                    messages.messages.map((a, i) => {
                                        // console.log(a)
                                        if(a.senderid == User?.data?._id) {
                                            return (
                                                <div ref={scrollref}>
                                                    <div className="search-bar Mycomments" >
                                                        <Avatar style={{ width: '40px', height: '40px'}} alt={user?.result.name} src={user?.result?.imageURL} >
                                                        {user?.result.name.charAt(0)}
                                                        </Avatar>
                                                        <strong className='primaryC'>{User?.result?.name}</strong>
                                                        <div>{a.text}</div> 
                                                    </div>
                                                    <div style={{float: "right"}}className="date">{moment(a.createdAt).format("L LT")}</div>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div ref={scrollref}>
                                                    <div className="search-bar Mcomments" >
                                                        <Avatar style={{ width: '40px', height: '40px'}} alt={selectUser?.name} src={selectUser?.imageURL} >
                                                        {selectUser?.name.charAt(0)}
                                                        </Avatar>
                                                        {/* <strong className='primaryC'>{User?.result?.name}</strong> */}
                                                        <div>{a.text}</div> 
                                                    </div>
                                                    <div className="date">{moment(a.createdAt).format("L LT")}</div>
                                                </div>
                                            )
                                        }
                                    }) : (
                                        <div></div>
                                    )
                            }
                        </div>
                    </div>
                    {user?.result?.name && (
                        <div className="search-bar okay"style={{ display: 'flex', justifyContent: 'space-around', gap: '10px', width: '100%' }}>
                        <TextField 
                        fullWidth
                        required
                        placeholder="CHAT CROW"
                        value={Textm}
                        onChange={(e)=> setTextm(e.target.value)}
                        />
                        <button type="button" onClick={() => handleClick()} ><i className='uil uil-plus'></i></button>
                        </div> 
                    )}
                </div>
            </div>
        </div>
    )
}

export default Mmain