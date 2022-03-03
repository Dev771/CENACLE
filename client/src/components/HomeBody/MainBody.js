import React, { useEffect, useState } from 'react'
import { getPosts } from '../../actions/post';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar } from '@material-ui/core';
import {useNavigate} from 'react-router-dom';
import './styleS.css';
import Loading from '../Loading/Loading';
import Post from './post/Post';

const MainBody = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const posts = useSelector((state) => state.posts);
    const [User, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [counter , setcounter] =useState(5);

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
                {!posts.length  ? (<Loading/>) :  (
                    posts.slice().reverse().slice(0,counter).map((post) => (
                        <Post post={post} key={post._id} />
                    ))
                )}     
                {/* <!--***********************************END OF FEEDS*******************************--> */}
                <div className="showmore">
                { counter>=posts.length && posts.length > 5 ? (
                       <button className="btn btn-primary" type="button" onClick={() => setcounter(counter - 5)}>
                       Show Less <i class="uil uil-angle-up"></i>
                   </button>

                   ): counter > 5 ? (
                       <div>
                    <button className="btn btn-primary" type="button" onClick={() => setcounter(counter + 5)}>
                        Show More <i class="uil uil-angle-down"></i>
                     </button>
                      <button className="btn btn-primary" type="button" onClick={() => setcounter(counter - 5)}>
                        Show Less <i class="uil uil-angle-up"></i>
                     </button>
                     </div>
                   ): counter <= posts.length ? (
                    <button className="btn btn-primary" type="button" onClick={() => setcounter(counter + 5)}>
                        Show More <i class="uil uil-angle-down"></i>
                    </button>
                   ) : (
                       <></>
                   )}
                </div>
                <div className="CreatorNameMobile">
                   <div>
                Made with Love <br />
                by &nbsp;
                   <a href="https://www.linkedin.com/in/dev-garg-a5b012182/" className='linkden'>Dev G </a> &nbsp; | &nbsp;
                   <a href="https://www.linkedin.com/in/naman-bhateja-018392171/" className='linkden'>Naman B </a> &nbsp;| &nbsp;
                   <a href="https://www.linkedin.com/in/heygaurav07/" className='linkden'>Gaurav S </a>   
                   </div>
                </div>
            </div>
        </div>
    )
}


export default MainBody
