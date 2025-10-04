//external import
const express = require("express");

//internal import
const { getInbox } = require("../controller/inboxController");
const router = express.Router();
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
//login page
router.get("/", decorateHtmlResponse("Inbox"), getInbox);

module.exports = router;
