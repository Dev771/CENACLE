import express from 'express';
import { getTags, createTag, updateAllTags } from '../controller/tag.js';

const router = express.Router();

router.get('/', getTags);
router.post('/', createTag);
router.post("/update", updateAllTags);

export default router;