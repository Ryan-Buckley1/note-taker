const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// sends to router/ middleware
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
