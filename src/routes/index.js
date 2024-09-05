import newsRouter from "./news.js";
import siteRouter from "./site.js";
// Combine route and function handler
function route(app) {
    // Match to /news
	app.use("/news", newsRouter);
    // Match to '/'
	app.use("/", siteRouter);

	// If ur URL matches to "/", it'll run callback function
	// app.get("/", (req, res) => {
	// 	res.render("home");
	// });

	// app.get("/news", (req, res) => {
	// 	res.render("news");
	// });

	// app.get("/search", (req, res) => {
	// 	res.render("search");
	// });

	// Declare path for POST method
	// app.post("/search", (req, res) => {
	// 	console.log(req.body);
	// 	res.send("");
	// });
}

export default route;
