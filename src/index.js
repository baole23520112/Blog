import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const port = 3001;
const __dirname = dirname(fileURLToPath(import.meta.url));

// Express encounter path in url, it'll check in public folder whether it has any static file
app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
	res.render("home");
});

app.get("/news", (req, res) => {
	res.render("news");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
