const express = require('express');
const router = express.Router();
const postsApi = require('../../../controllers/api/v1/post_api');
const passport = require('passport');
const { checkToken } = require('../../../config/check_token');

router.get('/', postsApi.index);

router.post('/create', passport.authenticate('jwt', {session: false}),  postsApi.createPost);

router.post('/delete/:id', passport.authenticate('jwt', {session: false}),  postsApi.destroy);


module.exports = router;