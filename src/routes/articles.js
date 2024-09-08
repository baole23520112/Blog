import express from 'express';
const router = express.Router();

import articleController from '../app/controllers/ArticleController.js';

router.get('/create', articleController.create);
router.post('/store', articleController.store);
router.get('/:slug', articleController.read);

export default router;