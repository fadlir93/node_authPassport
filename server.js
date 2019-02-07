import express from 'express';
import path from 'path';
import cookeParser from 'cookie-parser';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import expressValidator from 'express-validator';
import flash from 'connect-flash';
import session from 'express-session';
import passport from 'passport';
const LocalStrategy = require('passport-local').Strategy;
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/passport', {
    useMongoClient: true
});

app.get('/', (req, res) => {
    res.send('Node and Express are properly running');
})

app.listen(PORT, function() {
    console.log('Server is running on', PORT);
});