// eslint-disable-next-line import/no-anonymous-default-export
export default (tags=[], action) => {
    switch(action.type) {
        case "FETCH_ALL_TAGS": 
            return action.payload;
        default: 
            return tags;
    }
}