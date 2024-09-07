import Article from '../models/Article.js';
class NewsController {
	// Declare function handler
	// [GET] /news
	async index(req, res, next) {
		try {
			// Get data from model
			const articles = await Article.find({}).lean();
			
			// Send data to view
			res.render('news', {
				articles,
			});
		} catch (error) {
			// Push error into middleware
			next(error);
		}
	}

	// [GET] /news/:slug
	show(req, res) {
		res.send('NEW DETAIL');
	}
}

export default new NewsController();
