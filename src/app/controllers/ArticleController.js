import Article from "../models/Article.js";

class ArticleController {
	// [GET] /articles/:slug
	async read(req, res, next) {
		try {
			const article = await Article.findOne({ slug: req.params.slug }).lean();
			res.render('articles/read', {
				article
			});
		} catch (error) {
			next(error);
		}
	}

	// [GET] /articles/create
	create(req, res, next) {
		res.render('articles/create');
	}

	// [POST] /articles/store
	store(req, res, next) {
		res.json(req.body);
	}
}

export default new ArticleController();