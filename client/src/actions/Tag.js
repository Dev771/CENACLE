import * as api from '../api/index';

export const getTags = () => async (dispatch) => {
    try {
        const { data } = await api.getTag();

        dispatch({ type: "FETCH_ALL_TAGS", payload: data })
    } catch (error) {
        console.log(error.message);
    }
}