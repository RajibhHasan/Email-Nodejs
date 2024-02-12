const express = require("express");

const emailRouter = express.Router();

const postEmail=require("../controler/emailControler.js")
const emailDataValidation=require("../meddleware/emailDataValidation.js")
emailRouter.post("/Email",emailDataValidation, postEmail);

module.exports = emailRouter;
