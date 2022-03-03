import express from 'express';
import { getPostsBySearch, fetchPost , getPost, getPosts, createPost, likePost, dislikePost , getPostsBycreator , deletePost , commentPost } from '../controller/post.js';

import multer from 'multer';
const upload = multer({ dest : "uploads/" })

import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/search', getPostsBySearch);
router.get('/searchcreator', getPostsBycreator);
router.get('/postdeets/:id', fetchPost);
router.get('/arraysize/:N', getPosts);
router.get('/:key', getPost);
router.delete('/delete/:id', auth, deletePost);
router.post('/', [ auth, upload.single('LocImage') ], createPost);
router.patch('/:id/liked', auth, likePost);
router.patch('/:id/disliked', auth, dislikePost);
router.post('/:id/commentPost', auth, commentPost);


export default router;