import React , {useEffect} from 'react'
import '../Post Details/details.css';
import { Avatar } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate as useHistory } from 'react-router-dom';
import { getPost, getPostsBySearch } from '../../actions/post';
import Commentsection from './Commentsection';
import Loading from '../Loading/Loading';

const Postdetails = () => {

  const navigate = useNavigate();
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { id } = useParams();
  
  useEffect(() => {

    dispatch(getPost(id));
    console.log(posts);
  }, [id, dispatch]);

  return (
    
    <div class="PostD">
        <div class="feed1">
            <div class="Postdetail-grid">
                <div class="user-head">
                    <div className="user">
                         <Avatar style={{ width: '40px', height: '40px', boxShadow : '0 0 5px black'}} alt={posts.creator} src={posts?.imageURL} >{posts?.cretor ? posts?.creator.charAt(0) : "UU"} 
                         </Avatar>
                            
                        <div className="ingo">
                            <h3>{posts.tags_name}/{posts.tags_type} || <label onClick={() => navigate(`/Profile/${posts?.creatorId}`)}>{posts.creator}</label></h3>
                            <small>{posts.Date_Of_Creation}</small>
                        </div>
                    </div>
                    <Commentsection posts={posts}/>
                </div>
                <div class="photo-likes">
                     <h2><b>{posts?.title}</b></h2>
                    <div class="photo1">
                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_IzC_2oReGw0JKuUztPFXJEelvP6LNXsFng&usqp=CAU"  />       
                    </div>

                    <div class="action-buttons ">
                        <div class="interaction-buttons">
                            <span><i class="uil uil-heart-alt"></i></span>
                            <span><i class="uil uil-comment"></i></span>
                            <span><i class="uil uil-share"></i></span>
                        </div>
                        
                        <div class="bookmark">
                            <span><i class="uil uil-bookmark-full"></i></span>
                        </div>            
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Postdetails