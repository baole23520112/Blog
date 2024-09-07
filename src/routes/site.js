import express from 'express';
const router = express.Router();

import siteController from '../app/controllers/SiteController.js';

// / + /search = /search
router.get('/search', siteController.search);
router.get('/', siteController.index);

export default router;
