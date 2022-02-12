import * as api from '../api/index';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.getPost();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post, navigate) => async (dispatch) => {
    try {
        
        const fd = new FormData();
        console.log(post);

        buildFormData(fd, post);

        // fd.append("LocImage", post.LocImage);

        
        const { data } = await api.createPost(fd);
        
        dispatch({ type: "CREATE_POST", payload: data});
        // navigate('/');
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