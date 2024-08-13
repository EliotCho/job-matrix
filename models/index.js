// import all models here
const User = require("./User");
const Jobs = require("./Jobs");

// Reminder- create any additional associations here
Jobs.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Jobs, {
  foreignKey: "user_id",
});

// export all models here
module.exports = { User, Jobs };
