
import express from 'express';
import { comments } from '../Controller/ViewersController.js';

const router = express.Router();


router.post('/comments', comments);
router.get('/comments',comments)

export default router;