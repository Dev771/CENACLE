import * as api from '../api/index';
import { FETCH_BY_SEARCH , DELETE , FETCH_POST ,COMMENT} from '../constants/ActionTypes'


export const getPost = (id) => async (dispatch) => {
  try {
      
      const { data } = await api.fetchPost(id);

      dispatch({ type: FETCH_POST, payload: data});
      
  } catch (error) {
      console.log(error.response.data);
  }
};

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.getPosts();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error);
    }
}


export const getPostsBySearch = (searchQuery , history ) => async (dispatch) => {
    try {
      const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
      if(data.length <= 0){
       history("/");
      }
      else {
        dispatch({ type: FETCH_BY_SEARCH, payload: data});
      };
    } catch (error) {
      console.log(error);
    }
  };

export const getPostsByCreator = (creatorid, navigate) => async (dispatch) => {
  try {
      const { data: { data } }=await api.fetchPostsByCreatorid(creatorid);

      dispatch({ type: FETCH_BY_SEARCH, payload: data});
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post, navigate) => async (dispatch) => {
    try {
        navigate('/Loading');
        const fd = new FormData();
        // console.log(post);

      buildFormData(fd, post);

      const { data } = await api.createPost(fd);

      
      dispatch({ type: "CREATE_POST", payload: data});
      navigate('/');
      
    } catch (error) {
        console.log(error);
    }
}

const buildFormData = (formData, data, parentKey) => {
    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
      Object.keys(data).forEach(key => {
        buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
      });
    } else {
      const value = data == null ? '' : data;
  
      formData.append(parentKey, value);
    }
  }

export const likePost = (id, state) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id, state);

        dispatch({type: "LIKE_POST", payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const commentPost=(user,value,id)=> async(dispatch) => {
  try {
     const {data}= await api.comment(user,value,id);
      dispatch({type: COMMENT ,payload: data});
      return data.comments;
      
  } catch (error) {
      console.log(error);
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
      await api.deletePost(id);

      dispatch({ type:DELETE, payload: id});
  } catch (error) {
      console.log(error);
  }
};

export const DeleteComment = (i, PostID) => async (dispatch) => {
  try {
    // console.log(i);
    const { data }= await api.deleteComment(i, PostID);
    // console.log(data);
    // alert("POST Deleted");
    dispatch({ type:"DELETECOMMENT", payload: data});
  } catch(error) {
    console.log(error);
  }
}