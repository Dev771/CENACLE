import React , {useState} from 'react'
import { TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {commentPost} from '../../actions/post';
import Isloading from '../Loading/Loading';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Commentsection = ({ posts,Active }) => {

  const [comments, setComments]=useState(posts?.comments);
  const [comment,setComment]=useState('');
  const user= JSON.parse(localStorage.getItem('profile'));
  const post = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(posts);
  console.log(comments);

  const handleClick= () =>{
    const finalComment= `${user.result.name}: ${comment}`;
    // window.location.reload();
    dispatch(commentPost(finalComment,posts._id));
    navigate('/');
    setComment('');
  };

  useEffect(() => {
    setComments(posts?.comments);
  }, [dispatch, posts])


  return (
    <div class="commentsection" style={Active ? {display:'inherit'} : {display:'none'}}>
                 <h2>Comments</h2>
                 <div class="commentbox">
                 {comments?.map((c, i)=>(
                    <label key={i} class="search-bar comments" >
                      <strong>{c.split(':')[0]}</strong>
                      {c.split(':')[1]}
                    </label>
                  ))}
                </div>
                {user?.result?.name && (
                  <div class="search-bar commentcrow" >
                    <TextField 
                      fullWidth
                      placeholder="Add a Comment"
                      value={comment}
                      onChange={(e)=> setComment(e.target.value)}
                    />
                    {/* <input type="Text" placeholder="Add a Comment" /> */}
                    <button  onClick={handleClick} ><i className='uil uil-plus'></i></button>
                  </div>
                )}
                </div>
  )
}

export default Commentsection