import axios from 'axios';
import config from '../config/config.json';

const API = axios.create({ baseURL: `${config.backendLocalUrl}/` });

API.interceptors.request.use((req)=> {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
})

export const fetchPost = (id) => API.get(`/posts/postdeets/${id}`);
export const getPosts = () => API.get("/posts");
export const createPost = (formData) => API.post('/posts', formData, { headers: {'Content-Type': 'multipart/form-data'}});
export const likePost = (id, state) => API.patch(`/posts/${id}/${state}`);
export const deletePost = (id) => API.delete(`/posts/delete/${id}`);
export const comment = (user,value, id) => API.post(`/posts/${id}/commentPost`, {user,value});
export const deleteComment = (i, id) => API.delete(`/posts/${id}/PostComment/${i}`);


export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const fetchPostsByCreatorid =(creatorid) => API.get(`/posts/searchcreator?creatorid=${creatorid}`);

export const getTag = () => API.get('/tags');
export const createTags = (NewTag) => API.post('/tags', NewTag);

export const SignIn = (formData) => API.post('/auth/signIn', formData);
export const SignUp = (formData) => API.post('/auth/signUp', formData);
export const OTPverify = (ID , OTP) => API.post(`/auth/OTPverify/${ID}/${OTP}`);
export const GoogleSignUp = (formData) => API.post('/auth/GoogleAuth', formData);

export const TopUser = () => API.get("/user/Top");
export const AllUser = () => API.get("/user/All");
export const getUser = (creator) => API.get(`/user/${creator}`);
export const Likeduser = (id , state) => API.patch(`/user/${id}/${state}`);
export const ChangeTheme = (type, value) => API.patch(`/user/${type}/${value}`);

export const message = (convoId, user, text) => API.patch(`/message/add/${convoId}/${user}`, {text});
export const getconvo = (user1, user2) => API.patch(`/message/getconvo/${user1}/${user2}`);