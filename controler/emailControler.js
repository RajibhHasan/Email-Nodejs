const sendEmail=require("../meddleware/email.js")
const fs=require("fs");
const postEmail=(req,res)=>{
 const { email, text, count,subject} = req.body;
 
 
 
 const emailData = {
        email,
        subject: subject,
        html: `<h2 style="text-align:center">Received Bonus </h2>
        <img style="text-align:center" src="https://images.app.goo.gl/B8LocRoKbM6z4bXx5" alt="logo" />
    <p>${text}</p>`
    };

    sendEmail(req,res,emailData);
  
  
 
 
 
  
  
}


module.exports=postEmail;