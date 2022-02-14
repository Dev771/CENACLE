import express from 'express';
import { getPost, getPosts, createPost, likePost, dislikePost } from '../controller/post.js';

import multer from 'multer';
const upload = multer({ dest : "uploads/" })

import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', getPosts);
router.get('/:key', getPost);
router.post('/', [ auth, upload.single('LocImage') ], createPost);
router.patch('/:id/liked', auth, likePost);
router.patch('/:id/disliked', auth, dislikePost);

export default router;