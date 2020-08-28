const express = require('express')
const app = express();
const bodyParser = require('body-parser');

const FEED_Route = require('./routes/feed');

//body parser setup
app.use(bodyParser.json()); 
//

app.use("/feed", FEED_Route);

app.listen(8080, ()=> console.log('Server is running on port 8080'));