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

        console.log(data);

        if(!data.message) {
            console.log('hello');
            dispatch({ type: "AUTH", data: { result, data, token}});
            navigate('/')
        } else {
            console.log(data.message);
        }
    } catch (error) {
        console.log(error.response.data);
    } 
}

export const ChangeTheme = (type, value) => async (dispatch) => {
    try {
        const { data } = await api.ChangeTheme(type, value);

        dispatch({ type: "UPDATE_AUTH", data});
    } catch(error) {
        console.log(error);
    }
}