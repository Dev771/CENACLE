import express from 'express';
import { getOneUser , Likeuser , DisLikeuser} from '../controller/user.js';

import auth from '../middleware/auth.js';


const router = express.Router();

router.get('/:_id', getOneUser);
router.patch('/:_id/Liked', auth , Likeuser);
router.patch('/:_id/DisLiked', auth , DisLikeuser);

export default router;