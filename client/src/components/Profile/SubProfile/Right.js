import React, { useEffect, useState } from 'react'
import Cam from '@material-ui/icons/CameraAlt'
import { Avatar } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../actions/User';
import './right.css';
import {ArrowUpwardOutlined, ArrowDownwardOutlined} from '@material-ui/icons';

const Right = () => {

    const dispatch = useDispatch();
    const Users = useSelector((state) => state.Users);
    const User = useState(JSON.parse(localStorage.getItem('profile')));
    const { creatorId } = useParams();
    
    useEffect(() => {
        dispatch(getUser(creatorId));
    }, [creatorId, User, dispatch]);

    return (
        <div>
            <div class="right">
                <div className='Profile'>
                    <div className='Rick' >
                        <span>
                            <Avatar style={{ width: '92px', height: '92px', border: '4px solid white', boxShadow : '0 0 5px black'}} alt={Users?.User?.name} src={Users?.User?.imageURL} >{Users?.User?.name.charAt(0)}
                            </Avatar>
                            <button className='cameraButton'><Cam style={{ color: 'white' }} /></button>  
                        </span>
                        <button className='cameraButton'>
                            <Cam style={{ color: 'white' }} />
                        </button>
                    </div>
                    <div className='details'>
                        <label className='name'>
                            {Users?.User?.name}
                        </label>
                        <div className='Profile_Grid'>
                            <label className='User_likes'>
                                FOLLOW ME:
                                    <div className='Vote'>
                                        <ArrowUpwardOutlined  />
                                        69
                                        <ArrowDownwardOutlined  /> 
                                    </div>
                            </label>
                            <label className='User_likes'>
                               <label>POSTS LIKES:</label> 
                               <label>{Users?.User?.Total_Post_Like} </label>
                            </label>
                            <label className='User_likes'>
                                NIGGA MARDA
                            </label>
                            <label className='User_likes'>
                                RICK ROLL
                            </label>
                        </div>       
                    </div>       
                </div>
            </div> 
        </div>
    )
}

export default Right
