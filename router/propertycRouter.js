const express = require("express");
const { getacard, putacard, getdesc } = require("./../controller/propertycontroller");
const fs = require("fs");
let propertyrouter = express.Router();
propertyrouter
    .route("/")
    .get(getacard)
    .post(postcard);
propertyrouter
    .route("/:id")
    .get(getdesc);
module.exports = propertyrouter;
