// import all models here
const User = require("./User");
const JobPosting = require("./JobPosting");

// Reminder- create any additional associations here
JobPosting.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(JobPosting, {
  foreignKey: "user_id",
});

// export all models here
module.exports = { User, JobPosting };
