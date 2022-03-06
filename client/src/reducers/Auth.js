// eslint-disable-next-line import/no-anonymous-default-export
export default (state={authData: null}, action) =>{
    switch(action.type) {
        case "AUTH": 
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action?.data };
        case "LOGOUT":
            localStorage.clear();
            return { ...state, authData: null};
        case "UPDATE_AUTH": 
            const user = JSON.parse(localStorage.getItem('profile'));
            if(!user?.result?._id) {
                localStorage.setItem('profile', JSON.stringify({ token: user.token, result: user.result, data: action?.data }))
            } else {
                localStorage.setItem('profile', JSON.stringify({ token: user.token, result: action?.data }))
            }
            return { ...state, authData: action?.data }
        default: 
            return state;
    }
}