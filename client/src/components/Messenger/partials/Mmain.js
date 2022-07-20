import React, { useEffect, useState } from 'react'
import { getPosts } from '../../../actions/post';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar , TextField } from '@material-ui/core';
import {useNavigate} from 'react-router-dom';
import '../../HomeBody/styleS.css';


const Mmain = () => {
    
    const user = JSON.parse(localStorage.getItem('profile'));
    const navigate = useNavigate();
    let messages = useSelector((state) => state.messages);
    console.log(messages);
    const [User, setUser] = useState(JSON.parse(localStorage.getItem('profile')));


    return (
        <div>
            <div className="middle middlee">
                <div className="left" style={{marginBottom: "10px"}}>
                {User ? (
                            <span className="profile" onClick={() => navigate(`/Profile/${User?.result?._id || User?.result?.googleId}`)}>
                                <div className="profile-picture">
                                {User?.result.imageURL ? 
                                        <Avatar style={{ width: '40px', height: '40px'}} alt={User?.result.name} src={User?.result?.imageURL} >
                                        {User?.result.name.charAt(0)}
                                        </Avatar>
                                        :
                                        <Avatar style={{ width: '40px', height: '40px'}} alt={User?.result.name} src={User?.result?.imageUrl} >
                                        {User?.result.name.charAt(0)}
                                        </Avatar>
                                        }
                                </div>
                                <div className="handle">
                                    <h4>{User?.result?.name}</h4>
                                    <label className="text-muted">
                                        @{User?.result?.name}
                                    </label>
                                </div>
                            </span> 
                            ) : (
                            <></>
                        )}
                </div>
                <div className="chatbox">
                    <div className="commentsection messagesection" >
                        <h3 className="waao">Comments</h3>
                        <div class="commentbox" style={{maxHeight : "85%"}}>
                            {
                                "User" in messages ?
                                    messages?.mes.map((a, i) => {
                                        console.log("a");
                                        if(messages?.User in a) {
                                            return (
                                                <div key={i}>
                                                    <div className="search-bar Mycomments" >
                                                        <Avatar style={{ width: '40px', height: '40px'}} alt={User?.result.name} src={User?.result?.imageURL} >
                                                        {User?.result.name.charAt(0)}
                                                        </Avatar>
                                                        <strong className='primaryC'>{User?.result?.name}</strong>
                                                        <div>{a[messages?.User]}</div> 
                                                    </div>
                                                    <div style={{float: "right"}}className="date">date and time</div>
                                                </div>
                                            )
                                        } else {                 
                                            return (
                                                <div key={i}>
                                                    <div className="search-bar Mcomments" >
                                                        <Avatar style={{ width: '40px', height: '40px'}} alt={User?.result.name} src={User?.result?.imageURL} >
                                                        {User?.result.name.charAt(0)}
                                                        </Avatar>
                                                        {/* <strong className='primaryC'>{User?.result?.name}</strong> */}
                                                        <div>{a[messages?.CurrentUser]}</div> 
                                                    </div>
                                                    <div className="date">date and time</div>
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
                        value={() => {}}
                        onChange={() => {}}
                        />
                        <button type="button" onClick={() => {}} ><i className='uil uil-plus'></i></button>
                        </div> 
                    )}
                </div>
            </div>
        </div>
    )
}

export default Mmain