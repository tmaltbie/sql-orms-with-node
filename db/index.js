const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'movies.db',
  storage: 'actors.db',
  // logging: false // disable logging
});

const db = {
  sequelize,
  Sequelize,
  models: {},
};

db.models.Movie = require('./models/movie.js')(sequelize);
db.models.Actor = require('./models/actor.js')(sequelize);

module.exports = db;