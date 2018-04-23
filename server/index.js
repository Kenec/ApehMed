import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import routes from './routes';
const config = process.env.NODE_ENV !== 'production' ?
require('../wepack.config.dev.js') : '';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', routes);

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(webpackHotMiddleware(compiler));

  app.get('/', (req, res) => {
    res.sendFile(path.resolve('./client/index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.sendFile(path.resolve('./client/index.html'));
  });
}


app.listen(process.env.PORT || 3000);

export default app;