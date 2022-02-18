import express from 'express';
import { getPostsBySearch, getPost, getPosts, createPost, likePost, dislikePost , getPostsBycreator , deletePost} from '../controller/post.js';

import multer from 'multer';
const upload = multer({ dest : "uploads/" })

import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/search', getPostsBySearch);
router.get('/searchcreator', getPostsBycreator);
router.get('/', getPosts);
router.get('/:key', getPost);
router.delete('/:id', auth, deletePost);
router.post('/', [ auth, upload.single('LocImage') ], createPost);
router.patch('/:id/liked', auth, likePost);
router.patch('/:id/disliked', auth, dislikePost);

export default router;