const express = require("express");
const {signUp,signin, requireSignin} = require('../controller/auth');
const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signUp);

// router.post('/profile',requireSignin,(req,res)=>{
//     res.status(200).json({user:'profile'})
// });

module.exports = router;
