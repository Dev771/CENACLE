// eslint-disable-next-line import/no-anonymous-default-export
export default (error={status: false, message: "", is_Success: false}, action) =>{
    switch(action.type) {
        case "ADD_ERROR": 
            return { status: true, message: action.payload, is_Success: false };
        case "ADD_SUCCESS": 
            return { status: true, message: action.payload, is_Success: true };
        case "REMOVE_ERROR":
            return { status: false, message: "", is_Success: false };
        default: 
            return error;
    }
}