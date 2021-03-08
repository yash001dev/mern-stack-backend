const express = require("express");
const {signUp,signin} = require('../../controller/admin/auth');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require("../../validators/validators.auth");
const router = express.Router();

router.post("/admin/signin",validateSignupRequest,isRequestValidated,signin);
router.post("/admin/signup",validateSigninRequest,isRequestValidated,signUp);

module.exports = router;
