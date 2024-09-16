import Article from '../models/Article.js';
import dayjs from 'dayjs';
class SiteController {
	// [GET] home '/'
	async index(req, res, next) {
		try {
			// Get data from model
			const articles = await Article.find({}).lean();

			// Format the createdAt field
            articles.forEach(article => {
                article.createdAtFormatted = dayjs(article.createdAt).format('MMMM D, YYYY');
            });

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
