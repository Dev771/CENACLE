import * as api from '../api/index';

export const getUser = (creator) => async (dispatch) => {

    try {

        const { data } = await api.getUser(creator);

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}