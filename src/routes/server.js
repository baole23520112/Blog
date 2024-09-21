import siteRouter from './site.js';
import articleRouter from './articles.js'
import meRouter from './me.js'
// Combine route + branch and function handler
function route(app) {

	app.use('/articles', articleRouter);

	app.use('/me', meRouter)

	app.use('/', siteRouter);
}

export default route;
