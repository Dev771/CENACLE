import express from 'express';
import {updatemessage, getconvoId} from '../controller/message.js';

// import auth from '../middleware/auth.js';


const router = express.Router();

router.patch('/add/:id/:id2', updatemessage);
router.patch('/getconvo/:id/:id2', getconvoId);

export default router;