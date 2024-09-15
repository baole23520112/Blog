import Article from '../models/Article.js';

class MeController {
	// [GET] /me/storage/articles
	async storageArticles(req, res, next) {
		try {
			const [articles, count] = await Promise.all([
				Article.find({}).lean().sortable(req),
				Article.countDocumentsWithDeleted({ deleted: true }),
			]);

			res.render('admin/storage-articles', {
				count,
				articles,
			});
		} catch (error) {
			next(error);
		}
	}

	// [GET] /me/trash/articles
	async trashArticles(req, res, next) {
		try {
			const articles = await Article.findWithDeleted({
				deleted: true,
			}).lean().sortable(req);
			res.render('admin/trash-articles', {
				articles,
			});
		} catch (error) {
			next(error);
		}
	}
}

export default new MeController();
