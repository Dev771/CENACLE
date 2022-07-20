/* eslint-disable import/no-anonymous-default-export */
export default (messages = [], actions) => {
    switch(actions.type) {
        case "New_User":
            console.log(actions.payload);
            return actions.payload;
        default:
            return messages;
    }   
}