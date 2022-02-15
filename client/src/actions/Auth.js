import * as api from '../api/index';

export const signIn = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.SignIn(formData);

        dispatch({ type: "AUTH", data });
        navigate('/');
    } catch(error) {
        console.log(error);
    }
}

export const signUp = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.SignUp(formData);

        console.log(data);

        dispatch({ type: "AUTH", data });
        navigate('/');
    } catch(error) {
        console.log(error.response.data);
    }
}

export const GoogleSignUp = (result, token, navigate) => async (dispatch) => {
    try {
        const { data } = await api.GoogleSignUp(result);


        if(data.message === 'Success') {
            dispatch({ type: "AUTH", data: { result, token}});
            navigate('/')
        } else {
            console.log(data.message);
        }
    } catch (error) {
        console.log(error.response.data);
    } 
}