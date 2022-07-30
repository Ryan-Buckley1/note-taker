const { Router } = require("express");
const getStaticFilePath = require("../../utils/getStaticFilePath");

const router = Router();

router.get("/notes", (req, res) => {
  const filePath = getStaticFilePath("notes");

  res.sendFile(filePath);
});

module.exports = router;
