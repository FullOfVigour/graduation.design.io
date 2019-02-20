var argv = require('yargs').argv
var apps = {
  main: {
    name: 'main',
    entry: './src/entrance/index',
    APP_ENV: '"main"'
  }
}

var startedApp = apps['main']

module.exports = startedApp
