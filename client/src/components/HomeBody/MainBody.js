import React, { useEffect, useState } from 'react'
import { getPosts } from '../../actions/post';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar } from '@material-ui/core';
import {useNavigate} from 'react-router-dom';
import './styleS.css';
import Loading from '../Loading/Loading';
import Post from './post/Post';
import Sharebutton from './sharebutton/Sharebutton';
import CenacleShortsHeader from '../CenacleShortsHeader/CenacleShortsHeader';
import WindowSizing from '../WindowSizing/WindowSizing';

const MainBody = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const posts = useSelector((state) => state.posts);
    const [User, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [share , setshare] = useState(false);
    const loader = WindowSizing();
    const [fetch, setFetching] = useState(false);

    const [middleWidth, setMiddleWidth] = useState(0);


    const OpenShareB = (click) => {
        setshare(click);
    }

    useEffect(() => {
        if(loader && !fetch) {
            setFetching(true);
            dispatch(getPosts(posts.length))
                .then(() => setFetching(false)
            );
        }
    }, [loader, dispatch])

    useEffect(() => {
        dispatch(getPosts(0));
    }, [dispatch]);

    return (
        <div id="main">
            <div className="middle middlee" id="middle" onLoad={() => setMiddleWidth(document.getElementById("middle").offsetWidth)}>
                {/* <CenacleShortsHeader width={middleWidth} /> */}
                {User ? (
                    <form className="create-post" onClick={() => {!User ? window.location.reload() : navigate('/Form')}}>
                        {User?.result.imageURL ? 
                                <Avatar style={{ width: '40px', height: '40px'}} alt={User?.result.name} src={User?.result?.imageURL} >
                                {User?.result.name.charAt(0)}
                                </Avatar>
                                :
                                <Avatar style={{ width: '40px', height: '40px'}} alt={User?.result.name} src={User?.result?.imageUrl} >
                                {User?.result.name.charAt(0)}
                                </Avatar>
                                }
                            <input type="text" placeholder={`What's on your mind ${User.result.name} ?`} id="create-post" />
                        <input type="submit" value="post" className=" btn btn-primary" />
                    </form>
                ) : (
                    <></>
                )}

                {/* <!--*******************************FEEDS******************************--> */}
                {!posts.length  ? (<Loading/>) :  (
                    posts.slice().map((post, i) => (
                        <Post post={post} key={post._id} SbuttonClose={OpenShareB}/>
                    ))
                )}     
                {loader ? (<div className='postPageLoading'>
                    <div className='wave' ></div>
                    <div className='wave' ></div>
                    <div className='wave' ></div>
                    <div className='wave' ></div>
                    <div className='wave' ></div>
                    <div className='wave' ></div>
                </div>) : (null)}


                {/* <!--***********************************END OF FEEDS*******************************--> */}
                {/* <div className="showmore">
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
                </div> */}
            </div>
            {share ? ( 
                <>
                    <Sharebutton 
                        SbuttonClose = {OpenShareB}
                    />
                </> 
            ) : (
                <></>
            )} 
        </div>
    )
}


export default MainBody
