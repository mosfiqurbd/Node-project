//external import
const express = require("express");

//internal imports
const { getLogin } = require("../controller/loginController");
const router = express.Router();
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
//login page
router.get("/", decorateHtmlResponse("Login"), getLogin);

module.exports = router;
