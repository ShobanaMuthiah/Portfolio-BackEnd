
import express from 'express';
import { comments } from '../Controller/ViewersController.js';

const router = express.Router();


router.post('/comments', comments);
router.get('/comments/get',comments);

export default router;