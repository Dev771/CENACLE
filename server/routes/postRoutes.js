import express from 'express';
import { getPostsBySearch, getPost, getPosts, createPost, likePost, dislikePost , getPostsByCreator } from '../controller/post.js';

import multer from 'multer';
const upload = multer({ dest : "uploads/" })

import auth from '../middleware/auth.js';
import { getPostsByCreator } from '../../client/src/actions/post.js';
const router = express.Router();

router.get('/search', getPostsBySearch);
router.get('/searchcreator', getPostsByCreator);
router.get('/', getPosts);
router.get('/:key', getPost);
router.post('/', [ auth, upload.single('LocImage') ], createPost);
router.patch('/:id/liked', auth, likePost);
router.patch('/:id/disliked', auth, dislikePost);

export default router;