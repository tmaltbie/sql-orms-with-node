const db = require('./db');
const { Movie, Actor } = db.models

const dbModel = (array, model) => {
  array.map(
    (object) => model.create({...object})
  );
};

// async IIFE
(async () => {
  // Sync all tables
  await db.sequelize.sync({ force: true }); // deletes an existing table each time you start your app, and recreates it from the model definition
  try {
    // this method tests the connection to the database
    // await sequelize.authenticate();
    // console.log("Connection to the database successful.")
    const movies = [
      {
        title: 'Aliens',
        runTime: 137,
        releaseDate: 1986-07-18, // yyyy-mm-dd
        isAvailableOnVHS: true,
      },
      {
        title: 'Spirited Away',
        runTime: 125,
        releaseDate: 2003-03-28,
        isAvailableOnVHS: true,
      },
      {
        title: 'Moneyball',
        runTime: 133,
        releaseDate: 2011-09-23,
        isAvailableOnVHS: false,
      },
      {
        title: 'Three Kings',
        runTime: 114,
        releaseDate: 1999-10-01,
        isAvailableOnVHS: true,
      }
    ]

    const actors = [
      {firstName: "Sigourney", lastName: "Weaver"},
      {firstName: "Rumi", lastName: "Hiiragi"},
      {firstName: "Brad", lastName: "Pitt"},
      {firstName: "George", lastName: "Clooney"}
    ]

    const moviesTable = dbModel(movies, Movie);
    const actorsTable = dbModel(actors, Actor);

    await Promise.all([moviesTable, actorsTable])

  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      const errors = error.errors.map(err => err.message);
      console.error('Validation errors: ', errors);
    } else {
      throw error;
    }
  }
})();