import express from 'express';
import { getOneUser } from '../controller/user.js';

const router = express.Router();

router.get('/:_id', getOneUser);

export default router;