const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {

    user: "livechat.help.24hours@gmail.com",
    pass: "mmfh poql zhnm dbin",
  },
});




const sendEmail= async (req,res,emailData)=>{
    
    try {
      const mailOption={
        from: 'rajib01943075658@gmail.com', // sender address
    to: emailData.email, // list of receivers
    subject: emailData.subject, // Subject line
    
    html: emailData.html
    }
    
    const info=await transporter.sendMail(mailOption)
console.log("emaill sent successfully");
res.status(200).json({message:"successfully",
  status:200
})

    } catch (e) {
        console.log("occured send email error"+e);
        res.status(500).json({message:"unsuccessfully"})
        
    }

}


module.exports=sendEmail;