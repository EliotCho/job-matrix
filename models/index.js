// import all models here
const User = require("./User");
const ExampleData = require("./ExampleData");

// Reminder- create any additional associations here
ExampleData.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(ExampleData, {
  foreignKey: "user_id",
});

// export all models here
module.exports = { User, ExampleData };
