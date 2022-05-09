const express = require("express");
const path = require("path");
const fs = require("fs");
// packages I'm using to create my server
const PORT = process.env.PORT || 3001;

const app = express();
// this function sets up server routes and it's allowing me to use express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// when I use json...
// app.use(express.static("public"));
// this line that is commented out means, if I can't find node.html then it'll use this public folder

app.get("/review", (req, res) =>
  res.sendFile(path.join(__dirname, "./notes.html"))
);
// links files and folders to the server

app.get("/homepage", (req, res) =>
  res.sendFile(path.join(__dirname, "./index.html"))
);
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} :rocket:`)
);
// allows me to setup my server
