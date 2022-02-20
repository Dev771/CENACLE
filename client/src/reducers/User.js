// eslint-disable-next-line import/no-anonymous-default-export
export default (Users=[], actions) => {
    switch (actions.type) {
        case "USER_PROFILE": 
            return actions.payload;
        default:
            return Users;
    }
}