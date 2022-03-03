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


  const handleClick= () =>{
    const finalComment= `${user.result.name}: ${comment}`;
    dispatch(commentPost(finalComment,posts._id));
    navigate('/');
    setComment('');
  };

  useEffect(() => {
    setComments(posts?.comments);
  }, [dispatch, posts])


  return (
    <div className="commentsection" style={Active ? {display:'inherit'} : {display:'none'}}>
      <h3 className="waao">Comments</h3>
        <div class="commentbox">
          {comments?.map((c, i)=>(
            <label key={i} class="search-bar comments" >
              <strong>{c.split(':')[0]}</strong>
              {c.split(':')[1]}
            </label>
          ))}
       </div>
    </div>
  )
}

export default Commentsection