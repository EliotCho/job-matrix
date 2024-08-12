const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection"); // assuming you have a connection file

class Job extends Model {}

Job.init(
  {
    adref: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category_label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category_tag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company_display_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contract_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contract_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
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
    location_area: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    location_display_name: {
      type: DataTypes.STRING,
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
    salary_is_predicted: {
      type: DataTypes.BOOLEAN,
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
    modelName: "Job",
    tableName: "jobs",
    timestamps: false,
  }
);

module.exports = Job;
