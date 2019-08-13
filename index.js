const express = require("express");
const fs = require("fs");
// const prprouter = require("./router/propertycRouter");
const agentrouter = require("./router/agentcRouter");
const reviewrouter = require("./router/reviewcrouter");
const app = express();

app.use(express.json());
app.use(express.static('/public'));
// app.use("/pcard", prprouter);
app.use("/acard", agentrouter);
app.use("/rcard", reviewrouter);

// app.get("*", (req, res) => {
//   res.status(404).send("Error 404 Not Found");
//   res.end();
// });
module.exports = app;
