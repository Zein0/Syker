const express = require("express");
const router = express.Router();
const Products = require("../../models/Product");
const HomeController = require("../../Controller/HomeController");

router.get("/", (req, res) => HomeController.getAds(req, res));
module.exports = router;
