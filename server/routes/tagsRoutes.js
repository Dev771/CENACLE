import express from 'express';
import { getTags, createTag } from '../controller/tag.js';

const router = express.Router();

router.get('/', getTags);
router.post('/', createTag);

export default router;