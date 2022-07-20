import * as api from '../api/index';

export const getUser = (creator) => async (dispatch) => {

    try {

        const { data } = await api.getUser(creator);

        dispatch({ type: "USER_PROFILE", payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const Likeduser = ( User , state ) => async (dispatch) => {

    try {
       const { data } =await api.Likeduser(User ,state);
       
    } catch (error) {
        console.log(error);
    }
}

export const Topuser =() => async (dispatch) => {
    try {
        const { data } =await api.TopUser();
        dispatch({type: "TUSER", payload : data});
    } catch (error) {
        console.log(error);
    }
}

export const AllUser = () => async (dispatch) => {
    try {
        const { data } = await api.AllUser();
        dispatch({ type: "AllUSER", payload: data });
    } catch(error) {
        console.log(error)
    }
}