import { FETCH_BY_SEARCH } from "../constants/ActionTypes";
// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], actions) => {
    switch(actions.type) {
        case "CREATE_POST": 
            return [ ...posts, actions.payload ];
        case "FETCH_ALL": 
            return actions.payload;
        case FETCH_BY_SEARCH:
            return  actions.payload;
        case "LIKE_POST":
            return posts.map((post) => post._id === actions.payload._id ? actions.payload : post);        
        default: 
            return posts;
    }
}