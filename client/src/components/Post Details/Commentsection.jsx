import React , {useState} from 'react'
import { useDispatch} from 'react-redux';
import { DeleteComment} from '../../actions/post';
import { useEffect } from 'react';
import './details.css';

const Commentsection = ({ posts,Active }) => {

  const [comments, setComments]=useState(posts?.comments);
  const user= JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();

  const CommentDelete = (i) => {
    // console.log(e);
    dispatch(DeleteComment(i, posts._id));
  }

  useEffect(() => {
    setComments(posts?.comments);
  }, [dispatch, posts])
  


  return (
    <div className="commentsection" style={Active ? {display:'inherit'} : {display:'none'}}>
      <h3 className="waao">Comments</h3>
        <div class="commentbox">
          {comments?.map((c, i)=>(
            // <form onSubmit={handleSubmit} >
              <div key={c.id} className="search-bar comments" >
                <strong className='primaryC'>{c.username}</strong>
                <div>{c.comment}</div> 
                {user?.result?._id === c.userid || user?.result?.googleId === c.userid ? (
                    <button type="button" onClick={() => CommentDelete(c.id)} className='DeleteButton'><i name={i} className='uil uil-trash-alt'></i></button>
                ) : (<></>)}
              </div>
            // </form>
          ))}
       </div>
    </div>
  )
}

export default Commentsection