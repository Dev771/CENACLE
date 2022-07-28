import React, { useState, useEffect } from 'react';
import {ArrowUpwardOutlined, ArrowDownwardOutlined, VolumeUpRounded, VolumeOff} from '@material-ui/icons';
import { useDispatch} from 'react-redux';
import { likePost ,deletePost  , commentPost} from '../../../actions/post';
import { Avatar, TextField} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import Commentsection from '../../Post Details/Commentsection';
import config from '../../../config/config.json';
import moment from 'moment';



import './styles.css';


const Post = ({post,SbuttonClose}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLiked, setisLiked] = useState(false);
    const [isDisliked, setIsDisLiked] = useState(false);
    const [Active , setActive] = useState(false);
    const [muted, setMuted] = useState(true);
    const user = JSON.parse(localStorage.getItem('profile'));
    const [comment,setComment]=useState('');

    
    const isLike = (state) => {
        if(state === 'liked') {
            dispatch(likePost(post._id, state));
        } else {
            dispatch(likePost(post._id, state));
        }
    }

    const mutedchange = () => {
        setMuted(!muted);
    }

    
    
    useEffect(() => {
        if(post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))) {
            setIsDisLiked(false);
            setisLiked(true);
        } else if(post.dislikes.find((dislike) => dislike === (user?.result?.googleId || user?.result?._id))) {
            setIsDisLiked(true);
            setisLiked(false);
        } else if(!post.likes.find((like) => like === (user?.result?._id || user?.result?.googleId)) && !post.dislikes.find((dislike) => dislike === (user?.result?.googleId || user?.result?._id))) {
            setIsDisLiked(false);
            setisLiked(false);
        }
    }, [dispatch, post?.creatorId, post.dislikes, post.likes, user?.result?._id, user?.result?.googleId]);

    // const openPost = () => navigate(`/posts/${post._id}`);

    const handleClick= () =>{
            if(comment != ""){
                // const finalComment= `${user.result.name}: ${comment}`;
                dispatch(commentPost(user.result.name,comment,post._id));
                navigate('/');
                setComment('');
            };
      };
    


    return (
        <div className="feeds">
            <div className="feed">
                <div className="head">
                    <div className="user">
                        
                            <Avatar style={{ width: '40px', height: '40px', boxShadow : '0 0 5px black'}} alt={post?.creator} src={post?.img} >{post?.creator.charAt(0)}
                            </Avatar>
                        
                        <div className="ingo">
                            <h3>{post.tags_name}/{post.tags_type} || <label onClick={() => navigate(`/Profile/${post?.creatorId}`)}>{post.creator}</label></h3>
                            <small>{moment(post.Date_Of_Creation).format("L LTS")}</small>
                        </div>
                    </div>
                    {(user?.result?._id === post?.creatorId || user?.result?.googleId === post?.creatorId) && (
                    <span onClick={()=> dispatch(deletePost(post._id))} className="edit">
                    <Delete/>
                    </span>
                    )}
                </div>
                <div className="photo">
                    <h2><b>{post.title}</b></h2>
                    {post.post_Type.split('/')[0] === 'image' ? (
                        <img loading='lazy' src={`${config.backendLocalUrl}/posts/${post.LocImage}`} alt={post.title} />
                    ) : post.post_Type.split('/')[0] === 'video' ? (
                        <>
                            <video width="100%" height='100%' autoPlay={true} muted={muted} loop>
                                <source src={`${config.backendLocalUrl}/posts/${post.LocImage}`} type={post.post_Type} />
                            </video>
                            <button onClick={mutedchange} className='mute'>{!muted ? <VolumeUpRounded /> : <VolumeOff />}</button>
                        </>
                    ) : post.post_Type === 'Post' && post.LocImage === '' ? (
                        <label>{post.post_Texts}</label>
                    ) : (
                        <label>No Posts!!</label>
                    )}
                </div>
                <div className="action-buttons ">
                    <div className="interaction-buttons">
                        <div className='Vote'>
                            <ArrowUpwardOutlined color={!isLiked ? 'inherit' : 'secondary'} onClick={() => isLike('liked')} />
                            {post.likes.length - post.dislikes.length}
                            <ArrowDownwardOutlined color={!isDisliked ? 'inherit' : 'secondary'} onClick={() => isLike('disliked')} /> 
                        </div>
                        <span onClick={() => setActive (!Active) }><i className="uil uil-comment"></i></span>
                        <span onClick={() => SbuttonClose (true)}><i className="uil uil-share"></i></span>
                    </div>            
                </div>
                <div className="comments text-muted" onClick={() => setActive (!Active) }>View all {post?.comments.length} comments</div>
                <Commentsection posts={post} Active={Active}/>
                {user?.result?.name && (
                     <div className="search-bar okay" onClick={() => setActive(true) } style={{ display: 'flex', justifyContent: 'space-around', gap: '10px'}}>
                     <TextField 
                       fullWidth
                       required
                       placeholder="Add a Comment"
                       value={comment}
                       onChange={(e)=> setComment(e.target.value)}
                     />
                     <button type="button" onClick={handleClick} ><i className='uil uil-plus'></i></button>
                    </div> 
                )}
            </div>
        </div>
    );
};

export default Post;
