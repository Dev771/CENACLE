import express from 'express';
import { getTags } from '../controller/tag.js';

const router = express.Router();

router.get('/', getTags);

export default router;