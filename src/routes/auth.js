const express = require("express");
const {signUp,signin} = require('../controller/auth');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require("../validators/validators.auth");
const router = express.Router();


router.post("/signin",validateSigninRequest,isRequestValidated,signin);
router.post("/signup",validateSignupRequest,isRequestValidated,signUp);

// router.post('/profile',requireSignin,(req,res)=>{
//     res.status(200).json({user:'profile'})
// });

module.exports = router;
