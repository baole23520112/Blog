import newsRouter from './news.js';
import siteRouter from './site.js';
import articleRouter from './articles.js'
// Combine route and function handler
function route(app) {
	// Match to /news
	app.use('/news', newsRouter);
	// Match to '/'
	app.use('/articles', articleRouter);
	// Match to '/'
	app.use('/', siteRouter);
}

export default route;
