import newsRouter from './news.js';
import siteRouter from './site.js';
import articleRouter from './articles.js'
import meRouter from './me.js'
// Combine route + branch and function handler
function route(app) {

	// Match to /news
	app.use('/news', newsRouter);

	app.use('/articles', articleRouter);

	app.use('/me', meRouter)

	app.use('/', siteRouter);
}

export default route;
