import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import devConfig from '../webpack.config.dev';
import prodConfig from '../webpack.config.prod';
import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('client/dist'));
app.use('/api', routes);

let compiler;

if (process.env.NODE_ENV !== 'production') {
  compiler = webpack(devConfig);
  app.use(webpackHotMiddleware(compiler));
} else {
  compiler = webpack(prodConfig);
}

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: devConfig.output.publicPath
}));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('./client/index.html'));
});

app.listen(process.env.PORT || 3000);

export default app;