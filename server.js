const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const api = require("./routes/main");
const fs = require("fs");
const path = require("path");

app.use(express.api(api));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
