import express from 'express';

import { SignIn, SignUp, GoogleSignUp } from '../controller/auth.js';

const router = express.Router();

router.post('/signIn', SignIn);
router.post('/signUp', SignUp);
router.post('/GoogleAuth', GoogleSignUp);

export default router;