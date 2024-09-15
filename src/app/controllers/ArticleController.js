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
	async storage(req, res, next) {
		try {
			const article = new Article(req.body);
			await article.save();
			res.redirect('/me/storage/articles');
		} catch (error) {
			next(error);
		}
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
	async update(req, res, next) {
		try {
			await Article.updateOne({ _id: req.params.id }, req.body);
			res.redirect('/me/storage/articles');
		} catch (error) {
			next(error);
		}
	}

	// [DELETE] /articles/:id
	async delete(req, res, next) {
		try {
			await Article.delete({ _id: req.params.id });
			res.redirect('back');
		} catch (error) {
			next(error);
		}
	}

	// [DELETE] /articles/:id/force
	async forceDelete(req, res, next) {
		try {
			await Article.deleteOne({ _id: req.params.id });
			res.redirect('back');
		} catch (error) {
			next(error);
		}
	}

	// [PATCH] /articles/:id/restore
	async restore(req, res, next) {
		try {
			await Article.restore({ _id: req.params.id });
			res.redirect('back');
		} catch (error) {
			next(error);
		}
	}

	// [POST] /articles/handle-actions
	async handleActions(req, res, next) {
		switch (req.body.action) {
			case 'delete':
				try {
					await Article.delete({ _id: {$in: req.body.articleIds} });
					res.redirect('back');
				} catch (error) {
					next(error);
				}
				break;
			case 'force-delete':
				try {
					await Article.deleteMany({ _id: {$in: req.body.articleIds} });
					res.redirect('back');
				} catch (error) {
					next(error);
				}
				break;
			case 'restore':
				try {
					await Article.restore({ _id: {$in: req.body.articleIds} });
					res.redirect('back');
				} catch (error) {
					next(error);
				}
				break;
			default:
				break;
		}
	}
}

export default new ArticleController();
