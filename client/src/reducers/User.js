// eslint-disable-next-line import/no-anonymous-default-export
export default (Users=[], actions) => {
    switch (actions.type) {
        case "USER_PROFILE": 
            return actions.payload;
        case "TUSER":
            return actions.payload;
        case "AllUSER":
            return actions.payload;            
        default:
            return Users;
    }
}