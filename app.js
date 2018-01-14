// const express = require("express");

// const app = express();
// const path = require("path");

// app.use(express.static(path.join(__dirname, "public")));

// app.listen(3000, () => console.log("Example app listening on port 3000!"));

const path = require("path"),
  express = require("express");

const DIST_DIR = path.join(__dirname, "dist"),
  PORT = 3000,
  app = express();

//Serving the files on the dist folder
app.use(express.static(DIST_DIR));

//Send index.html when the user access the web
app.get("*", (req, res) => {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT, () => console.log("Example app listening on port 3000!"));
