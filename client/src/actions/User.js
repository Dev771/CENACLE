import * as api from '../api/index';

export const getUser = (creator) => async (dispatch) => {

    try {

        const { data } = await api.getUser(creator);

        dispatch({ type: "USER_PROFILE", payload: data})
    } catch (error) {
        console.log(error);
    }
}