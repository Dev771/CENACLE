import React, { useEffect, useState } from 'react'
import { getPosts , getPostsByCreator} from '../../../actions/post';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar } from '@material-ui/core';
import {useNavigate, useParams} from 'react-router-dom';

import Post from '../../HomeBody/post/Post';

const MainBody = () => {
    const { creatorId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const posts = useSelector((state) => state.posts);
    const [User, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        dispatch(getPostsByCreator(creatorId));
    }, [creatorId, dispatch]);

    return (
        <div>
            <div className="middle">
                {User ? (
                    <form className="create-post" onClick={() => navigate('/Form')}>
                        <Avatar style={{ width: '40px', height: '40px'}} alt={User?.result?.name} src={User?.result?.imageUrl} >{User?.result?.name.charAt(0)}</Avatar>
                            <input type="text" placeholder={`What's on your mind ${User.result.name} ?`} id="create-post" />
                        <input type="submit" value="post" className=" btn btn-primary" />
                    </form>
                ) : (
                    <></>
                )}
                {posts.length > 0 ? (
                    posts.slice().reverse().map((post) => (
                        <Post post={post} key={post._id} />
                    ))
                ) : (
                    <label>Hello</label>
                )}                    
            </div>
        </div>
    )
}

export default MainBody
