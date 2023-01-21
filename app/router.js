const express = require('express');
const router = express.Router();
const oblogController = require("./controller/oblog.js");

router.get("/posts",oblogController.getPosts);
router.get("/categories",oblogController.getCategories);

router.get("/posts/:id",oblogController.getPost);

module.exports = router;