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
        const { data } = await api.createPost(post);

        dispatch({ type: "CREATE_POST", payload: data});
        navigate('/');
    } catch (error) {
        console.log(error);
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