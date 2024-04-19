import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { Avatar } from '@material-ui/core';
import { useParams , useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser , Likeduser} from '../../../actions/User';
import './right.css';
import {ArrowUpwardOutlined, ArrowDownwardOutlined} from '@material-ui/icons';
import Loading from '../../Loading/Loading';

const Right = () => {

    const dispatch = useDispatch();
    const [ Userliked , setUserliked] = useState(false);
    const [ Userdisliked , setUserdislked ] = useState(false);
    const Users = useSelector((state) => state.Users);
    const User = useState(JSON.parse(localStorage.getItem('profile')));
    const { creatorId } = useParams();
    const [loading, setLoading] = useState(true);


    const Userlike = (state) => {
        if (state === 'Liked'){
            dispatch(Likeduser(Users?.User?._id , state));
        } else {
            dispatch(Likeduser(Users?.User?._id , state));
        }
    }

    useEffect(() => {
        dispatch(getUser(creatorId))
            .then(() => {
                setLoading(false);
            });
    }, [creatorId, dispatch]);

    return loading ? (<Loading />) : (
        <div>
            <div class="right">
                <div className='Profile'>
                    <div className='Rick' >
                        <span>
                            <Avatar style={{ width: '92px', height: '92px', border: '4px solid white', boxShadow : '0 0 5px black'}} alt={Users?.User?.name} src={Users?.User?.imageURL} >{Users?.User?.name.charAt(0)}
                            </Avatar>
                            {/* <button className='cameraButton'><Cam style={{ color: 'white' }} /></button>   */}
                        </span>
                        {Users?.User?._id === User[0]?.result?._id  ? (
                            <button>
                                <EditIcon />
                            </button>
                        ) : (null)}
                    </div>
                    <div className='details'>
                        <label className='name'>
                            <strong style={{textTransform : "uppercase"}}><h3>{Users?.User?.name}</h3></strong>
                        </label>
                        <div className='Profile_Grid'>
                            <label className='User_likes'>
                                FOLLOW ME:
                                    <div className='Vote'>
                                        <ArrowUpwardOutlined color={!Userliked ? 'inherit' : 'secondary'} onClick={() => Userlike("Liked") } />
                                        {Users?.User?.likes.length - Users?.User?.dislikes.length}
                                        <ArrowDownwardOutlined color={!Userdisliked ? 'inherit' : 'secondary'} onClick={() => Userlike("DisLiked") } /> 
                                    </div>
                            </label>
                            <label className='User_likes'>
                               <label>CENACLE POINTS:</label> 
                               <label>{Users?.User?.Total_Post_Like} </label>
                            </label>
                            <label className='User_likes'>
                                Cenacle
                            </label>
                            <label className='User_likes Nicks' onClick={() => window.location.assign('https://youtu.be/dQw4w9WgXcQ') }>
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
