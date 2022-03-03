import React, { useEffect, useState } from 'react'
import { getPosts } from '../../actions/post';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar } from '@material-ui/core';
import {useNavigate} from 'react-router-dom';

import Loading from '../Loading/Loading';
import Post from './post/Post';

const MainBody = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const posts = useSelector((state) => state.posts);
    const [User, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    return (
        <div>
            <div className="middle">
                {User ? (
                    <form className="create-post" onClick={() => {!User ? window.location.reload() : navigate('/Form')}}>
                        <Avatar style={{ width: '40px', height: '40px'}} alt={User?.result?.name} src={User?.result?.imageUrl} >{User?.result?.name.charAt(0)}</Avatar>
                            <input type="text" placeholder={`What's on your mind ${User.result.name} ?`} id="create-post" />
                        <input type="submit" value="post" className=" btn btn-primary" />
                    </form>
                ) : (
                    <></>
                )}

                {/* <!--*******************************FEEDS******************************--> */}
                {!posts.length   ? (<Loading/>) :  (
                    posts.slice().reverse().map((post) => (
                        <Post post={post} key={post._id} />
                    ))
                )}
                    
                {/* <!--***********************************END OF FEEDS*******************************--> */}
            </div>
        </div>
    )
}


export default MainBody
