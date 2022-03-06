import express from 'express';
import { getOneUser , Likeuser , DisLikeuser, ChangeTheme} from '../controller/user.js';

import auth from '../middleware/auth.js';


const router = express.Router();

router.get('/:_id', getOneUser);
router.patch('/:_id/Liked', auth , Likeuser);
router.patch('/:_id/DisLiked', auth , DisLikeuser);
router.patch('/:type/:value', auth, ChangeTheme);

export default router;