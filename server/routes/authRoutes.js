import express from 'express';

import { SignIn, SignUp } from '../controller/auth.js';

const router = express.Router();

router.post('/signIn', SignIn);
router.post('/signUp', SignUp);

export default router;