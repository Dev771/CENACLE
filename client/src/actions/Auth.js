import * as api from '../api/index';

export const signIn = (formData, navigate) => async (dispatch) => {
    try {
        navigate("/Loading")
        const { data } = await api.SignIn(formData);
        dispatch({ type: "ADD_SUCCESS", payload: "User Logged Successfully!!" })
        dispatch({ type: "AUTH", data });
        navigate('/');
    } catch(error) {
        console.log(error.response.data);
        dispatch({ type: "ADD_ERROR", payload: error.response.data.messsge })
        navigate('/login/SignIn')
    }
}

export const signUp = (formData, navigate) => async (dispatch) => {
    
    try {
        navigate("/Loading")
        const { data } = await api.SignUp(formData);

        if(data.status === "Success"){
            navigate(`/OTP/${data.result.email}`);
        }
        else{
            console.log(data.msg);
        }
    } catch(error) {
        console.log(error.response);
    }
}

export const verifyOTP = (ID , OTP , navigate) => async (dispatch) => {
    try {
        navigate("/Loading")
        const { data } = await api.OTPverify(ID , OTP);
        // console.log(data);
        if(data.status === "scc"){
            dispatch({ type: "AUTH", data });
            navigate('/');
        }
        else{
            console.log(data.status);
        }
    } catch (error) {
        console.log(error);
    }
}

export const GoogleSignUp = (result, token, navigate) => async (dispatch) => {
    try {

        const { data } = await api.GoogleSignUp(result);

        // console.log(data);

        if(!data.message) {
            
            dispatch({ type: "AUTH", data: { result, data, token}});
            dispatch({ type: "ADD_SUCCESS", payload: "Login Successfull!!" })
            navigate('/')
        } else {
            dispatch({ type: "ADD_ERROR", payload: "Error While Login" });
            console.log(data.message);
        }
    } catch (error) {
        dispatch({ type: "ADD_ERROR", payload: "Error While Login" });
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