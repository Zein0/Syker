const express = require("express");
const router = express.Router();

const Products = require("../../models/Product");
const Shopontroller = require("../../Controller/ShopController");

router.post("/alltype", (req, res) =>
	Shopontroller.getProductsOfAllTypes(req, res)
);

router.post("/onetype", (req, res) =>
	Shopontroller.getProductsOfType(req, res)
);
router.post("/addtoCart", (req, res) => Shopontroller.addToCart(req, res));
router.post("/getnumofItems", (req, res) => Shopontroller.getNum(req, res));
router.post("/getCart", (req, res) => Shopontroller.getCart(req, res));
router.post("/OrderCart", (req, res) => Shopontroller.OrderCart(req, res));
router.put("/Delete", (req, res) => Shopontroller.deleteproduct(req, res));
module.exports = router;
