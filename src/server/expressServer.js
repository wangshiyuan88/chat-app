'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import morgan from 'morgan';
import cors from 'cors';
import webpack from 'webpack';
import Mongoose from 'mongoose';
import PATH from 'path';
import passport from 'passport';
import SocketIo from 'socket.io';

import webpackConfig from '../../webpack.config';
import setupStaticRoute from './routes/staticRoute';
import setupAuthRoute from './routes/authRoute';
import setupApiRoute from './routes/apiRoute';
import logger from './logger';
import setupSocket from './events';
import { redirectMiddleware } from './middlewares';

// const compiler = webpack(webpackConfig);
const app = express();

// app.use(morgan('combined'));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use( session({
	secret: 'not_important_secret',
	name:   'not_secret',
    proxy:  true,
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// app.use(require('webpack-dev-middleware')(compiler, {
//   publicPath: webpackConfig.output.publicPath
// }));
// app.use(require('webpack-hot-middleware')(compiler));

app.use('/chat', redirectMiddleware);
setupStaticRoute(app);
setupAuthRoute(app, passport);
setupApiRoute(app);

process.env.MONGOLAB_URI = process.env.MONGOLAB_URI || 'mongodb://localhost/chat-app';
process.env.PORT = process.env.PORT || 3000;

Mongoose.connect(process.env.MONGOLAB_URI);

const server = app.listen(process.env.PORT, 'localhost', function(err) {
  if (err) {
    logger.log(err);
    return;
  }
  logger.log('Server listening on port: %s', process.env.PORT);
});

setupSocket(server);
