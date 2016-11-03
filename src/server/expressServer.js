'use strict';

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import webpack from 'webpack';
import Mongoose from 'mongoose';
import PATH from 'path';
import passport from 'passport';
import webpackConfig from '../../webpack.config';

import setupStaticRoute from './routes/staticRoute';
import setupAuthRoute from './routes/authRoute';

// const compiler = webpack(webpackConfig);
const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

// app.use(require('webpack-dev-middleware')(compiler, {
//   publicPath: webpackConfig.output.publicPath
// }));
// app.use(require('webpack-hot-middleware')(compiler));
setupStaticRoute(app);
setupAuthRoute(app, passport);

process.env.MONGOLAB_URI = process.env.MONGOLAB_URI || 'mongodb://localhost/chat-app';
process.env.PORT = process.env.PORT || 3000;

Mongoose.connect(process.env.MONGOLAB_URI);

const server = app.listen(process.env.PORT, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Server listening on port: %s', process.env.PORT);
});
