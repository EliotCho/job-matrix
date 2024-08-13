// Third-party Modules
const { Model, DataTypes } = require("sequelize");

// Local Modules
const sequelize = require("../config/connection");

class Jobs extends Model {}

Jobs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
      allowNull: false,
    },
    company_display_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contract_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    job_description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    job_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    redirect_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary_max: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    salary_min: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
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
