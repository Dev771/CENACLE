/* eslint-disable import/no-anonymous-default-export */
export default (messages = [], actions) => {
    switch(actions.type) {
        case "New_User":
            return actions.payload;
        default:
            return []
    }   
}