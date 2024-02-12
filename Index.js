const express = require("express");
const app = express();
const emailRouter = require("./routers/emailRouter.js");
const cors = require("cors");
const notFoundHandler = require("./controler/notFound.js");
const smsRouter = require("./routers/smsRouter.js");
app.get("/", (req, res) => {
    res.json({
        message: "not Fiund "
    });
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(emailRouter);
app.use(smsRouter);

app.use(notFoundHandler);
app.listen(5175, async () => {
    console.log("App is runing:5175");
});
