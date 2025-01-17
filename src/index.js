import express, { urlencoded } from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import route from './routes/server.js';
import connectDB from './config/db/index.js';
import helpers from './util/handlebars-helpers.js';
import Handlebars from 'handlebars';
import methodOverride from 'method-override';
import sortMiddleware from './app/middlewares/sortMiddleware.js';

// Connect to db
connectDB();

// Set up Express
const app = express();
const port = 3001;
const __dirname = dirname(fileURLToPath(import.meta.url));

// Express encounter path in url, it'll check in public folder whether it has any static file
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));

app.use(methodOverride('_method'));

// Custom middlewares
app.use(sortMiddleware);

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers,
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

// Set up server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
