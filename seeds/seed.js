const sequelize = require("../config/connection");

// Reminder- import any models you want to seed here
const { User, Jobs } = require("../models");

// Reminder- import any data you want to seed here
const jobData = require("./jobData.json");
const userData = require("./userData.json");

const seedDatabase = async () => {
  // sync all models
  await sequelize.sync({ force: true });
  console.log("Sequelize synced");

  // bulkCreate example users
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log("Users created");

  // bulkCreate example data
  await Jobs.bulkCreate(jobData, {
    individualHooks: true,
    returning: true,
  });
  console.log("Example data created");

  // Reminder- add any other models you want to seed here

  process.exit(0);
};

seedDatabase();
