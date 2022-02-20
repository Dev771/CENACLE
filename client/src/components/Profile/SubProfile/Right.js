import React, { useEffect, useState } from 'react'
import Cam from '@material-ui/icons/CameraAlt'
import { Avatar } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser } from '../../../actions/User';

const Right = () => {

    const dispatch = useDispatch();
    const User = useState(JSON.parse(localStorage.getItem('profile')));
    const { creatorId } = useParams();

    useEffect(() => {
        dispatch(getUser(creatorId));
    }, [creatorId, User, dispatch]);

    return (
        <div>
            <div class="right">
                <div className='Profile'>
                    <div style={{ background: 'blue' }} >
                        <span>
                           <Avatar style={{ width: '92px', height: '92px', border: '4px solid white', boxShadow : '0 0 5px black'}} alt={User?.result?.name} src={User?.result?.imageUrl} >{User?.result?.name.charAt(0)}
                            </Avatar>
                            <button className='cameraButton'><Cam style={{ color: 'white' }} /></button>  
                            </span>
                        <button className='cameraButton'>
                            <Cam style={{ color: 'white' }} />
                        </button>
                    </div>
                    <div className='details'>
                        <label className='name'>
                        {User?.result?.name}
                        </label>
                    
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Right
