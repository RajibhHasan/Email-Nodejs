const otpGenerator = require('otp-generator');

const smsControler=(req,res)=>{
  

// Function to generate OTP
function generateOTP() {
    // Generate a 6-digit OTP
    return otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });
}

// Function to send OTP via your preferred method (e.g., email, SMS)
function sendOTP(recipient, otp) {
    // Implement your logic to send OTP here
    console.log(`Sending OTP ${otp} to ${recipient}`);
    // Example: Send OTP via email or SMS
    
    res.json({x:8})
}

// Example usage
const phoneNumber = '+8801996973025'; // Recipient's phone number
const otp = generateOTP(); // Generate OTP
sendOTP(phoneNumber, otp); // Send OTP via your preferred method

  
  
}


module.exports=smsControler;