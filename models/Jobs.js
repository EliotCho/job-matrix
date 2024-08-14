// Third-party Modules
const { Model, DataTypes } = require("sequelize");

// Local Modules
const sequelize = require("../config/connection");

class Jobs extends Model {}

Jobs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
    // Reminder- Add any new columns to the Jobs model here
    category_label: {
      type: DataTypes.STRING,
    },
    company_display_name: {
      type: DataTypes.STRING,
    },
    contract_type: {
      type: DataTypes.STRING,
    },
    job_description: {
      type: DataTypes.TEXT,
    },
    job_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: true
    },
    latitude: {
      type: DataTypes.FLOAT,
    },
    longitude: {
      type: DataTypes.FLOAT,
    },
    redirect_url: {
      type: DataTypes.STRING,
    },
    salary_max: {
      type: DataTypes.FLOAT,
    },
    salary_min: {
      type: DataTypes.FLOAT,
    },
    title: {
      type: DataTypes.STRING,
    },
    remote: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: "jobs",
  }
);

module.exports = Jobs;
