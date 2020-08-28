const express = require('express')
const app = express();

const FEED_Route = require('./routes/feed');

app.use(FEED_Route);

app.listen(8080);