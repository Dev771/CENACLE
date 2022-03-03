import React, { useState, useEffect } from 'react';
import {ArrowUpwardOutlined, ArrowDownwardOutlined, VolumeUpRounded, VolumeOff, Add } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { likePost ,deletePost , getPostsByCreator , commentPost} from '../../../actions/post';
import { Badge, Avatar, TextField} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../../actions/User';
import Commentsection from '../../Post Details/Commentsection';


import './styles.css';


const Post = ({post}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLiked, setisLiked] = useState(false);
    const [isDisliked, setIsDisLiked] = useState(false);
    const [Active , setActive] = useState(false);
    const [muted, setMuted] = useState(true);
    const user = JSON.parse(localStorage.getItem('profile'));
    const Users = useSelector((state) => state.Users);
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
        dispatch(getUser(post?.creatorId));
    }, [dispatch, post?.creatorId, post.dislikes, post.likes, user?.result?._id, user?.result?.googleId]);

    // const openPost = () => navigate(`/posts/${post._id}`);

    const handleClick= () =>{
        const finalComment= `${user.result.name}: ${comment}`;
        dispatch(commentPost(finalComment,post._id));
        navigate('/');
        setComment('');
      };
    


    return (
        <div className="feeds">
            <div className="feed">
                <div className="head">
                    <div className="user">
                        
                            <Avatar style={{ width: '40px', height: '40px', boxShadow : '0 0 5px black'}} alt={Users?.User?.name} src={Users?.User?.imageURL} >{Users?.User?.name.charAt(0)}
                            </Avatar>
                        
                        <div className="ingo">
                            <h3>{post.tags_name}/{post.tags_type} || <label onClick={() => navigate(`/Profile/${post?.creatorId}`)}>{post.creator}</label></h3>
                            <small>{post.Date_Of_Creation}</small>
                        </div>
                    </div>
                    {(user?.result?._id == post?.creatorId || user?.result?.googleId === post?.creatorId) && (
                    <span onClick={()=> dispatch(deletePost(post._id))} className="edit">
                    <Delete/>
                    </span>
                    )}
                </div>
                <div className="photo">
                    <h2><b>{post.title}</b></h2>
                    {post.post_Type.split('/')[0] === 'image' ? (
                        <img loading='lazy' src={`http://localhost:8080/posts/${post.LocImage}`} alt={post.title} />
                    ) : post.post_Type.split('/')[0] === 'video' ? (
                        <>
                            <video width="100%" height='100%' autoPlay={true} muted={muted} loop>
                                <source src={`http://localhost:8080/posts/${post.LocImage}`} type={post.post_Type} />
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
                        <span><i className="uil uil-share"></i></span>
                    </div>
                    <div className="bookmark">
                    <span><i className="uil uil-bookmark-full"></i></span>
                    </div>            
                </div>
                <div className="comments text-muted">View all {post?.comments.length} comments</div>
                <Commentsection posts={post} Active={Active}/>
                {user?.result?.name && (
                     <div className="search-bar okay" onClick={() => setActive(true) } style={{ display: 'flex', justifyContent: 'space-around', gap: '10px'}}>
                     <TextField 
                       fullWidth
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
