import express from 'express';
const router = express.Router();

import articleController from '../app/controllers/ArticleController.js';

router.get('/:slug', articleController.show);

export default router;