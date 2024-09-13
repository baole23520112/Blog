import express from 'express';
const router = express.Router();

import articleController from '../app/controllers/ArticleController.js';

router.get('/create', articleController.create);
router.post('/storage', articleController.storage);
router.post('/handle-actions', articleController.handleActions);
router.get('/:id/edit', articleController.edit);
router.patch('/:id/restore', articleController.restore);
router.delete('/:id/force', articleController.forceDelete);
router.put('/:id', articleController.update);
router.delete('/:id', articleController.delete);
router.get('/:slug', articleController.read);

export default router;