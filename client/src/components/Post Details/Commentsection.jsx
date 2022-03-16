import React , {useState} from 'react'
import { TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {commentPost, DeleteComment} from '../../actions/post';
import Isloading from '../Loading/Loading';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Delete} from '@material-ui/icons';
import './details.css';

const Commentsection = ({ posts,Active }) => {

  const [comments, setComments]=useState(posts?.comments);
  const [comment,setComment]=useState('');
  const user= JSON.parse(localStorage.getItem('profile'));
  const post = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const CommentDelete = (i) => {
    // console.log(e);
    dispatch(DeleteComment(i, posts._id));
  }

  useEffect(() => {
    setComments(posts?.comments);
  }, [dispatch, posts])
  
  const handleSubmit = () => {
    // dispatch(deleteComment(posts._id, i))
  }

  return (
    <div className="commentsection" style={Active ? {display:'inherit'} : {display:'none'}}>
      <h3 className="waao">Comments</h3>
        <div class="commentbox">
          {comments?.map((c, i)=>(
            // <form onSubmit={handleSubmit} >
              <div key={i} className="search-bar comments" >
                <strong className='primaryC'>{c.split(':')[0]}</strong>
                <div>{c.split(':')[1]}</div> 
                {user ? (
                    <button type="button" onClick={() => CommentDelete(i)} className='DeleteButton'><i name={i} className='uil uil-trash-alt'></i></button>
                ) : (<></>)}
              </div>
            // </form>
          ))}
       </div>
    </div>
  )
}

export default Commentsection