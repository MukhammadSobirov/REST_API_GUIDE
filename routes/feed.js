const express = require('express');

const router = express.Router();

const FeedController = require('../controllers/feed');

router.get('/posts',  FeedController.getPosts);

module.exports = router;