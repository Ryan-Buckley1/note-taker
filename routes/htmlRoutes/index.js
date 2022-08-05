const { Router } = require("express");
const router = Router();
const getStaticFilePath = require("../../utils/getStaticFilePath");



router.get("/notes", (req, res) => {
  const filePath = getStaticFilePath("notes");

  res.sendFile(filePath);
});

router.get("*", (req, res) => {
  const filePath = getStaticFilePath("index");

  res.sendFile(filePath);
});

module.exports = router;
