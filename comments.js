//Create web server
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

// Set up body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up static files
app.use(express.static(path.join(__dirname, 'public')));

// Set up ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up routes
const indexRoute = require('./routes/index.js');
const commentsRoute = require('./routes/comments.js');
app.use('/', indexRoute);
app.use('/comments', commentsRoute);

// Listen for requests
app.listen(port, () => console.log(`Example app listening on port ${port}!`));










































