import express from 'express';
import { getPost, createPost, likePost, dislikePost } from '../controller/post.js';

import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', getPost);
router.post('/', auth, createPost);
router.patch('/:id/liked', auth, likePost);
router.patch('/:id/disliked', auth, dislikePost);

export default router;