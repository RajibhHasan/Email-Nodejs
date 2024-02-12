const express=require("express");

const smsRouter=express.Router();


const smsControler=require("../controler/smsControler.js")
smsRouter.post("/Sms",smsControler)



module.exports=smsRouter;