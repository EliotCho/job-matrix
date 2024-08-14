const router = require("express").Router();
require('dotenv').config();

// Import all of the routes from /api/ here
const userRoutes = require("./userRoutes");
const jobPostingRoutes = require("./jobPostingRoutes");
const apiId = process.env.API_ID;
const apiKey = process.env.API_KEY;
const baseURL = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${apiId}&app_key=${apiKey}`;

console.log(baseURL)

// Connect the routes to the router here
router.use("/users", userRoutes);
router.use("/job", jobPostingRoutes);

module.exports = router;

