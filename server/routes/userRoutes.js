import express from 'express';
import { getOneUser , Likeuser , DisLikeuser, ChangeTheme , topUser, upUser, getUserAvatar} from '../controller/user.js';

import auth from '../middleware/auth.js';


const router = express.Router();

router.get('/Top', topUser);
router.get('/All', upUser);
router.get('/:_id', getOneUser);
router.patch('/:_id/Liked', auth , Likeuser);
router.patch('/:_id/DisLiked', auth , DisLikeuser);
router.patch('/:type/:value', auth, ChangeTheme);
router.get('/1/update_User', upUser);
router.get("/Avatar/:id", getUserAvatar);

export default router;