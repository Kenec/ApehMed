import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';

import routes from './routes';
import webpackConfig from '../wepack.config.dev.js';

const app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', routes);

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./client/index.html'));
});

app.listen(process.env.PORT || 3000);

export default app;