import Article from '../models/Article.js';
class SiteController {
	// [GET] home '/'
	async index(req, res, next) {
		try {
			// Get data from model
			const articles = await Article.find({}).lean();
			
			// Send data to view
			res.render('home', {
				articles,
			});
		} catch (error) {
			// Push error into middleware
			next(error);
		}
	}

	// [GET] /search
	search(req, res) {
		res.render('search');
	}
}

export default new SiteController();
