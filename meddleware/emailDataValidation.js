

const emailDataValidation = (req, res, next) => {
  const { email, text, count,subject
  } = req.body;
console.log(req.body);
  if (!email || email === "") {
    res.json({ message: "Email not valid" });
  } else if (!text || text === "") {
    res.json({ message: "Text not valid" });
  } else if (!count || count === "" || isNaN (count)) {
    res.json({ message: "Count not valid" });
  } else if(subject===""){
    res.json({ message: "subject not find" });
  }else{
    next();}
  
};



module.exports=emailDataValidation;