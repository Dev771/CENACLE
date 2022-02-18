import React, { useState, useEffect } from 'react';
import {ArrowUpwardOutlined, ArrowDownwardOutlined, VolumeUpRounded, VolumeOff } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { likePost ,deletePost} from '../../../actions/post';
import { Badge, Avatar } from '@material-ui/core';
import {Delete} from '@material-ui/icons';

import './styles.css';


const Post = ({post}) => {
    const dispatch = useDispatch();
    const [isLiked, setisLiked] = useState(false);
    const [isDisliked, setIsDisLiked] = useState(false);
    const [muted, setMuted] = useState(true);
    const user = JSON.parse(localStorage.getItem('profile'));

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
    }, [post.dislikes, post.likes, user?.result?._id, user?.result?.googleId]);


    return (
        <div className="feeds">
            {/* <!--***********************************FEEDS 1*************************************--> */}
            <div className="feed">
                <div className="head">
                    <div className="user">
                        <div className="profile-picture">
                            <Avatar style={{ width: '40px', height: '40px'}} alt={post.creator} src={post?.CreatorImage} >{post.creator.charAt(0)}</Avatar>
                        </div>
                        <div className="ingo">
                            <h3>{post.tags_name}/{post.tags_type} || {post.creator}</h3>
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
                        <span><i className="uil uil-comment"></i></span>
                        <span><i className="uil uil-share"></i></span>
                    </div>
                    <div className="bookmark">
                    <span><i className="uil uil-bookmark-full"></i></span>
                    </div>            
                </div>
            
                <div className="liked-by">
                    <span><img alt='' src="img/image15.jpg" /></span>
                    <span><img alt='' src="img/image13.jpg" /></span>
                    <span><img alt='' src="img/image4.jpg" /></span>
                    <p>Liked by <b>Ernest Achiever</b> and <b>2,323 others </b></p>
                </div>

                <div className="caption">
                    <p><b>Lana Rose</b> Lorem ipsum dolor sit quisqum eius.
                    <span className="harsh-tag">#lifestyle</span></p>
                </div>
                <div className="comments text-muted">View all 277 comments</div>
            </div>
            {/* <!--***************************END OF FEED 1***********************************--> */}
        </div>
    );
};

export default Post;
