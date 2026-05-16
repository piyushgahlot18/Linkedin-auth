const express = require("express");

const router = express.Router();

const {
  linkedinAuth,
} = require("../controllers/linkedinController");

router.post("/linkedin", linkedinAuth);

module.exports = router;