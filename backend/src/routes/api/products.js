const express = require("express");
const router = express.Router();

const ProductController = require("../../Controller/ProductController");

router.post("/AddCat", (req, res) => ProductController.AddCat(req, res));
router.post("/AddSCat", (req, res) => ProductController.AddSCat(req, res));
router.post("/AddType", (req, res) => ProductController.AddType(req, res));
router.post("/AddProduct", (req, res) =>
	ProductController.AddProduct(req, res)
);
router.post("/", (req, res) => ProductController.Merge(req, res));

module.exports = router;
