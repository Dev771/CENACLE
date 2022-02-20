import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:8080" });

API.interceptors.request.use((req)=> {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
})

export const getPosts = () => API.get('/posts');
export const createPost = (formData) => API.post('/posts', formData, { headers: {'Content-Type': 'multipart/form-data'}});
export const likePost = (id, state) => API.patch(`/posts/${id}/${state}`);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const fetchPostsByCreatorid =(creatorid) => API.get(`/posts/searchcreator?creatorid=${creatorid}`);

export const getTag = () => API.get('/tags');

export const SignIn = (formData) => API.post('/auth/signIn', formData);
export const SignUp = (formData) => API.post('/auth/signUp', formData);
export const GoogleSignUp = (formData) => API.post('/auth/GoogleAuth', formData);

export const getUser = (creator) => API.get(`/user/${creator}`);