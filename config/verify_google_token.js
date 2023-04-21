const User = require('../models/user');
const jwt = require('jsonwebtoken');
const env = require('../config/environment');
const { OAuth2Client } = require('google-auth-library');
const CLIENT_ID = env.google_clientID;
const client = new OAuth2Client(CLIENT_ID);
const crypto = require('crypto');

module.exports.verifyGoogleToken = async function (request, response, next) {
    try {
        let token = request.headers.authorization.split(' ')[1];
        if (token == null) {
            return next();
        }
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });
        const payload = ticket.getPayload();
        const { sub, name, email, picture } = payload;

        let user = await User.findOne({email: email});

        if (user) {
            //if found set this user as req.user
            request.user = user;
            return next();
        }
        
        let newUser = await User.create({
            // if not found create the user and set it as req.user
            name: name,
            email: email,
            password: crypto.randomBytes(20).toString('hex')
        });
        
        request.user = newUser;
        return next();
    } catch (error) {
        console.log('******* ', error);
        next();
    }
}