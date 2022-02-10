import React, { useEffect, useState } from 'react'
import { getPosts } from '../../actions/post';
import { useSelector, useDispatch } from 'react-redux';

import Loading from '../Loading/Loading';
import Post from './post/Post';

const MainBody = () => {

    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const [User, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        dispatch(getPosts());
    }, [posts, dispatch]);

    return (
        <div>
            <div className="middle">
                {User ? (
                    <form className="create-post">
                        <div className="profile-picture">
                            <img src="img/Profile1.jpg" alt='' />
                        </div>
                            <input type="text" placeholder={`What's on your mind ${User.result.name} ?`} id="create-post" />
                        <input type="submit" value="post" className=" btn btn-primary" />
                    </form>
                ) : (
                    <></>
                )}

                {/* <!--*******************************FEEDS******************************--> */}
                {
                    posts.map((post) => (
                        <Post post={post} key={post._id} />
                    ))
                }
                    
                {/* <!--***********************************END OF FEEDS*******************************--> */}
            </div>
        </div>
    )
}

export default MainBody
