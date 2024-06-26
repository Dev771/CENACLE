import { FETCH_BY_SEARCH , DELETE ,FETCH_POST , COMMENT} from "../constants/ActionTypes";
// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], actions) => {
    switch(actions.type) {
        case "CREATE_POST": 
            return [ ...posts, actions.payload ];
        case "FETCH_ALL": 
            const revAction = actions.payload.reverse();
            const post = [...posts, ...revAction]
            return post;
        case FETCH_BY_SEARCH:
            posts = actions.payload;
            console.log(actions.payload)
            return posts;
        case "LIKE_POST":
            return posts.map((post) => post._id === actions.payload._id ? actions.payload : post);    
        case DELETE:
            return posts.filter((post) => post._id !== actions.payload) ;  
        case FETCH_POST:
            return actions.payload;  
        case COMMENT:
            return actions.payload.reverse();
        case "DELETECOMMENT":
            return actions.payload.reverse();
        case "RESET":
            return [];
        default: 
            return posts;
    }
}