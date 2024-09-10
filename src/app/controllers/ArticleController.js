import Article from '../models/Article.js';

class ArticleController {
	// [GET] /articles/:slug
	async read(req, res, next) {
		try {
			const article = await Article.findOne({
				slug: req.params.slug,
			}).lean();
			res.render('articles/read', {
				article,
			});
		} catch (error) {
			next(error);
		}
	}

	// [GET] /articles/create
	create(req, res, next) {
		res.render('articles/create');
	}

	// [POST] /articles/storage
	storage(req, res, next) {
		const article = new Article(req.body);
		article
			.save()
			.then(() => res.redirect('/'))
			.catch(next);
	}

	// [POST] /articles/:id/edit
	async edit(req, res, next) {
		try {
			const article = Article.findById(req.params.id).lean();
			res.render('articles/edit', {
				article,
			});
		} catch (error) {
			next(error);
		}
	}
}

export default new ArticleController();
