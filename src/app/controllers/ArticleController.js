import Article from "../models/Article.js";

class ArticleController {
	// [GET] /articles/:slug
	async show(req, res, next) {
		try {
			const article = await Article.findOne({ slug: req.params.slug }).lean();
			res.render('articles/show', {
				article
			})
		} catch (error) {
			next(error);
		}
	}
}

export default new ArticleController();
