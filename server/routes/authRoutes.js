import express from 'express';

import { SignIn, SignUp, GoogleSignUp ,VerifyOTP } from '../controller/auth.js';

const router = express.Router();

router.post('/signIn', SignIn);
router.post('/signUp', SignUp);
router.post('/OTPverify/:ID/:OTP', VerifyOTP );
router.post('/GoogleAuth', GoogleSignUp);

export default router;