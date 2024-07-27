
import express from 'express';
import { comments } from '../Controller/ViewersController.js';

const router = express.Router();


router.post('/comments', comments);

export default router;