import express from 'express';
const router = express.Router();

import articleController from '../app/controllers/ArticleController.js';

router.get('/create', articleController.create);
router.post('/storage', articleController.storage);
router.get('/:id/edit', articleController.edit);
router.get('/:slug', articleController.read);

export default router;