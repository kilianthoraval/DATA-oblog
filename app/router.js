const express = require('express');
const router = express.Router();
const oblogController = require("./controller/oblog.js");

router.get("/post",oblogController.getPost);
router.get("/categories",oblogController.getCategories);

module.exports = router;