//external import
const express = require("express");

//internal import
const { getUsers } = require("../controller/usersController");
const router = express.Router();
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
//login page
router.get("/", decorateHtmlResponse("Users"), getUsers);

module.exports = router;
