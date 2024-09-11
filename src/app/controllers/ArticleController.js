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
			const article = await Article.findById(req.params.id).lean();
			res.render('articles/edit', {
				article,
			});
		} catch (error) {
			next(error);
		}
	}

	// [PUT] /articles/:id
	update(req, res, next) {
		Article.updateOne({ _id: req.params.id }, req.body)
			.then(() => res.redirect('/me/storage/articles'))
			.catch(next);
	}

	// [DELETE] /articles/:id
	delete(req, res, next) {
		Article.deleteOne({ _id: req.params.id })
			.then(() => res.redirect('/me/storage/articles'))
			.catch(next);
	}
}

export default new ArticleController();
