const express = require("express");
const {signUp,signin, requireSignin} = require('../../controller/admin/auth');
const router = express.Router();

router.post("/admin/signin", signin);
router.post("/admin/signup", signUp);

module.exports = router;
