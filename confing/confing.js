var env = process.env.NODE_ENV || 'development'

var config = {
  development: require('./development.js'),
  production: require('./production.js'),
}

module.exports = config[env]