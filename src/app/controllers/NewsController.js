class NewsController {
	// Declare function handler
	// [GET] /news
	index(req, res) {
		res.render("news");
	}

    // [GET] /news/:slug
	show(req, res) {
		res.send("NEW DETAIL");
	}
}

export default new NewsController();
