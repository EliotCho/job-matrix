const router = require("express").Router();

// import any models you plan to use for this data's routes here
const { Jobs } = require("../../models");

router.post("/", async (req, res) => {
  try {
    console.log("************")
console.log(req.body)
    const newJobs = await Jobs.create({
      title: req.body.jobTitle,
      company_display_name: req.body.companyName,
      job_description: req.body.description,
      salary_max: req.body.salaryMax,
      salary_min: req.body.salaryMin,
      remote: req.body.remote,
      job_id:1,
      users_id: req.session.user_id,
    });
    res.json(newJobs);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const [updatedRows] = await Jobs.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (updatedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const [destroyedRows] = Jobs.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (destroyedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
