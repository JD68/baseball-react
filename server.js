const express = require('express');
const router = express.Router();
const app = express();
const yearSvc = require('./services/yearsService.js');
const leagueLabelsSvc = require('./services/leagueLabelsService.js');
const divisionLabelsSvc = require('./services/divisionLabelsService.js');
const teamLabelsSvc = require('./services/teamLabelsService.js');
const leaguesSvc = require('./services/leaguesService.js');
const divisionsSvc = require('./services/divisionsService.js');
const teamsSvc = require('./services/teamsService.js');

app.get('/src/App.js', (req, res) => {
  if (process.env.PRODUCTION) {
    res.sendFile(__dirname + '/build/App.js');
  } else {
    res.redirect('//localhost:9090/build/App.js');
  }
});

app.get('/App.css', (req, res) => {
  if (process.env.PRODUCTION) {
    res.sendFile(__dirname + '/build/App.css');
  } else {
    res.redirect('//localhost:9090/build/App.css');
  }
});

app.get('/years', (req, res) => {
  res.json(yearSvc.years());
});

app.get('/leagueLabels', (req, res) => {
  res.json(leagueLabelsSvc.leagueLabels());
});

app.get('/divisionLabels', (req, res) => {
  res.json(divisionLabelsSvc.divisionLabels());
});

app.get('/teamLabels', (req, res) => {
  res.json(teamLabelsSvc.teamLabels());
});

app.get('/leagues', (req, res) => {
  res.json(leaguesSvc.leagues(req.query.year));
});

app.get('/divisions', (req, res) => {
  res.json(divisionsSvc.divisions(req.query.year));
});

app.get('/teams', (req, res) => {
  res.json(teamsSvc.teams(req.query.year, req.query.league, req.query.division));
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});


/*************************************************************
 *
 * Webpack Dev Server
 *
 * See: http://webpack.github.io/docs/webpack-dev-server.html
 *
 *************************************************************/

if (!process.env.PRODUCTION) {
  const webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');
  const config = require('./webpack.local.config');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: true,
    historyApiFallback: true
  }).listen(9090, 'localhost', (err, result) => {
    if (err) {
      console.log(err);
    }
  });
}


/******************
 *
 * Express server
 *
 *****************/

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Essential React listening at http://%s:%s', host, port);
});
