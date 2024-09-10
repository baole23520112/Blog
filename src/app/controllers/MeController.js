import Article from '../models/Article.js';

class MeController {
	// [GET] /me/storage/articles
	async storageArticles(req, res, next) {
		try {
			const articles = await Article.find({}).lean();
			res.render('admin/storage-articles', {
				articles
			});
		} catch (error) {
			next(error);
		}
	}
}

export default new MeController();
