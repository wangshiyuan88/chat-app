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
import redisConnect from 'connect-redis';

import webpackConfig from '../../webpack.config';
import setupStaticRoute from './routes/staticRoute';
import setupAuthRoute from './routes/authRoute';
import setupApiRoute from './routes/apiRoute';
import logger from './logger';
import setupSocket from './events';
import { redirectMiddleware } from './middlewares';


const config = require('./config.json');
const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

const REDIS_HOST = process.env.MONGOLAB_URI || config.REDIS_HOST;
const REDIS_PORT = process.env.PORT || config.REDIS_PORT;

var RedisStore = redisConnect(session);
app.use(session({
	store: new RedisStore({
		host: REDIS_HOST,
		port: REDIS_PORT
	}),
	secret: config.SESSION_SECRET }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/chat', redirectMiddleware);
setupStaticRoute(app);
setupAuthRoute(app, passport);
setupApiRoute(app);

const MONGOLAB_URI = process.env.MONGOLAB_URI || config.MONGOLAB_URI;
const PORT = process.env.PORT || config.PORT;

Mongoose.connect(MONGOLAB_URI);

const server = app.listen(PORT, function(err) {
  if (err) {
    logger.log(err);
    return;
  }
  logger.log('Server listening on port: %s', PORT);
});

setupSocket(server);
